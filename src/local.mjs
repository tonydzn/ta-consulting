import { arrow, button } from './components.mjs';
import { localFaq } from './seo.mjs';

export function localQuestions() {
  return `<section class="section container faq-section"><h2>Marketing na região.<br>Suas dúvidas, respondidas.</h2><div>${localFaq.map(([q,a])=>`<details><summary>${q}<span class="summary-icon" aria-hidden="true"></span></summary><p>${a}</p></details>`).join('')}</div></section>`;
}

export function platformStrip() {
  const platforms = [
    ['Google Ads', 'Busca e intenção de compra', '/google-ads/', 'google'],
    ['Meta Ads', 'Instagram e Facebook', '/meta-ads/', 'meta'],
    ['TikTok Ads', 'Vídeos que apresentam sua marca', '/tiktok-ads/', 'tiktok'],
    ['SEO local', 'Sua empresa nas buscas da região', '/seo-local/', 'seo'],
    ['Google Analytics', 'Entenda de onde vêm os contatos', '/analytics-tracking/', 'analytics'],
    ['WhatsApp + CRM', 'Do primeiro contato ao atendimento', '/automacao/', 'crm'],
  ];
  return `<section class="platform-section container" aria-labelledby="platform-heading"><div class="platform-heading"><h2 id="platform-heading">Sua empresa nos canais certos.</h2><p>Plataformas e competências conectadas ao seu negócio.</p></div><ul class="platform-strip">${platforms.map(([name,description,url,tone])=>`<li><a href="${url}" class="platform-badge platform-${tone}"><strong>${name}</strong><span>${description}</span>${arrow}</a></li>`).join('')}</ul><div class="partner-placeholders" aria-label="Espaços reservados para selos oficiais"><p>Selos e certificações</p><div><span><strong>Google Partner</strong><small>Selo oficial a inserir</small></span><span><strong>Meta</strong><small>Selo oficial a inserir</small></span><span><strong>TikTok</strong><small>Selo oficial a inserir</small></span></div></div><p class="platform-history"><a href="/sobre/#certificacoes">Google Partner por seis anos consecutivos no histórico profissional de Tony. Conheça a trajetória ${arrow}</a></p></section>`;
}

export function localSection() {
  return `<section class="section local-section" id="regiao"><div class="container local-layout"><div><h2>Marketing digital em Presidente Prudente.<br><span>Experiência perto de você.</span></h2><p>Sou Tony Ananias, de Presidente Prudente. Trago mais de 15 anos de experiência em marketing digital para ajudar empresas daqui a conectar divulgação, atendimento e vendas.</p><p>O ponto de partida é o seu negócio: quem você quer alcançar, onde atende e o que acontece quando um novo cliente entra em contato.</p>${button('Conversar sobre minha empresa')}</div><div class="local-plan"><h3>Presidente Prudente e região</h3><p>Atendimento a empresas em um raio de até 200 km de Presidente Prudente. A estratégia considera seu público, a concorrência e a rotina da equipe.</p><ol><li><strong>Ser encontrado</strong><span>Busca no Google, presença local e campanhas para o público da região.</span></li><li><strong>Despertar interesse</strong><span>Anúncios e páginas que deixam claro o que sua empresa oferece.</span></li><li><strong>Continuar a conversa</strong><span>WhatsApp e organização dos contatos para apoiar o atendimento.</span></li></ol><p class="local-note"><a href="/regiao-presidente-prudente/">Conheça o atendimento regional ${arrow}</a></p></div></div></section>`;
}
