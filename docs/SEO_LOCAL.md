# SEO local — TA Consulting

Atualizado em 29/09/2026. Área comercial confirmada: Presidente Prudente e municípios em raio de até 200 km. Este documento descreve implementação e próximos passos; não comprova posições no Google.

## Situação verificada

- O domínio público sem `www` responde com 308 para `https://www.tonyananias.com.br/`, que responde 200. Cabeçalhos identificam Vercel.
- O HTML público consultado ainda tem o título “TA Consulting | Tráfego Pago, Automação e IA” e canonical sem `www`. A nova versão permanece local até publicação.
- Consulta disponível ao Search Console via Markifact retornou `No gsc connection found`. Não há métricas de cliques, impressões, posição ou cobertura para estabelecer uma linha de base. Resultados de busca abertos durante a pesquisa não são um relatório de posição do Google.
- Perfil da Empresa, endereço de atendimento presencial e horários ainda não foram fornecidos. Não foram inventados endereço, avaliações, coordenadas ou filiais.

## Implementado

- Canonical, Open Graph, JSON-LD, sitemap e robots usam o host HTTPS com `www` observado no redirecionamento público.
- Metadados específicos por serviço; títulos claros e descrições próprias, sem repetição mecânica de listas de cidades.
- Novas páginas de tráfego pago e atendimento regional, ligadas à home, aos serviços e ao rodapé.
- Breadcrumbs estruturados de serviços correspondem à navegação visível; WebPage aponta para a entidade Service.
- Nome, localização e telefone confirmados no conteúdo e nos dados estruturados. O raio é descrito como área de atendimento, sem inventar endereço ou coordenada central.
- Perguntas reais sobre contratação, mídia, mensuração e alcance regional em HTML acessível sem JavaScript. Não há promessa de rich result de FAQ.
- Insights vazio usa noindex e sai do sitemap. Ao publicar um artigo real, o índice volta automaticamente ao sitemap e à indexação.
- Ilustrações responsivas: aproximadamente 2,29 MB → 0,51 MB considerando a maior variante usada e a imagem secundária; redução de 78%. As originais foram preservadas. A segunda imagem continua lazy-loaded.
- `vercel.json` prepara o build estático, diretório de saída, barra final e cache dos ativos. Isso não publica o site nem muda os domínios da conta.
- `GOOGLE_SITE_VERIFICATION` pode receber o valor real de verificação de propriedade por prefixo de URL. A tag só é gerada quando configurada. Para propriedade de domínio, usar o registro DNS fornecido pelo Search Console.

## Mapa de intenção

| Página | Busca principal | O que a página resolve |
|---|---|---|
| `/` | marketing digital em Presidente Prudente | Oferta, experiência, serviços e contato |
| `/trafego-pago/` | gestão de tráfego pago em Presidente Prudente | Escolha de canais, orçamento e gestão |
| `/google-ads/` | Google Ads em Presidente Prudente | Aquisição por intenção de busca |
| `/meta-ads/` | anúncios no Instagram em Presidente Prudente | Oferta, criativos e contatos |
| `/tiktok-ads/` | TikTok Ads em Presidente Prudente | Aderência do canal e campanhas em vídeo |
| `/seo-local/` | SEO local em Presidente Prudente | Presença orgânica e informação local |
| `/automacao/` | automação de WhatsApp em Presidente Prudente | Organização de contatos e integrações |
| `/analytics-tracking/` | analytics e tracking em Presidente Prudente | Confiabilidade da mensuração |
| `/ai/` | IA para empresas em Presidente Prudente | Aplicações concretas e limites |
| `/regiao-presidente-prudente/` | atendimento de marketing na região | Alcance de até 200 km e início do projeto |

Hipóteses de intenção, sem volume ou dificuldade de palavra-chave medidos. Priorizar home, tráfego pago, Google Ads e SEO local; ajustar com dados reais do Search Console e qualidade dos contatos.

## Publicação e descoberta — prioridade imediata

1. Publicar o build `dist/` no projeto correto da Vercel. Manter o redirecionamento público sem `www` para `www`, sem inverter os dois hosts.
2. Confirmar 200 nas páginas, 404 real em endereço inexistente e redirecionamentos de barra final. Não configurar um fallback de todas as URLs para a home.
3. Verificar a propriedade no Search Console. Enviar `https://www.tonyananias.com.br/sitemap.xml` e inspecionar home, tráfego pago, Google Ads, SEO local e atendimento regional.
4. Confirmar canonical escolhido pelo Google, indexação, erros de rastreamento e Core Web Vitals. Testes locais não substituem medições reais de campo.
5. Validar dados estruturados no Rich Results Test. A marcação de empresa não garante exibição especial; dados ausentes precisam ser reais antes de incluídos.

