export const site = {
  name: 'TA Consulting', origin: 'https://www.tonyananias.com.br',
  googleTagManagerId: 'GTM-TZZLJG72',
  email: 'tony.ananias@gmail.com', linkedin: 'https://www.linkedin.com/in/tonyananias',
  // Informe somente um número real, em formato internacional, para habilitar o contato.
  whatsapp: '5518981034411',
  areaServed: [{'@type':'City',name:'Presidente Prudente'},{'@type':'Place',name:'Região de Presidente Prudente',description:'Municípios em um raio de até 200 km de Presidente Prudente, SP.'}],
};

export const metrics = [
  { value: '15+', label: 'anos em marketing digital', context: 'Mídia, estratégia e tecnologia.' },
  { value: 'US$ 1,2M+', label: 'em portfólio mensal combinado', context: 'Google e Meta · Advertising Beast / AMZingPPC.' },
  { value: '100 mil+', label: 'leads qualificados por mês', context: 'Operação de aquisição · Crefaz.' },
  { value: '12', label: 'profissionais em times liderados', context: 'Liderança de equipes · Otimizza Digital.' },
];

export const layers = [
  ['Aquisição', 'Alcançar quem tem potencial de comprar.', 'Escolha de canais, intenção de busca, públicos e criativos alinhados à oferta. O objetivo da mídia começa no modelo de negócio.', 'Google Ads · Meta Ads · TikTok Ads'],
  ['Landing page', 'Fazer a promessa encontrar a experiência.', 'Mensagem, oferta, velocidade e formulário precisam trabalhar juntos. O clique só avança quando a página reduz a fricção.', 'Conversão · CRO · Testes de oferta'],
  ['Tracking', 'Medir os eventos que importam.', 'Uma base consistente de eventos, UTMs e conversões conecta o investimento ao comportamento real, respeitando o consentimento.', 'GA4 · GTM · CAPI · Server-side'],
  ['Atribuição', 'Entender a contribuição de cada ponto.', 'Confrontar dados de plataforma, analytics e CRM para interpretar a jornada. Nenhum modelo de atribuição explica tudo sozinho.', 'Jornada · Canais · Conversões offline'],
  ['CRM', 'Manter o contexto depois do formulário.', 'Origem, interesse e etapa comercial acompanham o lead. Marketing e vendas passam a discutir a mesma oportunidade.', 'Pipeline · Qualificação · Origem'],
  ['Automação', 'Fazer a informação chegar a quem age.', 'Regras de distribuição, follow-up e integrações reduzem tarefas repetitivas. Exceções continuam visíveis para a equipe.', 'n8n · Webhooks · APIs'],
  ['Vendas', 'Conectar aquisição ao resultado comercial.', 'Acompanhar qualidade, avanço no funil e receita ajuda a separar volume de contatos de oportunidades reais.', 'Qualidade · Receita · Margem'],
  ['Inteligência', 'Transformar o aprendizado em decisão.', 'Consolidar o que funcionou, identificar gargalos e alimentar o próximo ciclo de campanhas, testes e automações.', 'Análise · IA · Experimentação'],
];

export const groups = [
  { name: 'Tráfego pago', line: 'Sua empresa diante de quem pode comprar.', text: 'Campanhas no Google, Instagram, Facebook e TikTok para alcançar pessoas na sua área de atendimento e gerar oportunidades de negócio.', tools: 'Google Ads · Meta Ads · TikTok Ads · Amazon Ads', links: [['Gestão de tráfego pago', '/trafego-pago/'], ['Google Ads', '/google-ads/'], ['Meta Ads', '/meta-ads/'], ['TikTok Ads', '/tiktok-ads/']] },
  { name: 'Dados & resultados', line: 'Saiba de onde vêm os contatos.', text: 'Mensuração para entender quais anúncios e canais geram interesse, pedidos de orçamento e vendas. Informação clara para decidir onde investir.', tools: 'GA4 · GTM · UTMs · CAPI · Server-side', links: [['Analytics e tracking', '/analytics-tracking/']] },
  { name: 'WhatsApp & automação', line: 'O contato chegou. A conversa continua.', text: 'Integrações e organização de contatos para apoiar o atendimento, acompanhar oportunidades e reduzir tarefas repetitivas da sua equipe.', tools: 'n8n · Webhooks · APIs · CRM · WhatsApp', links: [['Automação de marketing', '/automacao/']] },
  { name: 'IA para negócios', line: 'Mais tempo para cuidar dos clientes.', text: 'Inteligência artificial para apoiar tarefas de marketing e atendimento, com informações da sua empresa e supervisão humana.', tools: 'Agentes de IA · RAG · LLMs · OpenRouter', links: [['IA para marketing', '/ai/']] },
  { name: 'SEO local', line: 'Seja encontrado por quem está por perto.', text: 'Conteúdo, páginas de serviços e presença no Google alinhados às buscas de quem procura o que sua empresa oferece em Presidente Prudente e região.', tools: 'Google Search · Perfil da Empresa · Search Console', links: [['Conhecer SEO local', '/seo-local/']] },
];

