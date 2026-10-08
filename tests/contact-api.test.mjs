import test from 'node:test';
import assert from 'node:assert/strict';
import { handle } from '../api/contato.mjs';

const env = { N8N_WEBHOOK_URL: 'https://n8n.example.com/webhook/ta-contato', N8N_WEBHOOK_SECRET: 's3cr3t' };
const valid = { name: 'Maria Souza', email: 'maria@clinica.com.br', company: 'Clínica X', phone: '(18) 99999-0000', challenge: 'Quero mais pacientes.', page: '/contato/', utm: { utm_source: 'facebook', utm_campaign: 'captacao', evil: 'x' } };
const request = (body, headers = {}) => new Request('https://tonyananias.com.br/api/contato', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', host: 'tonyananias.com.br', origin: 'https://tonyananias.com.br', ...headers },
  body: typeof body === 'string' ? body : JSON.stringify(body),
});
const recorder = (status = 200) => { const calls = []; const send = async (url, init) => { calls.push({ url, init }); return new Response('{}', { status }); }; return { calls, send }; };

test('Envia ao n8n com segredo, campos limpos e só UTMs permitidas', async () => {
  const { calls, send } = recorder();
  const res = await handle(request(valid), env, send);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, env.N8N_WEBHOOK_URL);
  assert.equal(calls[0].init.headers['X-TA-Secret'], 's3cr3t');
  const sent = JSON.parse(calls[0].init.body);
  assert.equal(sent.name, 'Maria Souza');
  assert.deepEqual(sent.utm, { utm_source: 'facebook', utm_campaign: 'captacao' });
  assert.ok(sent.submittedAt);
});

test('Recusa campos obrigatórios ausentes e e-mail inválido', async () => {
  const { calls, send } = recorder();
  assert.equal((await handle(request({ ...valid, challenge: '  ' }), env, send)).status, 422);
  assert.equal((await handle(request({ ...valid, email: 'nao-e-email' }), env, send)).status, 422);
  assert.equal((await handle(request('{quebrado'), env, send)).status, 400);
  assert.equal(calls.length, 0);
});

test('Honeypot preenchido finge sucesso sem enviar', async () => {
  const { calls, send } = recorder();
  const res = await handle(request({ ...valid, website: 'http://spam.example' }), env, send);
  assert.equal(res.status, 200);
  assert.equal(calls.length, 0);
});

test('Bloqueia origem de outro domínio', async () => {
  const { calls, send } = recorder();
  const res = await handle(request(valid, { origin: 'https://outro-site.com' }), env, send);
  assert.equal(res.status, 403);
  assert.equal(calls.length, 0);
});

test('Falha do n8n ou configuração ausente devolve erro para o fallback por e-mail', async () => {
  assert.equal((await handle(request(valid), env, recorder(500).send)).status, 502);
  assert.equal((await handle(request(valid), env, async () => { throw new Error('timeout'); })).status, 502);
});

test('Sem variáveis, usa o webhook padrão e não envia header de segredo', async () => {
  const { calls, send } = recorder();
  const res = await handle(request(valid), {}, send);
  assert.equal(res.status, 200);
  assert.equal(calls[0].url, 'https://webhook.tonyananias.com.br/webhook/ta-contato');
  assert.equal(calls[0].init.headers['X-TA-Secret'], undefined);
});

test('Limita o tamanho dos campos', async () => {
  const { calls, send } = recorder();
  await handle(request({ ...valid, challenge: 'a'.repeat(5000) }), env, send);
  assert.equal(JSON.parse(calls[0].init.body).challenge.length, 1800);
});
