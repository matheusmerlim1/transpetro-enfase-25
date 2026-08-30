/* ============================================================
   FIGURAS — casos específicos de enunciado
   Desenhos feitos para questões cujo enunciado não é atendido
   por nenhuma figura genérica. Figura que não corresponde ao
   enunciado atrapalha mais que ajuda.
   ============================================================ */
window.FIGURAS = window.FIGURAS || {};

window.FIGURAS["viga-biapoiada-qp"] = {
  titulo: "Viga biapoiada com carga distribuída e carga concentrada no meio do vão",
  svg:
  '<svg viewBox="0 0 340 130" role="img" aria-label="Viga biapoiada de vão L submetida ao mesmo tempo a uma carga uniformemente distribuída q e a uma carga concentrada P no meio do vão">' +
    '<line class="f-c" x1="50" y1="46" x2="290" y2="46"/>' +
    '<g class="f-c">' +
      '<line x1="60" y1="46" x2="60" y2="62"/><line x1="98" y1="46" x2="98" y2="62"/>' +
      '<line x1="136" y1="46" x2="136" y2="62"/><line x1="204" y1="46" x2="204" y2="62"/>' +
      '<line x1="242" y1="46" x2="242" y2="62"/><line x1="280" y1="46" x2="280" y2="62"/>' +
    '</g>' +
    '<g class="f-pc">' +
      '<path d="M57,56 L63,56 L60,64 Z"/><path d="M95,56 L101,56 L98,64 Z"/>' +
      '<path d="M133,56 L139,56 L136,64 Z"/><path d="M201,56 L207,56 L204,64 Z"/>' +
      '<path d="M239,56 L245,56 L242,64 Z"/><path d="M277,56 L283,56 L280,64 Z"/>' +
    '</g>' +
    '<text class="f-ta" x="296" y="50">q</text>' +
    '<line class="f-c" x1="170" y1="14" x2="170" y2="62"/>' +
    '<path class="f-pc" d="M166,54 L174,54 L170,65 Z"/>' +
    '<text class="f-ta" x="177" y="22">P</text>' +
    '<line class="f-g" x1="50" y1="70" x2="290" y2="70"/>' +
    '<path class="f-p" d="M50,70 L40,88 L60,88 Z"/>' +
    '<path class="f-p" d="M290,70 L280,84 L300,84 Z"/>' +
    '<circle class="f-p" cx="284" cy="87" r="2.6"/><circle class="f-p" cx="296" cy="87" r="2.6"/>' +
    '<line class="f-l" x1="34" y1="90" x2="66" y2="90"/>' +
    '<line class="f-l" x1="276" y1="92" x2="304" y2="92"/>' +
    '<line class="f-d" x1="50" y1="70" x2="50" y2="114"/>' +
    '<line class="f-d" x1="170" y1="70" x2="170" y2="114"/>' +
    '<line class="f-d" x1="290" y1="70" x2="290" y2="114"/>' +
    '<line class="f-l" x1="50" y1="108" x2="170" y2="108"/>' +
    '<line class="f-l" x1="170" y1="108" x2="290" y2="108"/>' +
    '<path class="f-pl" d="M50,108 L58,105 L58,111 Z"/><path class="f-pl" d="M170,108 L162,105 L162,111 Z"/>' +
    '<path class="f-pl" d="M170,108 L178,105 L178,111 Z"/><path class="f-pl" d="M290,108 L282,105 L282,111 Z"/>' +
    '<text class="f-t" x="110" y="124" text-anchor="middle">L/2</text>' +
    '<text class="f-t" x="230" y="124" text-anchor="middle">L/2</text>' +
  '</svg>'
};

window.FIGURAS["cisalhamento-puro"] = {
  titulo: "Elemento em cisalhamento puro",
  svg:
  '<svg viewBox="0 0 300 180" role="img" aria-label="Elemento quadrado submetido apenas a tensões de cisalhamento nas quatro faces, com tensões normais nulas, e indicação do plano a quarenta e cinco graus">' +
    '<rect class="f-g" x="90" y="45" width="100" height="90"/>' +
    '<g class="f-c">' +
      '<line x1="100" y1="36" x2="180" y2="36"/>' +
      '<line x1="180" y1="144" x2="100" y2="144"/>' +
      '<line x1="81" y1="55" x2="81" y2="125"/>' +
      '<line x1="199" y1="125" x2="199" y2="55"/>' +
    '</g>' +
    '<g class="f-pc">' +
      '<path d="M184,36 L176,33 L176,39 Z"/><path d="M96,144 L104,141 L104,147 Z"/>' +
      '<path d="M81,129 L78,121 L84,121 Z"/><path d="M199,51 L196,59 L202,59 Z"/>' +
    '</g>' +
    '<text class="f-ta" x="140" y="30" text-anchor="middle">τ</text>' +
    '<text class="f-ta" x="140" y="158" text-anchor="middle">τ</text>' +
    '<text class="f-ta" x="72" y="94" text-anchor="end">τ</text>' +
    '<text class="f-ta" x="208" y="94">τ</text>' +
    '<line class="f-d" x1="90" y1="135" x2="190" y2="45"/>' +
    '<text class="f-t2" x="228" y="46">plano a 45°</text>' +
    '<text class="f-t3" x="140" y="174" text-anchor="middle">σx = σy = 0</text>' +
  '</svg>'
};

