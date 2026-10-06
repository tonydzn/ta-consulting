// Conteúdo próprio de cada página serviço × segmento.
// Regras: descrever frentes de trabalho e decisões, sem prometer resultados,
// sem inventar clientes, números ou alegações sobre serviços de saúde.
// "example" descreve um cenário hipotético e é exibido como tal.

const cm = 'clinicas-medicas';
const co = 'clinicas-odontologicas';
const pl = 'profissionais-liberais';
const pe = 'pequenas-empresas';

export const audienceServices = {
  'google-ads': {
    [cm]: {
      intro: 'Campanhas de pesquisa para que a clínica apareça quando alguém procura uma especialidade, um exame ou uma consulta em Presidente Prudente e região.',
      situation: ['Quem procura uma especialidade já tem uma necessidade.', 'Buscas como “cardiologista em Presidente Prudente” ou “clínica de dermatologia perto de mim” mostram intenção clara. O desafio é separar cada especialidade, mostrar a localização certa e levar a pessoa a um contato que a recepção consiga atender, sem pagar por buscas de quem procura emprego, conteúdo acadêmico ou atendimento que a clínica não oferece.'],
      actions: [
        ['Campanhas por especialidade', 'Grupos de anúncios separados por especialidade e tipo de atendimento, com palavras-chave e páginas de destino coerentes com o que a clínica realmente oferece.'],
        ['Filtro de buscas irrelevantes', 'Lista de palavras negativas para reduzir cliques de quem procura vagas, cursos, receitas ou serviços de outras áreas da saúde.'],
        ['Agenda e área de atendimento', 'Horários dos anúncios e raio geográfico ajustados ao funcionamento da recepção e às cidades de onde os pacientes efetivamente vêm.'],
      ],
      example: 'Uma clínica com três especialidades percebe que quase todo o orçamento vai para a mais procurada, enquanto outra, com agenda livre, quase não aparece. A estrutura passa a ter campanhas separadas, com orçamento e acompanhamento próprios para cada especialidade.',
      faq: [
        ['A clínica pode anunciar no Google sem ferir as regras médicas?', 'Sim. Os anúncios são informativos e descrevem especialidades, localização e forma de contato. Promessas de cura, antes e depois ou garantias ficam de fora, e a validação final das peças continua com o responsável técnico da clínica.'],
        ['Dá para anunciar só uma especialidade?', 'Sim. Começar pela especialidade com mais capacidade de agenda costuma ser uma forma organizada de testar o canal antes de ampliar.'],
      ],
    },
    [co]: {
      intro: 'Anúncios no Google para clínicas odontológicas aparecerem nas buscas por tratamentos e por dentista na região, com cada tratamento levando à página certa.',
      situation: ['A busca por dentista mistura urgência e planejamento.', 'Uma dor de dente gera uma busca imediata; implante, ortodontia ou clareamento costumam ser pesquisados com calma e comparação. Tratar tudo na mesma campanha mistura mensagens, orçamento e páginas. Separar essas intenções ajuda a falar com cada paciente do jeito certo.'],
      actions: [
        ['Urgência separada de tratamentos planejados', 'Campanhas distintas para buscas de atendimento imediato e para tratamentos que exigem avaliação, com horários e mensagens adequados a cada caso.'],
        ['Páginas por tratamento', 'Cada grupo de anúncios leva a uma página que explica o tratamento e o próximo passo, em vez de enviar todos para a página inicial.'],
        ['Contatos rastreados até o WhatsApp', 'Cliques no WhatsApp e no telefone registrados como conversões, para saber quais buscas geram conversas e não apenas visitas.'],
      ],
      example: 'Uma clínica anuncia “dentista em Presidente Prudente” e recebe muitos cliques, mas poucas mensagens sobre o tratamento que mais interessa à agenda. Com campanhas por tratamento e mensuração dos contatos, fica visível quais buscas valem o investimento.',
      faq: [
        ['Posso anunciar preço de tratamento no Google?', 'A comunicação respeita as regras aplicáveis à publicidade odontológica. Antes de publicar, definimos com a clínica o que pode ser divulgado e o que precisa de validação do responsável técnico.'],
        ['Vale anunciar atendimento de urgência?', 'Se a clínica consegue atender nesses horários, sim. Caso contrário, é melhor não anunciar, para não pagar por contatos que a equipe não consegue receber.'],
      ],
    },
    [pl]: {
      intro: 'Google Ads para advogados, contadores, arquitetos, psicólogos e outros profissionais aparecerem quando alguém procura exatamente o serviço que oferecem.',
      situation: ['Quem contrata um profissional costuma pesquisar antes de ligar.', 'A busca por “advogado trabalhista em Presidente Prudente” ou “contador para MEI” traz pessoas com uma necessidade definida. Com verba enxuta, cada clique conta: a campanha precisa focar nas áreas de atuação mais rentáveis e evitar buscas de quem procura conteúdo gratuito.'],
      actions: [
        ['Foco nas áreas de atuação prioritárias', 'Palavras-chave concentradas nos serviços que você quer vender mais, em vez de termos genéricos e caros da profissão.'],
        ['Verba pensada para quem atende sozinho', 'Orçamento diário e horários ajustados à sua capacidade de responder, para não gerar mais contatos do que consegue atender bem.'],
        ['Página que explica como você trabalha', 'Destino com áreas de atuação, forma de atendimento e um caminho simples para o primeiro contato.'],
      ],
      example: 'Um escritório anuncia o nome da profissão e recebe contatos de assuntos que não atende. Ao separar campanhas por área de atuação e negativar buscas fora do escopo, as conversas passam a chegar mais alinhadas ao serviço oferecido.',
      faq: [
        ['Minha profissão permite anunciar no Google?', 'Muitas permitem, com regras próprias. Os anúncios são informativos e o conteúdo é ajustado às normas do seu conselho ou ordem profissional antes da publicação.'],
        ['Quanto preciso investir para começar?', 'Depende da concorrência das buscas e da região. A recomendação parte de um teste com verba controlada, avaliado pela qualidade dos contatos.'],
      ],
    },
    [pe]: {
      intro: 'Google Ads para pequenas empresas de Presidente Prudente e região serem encontradas por quem já procura o produto ou serviço que elas vendem.',
      situation: ['Verba pequena não pode competir em tudo.', 'Pequenas empresas disputam as mesmas buscas que redes maiores. A saída é escolher bem: termos com intenção de compra, área geográfica real de atendimento e anúncios que mostrem por que vale escolher a sua empresa.'],
      actions: [
        ['Buscas com intenção de compra', 'Palavras-chave ligadas a orçamento, compra, entrega ou atendimento local, deixando de fora termos amplos que só consomem verba.'],
        ['Perfil da Empresa conectado', 'Anúncios com localização, telefone e horário quando fizer sentido, aproveitando a presença da empresa no Google Maps.'],
        ['Acompanhamento de pedidos e mensagens', 'Conversões configuradas para orçamento, ligação, WhatsApp ou compra, para que a decisão se baseie em contatos e não só em cliques.'],
      ],
      example: 'Uma loja de materiais anuncia termos genéricos e paga por cliques de outras cidades. Com raio de entrega definido e palavras-chave por linha de produto, o investimento passa a se concentrar onde a empresa consegue vender.',
      faq: [
        ['Google Ads funciona para empresa pequena?', 'Funciona quando existe busca pelo que a empresa oferece e a campanha é estruturada para essa demanda. Antes de investir, avaliamos se há volume de buscas na região.'],
        ['Preciso de site para anunciar no Google?', 'Ajuda muito. Em alguns casos é possível começar com uma página simples ou ligação direta, mas uma página clara costuma melhorar a qualidade dos contatos.'],
      ],
    },
  },

  'meta-ads': {
    [cm]: {
      intro: 'Anúncios no Instagram e Facebook para clínicas médicas apresentarem especialidades, equipe e estrutura a pessoas da região, de forma informativa.',
      situation: ['No Instagram, a pessoa nem sempre está procurando médico.', 'Diferente da busca no Google, a rede social alcança quem ainda não pensou em agendar. Por isso, a comunicação precisa informar, gerar confiança e lembrar a clínica no momento certo — sempre dentro das regras da publicidade médica.'],
      actions: [
        ['Conteúdo informativo como base', 'Criativos que apresentam especialidades, estrutura e orientações gerais, sem promessas de resultado nem imagens de antes e depois.'],
        ['Públicos por cidade e interesse', 'Segmentação pela área de atendimento e por perfis compatíveis com cada especialidade, respeitando as restrições da plataforma para temas de saúde.'],
        ['Mensagens que chegam organizadas', 'Campanhas de mensagem com perguntas iniciais simples, para que a recepção saiba qual especialidade a pessoa procura.'],
      ],
      example: 'Uma clínica impulsiona publicações aleatórias e não sabe o que gera agendamentos. A estrutura passa a ter campanhas por especialidade, criativos aprovados pelo responsável técnico e acompanhamento das conversas iniciadas pelos anúncios.',
      faq: [
        ['Posso mostrar pacientes nos anúncios?', 'A exposição de pacientes tem restrições nas normas médicas. Preferimos peças que apresentam a equipe, a estrutura e informações gerais, sempre validadas pela clínica.'],
        ['Instagram ou Google: por onde começar?', 'O Google captura quem já procura; o Instagram amplia a lembrança da clínica. Para quem está começando, a recomendação considera a especialidade e a agenda disponível.'],
      ],
    },
    [co]: {
      intro: 'Meta Ads para clínicas odontológicas atraírem pacientes da região pelo Instagram e Facebook, com campanhas de mensagem ligadas ao WhatsApp da recepção.',
      situation: ['Tratamentos odontológicos são decisões visuais e de confiança.', 'Ortodontia, implantes e estética costumam ser considerados por semanas. O Instagram ajuda a manter a clínica presente durante essa decisão, desde que a comunicação respeite as regras do conselho e a recepção esteja pronta para responder.'],
      actions: [
        ['Campanhas por tratamento', 'Conjuntos de anúncios separados para os tratamentos prioritários da clínica, com mensagens e públicos próprios.'],
        ['Criativos dentro das regras', 'Vídeos e imagens da estrutura, da equipe e explicações sobre tratamentos, planejados para aprovação do responsável técnico.'],
        ['Fluxo até a agenda', 'Mensagens automáticas de boas-vindas e perguntas iniciais no WhatsApp, para que a equipe responda com contexto.'],
      ],
      example: 'Uma clínica recebe muitas mensagens perguntando apenas o preço e poucas avançam. Com perguntas iniciais e conteúdo explicando a avaliação, a recepção passa a conduzir melhor as conversas até o agendamento.',
      faq: [
        ['Posso postar antes e depois nos anúncios?', 'As regras da publicidade odontológica limitam esse tipo de conteúdo. Definimos com a clínica o formato permitido antes de qualquer veiculação.'],
        ['Quantas mensagens a recepção precisa responder?', 'O volume é ajustado à capacidade da equipe. Não adianta gerar mais conversas do que a recepção consegue atender com qualidade.'],
      ],
    },
    [pl]: {
      intro: 'Anúncios no Instagram e Facebook para profissionais liberais construírem autoridade local e gerarem conversas com quem precisa do seu serviço.',
      situation: ['Antes de contratar, as pessoas querem conhecer o profissional.', 'Para quem vende conhecimento, a rede social é uma vitrine de confiança: mostrar como você trabalha, para quem atende e quais dúvidas resolve ajuda a pessoa a entrar em contato já sabendo o que esperar.'],
      actions: [
        ['Conteúdo que demonstra conhecimento', 'Vídeos curtos e publicações que respondem dúvidas reais do seu público, usados como anúncios para pessoas da região.'],
        ['Remarketing para quem já conhece você', 'Anúncios para quem visitou o perfil, assistiu a vídeos ou acessou o site, reforçando o convite para uma conversa.'],
        ['Contato simples e qualificado', 'Formulário ou WhatsApp com perguntas iniciais sobre a demanda, para separar o que você atende do que não atende.'],
      ],
      example: 'Uma psicóloga publica com frequência, mas os conteúdos alcançam poucas pessoas da cidade. Com anúncios locais dos vídeos com mais retenção e remarketing para quem assistiu, o perfil passa a ser visto por quem pode agendar.',
      faq: [
        ['Preciso gravar vídeos para anunciar?', 'Vídeos costumam funcionar bem, mas não são obrigatórios. Imagens e textos bem construídos também podem ser usados, de acordo com o seu estilo.'],
        ['Anúncio no Instagram serve para profissional que atende sozinho?', 'Sim, com volume controlado. A campanha é dimensionada para a sua agenda e para o tipo de cliente que você quer atender.'],
      ],
    },
    [pe]: {
      intro: 'Meta Ads para pequenas empresas da região venderem mais pelo Instagram e Facebook, com ofertas claras, criativos testados e mensagens que chegam organizadas.',
      situation: ['Impulsionar publicação não é o mesmo que ter uma campanha.', 'O botão de impulsionar é simples, mas limita objetivo, público e mensuração. Uma campanha estruturada define o que a empresa quer — mensagens, visitas à loja ou vendas online — e testa ofertas e criativos com critério.'],
      actions: [
        ['Objetivo certo para cada momento', 'Campanhas de mensagem, tráfego ou vendas escolhidas conforme o que a empresa precisa, e não pelo que é mais fácil configurar.'],
        ['Teste de ofertas e criativos', 'Variações de imagem, vídeo e texto avaliadas em ciclos curtos, para manter o que funciona e substituir o que cansa.'],
        ['Catálogo e WhatsApp integrados', 'Produtos e atendimento conectados quando fizer sentido, para que o cliente veja a oferta e fale com a empresa no mesmo caminho.'],
      ],
      example: 'Uma loja impulsiona posts toda semana sem saber o que gera vendas. Com uma campanha de mensagens, testes de duas ofertas por vez e acompanhamento das conversas, fica claro em qual produto investir.',
      faq: [
        ['Qual o investimento mínimo no Instagram?', 'A plataforma aceita verbas pequenas, mas o mínimo útil depende do objetivo e do tamanho do público. Começamos com um teste dimensionado para gerar aprendizado.'],
        ['Quem produz as artes dos anúncios?', 'A produção é definida no escopo. Podemos orientar a gravação feita pela própria equipe ou trabalhar com peças que a empresa já tem.'],
      ],
    },
  },

  'analytics-tracking': {
    [cm]: {
      intro: 'Mensuração para clínicas médicas saberem quais canais trazem pedidos de agendamento, sem expor dados de saúde dos pacientes.',
      situation: ['Sem mensuração, a clínica decide pelo volume de mensagens.', 'Saber que um anúncio gerou cliques não basta. A clínica precisa entender quais canais e especialidades geram contatos que viram consultas — e fazer isso tratando dados com o cuidado que a área de saúde exige.'],
      actions: [
        ['Conversões sem dados sensíveis', 'Eventos de contato, ligação e WhatsApp configurados no GA4 e nas plataformas sem enviar nomes, condições de saúde ou informações clínicas.'],
        ['Origem do contato para a recepção', 'Identificação do canal de origem de cada conversa, para que a equipe registre de onde o paciente veio.'],
        ['Relatório por especialidade', 'Visão simples de contatos por canal e especialidade, para decidir onde concentrar o investimento.'],
      ],
      example: 'Uma clínica investe em Google e Instagram, mas a recepção não sabe de onde vêm os agendamentos. Com eventos de contato e um campo de origem no atendimento, a decisão de verba deixa de ser baseada em impressão.',
      faq: [
        ['A mensuração respeita a LGPD?', 'O desenho evita enviar dados sensíveis às ferramentas de anúncio e considera o consentimento de cookies. A política de privacidade da clínica deve refletir o que é coletado.'],
        ['Preciso de um sistema de agenda integrado?', 'Não necessariamente. É possível começar com mensuração de contatos e registro manual da origem, evoluindo para integrações quando o sistema permitir.'],
      ],
    },
    [co]: {
      intro: 'Analytics e tracking para clínicas odontológicas medirem quais anúncios e páginas geram conversas e avaliações agendadas.',
      situation: ['Muitas mensagens não significam muitas avaliações.', 'Clínicas odontológicas costumam receber contatos de curiosos e de pessoas comparando preço. Medir só cliques ou mensagens esconde o que importa: quais campanhas trazem pacientes que agendam a avaliação.'],
      actions: [
        ['Eventos de WhatsApp, ligação e formulário', 'Cada forma de contato registrada como conversão no Google Ads, no Meta Ads e no GA4, com nomes padronizados.'],
        ['Parâmetros por tratamento', 'Links e páginas identificados por tratamento, para comparar o desempenho de ortodontia, implantes ou clínica geral.'],
        ['Retorno das avaliações agendadas', 'Quando o processo permitir, a informação de agendamento volta para as plataformas, ajudando a otimizar para contatos melhores.'],
      ],
      example: 'Uma clínica vê o custo por mensagem cair, mas a agenda não acompanha. Ao registrar quais conversas viraram avaliação, percebe que uma campanha barata trazia contatos pouco qualificados.',
      faq: [
        ['O Google Tag Manager é obrigatório?', 'Não, mas facilita organizar as tags e manter a mensuração sem depender de alterações frequentes no site.'],
        ['Consigo saber quantos pacientes vieram de cada anúncio?', 'Até certo ponto. Parte da jornada pode ser medida diretamente; outra parte depende do registro feito pela recepção. O objetivo é chegar a uma leitura confiável, mesmo sem atribuição perfeita.'],
      ],
    },
    [pl]: {
      intro: 'Mensuração simples para profissionais liberais saberem quais canais trazem clientes, sem precisar virar especialista em ferramentas.',
      situation: ['Você precisa saber o que funciona, não montar um painel complexo.', 'Profissionais que atendem sozinhos ou com equipe pequena precisam de poucas informações confiáveis: de onde vieram os contatos, quais viraram clientes e quanto custou cada um. O resto é ruído.'],
      actions: [
        ['Conversões essenciais', 'Formulário, WhatsApp e ligação medidos no GA4 e nas campanhas, sem dezenas de eventos que ninguém vai analisar.'],
        ['Planilha ou CRM de oportunidades', 'Registro simples de origem e resultado de cada contato, conectado às campanhas quando fizer sentido.'],
        ['Leitura mensal objetiva', 'Um resumo com contatos, clientes fechados e custo por canal, para decidir onde manter ou cortar investimento.'],
      ],
      example: 'Um contador investe em anúncios e indicações, mas não sabe qual canal traz os melhores clientes. Com registro de origem e uma leitura mensal, percebe que um canal gera menos contatos, porém com mais fechamentos.',
      faq: [
        ['Preciso contratar uma ferramenta paga?', 'Normalmente não. GA4, Google Tag Manager e uma planilha bem organizada atendem a maior parte dos profissionais liberais.'],
        ['Quanto tempo leva para configurar?', 'Depende do site e dos canais usados. A configuração básica costuma ser rápida; o mais importante é manter o registro dos contatos no dia a dia.'],
      ],
    },
    [pe]: {
      intro: 'Analytics e tracking para pequenas empresas entenderem quais canais geram vendas e pedidos de orçamento, e onde o investimento se perde.',
      situation: ['Sem dados, toda campanha parece funcionar — ou nenhuma.', 'Pequenas empresas costumam usar vários canais ao mesmo tempo: Google, Instagram, WhatsApp, loja física. Sem mensuração, é impossível saber o que traz cliente e o que só gera movimento.'],
      actions: [
        ['GA4 e GTM configurados', 'Eventos de compra, orçamento, WhatsApp e ligação padronizados, com conversões importadas para as campanhas.'],
        ['UTMs em todos os links', 'Links de redes sociais, e-mails e parceiros identificados, para separar cada origem nos relatórios.'],
        ['Painel com o que importa', 'Visão com investimento, contatos, vendas e custo por resultado, sem métricas de vaidade.'],
      ],
      example: 'Um e-commerce local vê vendas crescendo, mas não sabe se foi o Instagram ou o Google. Com UTMs e conversões configuradas, consegue comparar os canais e redistribuir a verba com base em dados.',
      faq: [
        ['Minha loja virtual já tem relatórios. Preciso de mais?', 'Os relatórios da plataforma mostram vendas, mas nem sempre a origem correta. O tracking conecta canal, campanha e resultado.'],
        ['E as vendas que acontecem no WhatsApp?', 'É possível medir o início da conversa e registrar o fechamento manualmente ou por integração, conforme o processo da empresa.'],
      ],
    },
  },

  'automacao': {
    [cm]: {
      intro: 'Automação de WhatsApp e atendimento para clínicas médicas organizarem contatos, lembretes e encaminhamento para a recepção.',
      situation: ['A recepção não pode perder mensagens no meio do dia.', 'Clínicas recebem contatos por WhatsApp, telefone, Instagram e site ao mesmo tempo. Sem organização, mensagens ficam sem resposta e informações se repetem. A automação cuida das etapas repetitivas para que a equipe se concentre no atendimento.'],
      actions: [
        ['Triagem inicial no WhatsApp', 'Mensagem de boas-vindas que identifica a especialidade e o tipo de atendimento antes de passar a conversa para a recepção.'],
        ['Lembretes e confirmações', 'Mensagens automáticas de confirmação e lembrete de consulta, integradas à agenda quando o sistema permitir.'],
        ['Contatos centralizados', 'Leads de anúncios, site e redes sociais reunidos em um único lugar, com origem e status do atendimento.'],
      ],
      example: 'A recepção de uma clínica responde as mesmas perguntas dezenas de vezes por dia. Com uma triagem inicial e respostas automáticas para dúvidas frequentes, a equipe passa a dedicar mais tempo a quem já está pronto para agendar.',
      faq: [
        ['A automação substitui a recepção?', 'Não. Ela organiza e encaminha os contatos. Decisões, orientações e agendamentos continuam com a equipe da clínica.'],
        ['E os dados dos pacientes?', 'As integrações são desenhadas para coletar só o necessário ao atendimento, com acesso restrito e atenção à LGPD.'],
      ],
    },
    [co]: {
      intro: 'Automação para clínicas odontológicas organizarem o WhatsApp, acompanharem orçamentos e lembrarem pacientes de retornos e avaliações.',
      situation: ['O orçamento enviado não pode ficar esquecido.', 'Tratamentos odontológicos costumam ter orçamentos que o paciente leva para pensar. Sem acompanhamento, boa parte dessas conversas se perde. A automação ajuda a manter o contato no tempo certo, sem sobrecarregar a equipe.'],
      actions: [
        ['Funil de orçamentos', 'Cada orçamento registrado com status e data, com lembretes para a equipe retomar o contato.'],
        ['Mensagens de retorno', 'Lembretes automáticos para revisões, manutenções e consultas periódicas, conforme o tratamento.'],
        ['Integração com anúncios', 'Contatos vindos do Google e do Instagram entrando no mesmo fluxo, com a origem identificada.'],
      ],
      example: 'Uma clínica envia vários orçamentos de ortodontia por mês, mas não tem um processo de acompanhamento. Com um funil simples e lembretes para a equipe, nenhum orçamento fica sem retorno.',
      faq: [
        ['Preciso trocar meu sistema de gestão?', 'Não necessariamente. Avaliamos o que o sistema atual permite e criamos integrações ou fluxos complementares.'],
        ['As mensagens automáticas parecem robóticas?', 'O texto é escrito no tom da clínica, e a conversa passa para uma pessoa sempre que a situação exige.'],
      ],
    },
    [pl]: {
      intro: 'Automação para profissionais liberais organizarem contatos, agendamentos e follow-up sem passar o dia respondendo mensagens.',
      situation: ['Atender clientes e responder mensagens disputam o mesmo tempo.', 'Profissionais que trabalham sozinhos perdem oportunidades quando demoram a responder ou esquecem de retomar uma conversa. Automatizar o primeiro contato e os lembretes libera tempo para o trabalho que gera receita.'],
      actions: [
        ['Primeiro contato automático', 'Resposta imediata no WhatsApp ou no formulário com informações essenciais e um caminho para agendar.'],
        ['Agenda online integrada', 'Link de agendamento conectado ao seu calendário, com confirmação e lembrete automáticos.'],
        ['Follow-up de propostas', 'Lembretes para retomar propostas enviadas e contatos que não avançaram.'],
      ],
      example: 'Um arquiteto recebe pedidos de orçamento enquanto está em obra e só responde à noite. Com uma resposta inicial automática e um formulário com perguntas sobre o projeto, ele chega à conversa já sabendo o que o cliente precisa.',
      faq: [
        ['Preciso de um CRM caro?', 'Não. Muitas vezes uma ferramenta simples ou até uma planilha conectada resolve. A escolha depende do volume de contatos.'],
        ['Posso automatizar sem perder o atendimento pessoal?', 'Sim. A automação cuida do repetitivo; a conversa sobre o trabalho continua sendo sua.'],
      ],
    },
    [pe]: {
      intro: 'Automação de marketing e WhatsApp para pequenas empresas atenderem mais rápido, acompanharem pedidos e não perderem vendas por falta de retorno.',
      situation: ['Venda perdida por demora no atendimento é a mais cara.', 'Depois de investir em anúncios, deixar o cliente esperando no WhatsApp desperdiça o dinheiro gasto. Fluxos automáticos, integração com CRM e alertas para a equipe ajudam a responder rápido e acompanhar cada oportunidade.'],
      actions: [
        ['WhatsApp organizado', 'Mensagens de boas-vindas, catálogo e distribuição das conversas entre a equipe, com etiquetas por interesse.'],
        ['Integrações com n8n e APIs', 'Leads de formulários, anúncios e loja virtual enviados automaticamente para planilha, CRM ou e-mail.'],
        ['Recuperação de oportunidades', 'Lembretes para orçamentos sem resposta e mensagens para clientes que não concluíram a compra.'],
      ],
      example: 'Uma empresa de serviços recebe pedidos pelo Instagram, pelo site e pelo WhatsApp, cada um em um lugar. Com uma integração que reúne tudo em uma planilha com alertas, a equipe passa a responder na ordem de chegada.',
      faq: [
        ['Automação é cara para empresa pequena?', 'Existem soluções de baixo custo. O investimento é dimensionado ao volume de contatos e ao tempo que a equipe economiza.'],
        ['Preciso de um programador?', 'Não para a operação do dia a dia. A configuração inicial e os ajustes ficam no escopo do projeto.'],
      ],
    },
  },

  'ai': {
    [cm]: {
      intro: 'Inteligência artificial aplicada ao atendimento e ao marketing de clínicas médicas, com supervisão humana e atenção aos dados dos pacientes.',
      situation: ['IA em clínica precisa de limites claros.', 'Assistentes virtuais podem responder dúvidas sobre horários, convênios e preparo de exames, mas nunca orientar sobre sintomas ou diagnósticos. O valor está em liberar a equipe das perguntas repetitivas, mantendo as decisões clínicas com os profissionais.'],
      actions: [
        ['Assistente para dúvidas administrativas', 'Respostas sobre horários, endereço, convênios e documentos necessários, baseadas em informações aprovadas pela clínica.'],
        ['Encaminhamento seguro', 'Qualquer pergunta clínica ou sensível é transferida para a equipe, sem resposta automática.'],
        ['Apoio ao marketing', 'Análise de perguntas frequentes para orientar conteúdos do site e das redes sociais.'],
      ],
      example: 'A recepção passa boa parte do dia informando convênios aceitos e preparo de exames. Um assistente treinado com essas informações responde fora do horário e encaminha para a equipe o que precisa de atendimento humano.',
      faq: [
        ['A IA pode orientar pacientes sobre sintomas?', 'Não. O assistente é limitado a informações administrativas aprovadas. Questões de saúde são sempre encaminhadas aos profissionais.'],
        ['Onde ficam os dados das conversas?', 'A arquitetura é definida com atenção à LGPD, com coleta mínima, acesso restrito e fornecedores escolhidos com critério.'],
      ],
    },
    [co]: {
      intro: 'IA para clínicas odontológicas responderem dúvidas frequentes, organizarem pedidos de avaliação e apoiarem a recepção, sempre com revisão humana.',
      situation: ['Perguntas repetidas consomem o tempo da recepção.', 'Preço, formas de pagamento, convênios e como funciona a primeira avaliação são perguntas que chegam todos os dias. Um assistente bem configurado responde o que é padrão e prepara a conversa para a equipe.'],
      actions: [
        ['Respostas sobre a primeira avaliação', 'Explicação de como funciona a consulta inicial, documentos e formas de pagamento aceitas, com texto aprovado pela clínica.'],
        ['Qualificação do interesse', 'Identificação do tratamento procurado e da disponibilidade de horário antes de passar a conversa para a recepção.'],
        ['Resumo para a equipe', 'Cada conversa chega com um resumo do que o paciente precisa, evitando que ele repita as informações.'],
      ],
      example: 'Uma clínica recebe mensagens à noite e só responde no dia seguinte. Com um assistente que explica a avaliação e coleta o melhor horário, a equipe começa o dia com as conversas prontas para agendar.',
      faq: [
        ['O assistente pode passar preço de tratamento?', 'Só o que a clínica definir. Valores que dependem de avaliação são explicados como tal, sem promessas.'],
        ['E se o paciente quiser falar com uma pessoa?', 'A transferência para a equipe é imediata sempre que solicitada.'],
      ],
    },
    [pl]: {
      intro: 'IA aplicada para profissionais liberais ganharem tempo em atendimento, propostas e produção de conteúdo, sem abrir mão da revisão profissional.',
      situation: ['O seu tempo é o produto que você vende.', 'Responder dúvidas iniciais, organizar informações de clientes e preparar rascunhos de propostas ou conteúdos tomam horas que poderiam ser dedicadas ao trabalho técnico. A IA ajuda nessas etapas, com você revisando o resultado.'],
      actions: [
        ['Triagem de novos contatos', 'Assistente que coleta informações sobre a demanda e informa se ela está dentro da sua área de atuação.'],
        ['Rascunhos de propostas e respostas', 'Modelos gerados a partir das suas informações, revisados antes do envio.'],
        ['Apoio à produção de conteúdo', 'Pautas e rascunhos baseados nas dúvidas reais dos seus clientes, para site e redes sociais.'],
      ],
      example: 'Um advogado gasta tempo explicando a mesma coisa em todo primeiro contato. Um assistente coleta os dados do caso e indica se é da área atendida, e a conversa com o advogado começa mais objetiva.',
      faq: [
        ['A IA pode dar orientação técnica ao cliente?', 'Não. Orientações profissionais continuam com você. O assistente cuida de informações gerais e da organização do contato.'],
        ['Preciso de conhecimento técnico para usar?', 'Não. A configuração e os ajustes ficam no escopo, e o uso diário é pensado para ser simples.'],
      ],
    },
    [pe]: {
      intro: 'Inteligência artificial para pequenas empresas atenderem melhor, analisarem dados de vendas e produzirem conteúdo com mais agilidade.',
      situation: ['IA útil é a que resolve um problema da rotina.', 'Pequenas empresas não precisam de projetos complexos de IA. Precisam de um atendimento que responda rápido, de ajuda para entender os números e de agilidade para criar textos e anúncios. O ponto de partida é escolher uma tarefa concreta.'],
      actions: [
        ['Atendimento com contexto da empresa', 'Assistente no WhatsApp ou no site treinado com produtos, preços e políticas da empresa.'],
        ['Leitura de dados de vendas', 'Resumos periódicos de vendas, campanhas e atendimento, com destaque para o que mudou.'],
        ['Variações de anúncios e textos', 'Rascunhos de criativos e descrições de produtos para teste, sempre revisados pela equipe.'],
      ],
      example: 'Uma loja recebe as mesmas perguntas sobre prazo de entrega e trocas. Um assistente com as políticas da loja responde na hora e encaminha para a equipe as conversas de venda.',
      faq: [
        ['Por onde começar com IA na minha empresa?', 'Pela tarefa que mais consome tempo e tem regras claras, como responder perguntas frequentes. Depois, ampliamos conforme o resultado.'],
        ['A IA pode errar?', 'Pode. Por isso o assistente trabalha com informações aprovadas, tem limites definidos e encaminha para uma pessoa o que foge do padrão.'],
      ],
    },
  },

  'trafego-pago': {
    [cm]: {
      intro: 'Gestão de tráfego pago para clínicas médicas combinarem Google Ads e Meta Ads conforme especialidade, agenda e região atendida.',
      situation: ['Cada especialidade pede um canal diferente.', 'Algumas especialidades dependem de busca ativa no Google; outras se beneficiam de presença constante no Instagram. A gestão de tráfego define onde investir em cada caso, sempre considerando a capacidade de agenda e as regras da publicidade médica.'],
      actions: [
        ['Plano de canais por especialidade', 'Distribuição de verba entre Google e Meta conforme a forma como os pacientes procuram cada especialidade.'],
        ['Calendário de investimento', 'Ajustes de verba conforme sazonalidade e disponibilidade de agenda, evitando gerar demanda quando não há horário.'],
        ['Relatório de contatos por canal', 'Acompanhamento mensal de contatos, custo e especialidade, com recomendações para o mês seguinte.'],
      ],
      example: 'Uma clínica investe o mesmo valor todo mês, mesmo quando a agenda de uma especialidade está cheia. Com um calendário de verba, o investimento passa a acompanhar a disponibilidade de cada médico.',
      faq: [
        ['Qual canal traz mais pacientes para clínica?', 'Depende da especialidade e da região. O Google costuma capturar demanda existente; o Instagram ajuda a construir lembrança. A combinação é definida com dados.'],
        ['Vocês cuidam das peças dos anúncios?', 'O planejamento e a orientação das peças fazem parte do trabalho. A produção pode ser feita pela clínica ou entrar no escopo, e a aprovação final é sempre da clínica.'],
      ],
    },
    [co]: {
      intro: 'Tráfego pago para clínicas odontológicas atraírem pacientes para avaliação com Google Ads, Instagram e Facebook trabalhando juntos.',
      situation: ['O paciente pesquisa no Google e decide no Instagram.', 'Na odontologia, a jornada costuma passar por vários canais: uma busca pelo tratamento, uma visita ao perfil da clínica, uma conversa no WhatsApp. A gestão integrada garante que cada canal cumpra seu papel nessa jornada.'],
      actions: [
        ['Google para demanda ativa', 'Campanhas de pesquisa para tratamentos e atendimento na região, com páginas específicas.'],
        ['Meta para lembrança e remarketing', 'Anúncios para quem visitou o site ou interagiu com o perfil, reforçando a confiança na clínica.'],
        ['Verba equilibrada pelos resultados', 'Distribuição revisada com base em contatos e avaliações agendadas, não apenas em cliques.'],
      ],
      example: 'Uma clínica anuncia só no Instagram e percebe que muitos pacientes chegam dizendo que pesquisaram no Google. Ao incluir campanhas de pesquisa e remarketing, os dois canais passam a se complementar.',
      faq: [
        ['Quanto uma clínica odontológica deve investir em anúncios?', 'Não existe valor único. A verba depende dos tratamentos, da concorrência local e da capacidade de agenda, e é revisada conforme os resultados.'],
        ['Em quanto tempo vejo resultados?', 'As primeiras semanas servem para coletar dados e ajustar. A avaliação considera um período suficiente para comparar canais com segurança.'],
      ],
    },
    [pl]: {
      intro: 'Gestão de tráfego pago para profissionais liberais com verba enxuta, foco nas áreas de atuação mais rentáveis e acompanhamento da qualidade dos contatos.',
      situation: ['Com orçamento limitado, escolher o canal certo é decisivo.', 'Profissionais liberais raramente têm verba para estar em todos os canais. A gestão começa definindo onde o seu cliente procura — Google, Instagram ou ambos — e concentra o investimento ali.'],
      actions: [
        ['Escolha de um canal principal', 'Investimento concentrado onde o seu cliente procura, antes de ampliar para outros canais.'],
        ['Mensagens por área de atuação', 'Anúncios específicos para cada serviço, evitando mensagens genéricas que atraem contatos fora do escopo.'],
        ['Avaliação por cliente, não por clique', 'Acompanhamento de quantos contatos viraram clientes, para decidir se o investimento vale a pena.'],
      ],
      example: 'Uma consultora divide uma verba pequena entre três canais e não vê resultado em nenhum. Ao concentrar o investimento no Google para os dois serviços mais procurados, consegue avaliar o canal com clareza.',
      faq: [
        ['Vale a pena investir em anúncios sendo profissional liberal?', 'Quando existe demanda pelo seu serviço e capacidade de atender, sim. Começamos com um teste controlado para avaliar.'],
        ['Posso pausar os anúncios quando a agenda estiver cheia?', 'Sim. A flexibilidade de ajustar ou pausar é uma das vantagens do tráfego pago.'],
      ],
    },
    [pe]: {
      intro: 'Gestão de tráfego pago para pequenas empresas de Presidente Prudente e região, com Google Ads, Meta Ads e TikTok Ads escolhidos pelo objetivo e pelo orçamento.',
      situation: ['O dono da empresa não tem tempo para gerenciar campanhas.', 'Criar, acompanhar e ajustar anúncios em várias plataformas exige tempo e conhecimento técnico. A gestão de tráfego assume essa rotina e entrega uma leitura clara do que está funcionando.'],
      actions: [
        ['Diagnóstico dos canais', 'Análise de onde estão os clientes da empresa e qual combinação de canais faz sentido para o orçamento disponível.'],
        ['Campanhas com objetivo definido', 'Cada campanha ligada a uma meta concreta: vendas, orçamentos, mensagens ou visitas à loja.'],
        ['Rotina de otimização', 'Acompanhamento semanal, ajustes de verba e criativos e relatório mensal com recomendações.'],
      ],
      example: 'Uma empresa investe em anúncios há meses sem um responsável. Com diagnóstico, campanhas reorganizadas e acompanhamento semanal, a verba passa a ser direcionada para o que gera contatos.',
      faq: [
        ['Qual a diferença entre tráfego pago e impulsionar posts?', 'Impulsionar é uma forma simplificada de anunciar. O tráfego pago usa campanhas completas, com objetivos, públicos e mensuração mais precisos.'],
        ['O valor da gestão inclui a verba dos anúncios?', 'Não. A verba é paga diretamente às plataformas, e a gestão é cobrada à parte, de forma transparente.'],
      ],
    },
  },

  'seo-local': {
    [cm]: {
      intro: 'SEO local para clínicas médicas aparecerem no Google e no Maps quando pacientes da região procuram especialidades e consultas.',
      situation: ['O paciente procura “perto de mim” antes de ligar.', 'Buscas locais mostram o mapa, o Perfil da Empresa e os sites mais relevantes. Uma clínica com informações incompletas, páginas genéricas ou avaliações sem resposta perde espaço para concorrentes mais organizados.'],
      actions: [
        ['Perfil da Empresa completo', 'Categorias, especialidades, horários, fotos reais e informações de contato revisadas e mantidas atualizadas.'],
        ['Páginas por especialidade', 'Conteúdo no site para cada especialidade, explicando o atendimento e a localização da clínica.'],
        ['Gestão de avaliações', 'Orientação para pedir avaliações a pacientes de forma ética e responder com cuidado, sem expor informações de saúde.'],
      ],
      example: 'Uma clínica tem várias especialidades, mas o site apresenta todas em uma única página. Com páginas próprias e o Perfil da Empresa revisado, cada especialidade passa a ter conteúdo para ser encontrada nas buscas.',
      faq: [
        ['Como responder avaliações de pacientes?', 'Com cordialidade e sem confirmar ou comentar detalhes de atendimento, preservando o sigilo do paciente.'],
        ['SEO local substitui os anúncios?', 'Não. O SEO constrói presença orgânica ao longo do tempo; os anúncios trazem visibilidade imediata. As duas frentes se complementam.'],
      ],
    },
    [co]: {
      intro: 'SEO local para clínicas odontológicas serem encontradas no Google Maps e nas buscas por dentista e tratamentos em Presidente Prudente e região.',
      situation: ['“Dentista perto de mim” é uma das buscas locais mais comuns.', 'Quem precisa de dentista olha o mapa, compara avaliações e visita o site antes de entrar em contato. Estar bem posicionado nessas buscas depende de informações consistentes, conteúdo útil e reputação construída com pacientes reais.'],
      actions: [
        ['Presença no Google Maps', 'Perfil da Empresa otimizado com serviços, horários, fotos da estrutura e atualizações frequentes.'],
        ['Conteúdo por tratamento', 'Páginas que explicam tratamentos, etapas e cuidados, respondendo as dúvidas que os pacientes pesquisam.'],
        ['Reputação local', 'Processo para solicitar avaliações espontâneas e responder com profissionalismo.'],
      ],
      example: 'Uma clínica bem avaliada pelos pacientes quase não aparece no mapa porque o perfil tem categorias e serviços incompletos. Com o perfil revisado e páginas por tratamento no site, a presença local fica mais consistente.',
      faq: [
        ['Quanto tempo leva para aparecer melhor no Google?', 'SEO é um trabalho contínuo. Ajustes no perfil podem ter efeito mais rápido; conteúdo e reputação constroem resultado ao longo dos meses.'],
        ['Posso pedir avaliação para todos os pacientes?', 'Pode convidar, sem oferecer recompensas e sem filtrar quem vai avaliar, conforme as políticas do Google.'],
      ],
    },
    [pl]: {
      intro: 'SEO local para profissionais liberais serem encontrados no Google por quem procura o seu serviço em Presidente Prudente e região.',
      situation: ['Ser indicado é ótimo; ser encontrado no Google também.', 'Mesmo quando o cliente chega por indicação, ele pesquisa o seu nome antes de ligar. E quem não conhece ninguém procura direto pela especialidade. Um site claro e um Perfil da Empresa bem cuidado atendem os dois casos.'],
      actions: [
        ['Site com áreas de atuação', 'Páginas que explicam cada serviço, para quem é e como funciona o atendimento.'],
        ['Perfil da Empresa profissional', 'Informações, horários e localização corretos, com publicações que mostram o seu trabalho.'],
        ['Conteúdo que responde dúvidas', 'Artigos sobre as perguntas que os clientes fazem antes de contratar, escritos ou revisados por você.'],
      ],
      example: 'Uma advogada recebe indicações, mas quem pesquisa o nome dela encontra um site desatualizado. Com páginas por área de atuação e o perfil revisado, a pesquisa passa a confirmar a indicação.',
      faq: [
        ['Preciso de um escritório para ter Perfil da Empresa?', 'Depende da forma de atendimento. Profissionais que atendem no endereço do cliente podem configurar uma área de serviço, conforme as regras do Google.'],
        ['Escrever artigos ajuda mesmo?', 'Conteúdo útil, que responde dúvidas reais, ajuda as pessoas a encontrarem e confiarem no seu trabalho. Quantidade sem qualidade não ajuda.'],
      ],
    },
    [pe]: {
      intro: 'SEO local para pequenas empresas aparecerem no Google Maps e nas buscas da região sem depender apenas de anúncios.',
      situation: ['Aparecer no mapa é gratuito, mas exige trabalho.', 'O Perfil da Empresa no Google é uma das vitrines mais vistas por clientes locais. Informações erradas, poucas fotos e avaliações sem resposta afastam clientes que estavam prontos para comprar.'],
      actions: [
        ['Perfil da Empresa otimizado', 'Categorias, produtos, serviços, horários e fotos reais organizados para as buscas da região.'],
        ['Site com páginas de serviço', 'Conteúdo que explica o que a empresa oferece e em quais cidades atende.'],
        ['Rotina de presença local', 'Publicações no perfil, resposta às avaliações e acompanhamento das buscas no Search Console.'],
      ],
      example: 'Uma empresa tem boas avaliações, mas horário desatualizado e poucas fotos no perfil. Com as informações corrigidas e uma rotina de atualizações, o perfil passa a representar melhor o negócio para quem procura no mapa.',
      faq: [
        ['SEO local é só para quem tem loja física?', 'Não. Empresas que atendem no endereço do cliente também podem ter presença local, configurando a área de atendimento.'],
        ['Preciso postar no Perfil da Empresa?', 'Publicações mantêm o perfil atualizado e mostram novidades aos clientes. A frequência é definida conforme a rotina da empresa.'],
      ],
    },
  },

  'tiktok-ads': {
    [cm]: {
      intro: 'TikTok Ads para clínicas médicas avaliarem o canal com conteúdo educativo em vídeo, dentro das regras da publicidade médica.',
      situation: ['O TikTok pode funcionar para clínicas — com cuidado.', 'O canal alcança muitas pessoas da região com vídeos curtos, mas temas de saúde têm restrições na plataforma e nas normas médicas. Antes de investir, avaliamos se a especialidade e o público combinam com o canal.'],
      actions: [
        ['Avaliação de aderência', 'Análise do público da especialidade e das políticas da plataforma antes de qualquer investimento.'],
        ['Vídeos educativos', 'Roteiros com orientações gerais e apresentação da equipe e da estrutura, aprovados pelo responsável técnico.'],
        ['Teste com verba controlada', 'Campanha inicial pequena, avaliada pela qualidade dos contatos e não apenas por visualizações.'],
      ],
      example: 'Uma clínica de especialidade com público jovem quer testar o TikTok. Com roteiros educativos aprovados e uma verba de teste, avalia se o canal traz contatos antes de ampliar o investimento.',
      faq: [
        ['Médico pode fazer vídeo no TikTok?', 'Pode, respeitando as normas de publicidade médica. O conteúdo deve ser informativo, sem promessas ou sensacionalismo.'],
        ['TikTok traz pacientes ou só visualizações?', 'Depende do público e da oferta. Por isso a avaliação considera contatos e agendamentos, não apenas alcance.'],
      ],
    },
    [co]: {
      intro: 'TikTok Ads para clínicas odontológicas apresentarem tratamentos e a rotina da clínica em vídeo para pessoas da região.',
      situation: ['Vídeos curtos ajudam a explicar tratamentos.', 'Como funciona um alinhador, o que acontece na primeira consulta, como é a estrutura da clínica: esses temas funcionam bem em vídeo. O desafio é transformar visualizações em contatos, respeitando as regras do conselho.'],
      actions: [
        ['Roteiros sobre tratamentos', 'Vídeos explicativos sobre tratamentos e cuidados, planejados para aprovação da clínica.'],
        ['Público da região', 'Segmentação pela área atendida e por interesses compatíveis com os tratamentos oferecidos.'],
        ['Caminho até o contato', 'Link para página ou WhatsApp com informações sobre a avaliação inicial.'],
      ],
      example: 'Uma clínica que oferece alinhadores quer alcançar um público mais jovem. Com vídeos explicando o tratamento e uma campanha local, testa se o TikTok gera pedidos de avaliação.',
      faq: [
        ['Preciso de equipamento profissional para gravar?', 'Não necessariamente. Muitos vídeos podem ser gravados com celular, seguindo um roteiro bem planejado.'],
        ['Os vídeos precisam ser engraçados?', 'Não. O tom é definido conforme a identidade da clínica. Conteúdo claro e útil também funciona no canal.'],
      ],
    },
    [pl]: {
      intro: 'TikTok Ads para profissionais liberais testarem vídeos curtos que mostram conhecimento e geram contatos com pessoas da região.',
      situation: ['Explicar bem em 30 segundos é uma forma de ganhar confiança.', 'Profissionais que explicam temas da sua área de forma simples podem se destacar no TikTok. O canal não serve para todos: a decisão depende de quem é o seu cliente e da sua disposição para produzir vídeos.'],
      actions: [
        ['Pautas a partir das dúvidas dos clientes', 'Lista de temas que o seu público pesquisa, transformados em roteiros curtos.'],
        ['Impulsionamento dos melhores vídeos', 'Anúncios com os conteúdos que já demonstraram interesse, direcionados para a sua região.'],
        ['Avaliação honesta do canal', 'Comparação com outros canais para decidir se o TikTok vale o seu tempo e investimento.'],
      ],
      example: 'Um contador grava vídeos curtos sobre dúvidas de imposto de renda. Com os vídeos de melhor retenção anunciados para a cidade, avalia se o canal traz novos clientes na temporada.',
      faq: [
        ['TikTok é sério o suficiente para minha profissão?', 'Depende do seu público. Muitos profissionais usam o canal com conteúdo educativo e linguagem adequada à sua área.'],
        ['Quantos vídeos preciso produzir?', 'Uma frequência que você consiga manter. Melhor poucos vídeos bons e consistentes do que muitos sem planejamento.'],
      ],
    },
    [pe]: {
      intro: 'TikTok Ads para pequenas empresas mostrarem produtos, bastidores e ofertas em vídeo para pessoas de Presidente Prudente e região.',
      situation: ['Produto bem mostrado em vídeo vende.', 'O TikTok favorece conteúdo autêntico: bastidores, demonstrações, clientes reais e a equipe da empresa. Para pequenas empresas, isso pode significar alcance a um custo competitivo, desde que o público esteja no canal.'],
      actions: [
        ['Formatos para o seu produto', 'Ideias de vídeo com demonstrações, bastidores e respostas a perguntas de clientes.'],
        ['Campanhas locais', 'Anúncios segmentados pela área de atendimento ou de entrega da empresa.'],
        ['Medição até a venda', 'Pixel e eventos configurados para acompanhar visitas, mensagens e compras geradas pelos vídeos.'],
      ],
      example: 'Uma confeitaria grava vídeos mostrando a produção dos doces. Com campanhas locais e mensuração dos pedidos, descobre quais formatos de vídeo geram mais encomendas.',
      faq: [
        ['Meu público está no TikTok?', 'Avaliamos a idade, os interesses e o tipo de produto antes de recomendar o canal. Nem toda empresa precisa estar no TikTok.'],
        ['A equipe precisa aparecer nos vídeos?', 'Não é obrigatório, mas pessoas reais costumam gerar mais identificação. O formato é definido com a empresa.'],
      ],
    },
  },
};
