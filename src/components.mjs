import { tagManagerHead, tagManagerBody } from './tracking.mjs';
import { site, services, groups, layers, method, experience, metrics } from './site.mjs';

export const escape = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const arrow = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
export const diagonal = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>`;
export const brand = `<img class="brand-logo" src="/assets/logo-ta-consulting.png" width="1254" height="780" alt="">`;
export const button = (label, href = '/contato/', secondary = false) => `<a class="${secondary ? 'text-link' : 'button'}" href="${escape(href)}">${escape(label)}${arrow}</a>`;

export function whatsappUrl() {
  const number = site.whatsapp.replace(/\D/g, '');
  if (!number) return '';
  if (!/^[1-9]\d{9,14}$/.test(number)) throw new Error('Configure o WhatsApp com código do país e DDD.');
  return `https://wa.me/${number}?text=${encodeURIComponent('Olá, Tony! Quero conversar sobre o marketing da minha empresa em Presidente Prudente e região.')}`;
}

function whatsappFloat() {
  const url = whatsappUrl();
  if (!url) return '';
  return `<a class="whatsapp-float" href="${escape(url)}" target="_blank" rel="noopener noreferrer" aria-label="Falar com Tony pelo WhatsApp (abre em nova aba)"><span>Vamos conversar<span>WhatsApp</span></span><svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M16 2a14 14 0 0 0-12.1 21L2 30l7.2-1.9A14 14 0 1 0 16 2Zm0 25.4a11.3 11.3 0 0 1-5.8-1.6l-.4-.2-4.2 1.1 1.1-4.1-.3-.5A11.4 11.4 0 1 1 16 27.4Zm6.3-8.5c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a9.3 9.3 0 0 1-4.5-3.9c-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.6-.5-.8-.5h-.6c-.2 0-.6.1-.8.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2 2.3 3.6 5.5 5c2 .8 2.8.9 3.8.7.6-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5-.2-.2-.5-.4Z"/></svg></a>`;
}

function header(path) {
  const links = [['Serviços','/servicos/'],['Metodologia','/#metodologia'],['Sobre','/sobre/'],['Insights','/insights/']];
  return `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a><header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="TA Consulting — início">${brand}</a><nav class="navigation" id="navigation" aria-label="Principal">${links.map(([label,url])=>`<a href="${url}"${path===url?' aria-current="page"':''}>${label}</a>`).join('')}</nav><a class="header-contact" href="/contato/">Vamos conversar ${diagonal}</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="navigation" aria-label="Abrir menu"><span></span><span></span></button></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container"><div class="footer-main"><a class="brand" href="/" aria-label="TA Consulting — início">${brand}</a><p>Estratégia, dados e execução.<br>Na mesma direção.</p><div><a href="mailto:${site.email}">${site.email}</a><a href="${site.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ${diagonal}</a></div></div><nav class="footer-services" aria-label="Serviços e atendimento"><div><strong>Como podemos ajudar</strong><div>${services.map(s=>`<a href="/${s.slug}/">${escape(s.name)}</a>`).join('')}</div></div><div><strong>Atendimento regional</strong><a href="/regiao-presidente-prudente/">Presidente Prudente e municípios em até 200 km</a><a href="${escape(whatsappUrl())}">WhatsApp: (18) 98103-4411</a></div></nav><div class="footer-bottom"><span>© ${new Date().getFullYear()} TA Consulting · Tony Ananias</span><span>Presidente Prudente e região</span><a href="/privacidade/">Privacidade</a><a href="#conteudo">Voltar ao início ${arrow}</a></div></div></footer>`;
}

