/* ============================================================
   FIGURAS — térmica, fluidos, máquinas, vibrações e dinâmica
   Mesmas convenções de figuras-1.js.
   ============================================================ */
window.FIGURAS = window.FIGURAS || {};

window.FIGURAS["ciclo-otto-pv"] = {
  titulo: "Ciclo Otto no diagrama p–V",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Ciclo Otto no diagrama pressão volume: compressão isentrópica, fornecimento de calor a volume constante, expansão isentrópica e rejeição de calor a volume constante">' +
    '<line class="f-l" x1="50" y1="170" x2="320" y2="170"/>' +
    '<line class="f-l" x1="50" y1="20" x2="50" y2="170"/>' +
    '<text class="f-t" x="316" y="187" text-anchor="end">V</text>' +
    '<text class="f-t" x="44" y="26" text-anchor="end">p</text>' +
    '<path class="f-c" d="M110,140 C150,132 220,120 270,116"/>' +
    '<path class="f-c" d="M110,40 C150,60 220,92 270,116"/>' +
    '<line class="f-c" x1="110" y1="140" x2="110" y2="40"/>' +
    '<line class="f-c" x1="270" y1="116" x2="270" y2="146"/>' +
    '<path class="f-c" d="M110,140 L270,146"/>' +
    '<g class="f-pc">' +
      '<circle cx="270" cy="146" r="3"/><circle cx="110" cy="140" r="3"/>' +
      '<circle cx="110" cy="40" r="3"/><circle cx="270" cy="116" r="3"/>' +
    '</g>' +
    '<text class="f-t" x="278" y="152">1</text>' +
    '<text class="f-t" x="100" y="150" text-anchor="end">2</text>' +
    '<text class="f-t" x="100" y="38" text-anchor="end">3</text>' +
    '<text class="f-t" x="278" y="114">4</text>' +
    '<text class="f-t2" x="118" y="90">q entra (V const.)</text>' +
    '<text class="f-t2" x="262" y="134" text-anchor="end">q sai</text>' +
    '<line class="f-d" x1="110" y1="170" x2="110" y2="146"/>' +
    '<line class="f-d" x1="270" y1="170" x2="270" y2="150"/>' +
    '<text class="f-t2" x="190" y="186" text-anchor="middle">r = V₁/V₂</text>' +
  '</svg>'
};

window.FIGURAS["ciclo-diesel-pv"] = {
  titulo: "Ciclo Diesel no diagrama p–V",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Ciclo Diesel no diagrama pressão volume: o fornecimento de calor do ponto 2 ao ponto 3 ocorre a pressão constante">' +
    '<line class="f-l" x1="50" y1="170" x2="320" y2="170"/>' +
    '<line class="f-l" x1="50" y1="20" x2="50" y2="170"/>' +
    '<text class="f-t" x="316" y="187" text-anchor="end">V</text>' +
    '<text class="f-t" x="44" y="26" text-anchor="end">p</text>' +
    '<path class="f-c" d="M110,140 C150,132 220,120 270,116"/>' +
    '<line class="f-c" x1="110" y1="140" x2="110" y2="45"/>' +
    '<line class="f-c" x1="110" y1="45" x2="155" y2="45"/>' +
    '<path class="f-c" d="M155,45 C190,70 235,100 270,116"/>' +
    '<line class="f-c" x1="270" y1="116" x2="270" y2="146"/>' +
    '<path class="f-c" d="M110,140 L270,146"/>' +
    '<g class="f-pc">' +
      '<circle cx="270" cy="146" r="3"/><circle cx="110" cy="140" r="3"/>' +
      '<circle cx="110" cy="45" r="3"/><circle cx="155" cy="45" r="3"/><circle cx="270" cy="116" r="3"/>' +
    '</g>' +
    '<text class="f-t" x="278" y="152">1</text>' +
    '<text class="f-t" x="100" y="150" text-anchor="end">2</text>' +
    '<text class="f-t" x="106" y="38" text-anchor="end">2</text>' +
    '<text class="f-t" x="160" y="38">3</text>' +
    '<text class="f-t" x="278" y="114">4</text>' +
    '<text class="f-t2" x="132" y="34" text-anchor="middle">q entra a p constante</text>' +
    '<text class="f-t2" x="262" y="134" text-anchor="end">q sai (V const.)</text>' +
    '<line class="f-d" x1="155" y1="45" x2="155" y2="170"/>' +
    '<text class="f-t2" x="190" y="186" text-anchor="middle">rc = V₃/V₂ (razão de corte)</text>' +
  '</svg>'
};

