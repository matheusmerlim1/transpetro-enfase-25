/* ============================================================
   FIGURAS — mecânica dos sólidos
   Desenhos vetoriais embutidos: sem arquivo externo, funcionam
   offline e na impressão. Cores por currentColor e var(--accent),
   para acompanhar o tema claro/escuro.

   Convenção das classes (definidas em assets/style.css):
     .f-g  peça / corpo          .f-l  linha fina
     .f-c  carga (âmbar)         .f-d  linha de referência tracejada
     .f-t  rótulo                .f-ta rótulo de carga
     .f-p  preenchimento sólido
   As setas são polígonos desenhados à mão, não marcadores, para que
   dois desenhos na mesma página nunca disputem o mesmo id.
   ============================================================ */
window.FIGURAS = window.FIGURAS || {};

window.FIGURAS["viga-biapoiada-q"] = {
  titulo: "Viga biapoiada com carga uniformemente distribuída",
  svg:
  '<svg viewBox="0 0 340 120" role="img" aria-label="Viga biapoiada de vão L com carga distribuída q ao longo de todo o vão">' +
    // carga distribuída
    '<line class="f-c" x1="50" y1="30" x2="290" y2="30"/>' +
    '<g class="f-c">' +
      '<line x1="60" y1="30" x2="60" y2="52"/><line x1="98" y1="30" x2="98" y2="52"/>' +
      '<line x1="136" y1="30" x2="136" y2="52"/><line x1="174" y1="30" x2="174" y2="52"/>' +
      '<line x1="212" y1="30" x2="212" y2="52"/><line x1="250" y1="30" x2="250" y2="52"/>' +
      '<line x1="280" y1="30" x2="280" y2="52"/>' +
    '</g>' +
    '<g class="f-pc">' +
      '<path d="M57,46 L63,46 L60,54 Z"/><path d="M95,46 L101,46 L98,54 Z"/>' +
      '<path d="M133,46 L139,46 L136,54 Z"/><path d="M171,46 L177,46 L174,54 Z"/>' +
      '<path d="M209,46 L215,46 L212,54 Z"/><path d="M247,46 L253,46 L250,54 Z"/>' +
      '<path d="M277,46 L283,46 L280,54 Z"/>' +
    '</g>' +
    '<text class="f-ta" x="296" y="34">q</text>' +
    // viga
    '<line class="f-g" x1="50" y1="60" x2="290" y2="60"/>' +
    // apoios: triângulo fixo à esquerda, móvel à direita
    '<path class="f-p" d="M50,60 L40,78 L60,78 Z"/>' +
    '<path class="f-p" d="M290,60 L280,74 L300,74 Z"/>' +
    '<circle class="f-p" cx="284" cy="77" r="2.6"/><circle class="f-p" cx="296" cy="77" r="2.6"/>' +
    '<line class="f-l" x1="34" y1="80" x2="66" y2="80"/>' +
    '<line class="f-l" x1="276" y1="82" x2="304" y2="82"/>' +
    // cota do vão
    '<line class="f-d" x1="50" y1="60" x2="50" y2="104"/>' +
    '<line class="f-d" x1="290" y1="60" x2="290" y2="104"/>' +
    '<line class="f-l" x1="50" y1="98" x2="290" y2="98"/>' +
    '<path class="f-pl" d="M50,98 L58,95 L58,101 Z"/><path class="f-pl" d="M290,98 L282,95 L282,101 Z"/>' +
    '<text class="f-t" x="164" y="114" text-anchor="middle">L</text>' +
    '<text class="f-t" x="44" y="94" text-anchor="end">A</text>' +
    '<text class="f-t" x="298" y="94">B</text>' +
  '</svg>'
};

