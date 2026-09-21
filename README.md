# tiagofga.github.io

Portal pessoal e acadêmico de **Tiago Alves de Oliveira**, reunindo pesquisa, ensino, extensão, software, recursos técnicos e o acervo histórico da trajetória docente.

> **Status atual:** migração ativa para Astro.  
> O portal já é publicado por GitHub Actions/GitHub Pages, com Vercel usado para previews de branches e Pull Requests.

## Objetivo

O site funciona como ponto central da presença acadêmica e técnica, com estes princípios:

- apresentar pesquisa, ensino, extensão e software em uma arquitetura única;
- destacar disciplinas atuais sem misturá-las ao acervo histórico;
- preservar a trajetória docente sem manter dependência do Joomla;
- manter projetos independentes em seus próprios repositórios/sites;
- editar conteúdo como dados estruturados e Markdown/MDX;
- manter deploy estático, baixo custo e pouca manutenção operacional.

## Arquitetura

```text
tiagofga.com.br / tiagofga.github.io
│
├── Início
├── Sobre
├── Pesquisa
├── Publicações
├── Ensino
│   ├── disciplinas atuais
│   │   ├── Inteligência Artificial · 2026/2
│   │   └── LIPC · 2026/2
│   ├── recursos educacionais
│   └── acervo histórico
│       ├── UNIFOR-MG
│       ├── UEMG
│       │   └── 2015 · 7 disciplinas migradas
│       └── CEFET-MG
├── Extensão
│   ├── projetos
│   ├── cursos
│   └── oficinas
├── Software
│   └── projetos selecionados
├── Recursos
│   ├── artigos
│   ├── tutoriais
│   ├── notas técnicas
│   └── minicursos
└── Contato
```

## Stack

- **Astro** para geração estática;
- **TypeScript** para configuração e componentes;
- **Markdown/MDX** para conteúdo;
- **CSS** próprio com identidade visual tecnológica azul + verde;
- **tema claro/escuro** sem dependência externa, com preferência persistida no navegador;
- **GitHub Actions** para CI e deploy;
- **GitHub Pages** para publicação;
- **Vercel Preview** para revisão visual de branches/PRs;
- **Cloudflare** para DNS e camada de borda;
- **Cloudflare R2** planejado para o acervo binário histórico.

## Páginas institucionais

O núcleo institucional do portal agora possui páginas próprias para:

- `/sobre/` — trajetória acadêmica, formação e áreas de atuação;
- `/pesquisa/` — linhas de pesquisa, projetos e conexão com software e publicações;
- `/contato/` — canais profissionais e acadêmicos, sem publicar identificadores ainda não validados.

Essas páginas substituem o uso de âncoras genéricas da homepage para funções institucionais principais.

## Publicações

A rota `/publicacoes/` foi criada como área própria de produção acadêmica, inicialmente organizada em:

- periódicos;
- conferências e congressos;
- datasets e artefatos.

Os registros individuais ainda serão importados e validados antes da publicação definitiva.

## Extensão, software e recursos

A segunda etapa do portal adiciona áreas próprias para:

- `/extensao/` — projetos, cursos, oficinas e ações com a comunidade;
- `/software/` — catálogo curado de projetos representativos de ensino e pesquisa;
- `/recursos/` — artigos, tutoriais, notas técnicas e minicursos.

O catálogo de software não replica automaticamente todos os repositórios do GitHub. A área de Recursos segue política editorial própria e só republicará conteúdo legado após revisão técnica.

## Ensino

A área de ensino está sendo organizada em duas camadas claramente separadas.

### Disciplinas atuais

No semestre **2026/2**, o protótipo considera:

- **Inteligência Artificial** — com acesso ao projeto EC-IA;
- **Laboratório de Introdução à Programação de Computadores (LIPC)** — integração ao portal em definição.

As disciplinas atuais aparecem primeiro na homepage e na rota:

```text
/ensino/
```

### Acervo histórico

O conteúdo legado é apresentado por instituição, ano e disciplina, sempre identificado como histórico.

A migração da **UEMG 2015** está estruturalmente concluída no portal, com sete disciplinas:

- Estrutura de Dados II;
- Lógica Digital;
- Sistemas Digitais;
- Introdução à Engenharia da Computação;
- Princípios de Desenvolvimento de Algoritmos;
- Inteligência Artificial;
- Linguagens e Programação de Compiladores.

Os arquivos físicos continuam temporariamente associados ao legado. A migração definitiva para `arquivos.tiagofga.com.br` será feita somente após a criação da infraestrutura de armazenamento.

