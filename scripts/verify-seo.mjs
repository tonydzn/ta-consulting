import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { mkdir, writeFile } from 'node:fs/promises';
import { serve } from './serve.mjs';
import { createPages, indexableRoutes } from './build.mjs';
import { site } from '../src/site.mjs';

process.env.PORT = '0';
const server=serve();
await once(server,'listening');
const base=`http://127.0.0.1:${server.address().port}`;
let browser;
const report={routes:[],errors:[],viewports:[]};
try {
  browser=await chromium.launch({channel:'chrome',headless:true});
  const context=await browser.newContext({reducedMotion:'reduce'});
  const page=await context.newPage();
  page.on('pageerror',e=>report.errors.push(e.message));
  await mkdir('.impeccable/review',{recursive:true});
  const pages=createPages();
  for(const path of pages.keys()){
    const response=await page.goto(base+path);
    assert.equal(response.status(),200,path);
    assert.equal(await page.locator('h1').count(),1,path);
    assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'),site.origin+path);
    assert(await page.locator('.whatsapp-float').isVisible());
    assert((await page.locator('.whatsapp-float').getAttribute('href')).startsWith('https://wa.me/5518981034411?'));
    report.routes.push({path,status:response.status()});
  }
  for(const width of [1440,768,390,320]){
    await page.setViewportSize({width,height:960});
    for(const path of ['/','/trafego-pago/','/regiao-presidente-prudente/']){
      await page.goto(base+path,{waitUntil:'networkidle'});
      await page.evaluate(()=>document.fonts.ready);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${path}: ${width}`);
      if(width===1440||width===390){
        const name=path==='/'?'home':path.split('/')[1];
        await page.screenshot({path:`.impeccable/review/seo-${name}-${width}.png`,fullPage:true});
      }
      report.viewports.push({path,width,overflow:false});
    }
  }
  const sitemap=await (await context.request.get(base+'/sitemap.xml')).text();
  for(const path of indexableRoutes(pages))assert(sitemap.includes(`<loc>${site.origin}${path}</loc>`));
  assert(!sitemap.includes(site.origin+'/insights/'));
  assert.equal((await context.request.get(base+'/rota-inexistente/')).status(),404);
  assert.equal((await context.request.get(base+'/trafego-pago',{maxRedirects:0})).status(),301);
  assert.equal(report.errors.length,0,report.errors.join('\n'));
  await writeFile('.impeccable/review/seo-browser.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
} finally {
  await browser?.close();
  await new Promise(resolve=>server.close(resolve));
}
