import test from 'node:test';
import assert from 'node:assert/strict';
import { createPages, publishedArticles, indexableRoutes } from '../scripts/build.mjs';
import { services, site } from '../src/site.mjs';
import { serviceSeo } from '../src/seo.mjs';
import { notFoundPage } from '../src/pages.mjs';
import { runInNewContext } from 'node:vm';

const article = {
  slug:'artigo-de-teste',status:'published',title:'Título de teste',description:'Conteúdo exclusivo de teste; nunca publicado no site.',
  category:'Analytics',author:'Tony Ananias',date:'2026-01-01',blocks:[{type:'paragraph',text:'Exemplo <script>alert("x")</script> & dados.'}],
};

test('GTM correto em todas as páginas, artigos e 404, sem instalações duplicadas',()=>{
  const pages=createPages([article]);
  pages.set('/404/',notFoundPage());
  for(const [route,html] of pages){
    assert.equal((html.match(/googletagmanager\.com\/gtm\.js/g)||[]).length,1,route);
    assert.equal((html.match(/googletagmanager\.com\/ns\.html\?id=GTM-TZZLJG72/g)||[]).length,1,route);
    assert.match(html,/<head><meta charset="utf-8"><!-- Google Tag Manager -->/);
    assert.match(html,/<body[^>]*><!-- Google Tag Manager \(noscript\) -->/);
    const script=html.match(/<!-- Google Tag Manager -->\s*<script>(.*?)<\/script>/s)[1];
    const inserted=[];
    const prior={event:'existing-event'};
    const window={dataLayer:[prior]};
    const first={parentNode:{insertBefore:(node,before)=>{assert.equal(before,first);inserted.push(node);}}};
    const document={getElementsByTagName:()=>[first],createElement:()=>({})};
    runInNewContext(script,{window,document});
    assert.equal(window.dataLayer[0],prior);
    assert.equal(window.dataLayer[1].event,'gtm.js');
    assert.equal(inserted.length,1);
    assert.equal(inserted[0].async,true);
    assert.equal(inserted[0].src,'https://www.googletagmanager.com/gtm.js?id=GTM-TZZLJG72');
  }
});

test('Todas as rotas têm HTML estático, H1 único, canonical próprio e JSON-LD válido',()=>{
  const pages=createPages();
  for(const route of ['/','/servicos/','/google-ads/','/meta-ads/','/automacao/','/ai/','/analytics-tracking/','/sobre/','/insights/','/contato/'])assert(pages.has(route));
  const titles=new Set();
  for(const [route,html] of pages){
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route);
    assert(html.includes(`<link rel="canonical" href="https://tonyananias.com.br${route}">`),route);
    assert(html.includes('<html lang="pt-BR">'));
    const title=html.match(/<title>(.*?)<\/title>/)[1];assert(!titles.has(title));titles.add(title);
    const json=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert(json['@graph'].some(x=>x['@type']==='Person'));
    assert(json['@graph'].some(x=>Array.isArray(x['@type'])&&x['@type'].includes('ProfessionalService')));
    if(route!=='/')assert(json['@graph'].some(x=>x['@type']==='BreadcrumbList'));
  }
});

test('Rascunhos não geram URLs, links nem schema Article; nenhuma publicação fictícia',()=>{
  const pages=createPages([{...article,status:'draft'}]);
  assert(!pages.has('/insights/artigo-de-teste/'));
  assert(!pages.get('/insights/').includes('Título de teste'));
  assert(![...pages.values()].some(x=>x.includes('"@type":"Article"')));
});

test('Artigo publicado gera rota, índice, breadcrumbs e conteúdo escapado',()=>{
  const pages=createPages([article]);
  const html=pages.get('/insights/artigo-de-teste/');
  assert(html.includes('&lt;script&gt;'));
  assert(!html.includes('<script>alert'));
  assert(html.includes('"@type":"Article"'));
  assert(pages.get('/insights/').includes('href="/insights/artigo-de-teste/"'));
});