## Estrutura principal

```text
.
├── .github/
│   └── workflows/
│       ├── astro-ci.yml
│       ├── commitlint.yml
│       └── deploy-pages.yml
├── src/
│   ├── content/
│   │   └── ensino/
│   ├── layouts/
│   ├── pages/
│   │   └── ensino/
│   │       └── acervo/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
├── CHANGELOG.md
├── MIGRATION_STATUS.md
└── ROADMAP.md
```

Os arquivos legados da raiz ainda podem permanecer durante a transição. Eles só devem ser removidos após validação final do portal Astro e do fluxo de publicação.

## Interface e acessibilidade

A Etapa 3 inicia a consolidação do design system e da navegação:

- Header e Footer foram extraídos para componentes Astro reutilizáveis;
- títulos de seção começaram a usar um componente comum;
- o menu principal possui navegação mobile expansível;
- o menu informa estado com `aria-expanded` e pode ser fechado com `Escape`;
- foi adicionado link de salto para o conteúdo principal;
- estados de foco visível foram padronizados;
- `prefers-reduced-motion` é respeitado;
- o controle de tema mantém rótulo acessível sincronizado com o estado.

A componentização continuará progressivamente para cards, breadcrumbs, callouts e listas de materiais.

## Desenvolvimento local

Requisitos:

- Node.js 22 ou superior;
- npm.

Instalação:

```bash
npm install
```

Servidor local:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview local:

```bash
npm run preview
```

## CI, preview e publicação

O fluxo esperado é:

```text
branch
  ↓
Pull Request
  ↓
Astro CI + Commitlint + Vercel Preview
  ↓
revisão
  ↓
merge em main
  ↓
Deploy Astro to GitHub Pages
  ↓
tiagofga.github.io
```

O `main` é protegido por ruleset com Pull Request obrigatório, resolução de conversas, status check `build`, bloqueio de force push e exclusão.

## Conventional Commits

Formato:

```text
<type>(<scope opcional>): <descrição>
```

Exemplos:

```text
feat(teaching): add current and historical teaching hub
feat(archive): migrate remaining UEMG 2015 disciplines
fix(pages): update artifact upload action
docs(roadmap): update migration status
ci(pages): deploy Astro build to GitHub Pages
```

## Conteúdo legado

SQL, backups Joomla e Phoca Download são fontes de migração, não dependências permanentes do novo portal.

Política:

- preservar metadados e contexto acadêmico relevantes;
- manter conteúdo histórico explicitamente identificado;
- preservar URLs históricas por redirect quando possível;
- não publicar automaticamente provas, notas, dados de alunos ou material restrito;
- revisar tecnicamente artigos e tutoriais antes de republicar;
- não antecipar URLs de armazenamento ainda inexistentes.

## Arquivos históricos

O armazenamento definitivo dos binários será separado do repositório do portal.

Destino planejado:

```text
Cloudflare R2
      ↓
arquivos.tiagofga.com.br
```

Até essa infraestrutura existir, os materiais permanecem temporariamente vinculados ao legado.

## CMS visual

O objetivo continua sendo oferecer uma experiência de edição próxima a WYSIWYG sem manter Joomla/PHP/MySQL apenas para gerenciamento de conteúdo.

O CMS deverá:

- operar sobre Git;
- editar Markdown/MDX e metadados;
- criar branch/commit;
- permitir preview antes do merge;
- manter o repositório como fonte de verdade.

## Projetos relacionados

- [EC-IA](https://github.com/tiagofga/EC-IA) — recurso educacional aberto de Inteligência Artificial;
- [Estruturas de Dados e Algoritmos em C](https://github.com/tiagofga/Estruturas-de-Dados-e-Algoritmos-em-C);
- [MLP](https://github.com/tiagofga/mlp) — implementação acadêmica de perceptron multicamadas em C++;
- [Drug-CNN](https://github.com/tiagofga/drug-cnn) — deep learning aplicado à descoberta de fármacos.

## Documentação do projeto

- [ROADMAP.md](./ROADMAP.md) — fases e próximos passos;
- [MIGRATION_STATUS.md](./MIGRATION_STATUS.md) — estado operacional da migração;
- [CHANGELOG.md](./CHANGELOG.md) — registro das principais mudanças.

## Licença e conteúdo

Código, materiais acadêmicos e documentos podem possuir condições de uso distintas. A política de licenciamento do portal e do acervo será consolidada antes da migração definitiva dos arquivos históricos.