window.FIGURAS["rankine-ts"] = {
  titulo: "Ciclo Rankine no diagrama T–s",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Ciclo Rankine no diagrama temperatura entropia, com o domo de saturação, bombeamento, caldeira, superaquecimento, turbina e condensador">' +
    '<line class="f-l" x1="45" y1="170" x2="320" y2="170"/>' +
    '<line class="f-l" x1="45" y1="20" x2="45" y2="170"/>' +
    '<text class="f-t" x="316" y="187" text-anchor="end">s</text>' +
    '<text class="f-t" x="40" y="26" text-anchor="end">T</text>' +
    // domo de saturação
    '<path class="f-d" d="M95,150 C105,80 140,52 175,52 C210,52 245,80 255,150"/>' +
    '<text class="f-t2" x="175" y="46" text-anchor="middle">domo de saturação</text>' +
    // ciclo
    '<line class="f-c" x1="95" y1="150" x2="95" y2="144"/>' +
    '<path class="f-c" d="M95,144 C120,100 145,72 175,70"/>' +
    '<line class="f-c" x1="175" y1="70" x2="230" y2="70"/>' +
    '<path class="f-c" d="M230,70 L268,150"/>' +
    '<line class="f-c" x1="268" y1="150" x2="95" y2="150"/>' +
    '<g class="f-pc">' +
      '<circle cx="95" cy="150" r="3"/><circle cx="95" cy="144" r="3"/>' +
      '<circle cx="230" cy="70" r="3"/><circle cx="268" cy="150" r="3"/>' +
    '</g>' +
    '<text class="f-t" x="88" y="162" text-anchor="end">1</text>' +
    '<text class="f-t" x="86" y="142" text-anchor="end">2</text>' +
    '<text class="f-t" x="236" y="66">3</text>' +
    '<text class="f-t" x="276" y="154">4</text>' +
    '<text class="f-t2" x="150" y="112">caldeira</text>' +
    '<text class="f-t2" x="262" y="108" text-anchor="end">turbina</text>' +
    '<text class="f-t2" x="180" y="164" text-anchor="middle">condensador</text>' +
  '</svg>'
};

window.FIGURAS["massa-mola"] = {
  titulo: "Sistema massa-mola-amortecedor de um grau de liberdade",
  svg:
  '<svg viewBox="0 0 300 200" role="img" aria-label="Massa suspensa por uma mola de rigidez k e um amortecedor de constante c, com deslocamento x medido a partir da posição de equilíbrio">' +
    '<line class="f-g" x1="60" y1="26" x2="240" y2="26"/>' +
    '<g class="f-l">' +
      '<line x1="70" y1="26" x2="60" y2="16"/><line x1="94" y1="26" x2="84" y2="16"/>' +
      '<line x1="118" y1="26" x2="108" y2="16"/><line x1="142" y1="26" x2="132" y2="16"/>' +
      '<line x1="166" y1="26" x2="156" y2="16"/><line x1="190" y1="26" x2="180" y2="16"/>' +
      '<line x1="214" y1="26" x2="204" y2="16"/><line x1="238" y1="26" x2="228" y2="16"/>' +
    '</g>' +
    // mola
    '<path class="f-l" d="M110,26 L110,44 L96,52 L124,64 L96,76 L124,88 L96,100 L110,108 L110,124"/>' +
    '<text class="f-t" x="88" y="80" text-anchor="end">k</text>' +
    // amortecedor
    '<line class="f-l" x1="190" y1="26" x2="190" y2="60"/>' +
    '<rect class="f-l" x="176" y="60" width="28" height="34"/>' +
    '<line class="f-l" x1="190" y1="70" x2="190" y2="124"/>' +
    '<line class="f-g" x1="178" y1="70" x2="202" y2="70"/>' +
    '<text class="f-t" x="212" y="80">c</text>' +
    // massa
    '<rect class="f-g" x="95" y="124" width="110" height="42"/>' +
    '<text class="f-t" x="150" y="150" text-anchor="middle">m</text>' +
    // deslocamento
    '<line class="f-c" x1="250" y1="130" x2="250" y2="168"/>' +
    '<path class="f-pc" d="M250,172 L246,162 L254,162 Z"/>' +
    '<text class="f-ta" x="256" y="152">x(t)</text>' +
    '<text class="f-t2" x="150" y="188" text-anchor="middle">ωn = √(k/m)</text>' +
  '</svg>'
};

