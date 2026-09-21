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
| Homepage | Em revisão |
| Área de Ensino | Protótipo em branch |
| UEMG 2015 | Estrutura migrada |
| Arquivos históricos | Ainda no legado |
| Cloudflare R2 | Planejado, ainda não criado |
| Domínio principal | Cutover futuro |
| Joomla | Mantido apenas durante transição |

## Branch de trabalho atual

```text
feat/teaching-hub-prototype
```

Objetivo da branch:

- revisar a disposição da área de Ensino;
- destacar disciplinas atuais;
- manter o acervo histórico em segundo nível;
- validar homepage e `/ensino/` em conjunto.

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

- revisar visualmente o protótipo de Ensino;
- definir destino da disciplina LIPC;
- consolidar componentes reutilizáveis;
- remover gradualmente frontend legado da raiz;
- continuar migração de anos/instituições;
- criar R2 apenas quando chegar a fase de migração dos binários;
- preparar redirects e cutover de `tiagofga.com.br`.