window.FIGURAS["viga-biapoiada-p"] = {
  titulo: "Viga biapoiada com carga concentrada no meio do vão",
  svg:
  '<svg viewBox="0 0 340 120" role="img" aria-label="Viga biapoiada de vão L com carga concentrada P aplicada no meio do vão">' +
    '<line class="f-c" x1="170" y1="22" x2="170" y2="52"/>' +
    '<path class="f-pc" d="M166,44 L174,44 L170,55 Z"/>' +
    '<text class="f-ta" x="177" y="30">P</text>' +
    '<line class="f-g" x1="50" y1="60" x2="290" y2="60"/>' +
    '<path class="f-p" d="M50,60 L40,78 L60,78 Z"/>' +
    '<path class="f-p" d="M290,60 L280,74 L300,74 Z"/>' +
    '<circle class="f-p" cx="284" cy="77" r="2.6"/><circle class="f-p" cx="296" cy="77" r="2.6"/>' +
    '<line class="f-l" x1="34" y1="80" x2="66" y2="80"/>' +
    '<line class="f-l" x1="276" y1="82" x2="304" y2="82"/>' +
    '<line class="f-d" x1="170" y1="60" x2="170" y2="104"/>' +
    '<line class="f-d" x1="50" y1="60" x2="50" y2="104"/>' +
    '<line class="f-d" x1="290" y1="60" x2="290" y2="104"/>' +
    '<line class="f-l" x1="50" y1="98" x2="170" y2="98"/>' +
    '<line class="f-l" x1="170" y1="98" x2="290" y2="98"/>' +
    '<path class="f-pl" d="M50,98 L58,95 L58,101 Z"/><path class="f-pl" d="M170,98 L162,95 L162,101 Z"/>' +
    '<path class="f-pl" d="M170,98 L178,95 L178,101 Z"/><path class="f-pl" d="M290,98 L282,95 L282,101 Z"/>' +
    '<text class="f-t" x="110" y="114" text-anchor="middle">L/2</text>' +
    '<text class="f-t" x="230" y="114" text-anchor="middle">L/2</text>' +
  '</svg>'
};

window.FIGURAS["viga-balanco-p"] = {
  titulo: "Viga em balanço com carga concentrada na extremidade livre",
  svg:
  '<svg viewBox="0 0 340 120" role="img" aria-label="Viga engastada em uma extremidade, livre na outra, com carga concentrada P aplicada na ponta livre">' +
    // engaste: parede hachurada
    '<line class="f-g" x1="56" y1="26" x2="56" y2="94"/>' +
    '<g class="f-l">' +
      '<line x1="56" y1="30" x2="44" y2="42"/><line x1="56" y1="42" x2="44" y2="54"/>' +
      '<line x1="56" y1="54" x2="44" y2="66"/><line x1="56" y1="66" x2="44" y2="78"/>' +
      '<line x1="56" y1="78" x2="44" y2="90"/>' +
    '</g>' +
    '<line class="f-g" x1="56" y1="60" x2="290" y2="60"/>' +
    '<line class="f-c" x1="290" y1="22" x2="290" y2="52"/>' +
    '<path class="f-pc" d="M286,44 L294,44 L290,55 Z"/>' +
    '<text class="f-ta" x="297" y="30">P</text>' +
    '<line class="f-d" x1="56" y1="60" x2="56" y2="104"/>' +
    '<line class="f-d" x1="290" y1="60" x2="290" y2="104"/>' +
    '<line class="f-l" x1="56" y1="98" x2="290" y2="98"/>' +
    '<path class="f-pl" d="M56,98 L64,95 L64,101 Z"/><path class="f-pl" d="M290,98 L282,95 L282,101 Z"/>' +
    '<text class="f-t" x="173" y="114" text-anchor="middle">L</text>' +
  '</svg>'
};

window.FIGURAS["viga-engastada-apoiada"] = {
  titulo: "Viga engastada em uma extremidade e apoiada na outra, com carga distribuída",
  svg:
  '<svg viewBox="0 0 340 120" role="img" aria-label="Viga hiperestática: engastada à esquerda, sobre apoio simples à direita, com carga uniformemente distribuída q">' +
    '<line class="f-c" x1="56" y1="30" x2="290" y2="30"/>' +
    '<g class="f-c">' +
      '<line x1="66" y1="30" x2="66" y2="52"/><line x1="103" y1="30" x2="103" y2="52"/>' +
      '<line x1="140" y1="30" x2="140" y2="52"/><line x1="177" y1="30" x2="177" y2="52"/>' +
      '<line x1="214" y1="30" x2="214" y2="52"/><line x1="251" y1="30" x2="251" y2="52"/>' +
      '<line x1="284" y1="30" x2="284" y2="52"/>' +
    '</g>' +
    '<g class="f-pc">' +
      '<path d="M63,46 L69,46 L66,54 Z"/><path d="M100,46 L106,46 L103,54 Z"/>' +
      '<path d="M137,46 L143,46 L140,54 Z"/><path d="M174,46 L180,46 L177,54 Z"/>' +
      '<path d="M211,46 L217,46 L214,54 Z"/><path d="M248,46 L254,46 L251,54 Z"/>' +
      '<path d="M281,46 L287,46 L284,54 Z"/>' +
    '</g>' +
    '<text class="f-ta" x="296" y="34">q</text>' +
    '<line class="f-g" x1="56" y1="26" x2="56" y2="94"/>' +
    '<g class="f-l">' +
      '<line x1="56" y1="30" x2="44" y2="42"/><line x1="56" y1="42" x2="44" y2="54"/>' +
      '<line x1="56" y1="54" x2="44" y2="66"/><line x1="56" y1="66" x2="44" y2="78"/>' +
      '<line x1="56" y1="78" x2="44" y2="90"/>' +
    '</g>' +
    '<line class="f-g" x1="56" y1="60" x2="290" y2="60"/>' +
    '<path class="f-p" d="M290,60 L280,74 L300,74 Z"/>' +
    '<circle class="f-p" cx="284" cy="77" r="2.6"/><circle class="f-p" cx="296" cy="77" r="2.6"/>' +
    '<line class="f-l" x1="276" y1="82" x2="304" y2="82"/>' +
    '<line class="f-d" x1="56" y1="60" x2="56" y2="104"/>' +
    '<line class="f-d" x1="290" y1="60" x2="290" y2="104"/>' +
    '<line class="f-l" x1="56" y1="98" x2="290" y2="98"/>' +
    '<path class="f-pl" d="M56,98 L64,95 L64,101 Z"/><path class="f-pl" d="M290,98 L282,95 L282,101 Z"/>' +
    '<text class="f-t" x="173" y="114" text-anchor="middle">L</text>' +
  '</svg>'
};

