# Transpetro Ênfase 25 — banco de questões

Site de estudo para o **Edital nº 04 – TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR – 2026.4, Ênfase 25: Engenharia Mecânica** (Fundação Cesgranrio, prova em 29/11/2026).

## Como abrir

Dê duplo clique em `index.html`. Funciona offline, sem instalar nada. O progresso fica gravado no `localStorage` do navegador — use sempre o mesmo navegador para não perder o histórico.

Há também o `transpetro-enfase-25.bundle.html`: a mesma página com tudo embutido em um arquivo só, prático para copiar para o celular ou para um pendrive.

## O que tem

- **374 questões inéditas** no padrão Cesgranrio (cinco alternativas, resposta única), com gabarito comentado, memória de cálculo e nota de pegadinha.
  - 330 de Conhecimentos Específicos, cobrindo os 18 itens do Anexo IV.
  - 24 de Língua Portuguesa e 20 de Língua Inglesa.
- **Modo estudo** — filtra por assunto, dificuldade, questões nunca respondidas, questões erradas ou marcadas. Gabarito na hora.
- **Simulado** — monta a prova real (50 específicas + 10 português + 10 inglês) em 4h30, com folha de navegação, marcação para revisão e relógio. No fim, aplica os três cortes eliminatórios do item 7.1.4.3 do edital e mostra o desempenho por bloco e por assunto.
- **Revisão** — fila automática com o que você errou ou marcou com ★. A questão sai da fila após dois acertos seguidos.
- **Formulário** — as relações que mais caem, organizadas pelos itens do edital.
- **Edital** — conteúdo programático transcrito do Anexo IV, com contagem de questões e foco de prova por item.

Atalho: as teclas **A a E** respondem a questão em foco no modo estudo e no simulado.

## Estrutura dos arquivos

```
index.html                       página
assets/style.css                 identidade visual
assets/app.js                    lógica (estudo, simulado, revisão, estatísticas)
data/edital.js                   temas + transcrição do Anexo IV
data/formulario.js               formulário
data/q-*.js                      um arquivo por assunto (um por item do edital)
build.js                         gera a versão de arquivo único
transpetro-enfase-25.bundle.html versão de arquivo único (gerada por build.js)
```

Depois de mexer em qualquer arquivo, regenere o bundle:

```bash
node build.js
```

## Como acrescentar questões

Abra o `data/q-<assunto>.js` correspondente e acrescente um objeto dentro do `window.BANCO.push(...)`:

```js
{ id:"TER-23", tema:"termodinamica", subtema:"Primeira Lei", nivel:"medio",
  texto:"Enunciado longo ou situação-problema (opcional).",
  dados:"Bloco monoespaçado com os dados (opcional).",
  enunciado:"A pergunta propriamente dita.",
  alternativas:["...","...","...","...","..."],
  correta:2,                       // índice 0..4 → A..E
  calculo:"Memória de cálculo (opcional).",
  explicacao:"Comentário do gabarito.",
  pegadinha:"O erro que a banca costuma explorar (opcional)." }
```

Regras: `id` único, exatamente cinco alternativas, `nivel` entre `facil`, `medio` e `dificil`, e `tema` igual a uma das chaves de `data/edital.js`. Use `**negrito**` no texto se quiser destaque.

Para criar um assunto novo, acrescente a chave em `TEMAS` (em `data/edital.js`), crie o `data/q-novo.js` e inclua a tag `<script>` correspondente no `index.html`.

## Aviso

Material de estudo independente. Não é publicação oficial da Transpetro, da Petrobras ou da Fundação Cesgranrio. O conteúdo programático foi transcrito do Anexo IV do edital; as questões são autorais, escritas a partir dessa ementa.