window.FIGURAS["transmissibilidade"] = {
  titulo: "Transmissibilidade em função da razão de frequências",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Curvas de transmissibilidade contra a razão de frequências, cruzando o valor unitário em raiz de dois, com o isolamento ocorrendo apenas acima desse ponto">' +
    '<line class="f-l" x1="50" y1="165" x2="320" y2="165"/>' +
    '<line class="f-l" x1="50" y1="20" x2="50" y2="165"/>' +
    '<text class="f-t" x="316" y="182" text-anchor="end">r = ω/ωn</text>' +
    '<text class="f-t" x="44" y="26" text-anchor="end">TR</text>' +
    '<line class="f-d" x1="50" y1="120" x2="320" y2="120"/>' +
    '<text class="f-t2" x="46" y="124" text-anchor="end">1</text>' +
    // ζ baixo
    '<path class="f-c" d="M50,120 C80,116 100,100 118,60 C124,30 132,30 138,60 C150,104 170,132 200,144 C240,154 280,158 315,160"/>' +
    // ζ alto
    '<path class="f-l2" d="M50,120 C80,118 100,110 120,96 C136,88 150,96 170,116 C200,138 260,150 315,154"/>' +
    '<line class="f-d" x1="128" y1="20" x2="128" y2="165"/>' +
    '<text class="f-t2" x="128" y="180" text-anchor="middle">1</text>' +
    '<line class="f-d" x1="168" y1="60" x2="168" y2="165"/>' +
    '<text class="f-t2" x="168" y="180" text-anchor="middle">√2</text>' +
    '<circle class="f-pc" cx="168" cy="120" r="3"/>' +
    '<text class="f-t2" x="176" y="40">isolamento só depois de √2</text>' +
    '<text class="f-t2" x="132" y="30">ζ baixo</text>' +
    '<text class="f-t3" x="196" y="106">ζ alto</text>' +
  '</svg>'
};

window.FIGURAS["bomba-sistema"] = {
  titulo: "Curva da bomba e curva do sistema",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Curva altura contra vazão da bomba cruzando a curva do sistema no ponto de operação; a curva do sistema parte da altura estática e cresce com o quadrado da vazão">' +
    '<line class="f-l" x1="50" y1="165" x2="320" y2="165"/>' +
    '<line class="f-l" x1="50" y1="20" x2="50" y2="165"/>' +
    '<text class="f-t" x="316" y="182" text-anchor="end">Q</text>' +
    '<text class="f-t" x="44" y="26" text-anchor="end">H</text>' +
    // curva da bomba
    '<path class="f-c" d="M55,50 C120,54 190,74 280,140"/>' +
    '<text class="f-ta" x="70" y="44">curva da bomba</text>' +
    // curva do sistema
    '<path class="f-l2" d="M50,140 C110,138 170,120 250,60"/>' +
    '<line class="f-d" x1="50" y1="140" x2="300" y2="140"/>' +
    '<text class="f-t2" x="46" y="144" text-anchor="end">H est.</text>' +
    '<text class="f-t2" x="256" y="56">curva do sistema</text>' +
    // ponto de operação
    '<circle class="f-pc" cx="203" cy="96" r="4"/>' +
    '<line class="f-d" x1="203" y1="96" x2="203" y2="165"/>' +
    '<line class="f-d" x1="50" y1="96" x2="203" y2="96"/>' +
    '<text class="f-t2" x="210" y="92">ponto de operação</text>' +
    '<text class="f-t2" x="203" y="180" text-anchor="middle">Q de trabalho</text>' +
  '</svg>'
};

