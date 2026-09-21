# Roadmap — tiagofga.com.br

Este roadmap organiza a migração do site pessoal legado para um portal acadêmico estático, versionado e de baixa manutenção.

O objetivo não é restaurar o Joomla, mas **preservar seu conteúdo e sua história em uma arquitetura moderna**.

## Visão de destino

```text
GitHub
  │
  ├── conteúdo Markdown/MDX
  ├── componentes Astro
  ├── metadados estruturados
  └── workflows
          ↓
      Astro build
          ↓
      GitHub Pages
          ↓
  tiagofga.com.br
```

Projetos educacionais e de software continuam independentes e são integrados pelo portal por metadados e links.

---

## Fase 0 — Segurança e governança

**Status: concluída / em validação**

- [x] proteger `main` com ruleset;
- [x] exigir Pull Request;
- [x] bloquear force push;
- [x] bloquear exclusão do `main`;
- [x] exigir resolução de conversas;
- [x] exigir status check `build`;
- [x] criar branch `feat/astro-migration-2015`;
- [x] manter o site publicado intacto durante a migração;
- [ ] validar o primeiro PR de ponta a ponta;
- [ ] consolidar squash como método preferencial de merge.

**Critério de saída:** nenhum trabalho de migração depende de commits diretos no `main`.

---

## Fase 1 — Fundação Astro e design system

**Status: em andamento**

- [x] inicializar Astro;
- [x] configurar build estático;
- [x] criar layout base;
- [x] criar primeira versão da identidade tecnológica azul + verde;
- [x] criar homepage piloto;
- [ ] consolidar tokens de design: cores, tipografia, espaçamento e estados;
- [ ] criar componentes reutilizáveis:
  - [ ] Header;
  - [ ] Footer;
  - [ ] Hero;
  - [ ] ProjectCard;
  - [ ] SectionHeading;
  - [ ] ArchiveCard;
  - [ ] MaterialList;
  - [ ] Breadcrumb;
  - [ ] Callout;
- [ ] implementar tema claro/escuro;
- [ ] implementar PT/EN na nova arquitetura;
- [ ] migrar favicon, social card e metatags;
- [ ] revisar acessibilidade WCAG;
- [ ] revisar responsividade.

**Critério de saída:** homepage e páginas internas utilizam componentes e tokens comuns, sem CSS ad hoc relevante.

---

## Fase 2 — Piloto de acervo: UEMG 2015

**Status: em andamento**

### Inteligência Artificial — 2015/2

- [x] importar título, instituição, ano e semestre;
- [x] importar ementa;
- [x] importar bibliografia;
- [x] reconstruir sequência das aulas;
- [x] preservar IDs e links legados do Phoca como referência;
- [x] relacionar a disciplina ao EC-IA;
- [ ] validar todos os arquivos físicos;
- [ ] decidir localização definitiva dos PDFs;
- [ ] substituir endpoints Phoca por URLs permanentes;
- [ ] registrar redirects da URL Joomla antiga;
- [ ] revisar conteúdo visualmente;
- [ ] validar SEO e canonical;
- [ ] usar a disciplina como template para as demais de 2015.

### Automação

- [ ] criar extrator SQL Joomla → estrutura intermediária;
- [ ] criar mapeamento Phoca → arquivo físico;
- [ ] gerar relatório de:
  - [ ] arquivo encontrado;
  - [ ] arquivo ausente;
  - [ ] duplicado;
  - [ ] órfão;
  - [ ] maior que o limite do host;
- [ ] gerar Markdown inicial automaticamente;
- [ ] manter etapa de curadoria humana antes da publicação.

**Critério de saída:** uma disciplina completa pode ser migrada de forma reproduzível.

---

## Fase 3 — Migração do acervo docente

### UNIFOR-MG

- [ ] 2014;
- [ ] Laboratório de Programação IV;
- [ ] Sistemas Operacionais;
- [ ] separar avaliações/notas de conteúdo público.

### UEMG

- [ ] 2015;
- [ ] 2016;
- [ ] 2017;
- [ ] 2018.

### CEFET-MG

- [ ] validar material 2015-2017 já presente no Phoca;
- [ ] importar material pós-2017;
- [ ] separar disciplinas atuais de acervo histórico;
- [ ] excluir documentos administrativos, listas de estudantes, notas e material restrito.

### Política editorial

Para cada material:

- [ ] **atual** — permanece como recurso ativo;
- [ ] **histórico** — preservado com data e contexto;
- [ ] **atualizável** — conteúdo antigo que merece nova versão;
- [ ] **restrito** — não publicar;
- [ ] **descartar** — duplicado, corrompido ou sem valor documental.

**Critério de saída:** o acervo docente está navegável por instituição, ano e disciplina.

---

## Fase 4 — Pesquisa, extensão e software

### Pesquisa

- [ ] linhas de pesquisa;
- [ ] projetos em andamento;
- [ ] projetos concluídos;
- [ ] publicações;
- [ ] datasets e DOIs;
- [ ] relações entre projeto, artigo, software e dados.

### Extensão

- [ ] projetos;
- [ ] cursos;
- [ ] oficinas;
- [ ] ações com comunidade externa;
- [ ] materiais públicos.

### Software