window.FIGURAS["elemento-tensao"] = {
  titulo: "Elemento sob estado plano de tensões",
  svg:
  '<svg viewBox="0 0 300 190" role="img" aria-label="Elemento quadrado com tensões normais sigma x e sigma y e tensão de cisalhamento tau xy nas quatro faces">' +
    '<rect class="f-g" x="100" y="55" width="100" height="80"/>' +
    // sigma x nas faces verticais
    '<line class="f-c" x1="60" y1="95" x2="96" y2="95"/>' +
    '<path class="f-pc" d="M100,95 L90,91 L90,99 Z"/>' +
    '<line class="f-c" x1="204" y1="95" x2="240" y2="95"/>' +
    '<path class="f-pc" d="M244,95 L234,91 L234,99 Z"/>' +
    '<text class="f-ta" x="52" y="88" text-anchor="end">σx</text>' +
    '<text class="f-ta" x="248" y="88">σx</text>' +
    // sigma y nas faces horizontais
    '<line class="f-c" x1="150" y1="18" x2="150" y2="51"/>' +
    '<path class="f-pc" d="M150,55 L146,45 L154,45 Z"/>' +
    '<line class="f-c" x1="150" y1="139" x2="150" y2="172"/>' +
    '<path class="f-pc" d="M150,176 L146,166 L154,166 Z"/>' +
    '<text class="f-ta" x="157" y="18">σy</text>' +
    '<text class="f-ta" x="157" y="180">σy</text>' +
    // cisalhamento nas quatro faces
    '<g class="f-l2">' +
      '<line x1="108" y1="48" x2="192" y2="48"/>' +
      '<line x1="192" y1="142" x2="108" y2="142"/>' +
      '<line x1="93" y1="65" x2="93" y2="125"/>' +
      '<line x1="207" y1="125" x2="207" y2="65"/>' +
    '</g>' +
    '<g class="f-p2">' +
      '<path d="M196,48 L188,45 L188,51 Z"/><path d="M104,142 L112,139 L112,145 Z"/>' +
      '<path d="M93,129 L90,121 L96,121 Z"/><path d="M207,61 L204,69 L210,69 Z"/>' +
    '</g>' +
    '<text class="f-t2" x="150" y="42" text-anchor="middle">τxy</text>' +
    '<text class="f-t2" x="150" y="156" text-anchor="middle">τxy</text>' +
    // eixos
    '<line class="f-d" x1="30" y1="170" x2="30" y2="140"/>' +
    '<line class="f-d" x1="30" y1="170" x2="60" y2="170"/>' +
    '<text class="f-t" x="64" y="174">x</text>' +
    '<text class="f-t" x="26" y="138" text-anchor="end">y</text>' +
  '</svg>'
};

