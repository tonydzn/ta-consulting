import { spawnSync } from 'node:child_process';
import { watch } from 'node:fs';
import { serve } from './serve.mjs';
function compile(){const result=spawnSync(process.execPath,['scripts/build.mjs'],{stdio:'inherit'});if(result.status)console.error('Falha no build; corrija a fonte e salve novamente.');return result.status;}
if(compile())process.exit(1);
const server=serve();let timer;
const watchers=['src','public'].map(path=>watch(path,{recursive:true},()=>{clearTimeout(timer);timer=setTimeout(compile,150);}));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>{watchers.forEach(w=>w.close());server.close();process.exit(0);});
