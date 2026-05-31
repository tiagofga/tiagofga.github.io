# tiagofga.github.io

Homepage pessoal de Tiago Alves de Oliveira.

## Desenvolvimento local

1. Inicie um servidor estatico na raiz do projeto:

```bash
python3 -m http.server 4173
```

2. Abra no navegador:

```text
http://127.0.0.1:4173
```

## Padrao de commits (obrigatorio)

Este repositorio usa **Conventional Commits** e bloqueia mensagens fora do padrao.

Formato esperado:

```text
<type>(<scope opcional>): <descricao>
```

Exemplos validos:

```text
feat(home): adiciona secao de projetos
fix(i18n): corrige troca de idioma no header
docs(readme): atualiza guia de contribuicao
style(css): ajusta espacamentos mobile
refactor(js): simplifica renderizacao dos cards
chore(ci): adiciona validacao de commit em workflow
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

## Como ativar o bloqueio local

O hook versionado fica em `.githooks/commit-msg`.

Execute uma vez:

```bash
git config core.hooksPath .githooks
chmod +x .githooks/commit-msg
```

A partir disso, commits fora do padrao serao rejeitados localmente.

## Validacao no GitHub (CI)

Tambem existe validacao automatica no workflow de CI em PRs e pushes para `main`, impedindo integracao de mensagens fora do Conventional Commits.
