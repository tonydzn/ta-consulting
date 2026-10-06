import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { writeFile } from 'node:fs/promises';
const chrome=await launch({chromeFlags:['--headless','--no-sandbox','--disable-dev-shm-usage']});
try{
 const result=[];
 for(const [path,mode] of [['/','mobile'],['/','desktop'],['/contato/','mobile']]){
  const report=await lighthouse('http://localhost:4321'+path,{port:chrome.port,output:'json',logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo'],...(mode==='desktop'?{preset:'desktop'}:{})});
  const name=(path==='/'?'home':'contato')+'-'+mode;
  await writeFile('.impeccable/review/lighthouse-'+name+'.json',report.report);
  const audits=report.lhr.audits;
  const item={name,scores:Object.fromEntries(Object.entries(report.lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)])),metrics:Object.fromEntries(['first-contentful-paint','largest-contentful-paint','cumulative-layout-shift','total-blocking-time','speed-index'].map(k=>[k,{value:audits[k].numericValue,display:audits[k].displayValue}])),failures:Object.values(audits).filter(a=>a.score!==null&&a.score<.9).map(a=>({id:a.id,title:a.title,display:a.displayValue}))};
  result.push(item);console.log(JSON.stringify(item));
 }
 await writeFile('.impeccable/review/performance.json',JSON.stringify(result,null,2));
}finally{await chrome.kill();}
