// Each service answers a distinct search intent; existing URLs are preserved.
export const serviceSeo = {
  'google-ads': {title:'Google Ads em Presidente Prudente',heading:'Gestão de Google Ads<br>em Presidente Prudente.',description:'Gestão de Google Ads em Presidente Prudente e região. Campanhas de pesquisa, mensuração de contatos e otimização com Tony Ananias.',related:['trafego-pago','seo-local','analytics-tracking']},
  'meta-ads': {title:'Meta Ads em Presidente Prudente',heading:'Anúncios no Instagram e Facebook<br>em Presidente Prudente.',description:'Gestão de Meta Ads para empresas de Presidente Prudente e região. Anúncios no Instagram e Facebook, testes de criativos e análise dos contatos.',related:['trafego-pago','tiktok-ads','automacao']},
  'tiktok-ads': {title:'TikTok Ads em Presidente Prudente',heading:'TikTok Ads para empresas<br>de Presidente Prudente.',description:'Campanhas de TikTok Ads em Presidente Prudente e região. Planejamento de vídeos, públicos e mensuração conforme o objetivo da sua empresa.',related:['meta-ads','trafego-pago','analytics-tracking']},
  'seo-local': {title:'SEO local em Presidente Prudente',heading:'SEO local para sua empresa<br>em Presidente Prudente.',description:'SEO local em Presidente Prudente e região. Site, conteúdo e Perfil da Empresa no Google alinhados às buscas de quem procura seus serviços.',related:['google-ads','analytics-tracking','trafego-pago']},
  'analytics-tracking': {title:'Analytics e Tracking em Presidente Prudente',heading:'Analytics e tracking<br>em Presidente Prudente.',description:'Consultoria de analytics e tracking em Presidente Prudente e região. GA4, GTM e conversões para conectar anúncios, contatos e vendas.',related:['google-ads','meta-ads','automacao']},
  'automacao': {title:'Automação e WhatsApp em Presidente Prudente',heading:'Automação de marketing<br>em Presidente Prudente.',description:'Automação de marketing e WhatsApp em Presidente Prudente e região. Integrações com CRM, n8n e APIs para organizar contatos e atendimento.',related:['ai','analytics-tracking','trafego-pago']},
  'ai': {title:'IA para empresas em Presidente Prudente',heading:'Inteligência artificial para empresas<br>em Presidente Prudente.',description:'IA aplicada ao marketing e atendimento em Presidente Prudente e região. Agentes e integrações com contexto da empresa e supervisão humana.',related:['automacao','analytics-tracking','meta-ads']},
  'trafego-pago': {title:'Tráfego pago em Presidente Prudente',heading:'Gestão de tráfego pago<br>em Presidente Prudente.',description:'Gestão de tráfego pago em Presidente Prudente e região. Google Ads, Meta Ads e TikTok Ads com estratégia, mensuração e acompanhamento.',related:['google-ads','meta-ads','tiktok-ads']},
};

export const localFaq = [
  ['Qual é a área de atendimento da TA Consulting?','A consultoria tem base em Presidente Prudente e atende empresas da cidade e dos municípios em um raio de até 200 km. Informe sua cidade e o serviço de que precisa no primeiro contato para definirmos o escopo e o formato do trabalho.'],
  ['Qual serviço faz sentido para uma empresa que quer começar?','Depende de como seus clientes procuram e compram. Google Ads pode captar buscas por serviços; Instagram e Facebook ajudam a apresentar ofertas; SEO local trabalha a presença orgânica. A primeira conversa considera público, orçamento e capacidade de atendimento.'],
  ['O investimento em anúncios está incluído na consultoria?','O trabalho de consultoria ou gestão e o investimento destinado às plataformas são itens diferentes. A proposta deve deixar claros o escopo, os canais e a verba de mídia prevista para o projeto.'],
  ['Como saber se o marketing está trazendo oportunidades?','Além de cliques e visualizações, acompanhe contatos recebidos, pedidos de orçamento, qualidade das conversas e vendas. O projeto pode organizar essa mensuração conectando site, campanhas e informações do atendimento.'],
];

// Rótulos em português usados nas páginas de serviço por segmento: título, H1,
// descrição e dados estruturados. O nome comercial em services continua na navegação.
export const audienceSeo = {
  'google-ads': {label:'Google Ads', focus:'campanhas de pesquisa, mensuração de contatos e otimização contínua'},
  'meta-ads': {label:'Meta Ads', focus:'anúncios no Instagram e Facebook, testes de criativos e análise dos contatos'},
  'analytics-tracking': {label:'Analytics e tracking', focus:'GA4, GTM e conversões para ligar anúncios a contatos e vendas'},
  'automacao': {label:'Automação de marketing', focus:'WhatsApp, CRM e n8n para organizar contatos e atendimento'},
  'ai': {label:'IA', focus:'agentes e integrações com o contexto da operação e supervisão humana'},
  'trafego-pago': {label:'Tráfego pago', focus:'Google Ads, Meta Ads e TikTok Ads com estratégia e mensuração'},
  'seo-local': {label:'SEO local', focus:'site, conteúdo e Perfil da Empresa no Google alinhados às buscas da região'},
  'tiktok-ads': {label:'TikTok Ads', focus:'planejamento de vídeos, públicos e mensuração conforme o objetivo'},
};