test('Publicação rejeita traversal, duplicidade, data fictícia, autor não configurado e link executável',()=>{
  for(const broken of [
    {...article,slug:'../../contato'}, {...article,date:'2026-02-30'}, {...article,date:'2099-01-01'},
    {...article,author:'Autor inventado'}, {...article,blocks:[]}, {...article,sources:[{title:'x',url:'javascript:alert(1)'}]},
  ])assert.throws(()=>publishedArticles([broken]));
  assert.throws(()=>publishedArticles([article,article]));
});

test('Links locais e âncoras antigas resolvem em páginas existentes',()=>{
  const pages=createPages();
  for(const html of pages.values())for(const match of html.matchAll(/href="(\/[^"?]*)"/g)){
    const [route,anchor]=match[1].split('#');
    if(route.startsWith('/assets/'))continue;
    assert(pages.has(route),route);
    if(anchor)assert(pages.get(route).includes(`id="${anchor}"`),anchor);
  }
  for(const id of ['home','expertise','automation','experience','about','contact'])assert(pages.get('/').includes(`id="${id}"`));
});

test('SEO de serviços usa intenção própria, canonical do host final e breadcrumbs da navegação',()=>{
  const pages=createPages();
  assert.equal(site.origin,'https://tonyananias.com.br');
  const descriptions=new Set();
  for(const service of services){
    const path=`/${service.slug}/`,html=pages.get(path);
    assert(serviceSeo[service.slug],path);
    const description=html.match(/<meta name="description" content="([^"]+)"/)[1];
    assert(!descriptions.has(description),path);descriptions.add(description);
    const graph=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'];
    const trail=graph.find(x=>x['@type']==='BreadcrumbList').itemListElement;
    assert.deepEqual(trail.map(x=>x.item),[site.origin+'/',site.origin+'/servicos/',site.origin+path]);
    assert.equal(graph.find(x=>x['@type']==='WebPage').mainEntity['@id'],site.origin+path+'#service');
    assert.equal(graph.find(x=>Array.isArray(x['@type'])).telephone,'+5518981034411');
    assert(!html.includes('https://www.tonyananias.com.br'));
  }
});

test('Índice vazio fica fora do sitemap; publicação real torna Insights indexável',()=>{
  const empty=createPages();
  assert(empty.get('/insights/').includes('content="noindex,follow"'));
  assert(!indexableRoutes(empty).includes('/insights/'));
  const published=createPages([article]);
  assert(indexableRoutes(published).includes('/insights/'));
  assert(indexableRoutes(published).includes('/insights/artigo-de-teste/'));
  assert(indexableRoutes(empty).includes('/regiao-presidente-prudente/'));
  assert(indexableRoutes(empty).includes('/trafego-pago/'));
});

test('Agradecimento é acessível pelo formulário, mas não é indexável nem confirma entrega',()=>{
  const pages=createPages();
  const html=pages.get('/obrigado/');
  assert(html.includes('content="noindex,follow"'));
  assert(!indexableRoutes(pages).includes('/obrigado/'));
  assert(pages.get('/contato/').includes('href="/obrigado/"'));
  assert(html.includes('Esta página não confirma o recebimento.'));
});

test('Metadados completos e entidades específicas nas páginas e nos artigos',()=>{
  const pages=createPages([article]);
  const descriptions=new Set();
  for(const [route,html] of pages){
    const description=html.match(/<meta name="description" content="([^"]+)"/)[1];
    assert(!descriptions.has(description),route);descriptions.add(description);
    assert(html.includes(`<meta property="og:url" content="${site.origin}${route}">`));
    assert(html.includes('<meta name="twitter:image:alt"'));
    const graph=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'];
    const page=graph.find(x=>x['@id']===site.origin+route+'#webpage');
    assert(graph.some(x=>x['@id']===page.primaryImageOfPage['@id']));
    if(route==='/contato/')assert.equal(page['@type'],'ContactPage');
    if(route==='/sobre/')assert.equal(page['@type'],'AboutPage');
    if(route==='/insights/artigo-de-teste/'){
      assert.equal(page.mainEntity['@id'],site.origin+route+'#article');
      assert(html.includes('<meta property="article:published_time" content="2026-01-01">'));
    }
  }
});