window.FIGURAS["equip-isoladores"] = {
  titulo: "Equipamento sobre isoladores em paralelo",
  svg:
  '<svg viewBox="0 0 300 180" role="img" aria-label="Bloco de massa m apoiado sobre quatro isoladores iguais de rigidez k, trabalhando em paralelo sobre a base">' +
    '<rect class="f-g" x="60" y="30" width="180" height="46"/>' +
    '<text class="f-t" x="150" y="59" text-anchor="middle">m</text>' +
    '<g class="f-l">' +
      '<path d="M85,76 L85,86 L76,91 L94,99 L76,107 L94,115 L85,120 L85,130"/>' +
      '<path d="M128,76 L128,86 L119,91 L137,99 L119,107 L137,115 L128,120 L128,130"/>' +
      '<path d="M171,76 L171,86 L162,91 L180,99 L162,107 L180,115 L171,120 L171,130"/>' +
      '<path d="M214,76 L214,86 L205,91 L223,99 L205,107 L223,115 L214,120 L214,130"/>' +
    '</g>' +
    '<text class="f-t" x="66" y="103" text-anchor="end">k</text>' +
    '<line class="f-d" x1="70" y1="99" x2="76" y2="99"/>' +
    '<line class="f-g" x1="55" y1="130" x2="245" y2="130"/>' +
    '<g class="f-l">' +
      '<line x1="65" y1="130" x2="55" y2="140"/><line x1="89" y1="130" x2="79" y2="140"/>' +
      '<line x1="113" y1="130" x2="103" y2="140"/><line x1="137" y1="130" x2="127" y2="140"/>' +
      '<line x1="161" y1="130" x2="151" y2="140"/><line x1="185" y1="130" x2="175" y2="140"/>' +
      '<line x1="209" y1="130" x2="199" y2="140"/><line x1="233" y1="130" x2="223" y2="140"/>' +
    '</g>' +
    '<line class="f-c" x1="266" y1="34" x2="266" y2="66"/>' +
    '<path class="f-pc" d="M266,70 L262,60 L270,60 Z"/>' +
    '<text class="f-ta" x="272" y="54">x</text>' +
    '<text class="f-t3" x="150" y="164" text-anchor="middle">isoladores sob a mesma base trabalham em paralelo</text>' +
  '</svg>'
};

window.FIGURAS["disco-anel"] = {
  titulo: "Disco maciço e anel de parede fina, de mesma massa e mesmo raio",
  svg:
  '<svg viewBox="0 0 300 160" role="img" aria-label="Comparação entre um disco maciço e um anel de parede fina, ambos de mesma massa e mesmo raio, girando em torno do eixo central">' +
    '<circle class="f-g" cx="85" cy="70" r="45"/>' +
    '<circle class="f-hatch" cx="85" cy="70" r="45"/>' +
    '<circle class="f-p" cx="85" cy="70" r="2.5"/>' +
    '<line class="f-d" x1="85" y1="70" x2="130" y2="70"/>' +
    '<text class="f-t2" x="107" y="64" text-anchor="middle">R</text>' +
    '<text class="f-t" x="85" y="134" text-anchor="middle">disco maciço</text>' +
    '<text class="f-t3" x="85" y="150" text-anchor="middle">massa até o centro</text>' +
    '<circle class="f-g" cx="215" cy="70" r="45"/>' +
    '<circle class="f-g" cx="215" cy="70" r="40"/>' +
    '<circle class="f-p" cx="215" cy="70" r="2.5"/>' +
    '<line class="f-d" x1="215" y1="70" x2="260" y2="70"/>' +
    '<text class="f-t2" x="237" y="64" text-anchor="middle">R</text>' +
    '<text class="f-t" x="215" y="134" text-anchor="middle">anel de parede fina</text>' +
    '<text class="f-t3" x="215" y="150" text-anchor="middle">massa no raio externo</text>' +
    '<line class="f-c" x1="85" y1="12" x2="85" y2="24"/>' +
    '<line class="f-c" x1="215" y1="12" x2="215" y2="24"/>' +
    '<text class="f-ta" x="150" y="20" text-anchor="middle">eixo central</text>' +
  '</svg>'
};
