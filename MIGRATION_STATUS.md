# Migration Status

Estado operacional da renovação de `tiagofga.github.io` / `tiagofga.com.br`.

Última atualização: **2026-09-21**.

## Estado geral

| Área | Estado |
| --- | --- |
| Astro | Operacional |
| CI | Operacional |
| Vercel Preview | Operacional |
| GitHub Pages / Astro | Operacional |
| Pipeline Jekyll legado | Ainda precisa ser desativado nas configurações do Pages |
| Homepage | Operacional, ainda em evolução |
| Área de Ensino | Integrada ao main |
| UEMG 2015 | Estrutura migrada |
| Publicações | Landing page criada; metadados ainda pendentes |
| Tema claro/escuro | Integrado ao main |
| Sobre | Implementado nesta branch |
| Pesquisa | Implementado nesta branch |
| Contato | Integrado ao main |
| Extensão | Implementado nesta branch |
| Software | Implementado nesta branch |
| Recursos | Integrado ao main |
| Menu mobile | Implementado nesta branch |
| Acessibilidade base | Em consolidação nesta branch |
| Componentização | Header, Footer e SectionHeading integrados ao main |
| PT/EN | Implementado; revisão visual e textual do inglês nesta branch |
| SEO base | Canonical, hreflang, Open Graph e JSON-LD implementados nesta branch |
| Branding web | Integrado ao main |
| Fechamento visual | Integrado ao main; paridade visual do inglês em revisão nesta branch |
| Arquivos históricos | Ainda no legado |
| Cloudflare R2 | Planejado, ainda não criado |
| Domínio principal | Cutover futuro |
| Joomla | Mantido apenas durante transição |

## Branch de trabalho atual

```text
feat/en-visual-review
```

Objetivo da branch:

- revisar a tradução inglesa com terminologia acadêmica mais natural;
- garantir paridade visual entre Português e Inglês;
- ajustar navegação inglesa para títulos mais longos;
- manter o mesmo sistema de componentes, responsividade e tema nas duas versões.

## Ensino atual — protótipo

Semestre considerado: **2026/2**.

### Inteligência Artificial

- estado: atual;
- acesso principal: EC-IA;
- deve aparecer na homepage e em `/ensino/`.

### LIPC

- estado: atual;
- deve aparecer na homepage e em `/ensino/`;
- destino definitivo da página ainda será decidido.

## Acervo UEMG 2015

Estrutura criada para sete disciplinas:

1. Estrutura de Dados II;
2. Lógica Digital;
3. Sistemas Digitais;
4. Introdução à Engenharia da Computação;
5. Princípios de Desenvolvimento de Algoritmos;
6. Inteligência Artificial;
7. Linguagens e Programação de Compiladores.

Os conteúdos permanecem identificados como históricos e não devem ser associados automaticamente às disciplinas atuais.

## Arquivos

Regra temporária:

```text
páginas Astro
   ↓
links do legado
```

Regra futura:

```text
páginas Astro
   ↓
Cloudflare R2
   ↓
arquivos.tiagofga.com.br
```

A infraestrutura de `arquivos.tiagofga.com.br` **não existe ainda** e nenhuma página deve depender dela antes da criação e validação do armazenamento.

## Publicação

Fluxo atual:

```text
branch
  ↓
PR
  ↓
Astro CI + Commitlint + Vercel Preview
  ↓
merge
  ↓
main
  ↓
Deploy Astro to GitHub Pages
```

Pendência administrativa:

- configurar GitHub Pages exclusivamente com **GitHub Actions** como source;
- eliminar disparos do pipeline Jekyll legado.

## Próximas decisões

- revisar visualmente as páginas Sobre, Pesquisa e Contato;
- validar links profissionais e identificadores acadêmicos antes de publicá-los;
- importar e validar metadados de publicações;
- revisar o tema em todas as páginas;
- revisar a tradução inglesa conforme novos conteúdos forem sendo adicionados;
- criar páginas de Sobre, Pesquisa e Contato;
- definir destino da disciplina LIPC;
- continuar componentização de cards, breadcrumbs, callouts e listas de materiais;
- remover gradualmente frontend legado da raiz;
- continuar migração de anos/instituições;
- criar R2 apenas quando chegar a fase de migração dos binários;
- preparar redirects e cutover de `tiagofga.com.br`.
