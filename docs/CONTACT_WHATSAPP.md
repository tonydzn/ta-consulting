# Formulário do site → WhatsApp

Fluxo: `/contato/` → `POST /api/contato` (Vercel Function) → `https://webhook.tonyananias.com.br/webhook/ta-contato` (n8n) → Evolution API → WhatsApp comercial **(18) 98103-4411**.

O webhook já está definido no código (`DEFAULT_WEBHOOK_URL` em `api/contato.mjs`); não é preciso configurar nada na Vercel para funcionar.

```
Visitante ──► /api/contato (Vercel)          ──► n8n Webhook ──► Montar mensagem ──► Evolution sendText ──► WhatsApp
              valida, honeypot, checa origem      Header Auth                                  │
              e envia com X-TA-Secret                                                         └─ erro → 502 → site mostra fallback por e-mail
```

Se qualquer etapa falhar, o formulário não perde o lead: mostra a mensagem pronta para enviar por e-mail ou copiar.
No envio válido, dispara `Lead` no Meta Pixel e `generate_lead` no dataLayer; no sucesso, leva para `/obrigado/`.

## 1. Segredo (opcional, recomendado)

Para que só o site consiga disparar o webhook, gere uma string aleatória (`openssl rand -hex 32`), coloque-a na variável `N8N_WEBHOOK_SECRET` da Vercel e ative Header Auth no nó Webhook (Name `X-TA-Secret`, Value = o segredo). Sem isso, o webhook funciona sem autenticação.

Se a credencial Header Auth do n8n usar outro Name (ex.: `apikey`), defina também `N8N_WEBHOOK_SECRET_HEADER` na Vercel com esse mesmo nome. O Value da credencial precisa ser igual a `N8N_WEBHOOK_SECRET`.

## 2. n8n

1. **Workflows → Import from file** → `automations/n8n-formulario-whatsapp.json`.
2. Nó **Webhook formulário**: path `ta-contato`, método POST. (Header Auth só se usar o segredo do passo 1.)
3. Nó **Evolution — enviar texto**:
   - URL: troque `https://SEU-EVOLUTION` e `SUA-INSTANCIA` pela URL do seu servidor Evolution e o nome da instância conectada ao WhatsApp que vai **enviar** o aviso.
   - Credential (Header Auth): Name `apikey`, Value = API key da Evolution (global ou da instância).
4. Nó **Montar mensagem**: o destino está na constante `DESTINO = '5518981034411'`. Troque se quiser receber em outro número.
5. Salve e **ative** o workflow. A Production URL deve ser `https://webhook.tonyananias.com.br/webhook/ta-contato`.

> A instância que envia precisa ser um número diferente do que recebe — o WhatsApp não entrega mensagem de um número para ele mesmo como notificação. Se a Evolution estiver conectada no próprio (18) 98103-4411, mande para outro número seu ou para um grupo (use o JID do grupo, `...@g.us`, em `DESTINO`).

O corpo segue a Evolution API v2 (`{ number, text }`). Na v1 o formato é `{ number, textMessage: { text } }` — ajuste o JSON Body do nó se for o caso.

## 3. Vercel (opcional)

| Nome | Quando usar |
| --- | --- |
| `N8N_WEBHOOK_URL` | só para trocar o webhook padrão (ex.: usar a URL de teste) |
| `N8N_WEBHOOK_SECRET` | se ativar Header Auth no n8n |
| `N8N_WEBHOOK_SECRET_HEADER` | se o Name da credencial Header Auth não for `X-TA-Secret` (ex.: `apikey`) |

Depois de mudar variáveis, faça um novo deploy.

## 4. Testar

```
curl -X POST https://tonyananias.com.br/api/contato \
  -H 'Content-Type: application/json' \
  -d '{"name":"Teste","email":"teste@example.com","challenge":"Teste de integração"}'
```

Resposta esperada: `{"ok":true}` e a mensagem no WhatsApp. Erros comuns:

- `502` → n8n recusou (workflow inativo, segredo diferente) ou Evolution falhou. Veja Executions no n8n.

## 5. Conversão no GTM / Meta

O evento `Lead` do Meta Pixel já é disparado pelo próprio site (`fbq`) no envio válido do formulário, uma vez por página, junto com `generate_lead` no dataLayer. Não crie outra tag de Lead do Pixel no GTM para esse evento, ou a conversão conta em dobro. Use `generate_lead` no GTM só para outras plataformas (ex.: conversão do Google Ads). UTMs, `fbclid` e `gclid` da primeira página visitada na sessão também chegam na mensagem do WhatsApp.