window.FIGURAS["secao-retangular"] = {
  titulo: "Seção retangular na flexão",
  svg:
  '<svg viewBox="0 0 300 170" role="img" aria-label="Seção retangular de base b e altura h, com a linha neutra na meia altura e a distribuição linear de tensões de flexão">' +
    '<rect class="f-g" x="60" y="30" width="70" height="110"/>' +
    // linha neutra
    '<line class="f-d" x1="44" y1="85" x2="230" y2="85"/>' +
    '<text class="f-t" x="236" y="89">LN</text>' +
    // distribuição de tensões
    '<path class="f-c" d="M150,30 L200,30 L150,85 L200,140 L150,140"/>' +
    '<line class="f-c" x1="150" y1="30" x2="150" y2="140"/>' +
    '<g class="f-pc">' +
      '<path d="M204,30 L194,26 L194,34 Z"/><path d="M204,140 L194,136 L194,144 Z"/>' +
    '</g>' +
    '<text class="f-ta" x="208" y="26">σmax</text>' +
    '<text class="f-ta" x="208" y="150">compressão</text>' +
    // cotas
    '<line class="f-l" x1="60" y1="152" x2="130" y2="152"/>' +
    '<path class="f-pl" d="M60,152 L68,149 L68,155 Z"/><path class="f-pl" d="M130,152 L122,149 L122,155 Z"/>' +
    '<text class="f-t" x="95" y="164" text-anchor="middle">b</text>' +
    '<line class="f-l" x1="44" y1="30" x2="44" y2="140"/>' +
    '<path class="f-pl" d="M44,30 L41,38 L47,38 Z"/><path class="f-pl" d="M44,140 L41,132 L47,132 Z"/>' +
    '<text class="f-t" x="38" y="88" text-anchor="end">h</text>' +
  '</svg>'
};

window.FIGURAS["eixo-flexao-torcao"] = {
  titulo: "Eixo circular sob flexão e torção combinadas",
  svg:
  '<svg viewBox="0 0 340 150" role="img" aria-label="Eixo de seção circular engastado, submetido simultaneamente a momento fletor e momento torçor">' +
    // engaste
    '<line class="f-g" x1="56" y1="34" x2="56" y2="116"/>' +
    '<g class="f-l">' +
      '<line x1="56" y1="38" x2="44" y2="50"/><line x1="56" y1="50" x2="44" y2="62"/>' +
      '<line x1="56" y1="62" x2="44" y2="74"/><line x1="56" y1="74" x2="44" y2="86"/>' +
      '<line x1="56" y1="86" x2="44" y2="98"/><line x1="56" y1="98" x2="44" y2="110"/>' +
    '</g>' +
    // eixo em perspectiva simples
    '<line class="f-g" x1="56" y1="60" x2="250" y2="60"/>' +
    '<line class="f-g" x1="56" y1="92" x2="250" y2="92"/>' +
    '<ellipse class="f-g" cx="250" cy="76" rx="9" ry="16"/>' +
    '<ellipse class="f-l" cx="56" cy="76" rx="9" ry="16"/>' +
    '<line class="f-d" x1="40" y1="76" x2="270" y2="76"/>' +
    // momento fletor: seta curva
    '<path class="f-c" d="M272,50 A26,26 0 0 1 272,102"/>' +
    '<path class="f-pc" d="M272,102 L266,94 L278,95 Z"/>' +
    '<text class="f-ta" x="286" y="80">M</text>' +
    // torque: seta em torno do eixo
    '<path class="f-l2" d="M120,40 A34,14 0 0 1 200,40"/>' +
    '<path class="f-p2" d="M200,40 L191,36 L194,45 Z"/>' +
    '<text class="f-t2" x="160" y="32" text-anchor="middle">T</text>' +
    '<line class="f-l" x1="245" y1="112" x2="255" y2="112"/>' +
    '<text class="f-t" x="250" y="126" text-anchor="middle">d</text>' +
    '<line class="f-l" x1="250" y1="98" x2="250" y2="110"/>' +
  '</svg>'
};

window.FIGURAS["coluna-flambagem"] = {
  titulo: "Modos de flambagem conforme a vinculação",
  svg:
  '<svg viewBox="0 0 340 180" role="img" aria-label="Quatro colunas com vinculações diferentes e as respectivas formas de flambagem: birrotulada, engastada e livre, biengastada, engastada e rotulada">' +
    '<g class="f-l">' +
      '<line x1="30" y1="150" x2="60" y2="150"/><line x1="110" y1="150" x2="140" y2="150"/>' +
      '<line x1="190" y1="150" x2="220" y2="150"/><line x1="270" y1="150" x2="300" y2="150"/>' +
    '</g>' +
    // birrotulada
    '<path class="f-g" d="M45,150 C70,120 70,70 45,40"/>' +
    '<circle class="f-p" cx="45" cy="150" r="3"/><circle class="f-p" cx="45" cy="40" r="3"/>' +
    '<text class="f-t" x="45" y="168" text-anchor="middle">rotulada</text>' +
    // engastada-livre
    '<path class="f-g" d="M125,150 C125,110 140,80 152,45"/>' +
    '<line class="f-g" x1="112" y1="150" x2="138" y2="150"/>' +
    '<text class="f-t" x="125" y="168" text-anchor="middle">eng.-livre</text>' +
    // biengastada
    '<path class="f-g" d="M205,150 C230,120 180,70 205,40"/>' +
    '<line class="f-g" x1="192" y1="150" x2="218" y2="150"/>' +
    '<line class="f-g" x1="192" y1="40" x2="218" y2="40"/>' +
    '<text class="f-t" x="205" y="168" text-anchor="middle">biengastada</text>' +
    // engastada-rotulada
    '<path class="f-g" d="M285,150 C310,115 265,70 285,40"/>' +
    '<line class="f-g" x1="272" y1="150" x2="298" y2="150"/>' +
    '<circle class="f-p" cx="285" cy="40" r="3"/>' +
    '<text class="f-t" x="285" y="168" text-anchor="middle">eng.-rotulada</text>' +
    '<text class="f-t2" x="170" y="22" text-anchor="middle">o comprimento efetivo K·L muda com a vinculação</text>' +
  '</svg>'
};