window.FIGURAS["trocador-perfis"] = {
  titulo: "Perfis de temperatura: paralelo e contracorrente",
  svg:
  '<svg viewBox="0 0 340 210" role="img" aria-label="Comparação dos perfis de temperatura em trocador de calor em correntes paralelas e em contracorrente ao longo do comprimento">' +
    // paralelo
    '<text class="f-t" x="90" y="18" text-anchor="middle">correntes paralelas</text>' +
    '<line class="f-l" x1="30" y1="95" x2="150" y2="95"/>' +
    '<line class="f-l" x1="30" y1="26" x2="30" y2="95"/>' +
    '<path class="f-c" d="M32,32 C60,48 90,58 148,62"/>' +
    '<path class="f-l2" d="M32,90 C60,80 90,72 148,68"/>' +
    '<text class="f-t2" x="90" y="108" text-anchor="middle">as curvas se aproximam</text>' +
    '<text class="f-t3" x="152" y="66">→</text>' +
    // contracorrente
    '<text class="f-t" x="250" y="18" text-anchor="middle">contracorrente</text>' +
    '<line class="f-l" x1="190" y1="95" x2="310" y2="95"/>' +
    '<line class="f-l" x1="190" y1="26" x2="190" y2="95"/>' +
    '<path class="f-c" d="M192,32 C230,44 270,52 308,58"/>' +
    '<path class="f-l2" d="M192,74 C230,80 270,86 308,90"/>' +
    '<text class="f-t2" x="250" y="108" text-anchor="middle">ΔT mais uniforme</text>' +
    // legenda
    '<line class="f-c" x1="40" y1="136" x2="70" y2="136"/>' +
    '<text class="f-t2" x="76" y="140">fluido quente</text>' +
    '<line class="f-l2" x1="40" y1="156" x2="70" y2="156"/>' +
    '<text class="f-t2" x="76" y="160">fluido frio</text>' +
    '<text class="f-t2" x="20" y="186">Q = U·A·F·ΔTml    ΔTml = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂)</text>' +
    '<text class="f-t3" x="20" y="202">o contracorrente dá MLDT maior e, para a mesma carga, menos área</text>' +
  '</svg>'
};

window.FIGURAS["banheira"] = {
  titulo: "Curva da banheira",
  svg:
  '<svg viewBox="0 0 340 190" role="img" aria-label="Taxa de falha ao longo do tempo: mortalidade infantil decrescente, vida útil com taxa constante e desgaste crescente">' +
    '<line class="f-l" x1="50" y1="150" x2="320" y2="150"/>' +
    '<line class="f-l" x1="50" y1="20" x2="50" y2="150"/>' +
    '<text class="f-t" x="316" y="167" text-anchor="end">tempo</text>' +
    '<text class="f-t" x="44" y="26" text-anchor="end">λ</text>' +
    '<path class="f-c" d="M55,40 C80,100 100,112 130,114 L230,114 C265,116 285,80 310,32"/>' +
    '<line class="f-d" x1="130" y1="30" x2="130" y2="150"/>' +
    '<line class="f-d" x1="230" y1="30" x2="230" y2="150"/>' +
    '<text class="f-t2" x="90" y="166" text-anchor="middle">mortalidade</text>' +
    '<text class="f-t2" x="90" y="178" text-anchor="middle">infantil</text>' +
    '<text class="f-t2" x="180" y="166" text-anchor="middle">vida útil</text>' +
    '<text class="f-t2" x="180" y="178" text-anchor="middle">λ constante</text>' +
    '<text class="f-t2" x="272" y="166" text-anchor="middle">desgaste</text>' +
    '<text class="f-t3" x="180" y="104" text-anchor="middle">só aqui a preventiva por tempo faz sentido →</text>' +
  '</svg>'
};