export const services = [
  { slug: 'google-ads', name: 'Google Ads', title: 'Consultoria e gestão de Google Ads', heading: 'A intenção existe. A estratégia é o que conecta à receita.', intro: 'Consultoria e gestão de Google Ads para empresas que precisam alinhar investimento, demanda e resultado comercial. Da arquitetura da conta à qualidade das conversões.', question: 'O que sua conta está realmente otimizando?', answer: 'Uma conversão registrada na plataforma nem sempre representa uma venda ou um lead qualificado. A análise começa na relação entre objetivo de negócio, evento de conversão e estrutura de campanha.', items: [
    ['Diagnóstico da conta', 'Estrutura, termos de pesquisa, segmentação, orçamento, conversões e histórico de testes. Identificar desperdícios antes de ampliar investimento.'],
    ['Arquitetura de aquisição', 'Search, Shopping, Performance Max e YouTube organizados por intenção, catálogo, oferta e estágio de decisão.'],
    ['Mensuração conectada', 'GA4, GTM e dados comerciais para avaliar conversões, qualidade dos leads e receita. Importação de conversões offline quando aplicável.'],
    ['Otimização e experimentos', 'Testes de criativos, páginas, públicos e estratégias de lance. Leitura de CPA, ROAS e margem com contexto.'],
  ], fit: 'E-commerce, geração de leads, serviços e operações com múltiplas contas.', tools: 'Google Ads · Merchant Center · GA4 · GTM · Looker Studio', faq: [
    ['A consultoria pode trabalhar com a equipe que já opera a conta?', 'Sim. O escopo pode incluir auditoria, desenho de estrutura, orientação de testes e acompanhamento junto à equipe interna ou à agência.'],
    ['É necessário aumentar o orçamento para começar?', 'Não necessariamente. O diagnóstico avalia primeiro mensuração, estrutura e eficiência. A necessidade de investimento depende da demanda, da margem e da capacidade comercial.'],
  ] },
  { slug: 'meta-ads', name: 'Meta Ads', title: 'Consultoria e gestão de Meta Ads', heading: 'Criativo, sinal e oferta. A performance depende dos três.', intro: 'Campanhas de Facebook e Instagram conectadas ao funil, à qualidade dos dados e à operação comercial. Experimentação com critérios claros para decidir o que manter, ajustar ou escalar.', question: 'O gargalo está no anúncio ou depois do clique?', answer: 'Variações de CPL e ROAS precisam ser lidas junto com criativos, oferta, experiência de conversão e qualidade do atendimento. Otimizar apenas a plataforma deixa parte do problema invisível.', items: [
    ['Estrutura de campanhas', 'Objetivos, públicos, distribuição de orçamento e organização do funil conforme a oferta e o ciclo de compra.'],
    ['Teste de criativos', 'Hipóteses para mensagens, formatos e ângulos de comunicação. Critérios de avaliação que consideram conversão e qualidade.'],
    ['Pixel e API de Conversões', 'Eventos, deduplicação e integração com CAPI para uma base de mensuração consistente, respeitando escolhas de privacidade.'],
    ['Aprendizado comercial', 'Cruzar leads, oportunidades e vendas para orientar otimização além de cliques ou cadastros baratos.'],
  ], fit: 'E-commerce, geração de demanda e operações de leads com CRM.', tools: 'Meta Ads · Meta CAPI · GA4 · CRM · Catálogos', faq: [
    ['Vocês avaliam os criativos existentes?', 'Sim. A análise considera mensagem, oferta, formato, etapa do funil e desempenho. A produção de novas peças é definida no escopo da operação.'],
    ['Como avaliar se um lead é bom?', 'Com critérios compartilhados entre marketing e vendas e acompanhamento no CRM. CPL isolado não descreve aderência, intenção ou avanço comercial.'],
  ] },
  { slug: 'analytics-tracking', name: 'Analytics & Tracking', title: 'Consultoria de Analytics, Tracking e atribuição', heading: 'Antes de decidir melhor, é preciso medir melhor.', intro: 'Uma estrutura de mensuração que conecta mídia, comportamento e resultado comercial. Tracking organizado, eventos verificáveis e dados que a equipe consegue interpretar.', question: 'Você confia nos dados que orientam o orçamento?', answer: 'Eventos duplicados, conversões incompletas e UTMs inconsistentes distorcem a leitura da operação. O trabalho começa no plano de mensuração e termina na validação do dado utilizado na decisão.', items: [
    ['Plano de mensuração', 'Definição de eventos, conversões, nomenclaturas e UTMs a partir da jornada e dos objetivos do negócio.'],
    ['Implementação e validação', 'GA4, Google Tag Manager e conversion tracking com verificação de disparos, parâmetros e duplicidades.'],
    ['Server-side e CAPI', 'Arquitetura e integrações de eventos conforme a necessidade, a infraestrutura e os requisitos de consentimento.'],
    ['Atribuição e leitura', 'Dashboards, fontes de verdade e análise das diferenças entre plataformas, analytics e CRM.'],
  ], fit: 'Operações que precisam corrigir mensuração ou conectar mídia a vendas.', tools: 'GA4 · GTM · Meta CAPI · Looker Studio · UTMs · APIs', faq: [
    ['Server-side resolve todas as perdas de mensuração?', 'Não. Pode melhorar controle e qualidade em cenários específicos, mas depende da arquitetura, da implementação e do consentimento. Não elimina todas as limitações de atribuição.'],
    ['O projeto inclui dashboards?', 'Dashboards podem integrar o escopo. As métricas e fontes são definidas antes da visualização para evitar relatórios que apenas acumulam indicadores.'],
  ] },
  { slug: 'automacao', name: 'Marketing Automation', title: 'Automação de marketing com n8n, CRM e APIs', heading: 'O lead chegou. Sua operação sabe o que fazer depois?', intro: 'Integrações e automações para manter a informação em movimento: da origem do contato à distribuição, ao atendimento e ao retorno dos dados comerciais.', question: 'Onde a informação se perde entre marketing e vendas?', answer: 'Cada cópia manual, planilha paralela ou passagem sem contexto cria uma oportunidade de erro. A automação começa no processo e nas regras de negócio, antes de começar na ferramenta.', items: [
    ['Mapeamento do processo', 'Entradas, responsáveis, regras de qualificação, exceções e etapas que exigem decisão humana.'],
    ['Integrações e distribuição', 'n8n, webhooks e APIs conectando formulários, CRM, planilhas e canais de atendimento. Lead routing com critérios claros.'],
    ['Atendimento e follow-up', 'Fluxos de WhatsApp, notificações e acompanhamento conforme permissões de contato e etapas comerciais.'],
    ['Monitoramento e recuperação', 'Registro de falhas, tratamento de duplicidades e caminhos de reprocessamento para a equipe operar com visibilidade.'],
  ], fit: 'Equipes com volume de leads, múltiplas fontes ou tarefas comerciais repetitivas.', tools: 'n8n · Make · Zapier · Webhooks · APIs · CRM · WhatsApp Business Platform', faq: [
    ['É possível usar o CRM atual?', 'A avaliação considera APIs, webhooks e possibilidades de integração do sistema existente. A troca de CRM não é um requisito automático.'],
    ['A automação substitui o atendimento humano?', 'O objetivo é reduzir repetição e levar contexto à equipe. Negociação, exceções e decisões sensíveis podem continuar com pessoas, conforme as regras definidas.'],
  ] },
  { slug: 'ai', name: 'AI for Growth', title: 'Inteligência artificial aplicada ao marketing', heading: 'IA faz diferença quando participa de um processo real.', intro: 'Agentes e análises que usam o contexto da operação para apoiar marketing, qualificação e atendimento. Integrações com dados e regras claras para orientar o que a IA pode fazer.', question: 'Qual decisão ou tarefa a IA precisa melhorar?', answer: 'Começar por um problema concreto permite avaliar utilidade, custo e risco. O projeto define fontes, limites e supervisão antes de conectar um modelo ao processo comercial.', items: [
    ['Análise de campanhas', 'Organização de sinais, identificação de variações e apoio à interpretação de dados de mídia. Recomendações revisadas no contexto do negócio.'],
    ['Qualificação e enriquecimento', 'Pré-atendimento, organização de informações e classificação de leads conforme critérios definidos pela operação.'],
    ['Bases de conhecimento com RAG', 'Respostas apoiadas em documentos e informações autorizadas. Fontes, atualização e tratamento de incerteza fazem parte do desenho.'],
    ['Agentes integrados', 'LLMs, CRM, n8n e APIs com ações delimitadas, histórico e passagem para atendimento humano.'],
  ], fit: 'Operações com tarefas repetitivas, dados dispersos e contexto que precisa chegar à equipe.', tools: 'LLMs · RAG · OpenAI · Claude · Gemini · OpenRouter · Supabase · n8n', faq: [
    ['O agente pode responder qualquer pergunta do cliente?', 'O escopo precisa ser delimitado. Quando faltam fontes ou segurança para responder, o fluxo deve reconhecer a limitação e encaminhar para uma pessoa.'],
    ['Como começar sem automatizar a operação inteira?', 'Escolhendo um processo limitado, definindo critérios de qualidade e avaliando os resultados antes de ampliar o uso.'],
  ] },
];

