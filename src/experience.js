(() => {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.querySelector('[data-motion-toggle]');
  let userPaused = false;
  function syncMotion() {
    const paused = userPaused || reduced.matches;
    root.classList.toggle('motion-paused', paused);
    if (motionButton) {
      motionButton.setAttribute('aria-pressed', String(paused));
      motionButton.firstChild.textContent = paused ? 'Ativar animações ' : 'Pausar animações ';
    }
  }
  motionButton?.addEventListener('click', () => { userPaused = !userPaused; syncMotion(); });
  reduced.addEventListener('change', syncMotion);
  syncMotion();
  root.classList.add('motion-ready');

  const stage = document.querySelector('[data-growth]');
  if (stage) {
    const steps = ['Diagnóstico', 'Estrutura', 'Teste', 'Otimização', 'Evolução'];
    const modes = [
      {points:[350,310,245,155,60],copy:[['O negócio vem primeiro.','Demanda, margem e capacidade orientam a aquisição.'],['Cada campanha tem uma função.','Canais, públicos e intenção conectados à oferta.'],['Uma hipótese. Uma decisão.','Experimentos conectam intenção, criativo e oferta.'],['O investimento ganha direção.','Aprendizados ajudam a redistribuir a atenção e o orçamento.'],['Escala com contexto.','A expansão depende da margem e da capacidade da operação.']]},
      {points:[355,270,285,130,80],copy:[['O que precisa ser medido?','O plano de mensuração começa pelos objetivos do negócio.'],['Eventos que fazem sentido.','Tracking, UTMs e conversões preservam o contexto.'],['O dado precisa ser confiável.','Validação de eventos, fontes e duplicidades.'],['Plataformas não contam tudo.','Analytics e CRM completam a leitura da jornada.'],['Informação vira decisão.','Os dados alimentam o próximo ciclo de experimentos.']]},
      {points:[355,335,260,215,55],copy:[['Além do clique.','A leitura começa na relação entre aquisição e resultado.'],['O lead mantém seu contexto.','Origem e interesse acompanham o contato até o CRM.'],['Qualidade antes de volume.','Critérios compartilhados ajudam a avaliar as oportunidades.'],['Marketing encontra vendas.','Integrações devolvem o resultado comercial à análise.'],['Receita com perspectiva.','Margem, ciclo de venda e capacidade orientam o crescimento.']]},
    ];
    let mode = 0, step = 2;
    const chart = stage.querySelector('.growth-chart');
    const slider = stage.querySelector('.chart-scrub');
    const people = stage.querySelector('.chart-people');
    const xs = [30,170,310,450,590];

    if (people) {
      const desktopParallax = matchMedia('(min-width: 701px)');
      let parallaxFrame = 0;
      const updateParallax = () => {
        parallaxFrame = 0;
        if (root.classList.contains('motion-paused') || !desktopParallax.matches) {
          people.style.removeProperty('--people-parallax-y');
          return;
        }
        const rect = stage.getBoundingClientRect();
        const viewportCenter = innerHeight / 2;
        const stageCenter = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (viewportCenter - stageCenter) / (viewportCenter + rect.height / 2)));
        people.style.setProperty('--people-parallax-y', `${Math.round(progress * 18)}px`);
      };
      const requestParallax = () => {
        if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
      };
      addEventListener('scroll', requestParallax, {passive:true});
      addEventListener('resize', requestParallax, {passive:true});
      desktopParallax.addEventListener('change', requestParallax);
      requestParallax();
    }

    function selectStep(index) {
      step = Math.max(0, Math.min(4, index));
      const [heading, copy] = modes[mode].copy[step];
      stage.querySelector('[data-chart-step]').textContent = steps[step];
      stage.querySelector('[data-chart-heading]').textContent = heading;
      stage.querySelector('[data-chart-copy]').textContent = copy;
      slider.value = step;
      slider.setAttribute('aria-valuetext', steps[step]);
      const cursor = stage.querySelector('.chart-cursor');
      cursor.querySelector('path').setAttribute('d', `M${xs[step]} 40V390`);
      cursor.querySelector('circle').setAttribute('cx', xs[step]);
      cursor.querySelector('circle').setAttribute('cy', modes[mode].points[step]);
    }
    function selectMode(index) {
      mode = index;
      stage.querySelectorAll('[data-chart]').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===mode)));
      const ys = modes[mode].points;
      let path = `M${xs[0]} ${ys[0]}`;
      for (let i=1;i<xs.length;i++) path += `C${xs[i-1]+70} ${ys[i-1]} ${xs[i]-70} ${ys[i]} ${xs[i]} ${ys[i]}`;
      const line = stage.querySelector('.chart-line');
      line.setAttribute('d', path);
      stage.querySelector('.chart-area').setAttribute('d',path+'V390H30Z');
      stage.querySelectorAll('.chart-markers circle').forEach((c,i)=>c.setAttribute('cy',ys[i]));
      if (!root.classList.contains('motion-paused')) {
        line.getAnimations().forEach(animation=>animation.cancel());
        line.animate([{strokeDashoffset:1},{strokeDashoffset:0}],{duration:750,easing:'cubic-bezier(.16,1,.3,1)'});
      }
      selectStep(step);
    }
    stage.querySelectorAll('[data-chart]').forEach((b,i)=>b.addEventListener('click',()=>selectMode(i)));
    slider.addEventListener('input',()=>selectStep(Number(slider.value)));
    chart.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse') return;
      const rect = chart.getBoundingClientRect();
      const next = Math.round(((event.clientX-rect.left)/rect.width*620-30)/140);
      if (next !== step) selectStep(next);
      if (!root.classList.contains('motion-paused')) stage.style.setProperty('--tilt',`${((event.clientX-rect.left)/rect.width-.5)*5}deg`);
    });
    chart.addEventListener('pointerleave',()=>stage.style.setProperty('--tilt','0deg'));
    selectStep(2);
  }

  const lab = document.querySelector('[data-funnel]');
  if (lab) {
    const lead = lab.querySelector('#lead-rate'), sale = lab.querySelector('#sale-rate');
    const format = new Intl.NumberFormat('pt-BR');
    function calculate() {
      const leads = Math.round(10000*Number(lead.value)/100);
      const sales = Math.round(leads*Number(sale.value)/100);
      lab.querySelector('#lead-rate-value').textContent = format.format(Number(lead.value))+'%';
      lab.querySelector('#sale-rate-value').textContent = sale.value+'%';
      lab.querySelector('[data-leads]').textContent = format.format(leads);
      lab.querySelector('[data-sales]').textContent = format.format(sales);
      lab.querySelector('[data-funnel-story]').textContent = `Neste exemplo, ${format.format(leads)} contatos podem se transformar em ${format.format(sales)} clientes.`;
      lab.querySelector('[data-lead-bar]').style.transform = `scaleX(${Number(lead.value)/10})`;
      lab.querySelector('[data-sale-bar]').style.transform = `scaleX(${Number(sale.value)/30})`;
      lead.setAttribute('aria-valuetext',format.format(Number(lead.value))+' por cento');
      sale.setAttribute('aria-valuetext',sale.value+' por cento');
    }
    [lead,sale].forEach(input=>input.addEventListener('input',calculate));
    lab.querySelector('[data-funnel-reset]').addEventListener('click',()=>{lead.value=3;sale.value=10;calculate();});
    calculate();
  }
})();