- [ ] EC-IA;
- [ ] Estruturas de Dados e Algoritmos em C;
- [ ] MLP;
- [ ] Drug-CNN;
- [ ] selecionar outros repositórios representativos;
- [ ] evitar catálogo automático de todos os repositórios.

**Critério de saída:** o portal representa de forma equilibrada pesquisa, ensino, extensão e software.

---

## Fase 5 — Recursos, artigos e dicas

- [ ] inventariar artigos antigos;
- [ ] inventariar dicas técnicas;
- [ ] inventariar minicursos;
- [ ] revisar tecnicamente antes de republicar;
- [ ] criar categorias:
  - [ ] Artigos;
  - [ ] Tutoriais;
  - [ ] Notas técnicas;
  - [ ] Minicursos;
- [ ] preservar data original;
- [ ] registrar data de revisão quando houver atualização;
- [ ] migrar “Pode uma máquina pensar?” com enquadramento histórico/editorial adequado.

**Critério de saída:** conteúdo editorial antigo útil é recuperado sem perpetuar informação técnica obsoleta.

---

## Fase 6 — CMS visual / WYSIWYG

- [ ] avaliar Pages CMS;
- [ ] avaliar Decap CMS;
- [ ] avaliar TinaCMS somente se houver ganho claro;
- [ ] definir schemas para:
  - [ ] projetos;
  - [ ] disciplinas;
  - [ ] artigos;
  - [ ] recursos;
  - [ ] publicações;
- [ ] permitir criação/edição pelo navegador;
- [ ] manter Git como fonte de verdade;
- [ ] validar preview antes de publicar.

**Critério de saída:** conteúdo cotidiano pode ser atualizado sem editar Astro ou HTML manualmente.

---

## Fase 7 — Arquivos e armazenamento

- [ ] medir tamanho total do acervo público;
- [ ] listar arquivos individuais grandes;
- [ ] decidir se PDFs ficam:
  - [ ] no mesmo repositório;
  - [ ] em repositório de acervo;
  - [ ] em object storage;
  - [ ] em subdomínio dedicado;
- [ ] evitar versionar arquivos redundantes;
- [ ] definir URLs permanentes;
- [ ] verificar integridade por hash para arquivos migrados.

**Critério de saída:** estratégia de arquivos suporta todo o acervo sem comprometer o repositório do portal.

---

## Fase 8 — SEO, redirects e domínio

- [ ] construir mapa URL antiga → URL nova;
- [ ] implementar redirects 301 quando tecnicamente possível;
- [ ] preservar páginas antigas com tráfego relevante;
- [ ] adicionar canonical;
- [ ] sitemap.xml;
- [ ] robots.txt;
- [ ] Open Graph;
- [ ] Twitter/X cards;
- [ ] structured data apropriado;
- [ ] configurar `tiagofga.com.br` como domínio principal;
- [ ] manter `tiagofga.github.io` como origem técnica/secundária;
- [ ] validar DNS, TLS e DNSSEC via Cloudflare.

**Critério de saída:** mudança de plataforma não quebra navegação histórica nem indexação relevante.

---

## Fase 9 — Privacidade e observabilidade

- [ ] migrar/revisar política de privacidade;
- [ ] revisar necessidade real de analytics;
- [ ] se GA4 for mantido, conservar consentimento prévio;
- [ ] considerar analytics mais simples e com menor coleta;
- [ ] validar dependências externas;
- [ ] minimizar fontes/scripts de terceiros;
- [ ] monitorar links quebrados;
- [ ] adicionar check periódico de URLs internas.

---

## Fase 10 — Cutover e encerramento do Joomla

- [ ] gerar backup final do Joomla;
- [ ] gerar dump final do banco;
- [ ] arquivar configuração necessária para auditoria histórica;
- [ ] validar novo site em ambiente de preview;
- [ ] validar links e downloads;
- [ ] validar mobile;
- [ ] validar acessibilidade;
- [ ] validar redirects;
- [ ] apontar domínio;
- [ ] observar erros por período de transição;
- [ ] somente depois decidir sobre renovação da Hostinger;
- [ ] desativar Joomla quando não houver dependência residual.

**Critério de saída:** Joomla e SGBD deixam de ser necessários para operar o site.

---

## Depois do lançamento

- [ ] releases semânticas do portal;
- [ ] changelog das principais mudanças;
- [ ] revisão periódica de links;
- [ ] atualização anual de perfil e projetos;
- [ ] revisão semestral de materiais atuais;
- [ ] política clara para arquivamento de disciplinas;
- [ ] documentação de manutenção mínima.

---

## Princípios permanentes

1. **Conteúdo primeiro.** A tecnologia deve facilitar preservação e publicação.
2. **Sem duplicação desnecessária.** Projetos mantêm seus sites; o portal fornece contexto e descoberta.
3. **Histórico não é atual.** Materiais antigos devem ser identificados como históricos.
4. **Git é a fonte de verdade.** CMS visual é uma interface, não um banco paralelo.
5. **Build estático por padrão.** Backend/SGBD só entram se surgir necessidade funcional real.
6. **URLs são patrimônio.** Links antigos relevantes devem ser preservados por redirect ou página equivalente.
7. **Privacidade por padrão.** Evitar coleta de dados sem finalidade concreta.
8. **Migração reproduzível.** Sempre que possível, extrair e transformar por scripts em vez de copiar manualmente.
