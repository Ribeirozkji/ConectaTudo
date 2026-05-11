# Deploy e hospedagem — ConectaTudo

Este guia descreve um caminho prático para publicar o projeto atual, considerando o estado do repositório:
- frontend React + Vite pronto para build estático;
- backend ainda sem código de servidor (apenas dependências instaladas).

## 1) Pré-requisitos
- Node.js 20+ instalado
- npm 10+
- Conta em um provedor para frontend estático (Vercel, Netlify ou Cloudflare Pages)
- (Quando houver API) conta para backend Node (Render, Railway, Fly.io, VPS)

## 2) Deploy do frontend (estado atual)

### Build local
No diretório `frontend`:

```bash
npm install
npm run build
```

Isso gera os arquivos estáticos em `frontend/dist`.

### Opção A — Vercel (recomendado para Vite)
Configuração do projeto:
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Opção B — Netlify
Configuração:
- **Base directory**: `frontend`
- **Build command**: `npm run build`
- **Publish directory**: `frontend/dist`

Criar também um arquivo `_redirects` para SPA:

```txt
/*  /index.html  200
```

### Opção C — Cloudflare Pages
Configuração:
- **Project root**: `frontend`
- **Build command**: `npm run build`
- **Build output directory**: `dist`

## 3) Variáveis de ambiente (frontend)
Quando integrar API, definir no provedor uma variável como:
- `VITE_API_URL=https://api.seudominio.com`

No código React, sempre consumir via `import.meta.env.VITE_API_URL`.

## 4) Domínio e HTTPS
- Aponte DNS do domínio para o provedor escolhido.
- Ative HTTPS automático (normalmente já vem habilitado).
- Teste rotas diretas da SPA (`/clientes`, `/pedidos`) para garantir fallback para `index.html`.

## 5) Backend (quando implementar)
Atualmente `backend/` não possui servidor pronto para execução. Assim que houver API Express:

1. Adicione scripts no `backend/package.json`:
   - `"start": "node src/server.js"`
   - `"dev": "node --watch src/server.js"`
2. Configure variáveis:
   - `PORT`
   - `CORS_ORIGIN`
   - `DATABASE_URL` (ou host/user/password/db)
   - `JWT_SECRET` (se houver autenticação)
3. No provedor (Render/Railway/Fly/VPS):
   - Build: `npm install`
   - Start: `npm start`
4. Habilite CORS restrito ao domínio do frontend.

## 6) CI/CD mínimo recomendado
- Pipeline de PR:
  - `npm run lint` (frontend)
  - `npm run build` (frontend)
- Pipeline de main:
  - deploy automático do frontend
  - (futuro) deploy do backend após testes

## 7) Checklist de produção
- [ ] Build do frontend sem erro
- [ ] Rotas SPA funcionando por URL direta
- [ ] Variáveis `VITE_*` configuradas no provedor
- [ ] HTTPS ativo
- [ ] CORS restrito (quando API existir)
- [ ] Monitoramento de erros (Sentry/Logtail, opcional)
