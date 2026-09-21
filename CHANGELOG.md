# Changelog

Todas as mudanças relevantes do portal são registradas neste arquivo.

O projeto ainda está em fase de migração, portanto as entradas abaixo representam marcos de desenvolvimento e não releases estáveis.

## [Unreleased]

### Added

- Menu e rota `/publicacoes/` para produção acadêmica.
- Estrutura inicial de Publicações por periódicos, eventos, datasets e artefatos.
- Tema claro/escuro com detecção da preferência do sistema e persistência em `localStorage`.
- Controle de tema no cabeçalho com atributos de acessibilidade.
- Área de Ensino em protótipo com separação explícita entre disciplinas atuais e acervo histórico.
- Destaque para **Inteligência Artificial** e **LIPC** como disciplinas atuais de **2026/2**.
- Rota `/ensino/` para concentrar disciplinas atuais e acervo.
- Navegação da homepage para a nova área de Ensino.
- Acervo UEMG 2015 com sete disciplinas estruturadas.
- Workflow dedicado de deploy do Astro para GitHub Pages.
- Vercel Preview para revisão visual de branches e Pull Requests.
- `MIGRATION_STATUS.md` para registrar o estado operacional da migração.

### Changed

- Navegação principal ampliada para incluir Publicações.
- Cabeçalho ajustado para acomodar o controle de tema e o crescimento do menu.
- Homepage deixou de apresentar apenas Inteligência Artificial como referência principal de ensino.
- Conteúdo histórico deixou de ocupar posição de destaque equivalente às disciplinas correntes.
- Navegação de Ensino passou de âncora da homepage para uma página própria.
- README e roadmap atualizados para refletir a arquitetura real do portal.

### Infrastructure

- Astro configurado para build estático.
- `main` protegido por ruleset.
- CI com Astro CI e Commitlint.
- GitHub Pages passou a receber o conteúdo gerado em `dist/`.
- Vercel permanece como camada de preview, não como fonte de verdade do conteúdo.

## 2026-09-21

### UEMG 2015

Migração estrutural das disciplinas históricas:

- Inteligência Artificial;
- Estrutura de Dados II;
- Sistemas Digitais;
- Lógica Digital;
- Introdução à Engenharia da Computação;
- Princípios de Desenvolvimento de Algoritmos;
- Linguagens e Programação de Compiladores.

Os arquivos físicos permanecem temporariamente no acervo legado. A camada de armazenamento definitivo em Cloudflare R2 será criada posteriormente.

### Teaching hub

Criação do protótipo de organização de Ensino:

```text
Ensino
├── Disciplinas atuais
│   ├── IA · 2026/2
│   └── LIPC · 2026/2
└── Acervo histórico
    └── UEMG
        └── 2015
```