services.push(
  {slug:'trafego-pago',name:'Tráfego pago',title:'Gestão de tráfego pago',heading:'Gestão de tráfego pago em Presidente Prudente.',intro:'Planejamento e gestão de anúncios para empresas que precisam gerar contatos, pedidos de orçamento ou vendas. A escolha dos canais começa no público, na oferta e na capacidade de atendimento.',question:'Onde estão as pessoas que podem comprar da sua empresa?',answer:'Uma loja, um prestador de serviços e uma empresa que vende para outras empresas não precisam da mesma campanha. Avaliamos como o cliente descobre a oferta, o que o ajuda a decidir e para onde o anúncio deve levar essa pessoa.',items:[
    ['Objetivo e investimento','Definição de prioridades, área de atendimento e orçamento. O investimento em mídia é separado do trabalho de consultoria e gestão.'],
    ['Escolha dos canais','Google Ads para buscas com intenção; Instagram, Facebook e TikTok para apresentar ofertas e trabalhar o interesse. A combinação depende do público e da disponibilidade de criativos.'],
    ['Do anúncio ao contato','Revisão da mensagem, da página de destino e do caminho para o WhatsApp ou formulário. O visitante precisa entender a oferta e conseguir dar o próximo passo.'],
    ['Acompanhamento e decisões','Leitura de contatos, custo, qualidade e resultados comerciais. Testes e ajustes são definidos com base no que a operação consegue medir.'],
  ],fit:'Comércio, serviços, empresas B2B e e-commerce de Presidente Prudente e dos municípios em até 200 km.',tools:'Google Ads · Meta Ads · TikTok Ads · GA4 · CRM',faq:[
    ['Quanto custa contratar a gestão de tráfego pago?','O valor depende dos canais, da complexidade da conta e do escopo de mensuração e acompanhamento. A proposta separa o serviço de gestão da verba paga diretamente às plataformas.'],
    ['É melhor começar no Google ou no Instagram?','O Google pode ajudar quando já existe busca pelo produto ou serviço. Instagram e Facebook podem apresentar a oferta a públicos relevantes. A recomendação depende da demanda, do material criativo e do objetivo da empresa.'],
    ['Vocês atendem empresas de outras cidades da região?','Sim. O foco regional abrange municípios em um raio de até 200 km de Presidente Prudente. O planejamento considera a área onde sua empresa consegue atender seus próprios clientes.'],
    ['Em quanto tempo os anúncios dão resultado?','Não existe prazo garantido. Configuração, aprovação, volume de procura, oferta, investimento e atendimento influenciam o desempenho. O acompanhamento busca entender os sinais antes de ampliar o orçamento.'],
  ]},
  {slug:'seo-local',name:'SEO local',title:'SEO local e presença no Google',heading:'Seu próximo cliente pode estar procurando por você.',intro:'Organize a presença digital da sua empresa para as buscas de quem precisa dos seus produtos ou serviços na região.',question:'Sua empresa aparece com informações claras para quem procura?',answer:'Uma presença local consistente conecta o site, as páginas de serviços e o Perfil da Empresa no Google. O trabalho começa avaliando o que existe e onde o visitante encontra dificuldade para conhecer ou contatar a empresa.',items:[
    ['Diagnóstico da presença local','Leitura do site, das buscas relacionadas ao negócio e das informações que ajudam o cliente a encontrar e entender a empresa.'],
    ['Perfil da Empresa no Google','Revisão de categorias, descrição, informações de contato e conteúdos do perfil, conforme a elegibilidade e as características do negócio.'],
    ['Páginas e conteúdo','Organização de páginas para explicar serviços, produtos e área de atendimento, com títulos e conteúdo úteis para quem pesquisa.'],
    ['Acompanhamento das buscas','Search Console e analytics para acompanhar a descoberta do site e os contatos gerados ao longo do trabalho.'],
  ],fit:'Comércios e prestadores de serviços que querem melhorar a presença nas buscas locais.',tools:'Google Search · Perfil da Empresa no Google · Search Console · Google Analytics',faq:[
    ['SEO local é a mesma coisa que anunciar no Google?','Não. SEO trabalha a presença nos resultados orgânicos; Google Ads envolve anúncios pagos. As duas frentes podem fazer parte da estratégia, de acordo com o objetivo e o orçamento.'],
    ['É possível garantir a primeira posição?','Não. A posição depende de vários fatores e da concorrência. O trabalho busca melhorar a qualidade e a relevância da presença digital, com acompanhamento do que muda.'],
  ]},
  {slug:'tiktok-ads',name:'TikTok Ads',title:'Campanhas de TikTok Ads',heading:'Sua empresa também pode entrar na conversa.',intro:'Planejamento de campanhas em vídeo para apresentar sua marca, testar mensagens e despertar interesse pelo que a empresa oferece.',question:'O TikTok faz sentido para o seu público?',answer:'Antes de escolher o canal, é preciso entender quem compra, qual mensagem tem potencial e que materiais a empresa consegue produzir. A decisão considera a oferta, o orçamento e os objetivos do negócio.',items:[
    ['Público e objetivo','Avaliação da aderência do canal à empresa e definição do objetivo de campanha e da área de atendimento, dentro das opções disponíveis.'],
    ['Mensagens e criativos','Planejamento de testes com diferentes abordagens em vídeo. A produção de novas peças é definida no escopo do projeto.'],
    ['Campanhas e mensuração','Estrutura das campanhas, destino dos anúncios e eventos para acompanhar os contatos ou compras que interessam ao negócio.'],
    ['Aprendizado e ajustes','Análise dos sinais de interesse e dos resultados para decidir o que continuar, ajustar ou interromper.'],
  ],fit:'Empresas com público e oferta compatíveis com campanhas em vídeo.',tools:'TikTok Ads · Vídeo · Landing pages · Analytics',faq:[
    ['Preciso aparecer nos vídeos?','Não obrigatoriamente. O formato depende da oferta e da comunicação da marca. Produtos, demonstrações e pessoas da equipe podem ser avaliados no planejamento.'],
    ['Minha empresa precisa investir em todos os canais?','Não. A escolha considera o público, a capacidade de produzir conteúdo e o orçamento. É possível priorizar os canais mais adequados antes de ampliar a presença.'],
  ]},
);

