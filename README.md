# tiagofga.github.io

Portal pessoal e acadêmico de **Tiago Alves de Oliveira**, reunindo pesquisa, ensino, extensão, software, recursos técnicos e o acervo histórico da trajetória docente.

> **Status atual:** migração em andamento para Astro na branch `feat/astro-migration-2015`.  
> O `main` continua preservando o site publicado enquanto o novo portal é validado por Pull Request.

## Objetivo

O novo site será o ponto central da presença acadêmica e técnica, com cinco princípios:

- apresentar pesquisa, ensino, extensão e software em uma arquitetura única;
- preservar o acervo histórico sem manter dependência do Joomla;
- manter projetos independentes, como EC-IA, MLP e Estruturas de Dados e Algoritmos em C, em seus próprios repositórios/sites;
- editar conteúdo como dados estruturados e Markdown/MDX, evitando páginas HTML manuais;
- manter deploy estático, baixo custo e pouca manutenção operacional.

## Arquitetura em migração

```text
tiagofga.com.br / tiagofga.github.io
│
├── Pesquisa
├── Ensino
│   ├── disciplinas atuais
│   ├── recursos educacionais
│   └── acervo histórico
│       ├── UNIFOR-MG
│       ├── UEMG
│       └── CEFET-MG
├── Extensão
├── Software
├── Recursos
└── Contato
```

### Stack

- **Astro** para geração estática;
- **TypeScript** para configuração e componentes;
- **Markdown/MDX** para conteúdo;
- **CSS** próprio com identidade visual tecnológica azul + verde;
- **GitHub Actions** para validação;
- **GitHub Pages** como destino de publicação;
- domínio principal planejado: **tiagofga.com.br**.

## Piloto de migração

A primeira disciplina reconstruída é:

**Inteligência Artificial — UEMG — 2015/2**

A página piloto valida o fluxo:

```text
SQL Joomla antigo
        +
metadados do Phoca Download
        +
arquivos físicos recuperados
        ↓
conteúdo estruturado
        ↓
Markdown
        ↓
Astro
        ↓
página histórica moderna
```

Rota piloto:

```text
/ensino/acervo/uemg/2015/inteligencia-artificial/
```

O material é tratado exclusivamente como **acervo histórico**, sem associação com disciplinas ou projetos atuais.

## Estrutura atual da branch de migração

```text
.
├── .github/
│   └── workflows/
│       ├── astro-ci.yml
│       └── commitlint.yml
├── src/
│   ├── content/
│   │   └── ensino/
│   ├── layouts/
│   ├── pages/
│   │   └── ensino/acervo/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── ROADMAP.md
```

Os arquivos legados do site atual permanecem temporariamente no repositório durante a transição. Eles serão removidos somente quando a nova implementação substituir completamente a versão publicada.

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

Build de produção:

```bash
npm run build
```

Pré-visualização do build:

```bash
npm run preview
```

## CI e proteção do `main`

O repositório utiliza dois workflows:

### Astro CI

Valida se o projeto instala dependências e gera o build estático sem erros.

### Commitlint

Valida mensagens de commit conforme **Conventional Commits**.

O `main` é protegido por ruleset com:

- Pull Request obrigatório;
- resolução de conversas antes do merge;
- status check `build` obrigatório;
- branch atualizada antes do merge;
- bloqueio de force push;
- bloqueio de exclusão;
- merge permitido por **squash** ou **rebase**.

## Conventional Commits

Formato:

```text
<type>(<scope opcional>): <descrição>
```

Exemplos:

```text
feat(archive): migrate UEMG artificial intelligence 2015
feat(home): add research and teaching sections
fix(astro): escape project visual text
docs(roadmap): define migration phases
ci(astro): update build workflow
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

Hook local:

```bash
git config core.hooksPath .githooks
chmod +x .githooks/commit-msg
```

## Conteúdo legado

Os bancos SQL e backups Joomla/Phoca são **fontes de migração**, não dependências permanentes do novo site.

A política de migração é:

- preservar metadados e contexto acadêmico relevantes;
- preservar URLs históricas por meio de redirects quando possível;
- separar conteúdo histórico de material atual;
- não publicar automaticamente provas, notas, dados de alunos ou materiais restritos;
- revisar tecnicamente artigos, dicas e tutoriais antes de republicá-los.

## CMS visual

O objetivo é manter uma experiência próxima ao WYSIWYG que motivava o uso do Joomla, mas sem manter PHP/MySQL apenas para edição de conteúdo.

A etapa planejada é integrar um **CMS visual baseado em Git**, com o conteúdo permanecendo em Markdown/MDX no repositório.

Consulte [ROADMAP.md](./ROADMAP.md) para o plano completo.

## Projetos relacionados

- [EC-IA](https://github.com/tiagofga/EC-IA) — recurso educacional aberto de Inteligência Artificial;
- [Estruturas de Dados e Algoritmos em C](https://github.com/tiagofga/Estruturas-de-Dados-e-Algoritmos-em-C);
- [MLP](https://github.com/tiagofga/mlp) — implementação acadêmica de perceptron multicamadas em C++;
- [Drug-CNN](https://github.com/tiagofga/drug-cnn) — deep learning aplicado à descoberta de fármacos.

## Licença e conteúdo

Código, materiais acadêmicos e documentos podem possuir condições de uso distintas. A política de licenciamento do novo portal será consolidada antes da migração definitiva do acervo.
