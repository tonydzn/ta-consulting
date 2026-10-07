// Recebe o formulário de /contato/, valida e repassa ao webhook do n8n,
// que envia a mensagem ao WhatsApp comercial via Evolution API.
//
// Variáveis de ambiente (Vercel → Settings → Environment Variables):
//   N8N_WEBHOOK_URL     URL de produção do nó Webhook no n8n
//   N8N_WEBHOOK_SECRET  valor enviado no header X-TA-Secret (o mesmo da credencial Header Auth no n8n)

const limits = { name: 120, email: 254, company: 160, phone: 30, challenge: 1800 };
const required = ['name', 'email', 'challenge'];
const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
});

const clean = (value, max) => String(value ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);

export function validate(input) {
  if (!input || typeof input !== 'object') return { error: 'Dados inválidos.' };
  const data = {};
  for (const [key, max] of Object.entries(limits)) data[key] = clean(input[key], max);
  for (const key of required) if (!data[key]) return { error: 'Preencha os campos obrigatórios.' };
  if (!emailPattern.test(data.email)) return { error: 'Informe um e-mail válido.' };
  const utm = {};
  if (input.utm && typeof input.utm === 'object') {
    for (const key of utmKeys) { const value = clean(input.utm[key], 200); if (value) utm[key] = value; }
  }
  return { data: { ...data, utm, page: clean(input.page, 200) || '/contato/' } };
}

export async function handle(request, env = process.env, send = fetch) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (origin && host) {
    try { if (new URL(origin).host !== host) return json(403, { ok: false, error: 'Origem não permitida.' }); }
    catch { return json(403, { ok: false, error: 'Origem não permitida.' }); }
  }

  let body;
  try { body = await request.json(); } catch { return json(400, { ok: false, error: 'Dados inválidos.' }); }

  // Honeypot: campo invisível para pessoas. Se vier preenchido, finge sucesso e descarta.
  if (clean(body?.website, 200)) return json(200, { ok: true });

  const { data, error } = validate(body);
  if (error) return json(422, { ok: false, error });

  if (!env.N8N_WEBHOOK_URL || !env.N8N_WEBHOOK_SECRET) {
    console.error('contato: N8N_WEBHOOK_URL ou N8N_WEBHOOK_SECRET não configurado');
    return json(503, { ok: false, error: 'Envio indisponível no momento.' });
  }

  try {
    const response = await send(env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-TA-Secret': env.N8N_WEBHOOK_SECRET },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString(), userAgent: clean(request.headers.get('user-agent'), 300) }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error('contato: n8n respondeu', response.status);
      return json(502, { ok: false, error: 'Não foi possível enviar agora.' });
    }
    return json(200, { ok: true });
  } catch (err) {
    console.error('contato: falha ao chamar o n8n', err?.name || err);
    return json(502, { ok: false, error: 'Não foi possível enviar agora.' });
  }
}

// Assinatura Web padrão das Vercel Functions (runtime Node.js).
export function POST(request) {
  return handle(request);
}