export function schema(path, title, description, extra = []) {
  const org = `${site.origin}/#organization`, person = `${site.origin}/#tony-ananias`, url = site.origin + path;
  const pageType = path === '/contato/' ? 'ContactPage' : path === '/sobre/' ? 'AboutPage' : 'WebPage';
  const graph = [
    {'@type':['Organization','ProfessionalService'], '@id':org, name:site.name, url:site.origin+'/', logo:{'@type':'ImageObject',url:site.origin+'/assets/logo-ta-consulting.png',width:1254,height:780}, image:site.origin+'/assets/social-cover.png', email:site.email, telephone:'+'+site.whatsapp, contactPoint:{'@type':'ContactPoint',telephone:'+'+site.whatsapp,contactType:'sales',availableLanguage:'pt-BR',url:site.origin+'/contato/'}, description:'Marketing digital em Presidente Prudente e região: Google Ads, Meta Ads, TikTok Ads, SEO local, dados e automação.', founder:{'@id':person}, areaServed:site.areaServed, address:{'@type':'PostalAddress',addressLocality:'Presidente Prudente',addressRegion:'SP',addressCountry:'BR'}, sameAs:[site.linkedin]},
    {'@type':'Person','@id':person,name:'Tony Ananias',jobTitle:'Senior Performance Marketing & Paid Media Specialist',url:site.origin+'/sobre/',sameAs:[site.linkedin],worksFor:{'@id':org}},
    {'@type':'WebSite','@id':site.origin+'/#website',url:site.origin+'/',name:site.name,inLanguage:'pt-BR',publisher:{'@id':org}},
    {'@type':pageType,'@id':url+'#webpage',url,name:title,description,inLanguage:'pt-BR',isPartOf:{'@id':site.origin+'/#website'},about:{'@id':org},primaryImageOfPage:{'@id':site.origin+'/#social-image'}},
    {'@type':'ImageObject','@id':site.origin+'/#social-image',url:site.origin+'/assets/social-cover.png',width:1200,height:630},
  ];
  const service = services.find(s=>path===`/${s.slug}/` || path.startsWith(`/${s.slug}/`));
  const article = path.startsWith('/insights/') && path!=='/insights/';
  if(path!=='/' && path!=='/404/') {
    const trail = [{name:'Início',item:site.origin+'/'}];
    if(service) {
      trail.push({name:'Serviços',item:site.origin+'/servicos/'});
      if(path!==`/${service.slug}/`) trail.push({name:service.name,item:site.origin+`/${service.slug}/`});
    }
    if(article) trail.push({name:'Insights',item:site.origin+'/insights/'});
    const currentName = service && path!==`/${service.slug}/` ? title.replace(/\s*\|\s*TA Consulting$/,'').replace(/\s+em Presidente Prudente$/,'') : service?.name || title.split(' | ')[0];
    trail.push({name:currentName,item:url});
    graph.push({'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:trail.map((item,i)=>({'@type':'ListItem',position:i+1,...item}))});
    graph.find(item=>item['@id']===url+'#webpage').breadcrumb={'@id':url+'#breadcrumb'};
  }
  const entity=extra.find(item=>['Service','Article'].includes(item['@type']));
  if(entity?.['@id']) graph.find(item=>item['@id']===url+'#webpage').mainEntity={'@id':entity['@id']};
  return JSON.stringify({'@context':'https://schema.org','@graph':[...graph,...extra]}).replace(/</g,'\\u003c');
}

export function layout({path='/', title, description, body, extra=[], noindex=false, className=''}) {
  const fullTitle = title.includes('TA Consulting') ? title : `${title} | TA Consulting`;
  const article = extra.find(item=>item['@type']==='Article');
  const articleMeta = article ? `<meta property="article:published_time" content="${escape(article.datePublished)}">${article.dateModified ? `<meta property="article:modified_time" content="${escape(article.dateModified)}">` : ''}<meta property="article:author" content="${site.origin}/sobre/">` : '';
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">${tagManagerHead}<meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(fullTitle)}</title><meta name="description" content="${escape(description)}"><meta name="author" content="Tony Ananias"><meta name="theme-color" content="#080d17">${process.env.GOOGLE_SITE_VERIFICATION?`<meta name="google-site-verification" content="${escape(process.env.GOOGLE_SITE_VERIFICATION)}">`:''}<meta name="color-scheme" content="dark"><meta name="robots" content="${noindex?'noindex,follow':'index,follow,max-image-preview:large'}"><link rel="canonical" href="${site.origin}${path}"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="preload" href="/assets/fonts/barlow-semi-condensed-500.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/manrope-400.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/site.css"><meta property="og:type" content="${extra.some(x=>x['@type']==='Article')?'article':'website'}"><meta property="og:site_name" content="TA Consulting"><meta property="og:locale" content="pt_BR"><meta property="og:title" content="${escape(fullTitle)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${site.origin}${path}"><meta property="og:image" content="${site.origin}/assets/social-cover.png"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="TA Consulting — mídia, dados e automação na mesma direção."><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(fullTitle)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${site.origin}/assets/social-cover.png"><meta name="twitter:image:alt" content="TA Consulting — mídia, dados e automação na mesma direção.">${articleMeta}<script type="application/ld+json">${schema(path,fullTitle,description,extra)}</script><script src="/assets/site.js" defer></script></head><body class="${className}${site.whatsapp?' has-whatsapp':''}">${tagManagerBody}<noscript><style>@media(max-width:700px){.menu-toggle{display:none}.header-inner{flex-wrap:wrap;height:auto;padding-block:16px}.navigation{display:flex;position:static;height:auto;order:3;flex-direction:row;flex-wrap:wrap;padding:0;gap:14px;width:100%}.navigation a{font:400 13px var(--body);padding:8px 0}.header-contact{margin-left:auto}}</style></noscript>${header(path)}<main id="conteudo">${body}</main>${footer()}${whatsappFloat()}</body></html>`;
}

export function pageIntro(title, text, trail='') {
  return `<section class="page-intro container">${trail?`<nav class="breadcrumbs" aria-label="Você está aqui"><a href="/">Início</a><span aria-hidden="true">/</span>${trail}</nav>`:''}<h1>${title}</h1><p class="lead">${text}</p></section>`;
}

export function systemGraphic() {
  return `<figure class="hero-mechanism"><svg class="signal-map" viewBox="0 0 430 430" role="img" aria-labelledby="signal-title signal-desc"><title id="signal-title">Da mídia à receita</title><desc id="signal-desc">Mídia e dados convergem em uma estratégia que conecta CRM, automação e receita. Os aprendizados retornam à aquisição.</desc><g class="map-lines" fill="none" stroke="#444b55" stroke-width="1"><path d="M35 92h115l60 85M395 92H280l-70 85M35 177h175M210 177v115M210 292h125M210 292H85M85 292v76h250v-76"/><path d="M395 92v-58H35v58M35 177V92" stroke-dasharray="3 5"/><path d="M335 368h60V177H265" stroke-dasharray="3 5"/></g><g fill="#101214" stroke="#717986"><circle cx="35" cy="92" r="5"/><circle cx="395" cy="92" r="5"/><circle cx="35" cy="177" r="5"/><circle cx="85" cy="292" r="5"/><circle cx="335" cy="292" r="5"/></g><circle cx="210" cy="177" r="35" fill="#527dff"/><path d="M193 177h34M211 162l16 15-16 15" stroke="#101214" fill="none" stroke-width="2"/><circle cx="210" cy="368" r="6" fill="#527dff"/><path class="signal-line" d="M35 92h115l60 85v115h125v76H210" stroke="#527dff" stroke-width="2" fill="none"/><g fill="#f3f2ec" font-family="Manrope, sans-serif" font-size="13"><text x="35" y="72">MÍDIA</text><text x="395" y="72" text-anchor="end">DADOS</text><text x="210" y="239" text-anchor="middle">ESTRATÉGIA</text><text x="85" y="276" text-anchor="middle">CRM</text><text x="335" y="276" text-anchor="middle">AUTOMAÇÃO</text><text x="210" y="406" text-anchor="middle">RECEITA</text></g></svg><figcaption>O resultado está nas conexões.</figcaption><div class="mobile-mechanism" aria-hidden="true"><span>Mídia</span>${arrow}<span>Dados</span>${arrow}<span>CRM</span>${arrow}<strong>Receita</strong></div></figure>`;
}

export function metricStrip() {
  return `<section class="metrics container" aria-label="Experiência em números"><dl>${metrics.map(m=>`<div><dt>${m.label}</dt><dd class="metric-value">${m.value}</dd><dd class="metric-context">${m.context}</dd></div>`).join('')}</dl><p class="source-note">Marcos de experiências profissionais distintas. <a href="/sobre/#trajetoria">Conheça o contexto de cada operação ${arrow}</a></p></section>`;
}

export function servicesList(headingTag = 'h3') {
  return `<div class="service-list">${groups.map(g=>`<article class="service-row"><${headingTag} class="service-name">${g.name}</${headingTag}><div><p class="service-promise">${g.line}</p><p>${g.text}</p><p class="tools-line">${g.tools}</p></div><div class="service-links">${g.links.map(([label,url])=>button(label,url,true)).join('')}</div></article>`).join('')}</div>`;
}

export function systemExplorer() {
  return `<div class="system-explorer"><div class="system-index" role="group" aria-label="Explore as camadas da operação">${layers.map((l,i)=>`<button type="button" class="layer-button" aria-pressed="${i===0}" data-layer="${i}"><span class="layer-number">${String(i+1).padStart(2,'0')}</span>${l[0]}<span class="layer-dot" aria-hidden="true"></span></button>`).join('')}</div><div class="system-detail" aria-live="polite" aria-atomic="true">${layers.map((l,i)=>`<article data-layer-panel="${i}"${i?' hidden':''}><span class="detail-index" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><h3>${l[1]}</h3><p>${l[2]}</p><p class="tools-line">${l[3]}</p></article>`).join('')}<p class="explorer-hint">Selecione uma etapa para entender sua função.</p></div></div><noscript><div class="nojs-layers">${layers.slice(1).map(l=>`<h3>${l[0]}</h3><p>${l[2]}</p>`).join('')}</div></noscript>`;
}

export function methodSequence() {
  return `<ol class="method-sequence">${method.map((m,i)=>`<li><span class="method-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><div><h3>${m[0]}</h3><p>${m[1]}</p></div></li>`).join('')}</ol>`;
}

export function automationFlow() {
  const steps=[['Anúncios','A origem acompanha o clique.'],['Landing page','O interesse vira um contato.'],['Tracking','Eventos e origem são registrados.'],['CRM','O lead entra no processo comercial.'],['IA','Informações apoiam a qualificação.'],['WhatsApp','O atendimento recebe o contexto.'],['Vendas','A equipe conduz a oportunidade.'],['Base de dados','O resultado retorna à operação.'],['Inteligência','O aprendizado orienta a próxima decisão.']];
  return `<div class="automation-flow" data-flow><ol aria-label="Fluxo conceitual do lead">${steps.map((s,i)=>`<li data-flow-step="${i}"><span class="flow-point" aria-hidden="true"></span><span>${s[0]}</span></li>`).join('')}</ol><div class="flow-controls"><button type="button" class="text-link" data-flow-play>Explorar o caminho de um lead ${arrow}</button><p class="flow-description" aria-live="polite">Fluxo conceitual: da origem do contato ao aprendizado da operação.</p></div><script type="application/json" class="flow-data">${JSON.stringify(steps).replace(/</g,'\\u003c')}</script></div>`;
}

export function career() {
  return `<div class="career-list">${experience.map(e=>`<article class="career-row"><div><h3>${e[0]}</h3><p>${e[1]}</p><span>${e[2]}</span></div><p>${e[3]}</p></article>`).join('')}</div>`;
}

export function finalCta() {
  return `<section class="final-cta" id="contact"><div class="container"><h2>Vamos aproximar sua empresa dos próximos clientes.</h2><div><p>Em Presidente Prudente e região, sua estratégia começa pelo que a empresa precisa: ser encontrada, receber contatos ou organizar o atendimento.</p>${button('Vamos conversar sobre sua empresa')}</div></div></section>`;
}

export function contactForm() {
  return `<form class="contact-form" id="contact-form" method="dialog"><p class="form-intro">Conte só o essencial. Os campos marcados com * são obrigatórios.</p><fieldset><legend>Vamos começar</legend><div class="form-grid"><div class="field"><label for="name">Nome *</label><input id="name" name="name" autocomplete="name" required maxlength="120"></div><div class="field"><label for="email">E-mail *</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="254"></div><div class="field"><label for="company">Empresa <span>(opcional)</span></label><input id="company" name="company" autocomplete="organization" maxlength="160"></div><div class="field"><label for="phone">WhatsApp <span>(opcional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="30"></div><div class="field full"><label for="challenge">Como podemos ajudar? *</label><textarea id="challenge" name="challenge" rows="4" required maxlength="1800" placeholder="Ex.: quero receber mais contatos qualificados e organizar o atendimento."></textarea></div></div></fieldset><p class="form-note" id="form-note">Você poderá revisar a solicitação e enviá-la pelo seu aplicativo de e-mail. Nada é enviado automaticamente. <a href="/privacidade/">Como seus dados são usados.</a></p><button class="button" type="submit" disabled aria-describedby="form-note">Preparar solicitação ${arrow}</button><noscript><p>Para entrar em contato, escreva para <a href="mailto:${site.email}">${site.email}</a>. A preparação da mensagem requer JavaScript.</p></noscript><section class="form-result" id="form-result" hidden tabindex="-1" aria-labelledby="result-title"><h2 id="result-title">Sua solicitação está pronta para enviar.</h2><p>Abra seu aplicativo de e-mail ou copie o texto e envie para <a href="mailto:${site.email}">${site.email}</a>.</p><label for="message-preview">Revise a mensagem</label><textarea id="message-preview" readonly rows="10"></textarea><div class="result-actions"><a class="button" id="email-draft" href="mailto:${site.email}">Abrir e-mail ${arrow}</a><button class="text-link" id="copy-message" type="button">Copiar mensagem</button></div><p id="copy-status" role="status"></p><div class="form-complete"><p>Concluiu o envio no seu aplicativo de e-mail?</p><a class="text-link" href="/obrigado/">Já enviei meu e-mail ${arrow}</a></div></section></form>`;
}
