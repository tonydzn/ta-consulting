import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.BASE_URL || 'http://localhost:4321';
await mkdir('.impeccable/review', {recursive:true});
const browser = await chromium.launch({channel:'chrome',headless:true});
const errors = [];
try {
  const page = await browser.newPage({reducedMotion:'reduce'});
  page.on('pageerror', e=>errors.push(e.message));
  for (const width of [1440,768,390,320]) {
    await page.setViewportSize({width,height:960});
    await page.goto(base,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow: ${width}`);
    await page.screenshot({path:`.impeccable/review/human-${width}.png`,fullPage:true});
    await page.locator('[data-growth]').screenshot({path:`.impeccable/review/chart-${width}.png`});
    if (width===1440 || width===390) await page.locator('#laboratorio').screenshot({path:`.impeccable/review/lab-${width}.png`});
  }
  for (let mode=0;mode<3;mode++) {
    await page.locator(`[data-chart="${mode}"]`).click();
    assert.equal(await page.locator(`[data-chart="${mode}"]`).getAttribute('aria-pressed'),'true');
    await page.locator('#chart-scrub').focus();
    await page.keyboard.press('End');
    assert.equal(await page.locator('#chart-scrub').inputValue(),'4');
    await page.keyboard.press('Home');
    assert.equal(await page.locator('#chart-scrub').inputValue(),'0');
  }
  for (const id of ['lead-rate','sale-rate']) {
    await page.locator('#'+id).focus();
    await page.keyboard.press('End');
  }
  assert.equal(await page.locator('[data-leads]').textContent(),'1.000');
  assert.equal(await page.locator('[data-sales]').textContent(),'300');
  await page.locator('[data-funnel-reset]').click();
  assert.equal(await page.locator('[data-leads]').textContent(),'300');
  assert.equal(await page.locator('[data-sales]').textContent(),'30');
  const axe = await new AxeBuilder({page}).include('[data-growth]').include('#laboratorio').withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  const result={errors,violations:axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))};
  await writeFile('.impeccable/review/human-verification.json',JSON.stringify(result,null,2));
  console.log(JSON.stringify(result,null,2));
  assert.equal(errors.length,0);
  assert.equal(axe.violations.length,0);
} finally { await browser.close(); }