export const method = [
  ['Diagnosticar', 'Dados, negócio, tracking, mídia e funil. Entender o que limita a operação.', 'Diagnose'],
  ['Estruturar', 'Arquitetura de campanhas, eventos e dados alinhada ao objetivo comercial.', 'Structure'],
  ['Experimentar', 'Criativos, públicos, ofertas e páginas. Uma hipótese clara para cada teste.', 'Experiment'],
  ['Otimizar', 'CPA, CPL, ROAS, receita e qualidade. Decidir com o contexto do negócio.', 'Optimize'],
  ['Automatizar', 'CRM, APIs, n8n e IA conectados aos processos que precisam de continuidade.', 'Automate'],
  ['Escalar', 'Expandir o que demonstra resultado, respeitando margem e capacidade operacional.', 'Scale'],
];

export const experience = [
  ['Advertising Beast / AMZingPPC', 'Paid Media Specialist', 'Estados Unidos · atuação remota', 'Portfólio mensal combinado de Google Ads e Meta Ads acima de US$ 1,2 milhão.'],
  ['Alfafam Management Consulting', 'Search Engine Marketing Specialist', 'Estados Unidos · atuação remota', 'Arquitetura e otimização de campanhas Google Ads para aquisição e receita.'],
  ['Crefaz', 'Search Engine Marketing Specialist', 'Serviços financeiros · geração de leads', 'Mais de 100 mil leads qualificados por mês em uma operação com portfólio mensal de mídia de até US$ 500 mil.'],
  ['Otimizza Digital', 'Digital Marketing Specialist — SEM', 'Mídia e liderança de operação', 'Budgets mensais de até US$ 600 mil e liderança de equipes com até 12 profissionais.'],
];

