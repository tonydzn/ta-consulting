import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const project = resolve(dirname(fileURLToPath(import.meta.url)),'..');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2'};
export function serve() {
  const root=resolve(project,'dist');
  const portIndex=process.argv.indexOf('--port');
  const port=Number(portIndex>=0?process.argv[portIndex+1]:process.env.PORT||4321);
  const server=http.createServer(async(req,res)=>{
    try {
      if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
      const url=new URL(req.url,'http://localhost');
      const path=decodeURIComponent(url.pathname);
      if (path.includes('\0')) throw new Error('Invalid path');
      let file=resolve(root,'.'+path);
      if (file!==root && !file.startsWith(root+sep)) {res.writeHead(403);res.end();return;}
      let status=200;
      try {
        const info=await stat(file);
        if(info.isDirectory()) {
          if(!path.endsWith('/')) {res.writeHead(301,{Location:url.pathname+'/'+url.search});res.end();return;}
          file=resolve(file,'index.html');
        }
      } catch {file=resolve(root,'404.html');status=404;}
      const body=await readFile(file);
      res.writeHead(status,{'Content-Type':types[extname(file)]||'application/octet-stream','Content-Length':body.length,'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Frame-Options':'DENY','Cache-Control':'no-cache'});
      res.end(req.method==='HEAD'?undefined:body);
    } catch {res.writeHead(400,{'Content-Type':'text/plain; charset=utf-8'});res.end('Não foi possível abrir este endereço.');}
  });
  server.listen(port,'127.0.0.1',()=>console.log(`TA Consulting: http://localhost:${port}`));
  return server;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))serve();