## Perfil da Empresa — trabalho externo ao site

Confirmar primeiro se a atividade é elegível ao Perfil da Empresa conforme a forma real de atendimento. Usar o nome verdadeiro TA Consulting, categorias compatíveis e telefone (18) 98103-4411. Não adicionar palavras-chave ao nome comercial nem criar perfis de filiais que não existem.

A área comercial desejada é de 200 km, mas não é uma configuração de raio do Perfil nem uma promessa de visibilidade no Maps. Configurar as localidades efetivamente atendidas dentro das regras atuais do Perfil e confirmar a logística; não assumir que declarar uma região elimina o fator distância.

Preencher serviços, horário real, site canônico e informações comerciais. Usar imagens reais da empresa quando disponíveis. Substituir os placeholders de selos pelos arquivos e vínculos oficiais. Pedir avaliações espontâneas a clientes reais, sem recompensa ou filtragem de avaliações negativas, e responder com contexto.

## Conteúdo e reputação — próximos 30 a 90 dias

- Documentar um caso real autorizado: situação inicial, trabalho realizado, período e resultado mensurável. Não atribuir experiências de outras empresas à carteira atual.
- Produzir guias úteis a partir das dúvidas do atendimento: como separar verba de anúncios e gestão; como acompanhar contatos do Google até o WhatsApp; quando combinar Google Ads e SEO local. Cada guia deve ter exemplos próprios revisados e fontes quando necessárias.
- Criar páginas adicionais por cidade somente quando existir conteúdo e oferta próprios que ajudem o visitante. Uma troca de nome de cidade em texto idêntico não acrescenta valor.
- Buscar referências locais legítimas: associações, fornecedores e parceiros com relação real. Não comprar pacotes de backlinks ou publicar listagens automáticas.
- Comparar períodos de 28 dias: cliques e impressões não relacionados à marca, páginas de entrada, consultas de serviços e contatos qualificados. Avaliar a posição por consulta e região com cautela, nunca como promessa única de “top 1”.

## Fontes oficiais consultadas

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br)
- [Classificação local: relevância, distância e destaque](https://support.google.com/business/answer/7091?hl=pt-BR)
- [Títulos na Pesquisa](https://developers.google.com/search/docs/appearance/title-link?hl=pt-br)
- [Políticas de spam: doorways, excesso de palavras-chave e links](https://developers.google.com/search/docs/essentials/spam-policies?hl=pt-br)
- [Dados estruturados de empresas locais](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=pt-br)
- [Criação e envio de sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br)
- [Configuração da Vercel](https://vercel.com/docs/project-configuration)

## Complementos de SEO e agradecimento — 29/09/2026

- `/obrigado/` tem título, descrição e canonical próprios, com `noindex,follow`. Fica fora de `sitemap.xml` e `llms.txt`; o robots permite rastrear a página para que o Google leia o `noindex`.
- Contato e Sobre usam `ContactPage` e `AboutPage`. A imagem de compartilhamento possui uma entidade `ImageObject`, ligada às páginas. A organização informa logo e imagem existentes.
- Artigos reais publicados têm identificador próprio, vínculo com `WebPage.mainEntity` e metadados sociais de publicação/modificação. Nenhum artigo foi criado ou publicado nesta alteração.
- Open Graph declara o tipo da imagem; Twitter inclui o texto alternativo da imagem.
- Validação local: `npm run build`, `npm test`, `node scripts/verify-seo.mjs` e `node scripts/verify-contact.mjs`. O último verifica formulário, agradecimento, teclado/foco, acessibilidade e larguras de 320 a 1440 px, sem enviar mensagens.

### Fluxo confirmado do formulário

O usuário optou por manter o envio pelo aplicativo de e-mail. Preenchimento → preparação e revisão → abrir o e-mail ou copiar → enviar no aplicativo → clicar em “Já enviei meu e-mail” → `/obrigado/`.

Não há redirecionamento automático ao abrir o aplicativo ou copiar a mensagem: essas ações não comprovam envio. A página agradece o interesse, explica o próximo passo e oferece WhatsApp, retorno ao formulário e início. Acesso direto também não afirma entrega. Dados pessoais não são levados na URL nem persistidos em armazenamento do navegador.

Não usar visitas a `/obrigado/` como prova de lead recebido: o envio por `mailto:` não fornece confirmação de entrega ao site. Uma integração futura deve redirecionar apenas após uma resposta de sucesso do serviço de envio. O contêiner Google Tag Manager `GTM-TZZLJG72`, informado pelo usuário, foi instalado posteriormente no layout compartilhado. A instalação não adiciona eventos de conversão nem envia os campos do formulário ao dataLayer. Tags e gatilhos publicados no próprio GTM são administrados separadamente.

Referência: [Google — bloquear indexação com noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