export const audiences = [
  ['Comércio local', 'Sua loja na rota de novos clientes.', 'Campanhas para divulgar produtos, apresentar ofertas e estimular o contato de quem compra em Presidente Prudente e região.'],
  ['Prestadores de serviços', 'Mais clareza entre a busca e o orçamento.', 'Anúncios, páginas de serviços e organização dos contatos para quem depende de pedidos de orçamento e agendamentos.'],
  ['Empresas e indústrias', 'Conexões com quem decide a compra.', 'Estratégia para apresentar soluções, captar oportunidades comerciais e acompanhar negociações com ciclos mais longos.'],
  ['Lojas virtuais', 'Da região para novos mercados.', 'Aquisição para e-commerce com atenção ao catálogo, à experiência de compra e à margem de cada venda.'],
];

// Páginas de conversão por segmento. O conteúdo descreve frentes de trabalho,
// não resultados garantidos nem alegações sobre serviços de saúde.
export const segments = [
  {
    slug: 'clinicas-medicas',
    name: 'Clínicas médicas',
    image: '/assets/illustrations/segment-medical-clinic.png',
    imageAlt: 'Profissionais fictícios conectando localização, agendamento e organização de contatos de uma clínica médica.',
    title: 'Marketing para clínicas médicas em Presidente Prudente',
    description: 'Marketing digital para clínicas médicas em Presidente Prudente e região: presença no Google, campanhas, mensuração e organização dos contatos.',
    heading: 'Mais clareza entre<br>a busca e o agendamento.',
    intro: 'Estratégia digital para clínicas médicas que querem ser encontradas por pacientes da região e conduzir cada contato com mais contexto até o atendimento.',
    problem: 'Quando a pessoa procura uma especialidade, sua clínica precisa explicar o que oferece, onde atende e como iniciar uma conversa — sem depender de uma experiência confusa entre anúncio, site e WhatsApp.',
    promise: 'Uma presença digital organizada para apoiar a descoberta da clínica, os pedidos de informação e a rotina da recepção.',
    steps: [
      ['Ser encontrada', 'Páginas de especialidades, presença local e campanhas de busca alinhadas à região e aos serviços que a clínica efetivamente oferece.'],
      ['Facilitar o primeiro contato', 'Páginas objetivas e caminhos claros para WhatsApp, telefone ou formulário, respeitando a forma como a equipe atende.'],
      ['Organizar a passagem para a equipe', 'Origem do contato, interesse e informações essenciais podem chegar à recepção com mais contexto.'],
      ['Aprender com a operação', 'Acompanhar contatos e agendamentos quando a infraestrutura permitir, para orientar os próximos ajustes com responsabilidade.'],
    ],
    priorities: ['Google Ads para buscas com intenção', 'SEO local e páginas de especialidades', 'Landing pages e experiência de contato', 'Tracking de contatos e integração com atendimento'],
    note: 'A comunicação é definida com atenção às regras aplicáveis à profissão e à clínica. O trabalho não substitui validação jurídica, regulatória ou do conselho profissional.',
    faq: [
      ['A estratégia serve para clínicas com mais de uma especialidade?', 'Sim. A estrutura pode separar especialidades, regiões atendidas e caminhos de contato, de acordo com a agenda e a capacidade operacional da clínica.'],
      ['É possível saber de onde vêm os agendamentos?', 'É possível estruturar a mensuração de contatos e conectar informações ao atendimento quando os sistemas e o processo da clínica permitirem. Nem toda jornada poderá ser atribuída integralmente.'],
    ],
  },
  {
    slug: 'clinicas-odontologicas',
    name: 'Clínicas odontológicas',
    image: '/assets/illustrations/segment-dental-clinic.png',
    imageAlt: 'Profissionais fictícios conectando contato, agendamento e acompanhamento de uma clínica odontológica.',
    title: 'Marketing para clínicas odontológicas em Presidente Prudente',
    description: 'Marketing digital para clínicas odontológicas em Presidente Prudente e região: Google, redes sociais, páginas de tratamentos e contatos organizados.',
    heading: 'Sua clínica na hora<br>em que o paciente procura.',
    intro: 'Campanhas, presença local e páginas de serviço para clínicas odontológicas que precisam transformar interesse em conversas bem encaminhadas para a equipe.',
    problem: 'A decisão de iniciar um tratamento pode começar em uma busca, uma indicação ou um anúncio. A presença da clínica precisa dar segurança, explicar o próximo passo e não perder o contato no caminho.',
    promise: 'Uma jornada digital conectada à realidade da sua clínica: tratamentos, localização, capacidade de atendimento e conversa inicial.',
    steps: [
      ['Aparecer para a demanda certa', 'Google Ads, presença no mapa e conteúdo de serviços organizados conforme os tratamentos e a área atendida.'],
      ['Explicar com objetividade', 'Páginas que apresentam o serviço e orientam o próximo passo, sem substituir avaliação profissional ou criar expectativas irreais.'],
      ['Encaminhar o interesse', 'WhatsApp, formulário e distribuição de contatos pensados para que a equipe responda com contexto e agilidade.'],
      ['Ajustar com dados', 'Leitura de buscas, contatos e sinais do atendimento para decidir o que merece continuidade, teste ou correção.'],
    ],
    priorities: ['Google Ads e presença no mapa', 'Meta Ads para demanda e relacionamento', 'Páginas de tratamentos e conversão', 'Automação e organização de contatos'],
    note: 'Toda comunicação é planejada com atenção às regras aplicáveis à publicidade odontológica. A aprovação final de peças e informações continua com a clínica e seus responsáveis.',
    faq: [
      ['Podemos divulgar todos os tratamentos da clínica?', 'A estratégia parte dos serviços que a clínica oferece e deve respeitar as regras aplicáveis à comunicação profissional. Antes de publicar, definimos o que precisa de validação da equipe responsável.'],
      ['O WhatsApp pode receber os contatos dos anúncios?', 'Sim, quando esse for o fluxo escolhido. Também é possível organizar origem, interesse e distribuição do contato para apoiar o atendimento da equipe.'],
    ],
  },
  {
    slug: 'profissionais-liberais',
    name: 'Profissionais liberais',
    image: '/assets/illustrations/segment-independent-professionals.png',
    imageAlt: 'Profissional fictício conectando descoberta, perfil e primeiro contato de um serviço especializado.',
    title: 'Marketing para profissionais liberais em Presidente Prudente',
    description: 'Marketing digital para profissionais liberais em Presidente Prudente e região: presença no Google, posicionamento, campanhas e geração de contatos.',
    heading: 'Sua experiência precisa<br>ser fácil de encontrar.',
    intro: 'Uma estratégia digital para profissionais que vendem conhecimento, confiança e atendimento próximo — da primeira busca até o pedido de informação.',
    problem: 'Quem contrata um profissional liberal costuma comparar opções antes de entrar em contato. Sua presença precisa mostrar com clareza como você ajuda, para quem trabalha e qual é o próximo passo.',
    promise: 'Posicionamento, busca local e caminhos de contato que ajudam a transformar atenção em conversas mais aderentes ao seu trabalho.',
    steps: [
      ['Definir a mensagem', 'Organizar serviços, diferenciais reais, área de atuação e perguntas que o potencial cliente faz antes de solicitar uma conversa.'],
      ['Ganhar encontrabilidade', 'Presença no Google, páginas de serviço e campanhas de busca para alcançar pessoas que já demonstram interesse.'],
      ['Conduzir a conversa inicial', 'Página, formulário ou WhatsApp com um caminho simples para explicar a demanda e permitir uma resposta mais preparada.'],
      ['Avaliar a qualidade dos contatos', 'Registrar origem e avanço das oportunidades para não decidir apenas por cliques ou volume de mensagens.'],
    ],
    priorities: ['Posicionamento e páginas de serviço', 'Google Ads e SEO local', 'Conteúdo que responde dúvidas reais', 'Tracking e organização das oportunidades'],
    note: 'A estratégia respeita a natureza do serviço e a comunicação permitida para cada profissão. Não são feitas promessas de resultado ao potencial cliente.',
    faq: [
      ['Funciona para quem atende sozinho?', 'Sim. O plano considera sua agenda, área de atendimento, capacidade de resposta e o tipo de demanda que você quer receber antes de definir canais ou investimento.'],
      ['Preciso estar em todas as redes sociais?', 'Não. A escolha de canais depende de onde o público busca informação, de sua disponibilidade e do que ajuda a construir uma presença consistente.'],
    ],
  },
  {
    slug: 'pequenas-empresas',
    name: 'Pequenas empresas',
    image: '/assets/illustrations/segment-small-business.png',
    imageAlt: 'Empresários fictícios conectando presença local, mensagens e clientes de uma pequena empresa.',
    title: 'Marketing para pequenas empresas em Presidente Prudente',
    description: 'Marketing digital para pequenas empresas em Presidente Prudente e região: Google Ads, redes sociais, SEO local, WhatsApp e organização de contatos.',
    heading: 'Marketing que conversa<br>com a rotina do seu negócio.',
    intro: 'Uma estrutura de divulgação para pequenas empresas que querem ser encontradas, receber mais oportunidades e acompanhar o que acontece depois do contato.',
    problem: 'O investimento pode se perder quando anúncio, site, WhatsApp e atendimento funcionam como partes separadas. O objetivo é criar um caminho simples para o cliente e viável para a equipe.',
    promise: 'Canais escolhidos pelo seu objetivo, pela região que você atende e pelo que sua empresa consegue executar todos os dias.',
    steps: [
      ['Entender a oportunidade', 'Mapear oferta, público, região, concorrência percebida e capacidade de atendimento antes de escolher as prioridades.'],
      ['Atrair o público certo', 'Google Ads para intenção de busca; redes sociais para apresentar a oferta. A combinação depende do negócio e do orçamento.'],
      ['Converter sem fricção', 'Páginas e mensagens que explicam o que a empresa oferece e facilitam pedido de orçamento, compra ou conversa.'],
      ['Dar continuidade ao contato', 'Organização de leads, atendimento e informações de resultado para que marketing e operação tomem decisões juntos.'],
    ],
    priorities: ['Google Ads, Meta Ads e TikTok Ads', 'SEO local e Perfil da Empresa no Google', 'Páginas de serviço e landing pages', 'WhatsApp, CRM e automação'],
    note: 'O planejamento começa pelo cenário da empresa. Investimento em mídia, produção de criativos e ferramentas são definidos de forma transparente no escopo.',
    faq: [
      ['Qual canal é melhor para uma pequena empresa?', 'Depende de como as pessoas descobrem sua oferta. O Google pode capturar buscas existentes; redes sociais podem ampliar descoberta. A recomendação considera objetivo, público e verba disponível.'],
      ['É preciso ter um site novo para anunciar?', 'Nem sempre. Avaliamos se o site ou a página atual consegue explicar a oferta e receber contatos. Quando necessário, a melhoria da experiência de conversão entra no plano.'],
    ],
  },
];

export const categories = ['Paid Media', 'Google Ads', 'Meta Ads', 'AI', 'Automation', 'Analytics', 'E-commerce', 'Growth'];
