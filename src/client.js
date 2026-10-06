(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const mobile = window.matchMedia('(max-width: 700px)');
  function setMenu(open, restoreFocus = false) {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    document.querySelector('main').inert = open;
    document.querySelector('footer').inert = open;
    if (open) navigation.querySelector('a').focus();
    else if (restoreFocus) menu.focus();
  }
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  navigation?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (menu?.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') setMenu(false, true);
    if (event.key === 'Tab') {
      const items = [...document.querySelectorAll('.site-header a, .site-header button')].filter(el => el.getClientRects().length);
      const first = items[0], last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.documentElement.classList.add('navigation-ready');
  mobile.addEventListener('change', () => { if (!mobile.matches) setMenu(false); });

  const mechanism = document.querySelector('.hero-mechanism');
  if (mechanism) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) { mechanism.classList.add('is-visible'); observer.disconnect(); }
      });
      observer.observe(mechanism);
    } else mechanism.classList.add('is-visible');
  }

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const metricsObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); metricsObserver.unobserve(entry.target); }
    }), { threshold: .5 });
    document.querySelectorAll('.metric-value').forEach(el => metricsObserver.observe(el));
  }

  document.querySelectorAll('.system-explorer').forEach(explorer => {
    const buttons = [...explorer.querySelectorAll('[data-layer]')];
    function activate(button) {
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      explorer.querySelectorAll('[data-layer-panel]').forEach(panel => panel.hidden = panel.dataset.layerPanel !== button.dataset.layer);
    }
    buttons.forEach((button, i) => {
      button.addEventListener('click', () => activate(button));
      button.addEventListener('keydown', event => {
        let index;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') index = (i + 1) % buttons.length;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') index = (i - 1 + buttons.length) % buttons.length;
        if (event.key === 'Home') index = 0;
        if (event.key === 'End') index = buttons.length - 1;
        if (index !== undefined) { event.preventDefault(); buttons[index].focus(); activate(buttons[index]); }
      });
    });
  });

  // Avanço explícito: sem movimento contínuo nem simulação de métricas de clientes.
  document.querySelectorAll('[data-flow]').forEach(flow => {
    const steps = [...flow.querySelectorAll('[data-flow-step]')];
    const data = JSON.parse(flow.querySelector('.flow-data').textContent);
    const button = flow.querySelector('[data-flow-play]');
    const description = flow.querySelector('.flow-description');
    let index = -1;
    button.addEventListener('click', () => {
      index = (index + 1) % steps.length;
      steps.forEach((step, i) => { step.classList.toggle('active', i === index); step.classList.toggle('passed', i < index); });
      description.textContent = `${index + 1} de ${steps.length} · ${data[index][0]}: ${data[index][1]}`;
      button.firstChild.textContent = index === steps.length - 1 ? 'Explorar novamente ' : `Próxima etapa: ${data[index + 1][0]} `;
    });
  });

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const labels = {name:'Nome',company:'Empresa',email:'E-mail',phone:'WhatsApp',challenge:'Como podemos ajudar?'};
      const text = Object.entries(labels).map(([key,label])=>`${label}: ${String(data.get(key) || 'Não informado').trim()}`).join('\n\n');
      const result = document.querySelector('#form-result');
      document.querySelector('#message-preview').value = text;
      document.querySelector('#email-draft').href = `mailto:tony.ananias@gmail.com?subject=${encodeURIComponent('Análise de operação — '+(data.get('company') || data.get('name')))}&body=${encodeURIComponent(text)}`;
      document.querySelector('#copy-status').textContent = '';
      result.hidden = false;
      result.focus({preventScroll:true});
      result.scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});
    });
    document.querySelector('#copy-message').addEventListener('click', async () => {
      const preview = document.querySelector('#message-preview');
      const status = document.querySelector('#copy-status');
      try {
        await navigator.clipboard.writeText(preview.value);
        status.dataset.copied = 'true';
        status.textContent = 'Mensagem copiada. Cole no seu e-mail e envie para Tony.';
      } catch {
        status.dataset.copied = 'false';
        preview.focus(); preview.select();
        status.textContent = 'Selecione e copie o texto acima. Seu navegador não permitiu a cópia automática.';
      }
    });
    form.querySelector('[type=submit]').disabled = false;
    form.addEventListener('input', () => {
      const result = document.querySelector('#form-result');
      if (!result.hidden) result.hidden = true;
    });
  }
})();
