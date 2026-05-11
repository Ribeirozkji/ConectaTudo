# Relatório Técnico de Auditoria — ConectaTudo

## Escopo
Auditoria estática focada no código versionado de `frontend/` (React + TypeScript + Vite) e na estrutura de `backend/` disponível no repositório.

## Estrutura e organização
Foi identificado um problema estrutural crítico na resolução de módulos: `App.tsx` importa páginas com caminhos em minúsculo (`./pages/dashboard`, etc.), mas os arquivos reais estão com inicial maiúscula (`Dashboard.tsx`, `Clientes.tsx`, ...). Em sistemas case-sensitive (Linux/CI), isso quebra o build. Impacto: aplicação não compila e pipeline de entrega falha. Correção sugerida: padronizar import paths com o nome real dos arquivos (ou adotar convenção uniforme e enforced por lint).

Também há acoplamento de layout repetido entre páginas (`Clientes`, `Mensagens`, `Pedidos`): todas repetem `Sidebar` + container principal com estrutura quase idêntica. Impacto: manutenção mais cara e maior risco de inconsistência visual/comportamental. Correção sugerida: introduzir um componente de layout compartilhado (ex.: `AdminLayout`) e renderizar conteúdo por composição.

No backend, há dependências mas não há código-fonte de servidor na árvore auditada (apenas `package.json`/`package-lock.json`). Impacto: arquitetura parcial/indefinida; não é possível validar separação de camadas, segurança de API e organização modular do servidor. Correção sugerida: estruturar backend mínimo com pastas de `routes`, `controllers`, `services`, `middlewares` e validação de entrada.

## Qualidade de código
Há dados de domínio hardcoded diretamente em componentes de apresentação (`SummaryCard`, `RecentOrders`, `RecentMessages` via uso no `Dashboard`). Impacto: mistura de responsabilidade (UI + fonte de dados), dificultando testes e futura integração com API. Correção sugerida: extrair dados para camada de serviço/hook (`useDashboardData`) e tipar modelos (`Order`, `Message`, `Kpi`).

A tipagem em `SummaryCard` define `value` como `string`, o que limita evolução para métricas numéricas formatáveis e pode induzir coerções desnecessárias. Impacto: baixa expressividade de tipos. Correção sugerida: aceitar `number | string` e formatar na borda de exibição.

Não há tratamento de estados de carregamento, vazio e erro nas listas e KPIs. Impacto: UX frágil e comportamento indefinido quando dados reais falharem. Correção sugerida: padronizar estados assíncronos com fallback visual e mensagens de erro.

## Segurança
Não há evidência de autenticação/autorização no frontend (rotas administrativas públicas via `react-router-dom`) nem de proteção de sessão. Impacto: acesso irrestrito a áreas administrativas na camada cliente. Correção sugerida: adicionar guardas de rota (`ProtectedRoute`) e integração com token/session no backend.

Não há validação de entrada observável no escopo atual (principalmente por ausência de formulários e backend implementado). Impacto: risco alto assim que endpoints/formulários forem adicionados sem validação centralizada. Correção sugerida: adotar schema validation (ex.: Zod/Yup no frontend e validação no backend).

## Performance
`Sidebar` recria o array `links` a cada render. O custo atual é baixo, mas é um padrão que escala mal em componentes mais pesados. Correção sugerida: mover `links` para constante de módulo.

O dashboard renderiza blocos estáticos sem memoização seletiva, e todos os componentes rerenderizam juntos em mudanças do pai. Impacto atual baixo, potencial médio com dados em tempo real. Correção sugerida: introduzir fronteiras de memoização apenas quando houver profiling indicando gargalo.

## Manutenibilidade
O projeto está limpo e pequeno, mas ainda sem convenções explícitas de arquitetura frontend (ex.: `features/`, `shared/`, `entities/`) e sem documentação de decisões técnicas. Impacto: onboarding lento conforme o código crescer. Correção sugerida: documentar padrões no `README` (nomenclatura, estrutura de pastas, fluxo de dados, estratégia de estado).

Também não há suíte de testes (unitários/integrados) configurada nos scripts do frontend. Impacto: regressões passam sem detecção automática. Correção sugerida: incluir Vitest + Testing Library e testes de smoke para rotas principais.

## Priorização recomendada

### Críticas
1. Corrigir imports com case incorreto em `App.tsx` para restaurar build em Linux/CI.
2. Definir e implementar base do backend (ou remover dependências até existir código real) para evitar falsa sensação de backend funcional.
3. Introduzir proteção de rotas administrativas (`ProtectedRoute`) antes de expor dados reais.

### Importantes
1. Extrair layout repetido para `AdminLayout`.
2. Externalizar dados mockados para camada de serviço/hook tipada.
3. Implementar estados de carregamento/erro/vazio.
4. Adicionar validação de entrada ponta a ponta.

### Sugeridas
1. Formalizar convenções arquiteturais no README.
2. Evoluir tipagens de componentes de KPI e domínio.
3. Adicionar testes automatizados e checagem em CI.