window.FIGURAS["mohr"] = {
  titulo: "Círculo de Mohr",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Círculo de Mohr: eixo horizontal de tensão normal, eixo vertical de cisalhamento, centro na média das tensões normais e raio igual ao cisalhamento máximo no plano">' +
    '<line class="f-l" x1="30" y1="120" x2="320" y2="120"/>' +
    '<line class="f-l" x1="60" y1="20" x2="60" y2="190"/>' +
    '<text class="f-t" x="316" y="136">σ</text>' +
    '<text class="f-t" x="48" y="26">τ</text>' +
    '<circle class="f-c" cx="190" cy="120" r="70"/>' +
    '<circle class="f-pc" cx="190" cy="120" r="2.5"/>' +
    '<line class="f-d" x1="190" y1="50" x2="190" y2="190"/>' +
    '<line class="f-d" x1="120" y1="120" x2="120" y2="140"/>' +
    '<line class="f-d" x1="260" y1="120" x2="260" y2="140"/>' +
    '<line class="f-l2" x1="190" y1="120" x2="260" y2="120"/>' +
    '<text class="f-t2" x="225" y="114" text-anchor="middle">R</text>' +
    '<text class="f-t" x="120" y="154" text-anchor="middle">σ₂</text>' +
    '<text class="f-t" x="260" y="154" text-anchor="middle">σ₁</text>' +
    '<text class="f-t" x="190" y="154" text-anchor="middle">centro</text>' +
    '<line class="f-d" x1="190" y1="50" x2="196" y2="50"/>' +
    '<text class="f-t2" x="200" y="54">τmax = R</text>' +
    '<text class="f-t2" x="190" y="186" text-anchor="middle">centro = (σx+σy)/2      R = √[((σx−σy)/2)² + τxy²]</text>' +
  '</svg>'
};

window.FIGURAS["tensao-deformacao"] = {
  titulo: "Curva tensão-deformação de um aço dúctil",
  svg:
  '<svg viewBox="0 0 340 200" role="img" aria-label="Curva tensão-deformação: trecho elástico linear, patamar de escoamento, encruamento até o limite de resistência e queda até a ruptura">' +
    '<line class="f-l" x1="45" y1="165" x2="320" y2="165"/>' +
    '<line class="f-l" x1="45" y1="20" x2="45" y2="165"/>' +
    '<text class="f-t" x="316" y="182" text-anchor="end">deformação ε</text>' +
    '<text class="f-t" x="40" y="26" text-anchor="end">σ</text>' +
    '<path class="f-c" d="M45,165 L95,80 L130,74 C170,72 200,45 235,42 C265,42 285,70 300,95"/>' +
    // marcações
    '<line class="f-d" x1="45" y1="80" x2="95" y2="80"/>' +
    '<circle class="f-pc" cx="95" cy="80" r="3"/>' +
    '<text class="f-t2" x="100" y="94">escoamento</text>' +
    '<line class="f-d" x1="45" y1="42" x2="235" y2="42"/>' +
    '<circle class="f-pc" cx="235" cy="42" r="3"/>' +
    '<text class="f-t2" x="240" y="36">limite de resistência</text>' +
    '<circle class="f-pc" cx="300" cy="95" r="3"/>' +
    '<text class="f-t2" x="296" y="110" text-anchor="end">ruptura</text>' +
    // área de resiliência
    '<path class="f-hatch" d="M45,165 L95,80 L95,165 Z"/>' +
    '<text class="f-t2" x="60" y="160">resiliência</text>' +
  '</svg>'
};
