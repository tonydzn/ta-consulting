import { regionalPage } from '../src/regional.mjs';
import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, services, categories, segments } from '../src/site.mjs';
import { home, servicesPage, servicePage, serviceAudiencePage, segmentPage, aboutPage, insightsPage, contactPage, thankYouPage, articlePage, privacyPage, notFoundPage } from '../src/pages.mjs';
import { escape } from '../src/components.mjs';
import { cardapioPage } from '../src/cardapio-ia.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export function publishedArticles(articles) {
  const slugs = new Set();
  return articles.filter(a => a.status === 'published').map(a => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug) || slugs.has(a.slug)) throw new Error(`Slug inválido ou duplicado: ${a.slug}`);
    slugs.add(a.slug);
    if (!a.title || !a.description || !categories.includes(a.category) || a.author !== 'Tony Ananias') throw new Error(`Metadados incompletos: ${a.slug}`);
    const validDate = d => /^\d{4}-\d{2}-\d{2}$/.test(d || '') && !Number.isNaN(Date.parse(d)) && new Date(d).toISOString().slice(0,10) === d;
    if (!validDate(a.date) || a.date > new Date().toISOString().slice(0,10) || (a.modified && (!validDate(a.modified) || a.modified < a.date || a.modified > new Date().toISOString().slice(0,10)))) throw new Error(`Data inválida: ${a.slug}`);
    if (!Array.isArray(a.blocks) || !a.blocks.length) throw new Error(`Conteúdo ausente: ${a.slug}`);
    for (const block of a.blocks) {
      if (!['paragraph','heading','list'].includes(block.type)) throw new Error(`Bloco inválido: ${a.slug}`);
      if (block.type === 'list' ? !Array.isArray(block.items) || !block.items.length || block.items.some(x=>typeof x!=='string') : typeof block.text !== 'string' || !block.text.trim()) throw new Error(`Texto inválido: ${a.slug}`);
    }
    for (const source of a.sources || []) {
      if (!source.title || !/^https?:\/\//.test(source.url)) throw new Error(`Referência inválida: ${a.slug}`);
      new URL(source.url);
    }
    return a;
  }).sort((a,b)=>b.date.localeCompare(a.date));
}

export function createPages(articles = []) {
  const published = publishedArticles(articles);
  return new Map([
    ['/',home()],['/servicos/',servicesPage()],...services.map(s=>[`/${s.slug}/`,servicePage(s)]),...services.flatMap(service=>segments.map(segment=>[`/${service.slug}/${segment.slug}/`,serviceAudiencePage(service,segment)])),...segments.map(segment=>[`/${segment.slug}/`,segmentPage(segment)]),
    ['/sobre/',aboutPage()],['/insights/',insightsPage(published)],['/contato/',contactPage()],['/obrigado/',thankYouPage()],
    ['/regiao-presidente-prudente/',regionalPage()],['/privacidade/',privacyPage()],['/cardapio-ia/',cardapioPage()],...published.map(a=>[`/insights/${a.slug}/`,articlePage(a)]),
  ]);
}

export function indexableRoutes(pages) {
  return [...pages].filter(([,html])=>!/<meta name="robots" content="[^"]*noindex/.test(html)).map(([path])=>path);
}

export async function build() {
  const articles = JSON.parse(await readFile(resolve(root,'src/content/articles.json'),'utf8'));
  const pages = createPages(articles);
  const out = resolve(root,'dist');
  // Somente a saída gerada é recriada. O ZIP original e todas as fontes são preservados.
  await rm(out,{recursive:true,force:true});
  await mkdir(out,{recursive:true});
  await cp(resolve(root,'public'),out,{recursive:true,filter:source=>!source.endsWith('.ttf')});
  for (const [path, html] of pages) {
    const dest=resolve(out,'.'+path,'index.html');
    await mkdir(dirname(dest),{recursive:true});
    await writeFile(dest,html);
  }
  await writeFile(resolve(out,'404.html'),notFoundPage());
  await writeFile(resolve(out,'assets/site.css'),(await readFile(resolve(root,'src/styles.css'),'utf8'))+'\n'+(await readFile(resolve(root,'src/experience.css'),'utf8'))+'\n'+(await readFile(resolve(root,'src/cardapio-ia.css'),'utf8')));
  await writeFile(resolve(out,'assets/site.js'),(await readFile(resolve(root,'src/client.js'),'utf8'))+'\n'+(await readFile(resolve(root,'src/experience.js'),'utf8'))+'\n'+(await readFile(resolve(root,'src/cardapio-ia.js'),'utf8')));
  const urls=indexableRoutes(pages).map(path=>`  <url><loc>${escape(site.origin+path)}</loc></url>`).join('\n');
  await writeFile(resolve(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  await writeFile(resolve(out,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
  await writeFile(resolve(out,'llms.txt'),`# TA Consulting\n\nConsultoria liderada por Tony Ananias, especialista em performance marketing com mais de 15 anos de experiência, conforme histórico profissional fornecido.\n\nServiços: Google Ads, Meta Ads, mídia paga, SEO local, Analytics e Tracking, automação de marketing, CRM, n8n e inteligência artificial. Foco em empresas de Presidente Prudente e região. Experiência profissional no Brasil e nos Estados Unidos.\n\nWebsite: ${site.origin}/\nContato: ${site.email}\n\n## Páginas\n${indexableRoutes(pages).map(p=>`- ${site.origin}${p}`).join('\n')}\n`);
  console.log(`Build concluído: ${pages.size} páginas + 404 em dist/.`);
  return pages;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
