import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile, copyFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const base=process.env.BASE_URL||'http://localhost:4321';
const folder=resolve('.impeccable/review');
await mkdir(folder,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const results={viewports:[],routes:[],accessibility:[],interactions:[],errors:[]};
try {
  const context=await browser.newContext({reducedMotion:'reduce'});
  const page=await context.newPage();
  page.on('pageerror',error=>results.errors.push(error.message));
  page.on('console',msg=>{if(msg.type()==='error')results.errors.push(msg.text());});
  // Uma captura do original documenta a identidade substituída; preserva a fonte intacta.
  if(!await stat(resolve(folder,'original-desktop.png')).catch(()=>null)){
    await page.setViewportSize({width:1440,height:960});
    await page.goto(pathToFileURL(resolve('.impeccable/original/index.html')).href);
    await page.locator('.reveal').evaluateAll(elements=>elements.forEach(el=>el.classList.add('visible')));
    await page.screenshot({path:resolve(folder,'original-desktop.png'),fullPage:true});
  }
  results.errors=[];
  page.on('response', response => { if(response.status() >= 400) results.errors.push(`${response.status()} ${response.url()}`); });
  // Cartão social é tipografia e geometria nativas, sem imagem de cliente ou fotografia inventada.
  await page.setViewportSize({width:1200,height:630});
  await page.goto(base);
  await page.setContent(`<html><head><link rel="icon" href="${base}/assets/favicon.svg"><link rel="stylesheet" href="${base}/assets/site.css"><style>body{padding:64px 72px;width:1200px;height:630px;position:relative}.brand-line{font:600 24px Manrope;border-bottom:1px solid #34383d;padding-bottom:26px;margin-bottom:47px;display:flex;justify-content:space-between}.brand-line span{font-size:13px;color:#a5a9af}h1{font:500 78px/1.05 Barlow;max-width:1000px;letter-spacing:-.025em}h1 span{color:#8aa7ff}.social-bottom{position:absolute;bottom:48px;left:72px;right:72px;display:flex;justify-content:space-between;font:400 14px Manrope;color:#a5a9af}</style></head><body><div class="brand-line">TA CONSULTING<span>TONY ANANIAS</span></div><h1>Performance não é sobre<br>comprar tráfego.<br><span>É sobre transformar dados<br>em crescimento.</span></h1><div class="social-bottom"><span>Mídia · Dados · Automação · IA</span><span>tonyananias.com.br</span></div></body></html>`);
  await page.evaluate(()=>document.fonts.ready);
  await page.screenshot({path:resolve('public/assets/social-cover.png')});
  await copyFile(resolve('public/assets/social-cover.png'),resolve('dist/assets/social-cover.png'));

  for(const width of [1920,1440,1280,768,390,320]){
    await page.setViewportSize({width,height:width<700?844:960});
    await page.goto(base,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const overflow=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));
    assert(overflow.scroll<=width,`Overflow da home em ${width}: ${overflow.scroll}`);
    assert.equal(await page.locator('h1').count(),1);
    const filename=width===1440?'desktop.png':width===390?'mobile.png':`user-${width}.png`;
    await page.screenshot({path:resolve(folder,filename),fullPage:true,animations:'disabled'});
    if(width===1440||width===390) await page.screenshot({path:resolve(folder,width===1440?'desktop-first.png':'mobile-first.png'),animations:'disabled'});
    results.viewports.push({width,overflow:false});
  }
  const routes=['/','/servicos/','/google-ads/','/meta-ads/','/automacao/','/ai/','/analytics-tracking/','/sobre/','/insights/','/contato/','/privacidade/'];
  for(const route of routes){
    await page.setViewportSize({width:390,height:844});
    const response=await page.goto(base+route,{waitUntil:'networkidle'});
    assert.equal(response.status(),200,route);
    assert.equal(await page.locator('h1').count(),1,route);
    assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'),'https://www.tonyananias.com.br'+route);
    const width=await page.evaluate(()=>document.documentElement.scrollWidth);
    assert(width<=390,`${route} transborda: ${width}`);
    await page.locator('script[type="application/ld+json"]').evaluateAll(scripts=>scripts.forEach(s=>JSON.parse(s.textContent)));
    const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    results.accessibility.push({route,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
    results.routes.push({route,status:200});
    if(['/contato/','/google-ads/','/insights/','/sobre/'].includes(route)){
      const name=route.replaceAll('/','');
      await page.screenshot({path:resolve(folder,`${name}-mobile.png`),fullPage:true,animations:'disabled'});
      await page.setViewportSize({width:1440,height:960});
      await page.screenshot({path:resolve(folder,`${name}-desktop.png`),fullPage:true,animations:'disabled'});
    }
    const links=await page.locator('a[href^="/"]').evaluateAll(links=>[...new Set(links.map(a=>a.getAttribute('href').split('#')[0]).filter(Boolean))]);
    for(const href of links){const response=await context.request.get(base+href);assert.equal(response.status(),200,`Link quebrado em ${route}: ${href}`);}
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto(base);
  await page.getByRole('button',{name:'Abrir menu'}).click();
  assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
  assert.equal(await page.locator('.menu-toggle').evaluate(el=>el===document.activeElement),true);
  await page.getByRole('button',{name:'Abrir menu'}).click();
  await page.locator('#navigation').getByRole('link',{name:'Metodologia'}).click();
  assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
  results.interactions.push('Menu móvel: abrir, Escape, foco restaurado e navegação por âncora.');
  for(let i=0;i<8;i++){
    await page.locator(`[data-layer="${i}"]`).click();
    assert(await page.locator(`[data-layer-panel="${i}"]`).isVisible());
  }
  await page.locator('[data-layer="7"]').focus();await page.keyboard.press('Home');
  assert.equal(await page.locator('[data-layer="0"]').getAttribute('aria-pressed'),'true');
  results.interactions.push('Oito camadas por clique e navegação por teclado.');
  for(let i=0;i<9;i++)await page.locator('[data-flow-play]').click();
  assert((await page.locator('.flow-description').textContent()).includes('9 de 9'));
  results.interactions.push('Fluxo completo de nove etapas, acionado pelo visitante.');
  for(const id of ['home','expertise','automation','experience','about','contact'])assert.equal(await page.locator('#'+id).count(),1,`Âncora legada ausente: ${id}`);

  await page.goto(base+'/contato/');
  await page.getByRole('button',{name:'Preparar solicitação'}).click();
  assert.equal(await page.locator('#form-result').isVisible(),false);
  const fields={name:'Teste QA — não enviar',company:'Empresa & Cia',email:'qa@example.com',phone:'+55 11 99999-9999',challenge:'Teste de formulário <sem envio> & caracteres especiais.'};
  for(const [id,value] of Object.entries(fields))await page.locator('#'+id).fill(value);
  await page.getByRole('button',{name:'Preparar solicitação'}).click();
  assert(await page.locator('#form-result').isVisible());
  const href=await page.locator('#email-draft').getAttribute('href');
  const mail=new URL(href);
  assert.equal(mail.pathname,'tony.ananias@gmail.com');
  for(const value of Object.values(fields))assert(mail.searchParams.get('body').includes(value));
  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw new Error('denied');}},configurable:true}));
  await page.getByRole('button',{name:'Copiar mensagem'}).click();
  assert((await page.locator('#copy-status').textContent()).includes('não permitiu'));
  await page.locator('#copy-message').focus();
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:resolve(folder,'form-review-mobile.png'),fullPage:true,animations:'disabled'});
  await page.locator('#challenge').fill('Desafio atualizado');
  assert.equal(await page.locator('#form-result').isVisible(),false);
  results.interactions.push('Formulário simplificado: validação, revisão, encoding, falha de clipboard e invalidação após edição; nenhum e-mail enviado.');
  assert.equal((await context.request.get(base+'/nao-existe/')).status(),404);
  assert.equal((await context.request.get(base+'/google-ads',{maxRedirects:0})).status(),301);
  const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const staticPage=await nojs.newPage();await staticPage.goto(base);
  assert(await staticPage.locator('h1').isVisible());
  assert.equal(await staticPage.locator('noscript .nojs-layers h3').count(),7);
  await nojs.close();
  results.interactions.push('HTML sem JavaScript, fallback de conteúdo, 404 e redirecionamento de rota.');
  await writeFile(resolve(folder,'verification.json'),JSON.stringify(results,null,2));
  console.log(JSON.stringify(results,null,2));
  assert.equal(results.errors.length,0,'Erros no console');
  assert.equal(results.accessibility.reduce((n,x)=>n+x.violations.length,0),0,'Falhas de acessibilidade');
} finally {await browser.close();}