window.FIGURAS["charpy"] = {
  titulo: "Transição dúctil-frágil no ensaio Charpy",
  svg:
  '<svg viewBox="0 0 340 190" role="img" aria-label="Energia absorvida no ensaio Charpy em função da temperatura: aço ferrítico apresenta patamar inferior, transição e patamar superior; aço austenítico não apresenta transição">' +
    '<line class="f-l" x1="50" y1="150" x2="320" y2="150"/>' +
    '<line class="f-l" x1="50" y1="20" x2="50" y2="150"/>' +
    '<text class="f-t" x="316" y="167" text-anchor="end">temperatura</text>' +
    '<text class="f-t" x="44" y="26" text-anchor="end">energia</text>' +
    '<path class="f-c" d="M55,138 C100,136 130,130 160,90 C185,58 215,46 310,42"/>' +
    '<path class="f-l2" d="M55,52 C140,48 230,42 310,36"/>' +
    '<line class="f-d" x1="160" y1="30" x2="160" y2="150"/>' +
    '<text class="f-t2" x="160" y="166" text-anchor="middle">temperatura de transição</text>' +
    '<text class="f-ta" x="200" y="72">CCC (ferrítico): tem transição</text>' +
    '<text class="f-t3" x="70" y="46">CFC (austenítico, alumínio): não tem</text>' +
    '<text class="f-t2" x="60" y="132">frágil</text>' +
    '<text class="f-t2" x="300" y="58" text-anchor="end">dúctil</text>' +
  '</svg>'
};

window.FIGURAS["fe-c"] = {
  titulo: "Diagrama ferro-carbono (região dos aços)",
  svg:
  '<svg viewBox="0 0 340 210" role="img" aria-label="Diagrama de equilíbrio ferro-carbono na região dos aços, com o campo da austenita, as linhas A3 e Acm e a reação eutetoide a 727 graus Celsius">' +
    '<line class="f-l" x1="55" y1="170" x2="320" y2="170"/>' +
    '<line class="f-l" x1="55" y1="20" x2="55" y2="170"/>' +
    '<text class="f-t" x="316" y="187" text-anchor="end">% C</text>' +
    '<text class="f-t" x="50" y="26" text-anchor="end">T</text>' +
    // linhas A3 e Acm encontrando-se no eutetoide
    '<path class="f-c" d="M57,44 C100,70 140,98 175,112"/>' +
    '<path class="f-c" d="M175,112 C215,104 260,88 300,72"/>' +
    '<line class="f-c" x1="57" y1="112" x2="300" y2="112"/>' +
    '<circle class="f-pc" cx="175" cy="112" r="3.5"/>' +
    '<text class="f-ta" x="175" y="106" text-anchor="middle">eutetoide</text>' +
    '<text class="f-t2" x="46" y="116" text-anchor="end">727 °C</text>' +
    '<text class="f-t2" x="175" y="184" text-anchor="middle">0,77</text>' +
    '<line class="f-d" x1="175" y1="112" x2="175" y2="176"/>' +
    '<text class="f-t2" x="150" y="70">austenita (γ)</text>' +
    '<text class="f-t2" x="70" y="146">ferrita + perlita</text>' +
    '<text class="f-t2" x="300" y="146" text-anchor="end">perlita + cementita</text>' +
    '<text class="f-t3" x="110" y="60" text-anchor="middle">A₃</text>' +
    '<text class="f-t3" x="250" y="82" text-anchor="middle">Acm</text>' +
    '<text class="f-t3" x="90" y="200">hipoeutetoide</text>' +
    '<text class="f-t3" x="300" y="200" text-anchor="end">hipereutetoide</text>' +
  '</svg>'
};

