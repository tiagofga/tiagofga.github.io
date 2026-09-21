# Changelog

Todas as mudanças relevantes do portal são registradas neste arquivo.

O projeto ainda está em fase de migração, portanto as entradas abaixo representam marcos de desenvolvimento e não releases estáveis.

## [Unreleased]

### Added

- Rotas em inglês sob `/en/` para Início, Sobre, Pesquisa, Publicações, Ensino, Extensão, Software, Recursos e Contato.
- Seletor PT/EN funcional entre páginas equivalentes.
- Canonical e `hreflang` no layout base.
- Metadados Open Graph e Twitter Card.
- Structured data em JSON-LD para páginas, website e perfil acadêmico.
- `favicon.svg` e `social-card.svg` globais.
- Menu mobile expansível com estado acessível e fechamento por tecla Escape.
- Link de salto para o conteúdo principal.
- Suporte a `prefers-reduced-motion`.
- Componente reutilizável `SectionHeading`.
- Página `/extensao/` para projetos, cursos e oficinas.
- Página `/software/` com catálogo curado de EC-IA, Estruturas de Dados e Algoritmos em C, Modular MLP e Drug-CNN.
- Página `/recursos/` com categorias para artigos, tutoriais, notas técnicas e minicursos.
- Bloco de Extensão e Recursos na homepage.
- Página `/sobre/` com perfil acadêmico, formação e áreas de interesse.
- Página `/pesquisa/` com linhas de pesquisa, projetos e conexão com Publicações.
- Página `/contato/` com canais profissionais e política de validação de identificadores.
- Seção de perfil na homepage conectando Sobre e Contato.
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

- Header e Footer agora recebem o locale atual e apresentam navegação traduzida.
- O layout base infere o idioma pela rota e fornece metadados específicos por página.
- Header e Footer foram extraídos do layout base para componentes Astro.
- Rótulo acessível do seletor de tema agora acompanha o estado claro/escuro.
- Responsividade do cabeçalho foi consolidada para desktop, tablet e mobile.
- Extensão, Software e Recursos deixaram de apontar para âncoras vazias e passaram a ter rotas próprias.
- O card de Software na homepage agora aponta para o catálogo dedicado.
- Pesquisa passou de âncora da homepage para uma página própria.
- Navegação principal passou a incluir Sobre e Contato.
- CTA principal da homepage passou a apontar para a área de Pesquisa.
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
