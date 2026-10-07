# Formulário do site → WhatsApp

Fluxo: `/contato/` → `POST /api/contato` (Vercel Function) → webhook do n8n → Evolution API → WhatsApp comercial **(18) 98103-4411**.

```
Visitante ──► /api/contato (Vercel)          ──► n8n Webhook ──► Montar mensagem ──► Evolution sendText ──► WhatsApp
              valida, honeypot, checa origem      Header Auth                                  │
              e envia com X-TA-Secret                                                         └─ erro → 502 → site mostra fallback por e-mail
```

Se qualquer etapa falhar, o formulário não perde o lead: mostra a mensagem pronta para enviar por e-mail ou copiar.
No sucesso, dispara `generate_lead` no dataLayer (GTM) e leva para `/obrigado/`.

## 1. Gerar o segredo compartilhado

Qualquer string longa e aleatória. Exemplo no terminal:

```
openssl rand -hex 32
```

Esse valor vai em dois lugares: na credencial do n8n e na variável da Vercel.

## 2. n8n

1. **Workflows → Import from file** → `automations/n8n-formulario-whatsapp.json`.
2. Nó **Webhook formulário** → Credential for Header Auth → criar nova:
   - Name: `X-TA-Secret`
   - Value: o segredo do passo 1
3. Nó **Evolution — enviar texto**:
   - URL: troque `https://SEU-EVOLUTION` e `SUA-INSTANCIA` pela URL do seu servidor Evolution e o nome da instância conectada ao WhatsApp que vai **enviar** o aviso.
   - Credential (Header Auth): Name `apikey`, Value = API key da Evolution (global ou da instância).
4. Nó **Montar mensagem**: o destino está na constante `DESTINO = '5518981034411'`. Troque se quiser receber em outro número.
5. Salve e **ative** o workflow. Copie a **Production URL** do nó Webhook (termina em `/webhook/ta-contato`).

> A instância que envia precisa ser um número diferente do que recebe — o WhatsApp não entrega mensagem de um número para ele mesmo como notificação. Se a Evolution estiver conectada no próprio (18) 98103-4411, mande para outro número seu ou para um grupo (use o JID do grupo, `...@g.us`, em `DESTINO`).

O corpo segue a Evolution API v2 (`{ number, text }`). Na v1 o formato é `{ number, textMessage: { text } }` — ajuste o JSON Body do nó se for o caso.

## 3. Vercel

Project → Settings → Environment Variables (Production e Preview):

| Nome | Valor |
| --- | --- |
| `N8N_WEBHOOK_URL` | Production URL do webhook |
| `N8N_WEBHOOK_SECRET` | o segredo do passo 1 |

Faça um novo deploy depois de salvar as variáveis.

## 4. Testar

```
curl -X POST https://tonyananias.com.br/api/contato \
  -H 'Content-Type: application/json' \
  -d '{"name":"Teste","email":"teste@example.com","challenge":"Teste de integração"}'
```

Resposta esperada: `{"ok":true}` e a mensagem no WhatsApp. Erros comuns:

- `503` → variáveis da Vercel ausentes (ou deploy feito antes de criá-las).
- `502` → n8n recusou (segredo diferente, workflow inativo) ou Evolution falhou. Veja Executions no n8n.

## 5. Conversão no GTM / Meta

Crie no GTM um acionador de Evento personalizado `generate_lead` e use-o na tag de Lead do Meta Pixel / conversão do Google Ads. UTMs, `fbclid` e `gclid` da primeira página visitada na sessão também chegam na mensagem do WhatsApp.