window.FIGURAS["moody"] = {
  titulo: "Diagrama de Moody (leitura esquemática)",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Fator de atrito contra número de Reynolds: trecho laminar decrescente, zona de transição e, no turbulento completamente rugoso, curvas horizontais dependentes apenas da rugosidade relativa">' +
    '<line class="f-l" x1="55" y1="165" x2="320" y2="165"/>' +
    '<line class="f-l" x1="55" y1="20" x2="55" y2="165"/>' +
    '<text class="f-t" x="316" y="182" text-anchor="end">Re (log)</text>' +
    '<text class="f-t" x="50" y="26" text-anchor="end">f</text>' +
    // laminar
    '<line class="f-c" x1="60" y1="36" x2="120" y2="96"/>' +
    '<text class="f-t2" x="62" y="32">laminar: f = 64/Re</text>' +
    // transição
    '<line class="f-d" x1="120" y1="20" x2="120" y2="165"/>' +
    '<line class="f-d" x1="152" y1="20" x2="152" y2="165"/>' +
    '<text class="f-t3" x="136" y="180" text-anchor="middle">transição</text>' +
    // turbulento: famílias de rugosidade relativa
    '<path class="f-c" d="M152,80 C200,74 240,70 310,70"/>' +
    '<path class="f-c" d="M152,104 C200,98 240,96 310,96"/>' +
    '<path class="f-c" d="M152,128 C210,122 250,120 310,120"/>' +
    '<path class="f-l2" d="M152,146 C210,138 250,134 310,132"/>' +
    '<text class="f-t2" x="314" y="68" text-anchor="end">ε/D maior</text>' +
    '<text class="f-t2" x="314" y="128" text-anchor="end">ε/D menor</text>' +
    '<text class="f-t3" x="314" y="146" text-anchor="end">liso</text>' +
    '<text class="f-t2" x="230" y="42" text-anchor="middle">completamente rugoso: f depende só de ε/D</text>' +
  '</svg>'
};

window.FIGURAS["carta-controle"] = {
  titulo: "Carta de controle",
  svg:
  '<svg viewBox="0 0 340 180" role="img" aria-label="Carta de controle com linha média, limites superior e inferior a três sigma e um ponto fora dos limites indicando causa especial">' +
    '<line class="f-l" x1="45" y1="150" x2="320" y2="150"/>' +
    '<line class="f-l" x1="45" y1="18" x2="45" y2="150"/>' +
    '<text class="f-t" x="316" y="167" text-anchor="end">amostra</text>' +
    '<line class="f-c" x1="45" y1="40" x2="320" y2="40"/>' +
    '<line class="f-c" x1="45" y1="130" x2="320" y2="130"/>' +
    '<line class="f-d" x1="45" y1="85" x2="320" y2="85"/>' +
    '<text class="f-ta" x="324" y="44" text-anchor="end">LSC = x̄ + 3σ</text>' +
    '<text class="f-ta" x="324" y="134" text-anchor="end">LIC = x̄ − 3σ</text>' +
    '<text class="f-t2" x="324" y="81" text-anchor="end">x̄</text>' +
    '<path class="f-l2" d="M60,96 L86,74 L112,100 L138,80 L164,92 L190,70 L216,98 L242,30 L268,88 L294,78"/>' +
    '<g class="f-p2">' +
      '<circle cx="60" cy="96" r="2.6"/><circle cx="86" cy="74" r="2.6"/><circle cx="112" cy="100" r="2.6"/>' +
      '<circle cx="138" cy="80" r="2.6"/><circle cx="164" cy="92" r="2.6"/><circle cx="190" cy="70" r="2.6"/>' +
      '<circle cx="216" cy="98" r="2.6"/><circle cx="268" cy="88" r="2.6"/><circle cx="294" cy="78" r="2.6"/>' +
    '</g>' +
    '<circle class="f-pc" cx="242" cy="30" r="4.5"/>' +
    '<text class="f-ta" x="238" y="22" text-anchor="end">causa especial</text>' +
    '<text class="f-t3" x="45" y="176">limite de controle vem do processo; limite de especificação vem do projeto</text>' +
  '</svg>'
};

