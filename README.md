# Transpetro Ênfase 25 — banco de questões

**Estudar agora → https://matheusmerlim1.github.io/transpetro-enfase-25/**

Site de estudo para o **Edital nº 04 – TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR – 2026.4, Ênfase 25: Engenharia Mecânica** (Fundação Cesgranrio, prova em 06/12/2026).

## Como abrir

Dê duplo clique em `index.html`. Funciona offline, sem instalar nada. O progresso fica gravado no `localStorage` do navegador — use sempre o mesmo navegador para não perder o histórico.

Há também o `transpetro-enfase-25.bundle.html`: a mesma página com tudo embutido em um arquivo só, prático para copiar para o celular ou para um pendrive.

## O que tem

- **640 questões inéditas** no padrão Cesgranrio (cinco alternativas, resposta única), com gabarito comentado, memória de cálculo e nota de pegadinha.
  - 596 de Conhecimentos Específicos, cobrindo os 18 itens do Anexo IV.
  - 24 de Língua Portuguesa e 20 de Língua Inglesa.
  - Distribuição por nível: 21% fáceis, 40% médias e 39% difíceis.
  - As cinco alternativas de cada questão têm comprimento equivalente, para que o tamanho não entregue a resposta.
- **Resumo do assunto** — cada questão traz um botão que abre o verbete detalhado do assunto de que ela trata: síntese, pontos que precisam estar sabidos, fórmulas e as armadilhas típicas da banca. São 67 verbetes, cobrindo os 640 itens do banco. Cada fórmula vem acompanhada da legenda das variáveis, com significado e unidade.
- **Figuras** — 28 desenhos vetoriais desenhados no próprio site (SVG embutido, sem arquivo externo). Aparecem no enunciado quando são dado do problema — viga com o carregamento, elemento de tensões, eixo sob flexão e torção — e no resumo do assunto quando são gráfico de referência, como círculo de Mohr, diagrama Fe-C, ciclos p-V e T-s, curva da bomba e transmissibilidade.
- **Modo estudo** — filtra por assunto, dificuldade, questões nunca respondidas, questões erradas ou marcadas. Gabarito na hora.
- **Simulado** — monta a prova real (50 específicas + 10 português + 10 inglês) em 4h30, com folha de navegação, marcação para revisão e relógio. No fim, aplica os três cortes eliminatórios do item 7.1.4.3 do edital e mostra o desempenho por bloco e por assunto.
- **Revisão** — duas abas: **Resumo da matéria** (síntese dos 20 assuntos, pontos que precisam estar decorados e 40 exemplos resolvidos) e **fila de erros** automática, de onde a questão sai após dois acertos seguidos.
- **Formulário** — 268 fórmulas organizadas pelos 18 itens do edital, cada uma com o **significado e a unidade de todas as variáveis**. O botão *Imprimir / Salvar em PDF* gera uma versão limpa em preto sobre branco, com todas as seções abertas (no destino da impressão, escolha "Salvar como PDF").
- **Calculadora** — nas 323 questões de conta há um botão **Calculadora** ao lado de *Resumo do assunto*, que encaixa a calculadora dentro da própria questão, logo abaixo das alternativas. Há também o painel flutuante, aberto pelo botão do canto ou pela tecla **K**, disponível nas abas de questão e no formulário. Não é modal: fica por cima da tela e pode ser arrastado, então dá para ler o enunciado enquanto se faz a conta. Aceita vírgula decimal e notação científica (`5,67e-8`), tem raiz, potência, trigonometria em graus ou radianos, π, a gravidade em `g`, porcentagem, `Ans` para reaproveitar o resultado anterior e histórico das últimas contas.
- **Edital** — conteúdo programático transcrito do Anexo IV, com contagem de questões e foco de prova por item.

Atalhos: **A a E** respondem a questão em foco no modo estudo e no simulado; **K** abre e fecha a calculadora.

## Estrutura dos arquivos

```
index.html                       página
assets/style.css                 identidade visual
assets/app.js                    lógica (estudo, simulado, revisão, estatísticas)
assets/calc.js                   calculadora (parser próprio de expressões, sem eval)
data/edital.js                   temas + transcrição do Anexo IV
data/formulario.js               formulário
data/q-*.js                      questões, um arquivo por assunto (os `-2` são a segunda leva)
data/resumo.js                   resumo da matéria com exemplos resolvidos
data/verbetes-*.js               resumos detalhados por assunto (abertos pelo botão da questão)
data/figuras-*.js                desenhos SVG usados nas questões e nos resumos
data/simbolos.js                 significado e unidade das variáveis, por assunto
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

## O que não entra neste repositório

Provas anteriores, gabaritos oficiais e editais em PDF **não são versionados** — o `.gitignore` bloqueia `*.pdf`. Este repositório contém apenas o site e as questões autorais.

## Aviso

Material de estudo independente. Não é publicação oficial da Transpetro, da Petrobras ou da Fundação Cesgranrio. O conteúdo programático foi transcrito do Anexo IV do edital; as questões são autorais, escritas a partir dessa ementa.
