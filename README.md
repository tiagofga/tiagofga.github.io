# tiagofga.github.io

Homepage pessoal de Tiago Alves de Oliveira, com foco em perfil acadêmico, projetos, publicações e contatos.

## Stack e arquitetura

- Site estático (sem backend)
- HTML + CSS + JavaScript vanilla
- Conteúdo PT-BR e EN definido em objeto JS (`content` em `script.js`)
- Deploy para GitHub Pages

Arquivos principais:

- `index.html`: estrutura semântica da página
- `styles.css`: tema visual (black/light), layout responsivo e animações
- `script.js`: i18n, troca de tema, renderização dos cards/listas e animações de reveal
- `favicon.svg` e `social-card.svg`: assets de identidade e compartilhamento

## Funcionalidades

- Alternância de idioma (PT/EN)
- Alternância de tema (black/light)
- Persistência de preferências de idioma e tema com `localStorage`
- Renderização dinâmica de seções (projetos, publicações, colaboração e contatos)
- SEO/social tags (Open Graph e Twitter Cards)

## Desenvolvimento local

### Opção 1: abrir direto no navegador

Como o projeto é estático e não faz requisições locais via `fetch`, abrir `index.html` diretamente costuma funcionar.

### Opção 2: usar servidor HTTP local (recomendado)

Para reproduzir melhor o comportamento de produção (GitHub Pages) e evitar diferenças de políticas do protocolo `file://` entre navegadores:

```bash
python3 -m http.server 4173
```

Ou, se preferir Node.js:

```bash
npx serve -l 4173
```

Depois abra:

```text
http://127.0.0.1:4173
```

## Preciso realmente executar servidor HTTP?

Resposta curta: **não é obrigatório para este projeto hoje**, mas **é recomendado**.

Motivos:

- Hoje: não há backend nem `fetch` para arquivos locais, então o site funciona sem servidor na maioria dos navegadores.
- Recomendado: `file://` pode ter comportamento diferente por navegador (principalmente para APIs web e segurança).
- Futuro: se você adicionar `fetch` de JSON/MD, service worker, ou novas restrições de segurança, o servidor passa a ser necessário.

## Privacidade (LGPD e GDPR)

Aviso: este conteúdo é informativo e não substitui orientação jurídica.

### Dados tratados por este site

- Preferências locais de tema e idioma via `localStorage` (no navegador do visitante).
- Metadados técnicos comuns de acesso (por exemplo, IP e user-agent) podem ser processados por provedores externos quando o navegador requisita recursos de terceiros.

### Recursos externos atualmente utilizados

- Google Fonts (`fonts.googleapis.com` e `fonts.gstatic.com`)
- Avatar do GitHub (`avatars.githubusercontent.com`)

### Como isso se relaciona com LGPD/GDPR

- LGPD (Brasil): considerar transparência sobre dados tratados, finalidade e direitos do titular.
- GDPR (UE/EEE): informar base legal aplicável, direitos do titular e, quando necessário, transferências internacionais.

### Boas práticas recomendadas

- Publicar uma Política de Privacidade no próprio site.
- Explicar claramente uso de `localStorage` para preferências de interface.
- Listar provedores de terceiros e links para políticas deles.
- Disponibilizar canal de contato para solicitações de titulares.
- Revisar necessidade de consentimento/cookie banner caso novos rastreadores sejam adicionados.

### Página de política no site

- A política dedicada está disponível em `privacy.html`.
- A página inclui índice clicável por seção e layout simplificado para leitura rápida.

## Padrão de commits (obrigatório)

Este repositório usa **Conventional Commits** e bloqueia mensagens fora do padrão.

Formato esperado:

```text
<type>(<scope opcional>): <descrição>
```

Exemplos válidos:

```text
feat(home): adiciona seção de projetos
fix(i18n): corrige troca de idioma no header
docs(readme): atualiza guia de contribuição
style(css): ajusta espaçamentos mobile
refactor(js): simplifica renderização dos cards
chore(ci): adiciona validação de commit em workflow
```

Tipos aceitos:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`
- `build`
- `ci`
- `chore`
- `revert`

## Validação local e no GitHub (CI)

O hook versionado fica em `.githooks/commit-msg`.

Execute uma vez:

```bash
git config core.hooksPath .githooks
chmod +x .githooks/commit-msg
```

A partir disso, commits fora do padrão serão rejeitados localmente.

Também existe validação automática no workflow de CI em PRs e pushes para `main`, impedindo integração de mensagens fora do Conventional Commits.