window.FIGURAS["pendulo-composto"] = {
  titulo: "Pêndulo composto",
  svg:
  '<svg viewBox="0 0 280 200" role="img" aria-label="Corpo rígido suspenso por um pino, oscilando em torno dele, com a distância d entre o pino e o centro de massa">' +
    '<line class="f-g" x1="70" y1="26" x2="200" y2="26"/>' +
    '<g class="f-l">' +
      '<line x1="80" y1="26" x2="70" y2="16"/><line x1="104" y1="26" x2="94" y2="16"/>' +
      '<line x1="128" y1="26" x2="118" y2="16"/><line x1="152" y1="26" x2="142" y2="16"/>' +
      '<line x1="176" y1="26" x2="166" y2="16"/><line x1="200" y1="26" x2="190" y2="16"/>' +
    '</g>' +
    '<circle class="f-g" cx="135" cy="34" r="6"/>' +
    '<text class="f-t" x="120" y="32" text-anchor="end">O</text>' +
    // corpo
    '<path class="f-g" d="M135,40 C118,70 116,110 128,140 C134,154 150,154 156,140 C168,110 160,70 141,40 Z"/>' +
    '<circle class="f-pc" cx="142" cy="110" r="3.5"/>' +
    '<text class="f-ta" x="150" y="114">G</text>' +
    '<line class="f-d" x1="135" y1="34" x2="142" y2="110"/>' +
    '<line class="f-d" x1="135" y1="34" x2="135" y2="180"/>' +
    '<text class="f-t2" x="112" y="76" text-anchor="end">d</text>' +
    '<line class="f-l" x1="122" y1="34" x2="122" y2="110"/>' +
    '<path class="f-pl" d="M122,34 L119,42 L125,42 Z"/><path class="f-pl" d="M122,110 L119,102 L125,102 Z"/>' +
    '<path class="f-c" d="M135,160 A25,25 0 0 1 158,150"/>' +
    '<text class="f-ta" x="164" y="152">θ</text>' +
    '<text class="f-t2" x="140" y="192" text-anchor="middle">T = 2π·√(I/(m·g·d))</text>' +
  '</svg>'
};

window.FIGURAS["conjugado-motor"] = {
  titulo: "Curva de conjugado do motor de indução",
  svg:
  '<svg viewBox="0 0 340 190" role="img" aria-label="Conjugado do motor de indução em função da rotação, com conjugado de partida, conjugado máximo e o ponto de operação próximo da rotação síncrona">' +
    '<line class="f-l" x1="50" y1="150" x2="320" y2="150"/>' +
    '<line class="f-l" x1="50" y1="20" x2="50" y2="150"/>' +
    '<text class="f-t" x="316" y="167" text-anchor="end">rotação</text>' +
    '<text class="f-t" x="44" y="26" text-anchor="end">C</text>' +
    '<path class="f-c" d="M52,104 C90,96 140,74 200,44 C230,34 250,44 268,86 C276,112 282,140 288,150"/>' +
    '<circle class="f-pc" cx="200" cy="44" r="3.5"/>' +
    '<text class="f-ta" x="206" y="40">conjugado máximo</text>' +
    '<circle class="f-pc" cx="52" cy="104" r="3.5"/>' +
    '<text class="f-t2" x="60" y="118">partida</text>' +
    '<line class="f-d" x1="288" y1="20" x2="288" y2="150"/>' +
    '<text class="f-t2" x="288" y="166" text-anchor="middle">ns</text>' +
    '<line class="f-l2" x1="50" y1="122" x2="300" y2="122"/>' +
    '<text class="f-t3" x="300" y="118" text-anchor="end">conjugado resistente da carga</text>' +
    '<circle class="f-p2" cx="272" cy="122" r="4"/>' +
    '<text class="f-t2" x="266" y="140" text-anchor="end">ponto de operação</text>' +
    '<text class="f-t3" x="292" y="36">o conjugado se anula em ns:</text>' +
    '<text class="f-t3" x="292" y="48">sem escorregamento, sem conjugado</text>' +
  '</svg>'
};
