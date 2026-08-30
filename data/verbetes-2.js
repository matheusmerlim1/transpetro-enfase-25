window.VERBETES = window.VERBETES || [];

window.VERBETES.push(

/* ===================== 3. TRANSMISSÃO DE CALOR ===================== */
{ id:"trc-conducao", tema:"transcal", titulo:"Condução e circuito de resistências térmicas", padrao:true,
  subtemas:["Mecanismos","Condução","Parede composta","Condução cilíndrica","Coeficiente global","Raio crítico","Isolamento térmico","Condução transiente"],
  resumo:"Quase todo problema de transmissão de calor se resolve montando um circuito de resistências térmicas em série, exatamente como um circuito elétrico: Q = ΔT/ΣR. O passo que decide a resposta é identificar qual resistência domina — é nela que se deve agir e é nela que ocorre a maior queda de temperatura.",
  pontos:[
    "Três mecanismos: **condução** (contato, Fourier), **convecção** (fluido em movimento, Newton) e **radiação** (ondas eletromagnéticas, único que dispensa meio material).",
    "Parede plana: R = L/(k·A). Parede cilíndrica: R = ln(r₂/r₁)/(2πkL). Convecção: R = 1/(h·A).",
    "O perfil de temperatura é **linear** na parede plana, **logarítmico** no cilindro e varia com 1/r na esfera.",
    "A maior queda de temperatura ocorre na camada de maior **resistência**, não na de maior espessura.",
    "Em tubulação isolada, a resistência do metal é milhares de vezes menor que a do isolante e costuma ser desprezada.",
    "**Raio crítico** r_cr = k/h: abaixo dele, acrescentar isolamento aumenta a perda, porque o ganho de área externa supera o ganho de resistência.",
    "Regime transiente com **Bi < 0,1** permite tratar o corpo como isotérmico (capacitância global) e a solução vira exponencial simples.",
    "Espessura econômica de isolamento minimiza a soma do custo do isolante com o da energia perdida; há também o critério de proteção pessoal (≈ 60 °C na superfície)."],
  formulas:[
    "Q = k·A·ΔT/L        Q = ΔT/ΣR",
    "R_cilíndrica = ln(r₂/r₁)/(2π·k·L)",
    "1/U = 1/h_interno + L/k + 1/h_externo",
    "r_crítico = k/h  (cilindro)     2k/h  (esfera)",
    "Bi = h·Lc/k        τ = ρ·Lc·c/h",
    "(T − T∞)/(Ti − T∞) = e^(−t/τ)"],
  armadilhas:[
    "Usar a fórmula da parede plana em geometria cilíndrica. No cilindro entra o logaritmo da razão de raios.",
    "Aplicar capacitância global sem verificar antes o número de Biot.",
    "Em Biot o k é o do **sólido**; em Nusselt o k é o do **fluido**. Trocá-los é erro frequente.",
    "Supor que isolar sempre reduz a perda — em cabos e tubos finos, abaixo do raio crítico ocorre o contrário."] },

{ id:"trc-conveccao", tema:"transcal", titulo:"Convecção e grupos adimensionais",
  subtemas:["Convecção","Convecção forçada","Adimensionais","Aletas"],
  resumo:"A convecção é governada pelo coeficiente h, que não é propriedade do fluido e sim do conjunto escoamento-geometria-temperatura. Por isso ele é obtido por correlações em grupos adimensionais: Reynolds e Prandtl na convecção forçada, Grashof e Prandtl na natural. Onde h é baixo, aletas compensam com área.",
  pontos:[
    "**Nusselt** compara convecção com condução no fluido; é o resultado da correlação, e h sai de Nu·k/L.",
    "**Prandtl** compara difusividade de momento com a térmica: ar ≈ 0,7; água ≈ 7; óleos >> 1; metais líquidos << 1.",
    "**Grashof** substitui Reynolds na convecção natural (empuxo/viscosidade); a transição usa Rayleigh = Gr·Pr.",
    "Ordens de grandeza de h: convecção natural em gases 2 a 25; forçada em gases 25 a 250; forçada em líquidos 50 a 20.000; ebulição e condensação 2.500 a 100.000 W/m²·K.",
    "Dittus-Boelter: expoente 0,4 do Prandtl no **aquecimento** e 0,3 no **resfriamento** do fluido.",
    "Aletar sempre o lado de **menor h**, que é onde está a maior resistência — tipicamente o lado do ar.",
    "A eficiência da aleta **cai** com o comprimento: a ponta fica quase na temperatura do fluido e rende pouco.",
    "Eficiência (η) compara com a aleta toda na temperatura da base; efetividade (ε) compara com a área sem aleta, e só compensa se ε > 2."],
  formulas:[
    "Q = h·A·(Ts − T∞)",
    "Nu = h·L/k        Pr = ν/α = μcp/k        Gr = gβΔTL³/ν²",
    "Nu = 0,023·Re^0,8·Pr^n     (n = 0,4 aquecendo, 0,3 resfriando)",
    "m = √(hP/kA)        η_aleta = tanh(mL)/(mL)"],
  armadilhas:[
    "Confundir o número de Nusselt (adimensional) com o próprio coeficiente h.",
    "Aletar o lado errado: aletas no lado do líquido, onde h já é alto, quase não mudam nada.",
    "Aleta curta, grossa, de baixa condutividade e alto h pode até **reduzir** a troca."] },

{ id:"trc-radiacao", tema:"transcal", titulo:"Radiação térmica",
  subtemas:["Radiação","Radiação entre superfícies"],
  resumo:"A radiação varia com a **quarta potência** da temperatura absoluta, o que a torna dominante em fornos, chamas e tubulações de vapor superaquecido, e desprezível perto da temperatura ambiente. É o único mecanismo que atravessa o vácuo.",
  pontos:[
    "Corpo negro: emissor e absorvedor ideal, ε = α = 1. Superfície cinza: propriedades independentes do comprimento de onda.",
    "Lei de Kirchhoff: em equilíbrio termodinâmico, emissividade = absortividade.",
    "Lei de Wien: λ_max·T = 2.898 μm·K. Quanto mais quente, menor o comprimento de onda do pico.",
    "Entre placas paralelas grandes, o fator de forma é 1 e a resistência é só das superfícies.",
    "Um **escudo de radiação** de baixa emissividade entre duas superfícies reduz drasticamente a troca — princípio das mantas aluminizadas e do isolamento multicamadas.",
    "Na prática, convecção e radiação atuam **em paralelo** na superfície externa e podem ser combinadas em h_total = h_conv + h_rad."],
  formulas:[
    "q = ε·σ·A·(Ts⁴ − T_viz⁴)        σ = 5,67×10⁻⁸ W/m²·K⁴",
    "Placas paralelas:  q = σ(T₁⁴ − T₂⁴)/(1/ε₁ + 1/ε₂ − 1)",
    "Wien:  λ_max · T = 2.898 μm·K"],
  armadilhas:[
    "Elevar temperatura em Celsius à quarta potência. Sempre kelvin.",
    "Esquecer a temperatura da vizinhança: o que importa é a diferença de T⁴, não T⁴ da superfície sozinha.",
    "Achar que a radiação precisa de meio material — é exatamente o contrário."] },

{ id:"trc-trocadores", figuras:["trocador-perfis"], tema:"transcal", titulo:"Trocadores de calor: MLDT e ε-NUT",
  subtemas:["Trocadores","Método ε-NUT"],
  resumo:"Há dois problemas distintos. No de **projeto**, conhecem-se as quatro temperaturas e busca-se a área: usa-se MLDT. No de **avaliação de desempenho**, conhecem-se só as entradas e o trocador já existe: usa-se ε-NUT, que evita iteração. Saber qual método aplicar é metade da questão.",
  pontos:[
    "Q = U·A·F·ΔT_ml. O fator F corrige o arranjo real em relação ao contracorrente puro e é sempre ≤ 1.",
    "Evita-se projetar com F < 0,75-0,80: nessa faixa a curva é íngreme e pequenos erros de temperatura viram grandes erros de área.",
    "**Contracorrente** dá MLDT maior (menos área) e permite que o frio saia mais quente que a saída do quente — impossível em paralelo.",
    "A MLDT é sempre **menor** que a média aritmética das diferenças; elas se aproximam quando ΔT₁ ≈ ΔT₂.",
    "Com mudança de fase em um dos fluidos, Cr ≈ 0, não é preciso fator F e ε = 1 − e^(−NUT) para qualquer arranjo.",
    "Incrustação (fouling) entra como **resistência** somada ao inverso de U; por isso se projeta com área excedente.",
    "No casco e tubos vai para os **tubos** o fluido corrosivo, sujo ou de alta pressão; vai para o **casco** o viscoso, o de baixa vazão e o que condensa.",
    "Chicanas no casco elevam a turbulência e o coeficiente externo, ao custo de perda de carga e risco de vibração dos tubos."],
  formulas:[
    "Q = U·A·F·ΔT_ml",
    "ΔT_ml = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂)",
    "1/(U·A) = 1/(hi·Ai) + Rf,i/Ai + ln(re/ri)/(2πkL) + Rf,e/Ae + 1/(he·Ae)",
    "NUT = U·A/C_min        ε = Q_real/Q_max",
    "Q_max = C_min·(Tq,ent − Tf,ent)",
    "Cr = 0:  ε = 1 − e^(−NUT)"],
  armadilhas:[
    "Tomar os pares de ΔT errados: em contracorrente, entrada do quente com **saída** do frio; em paralelo, entrada com entrada.",
    "Somar o fator de incrustação a U em vez de somar ao inverso de U.",
    "Aumentar NUT esperando ganho proporcional: de 1,5 para 3,0 a efetividade sobe só de 0,78 para 0,95."] },

/* ===================== 4. RESISTÊNCIA DOS MATERIAIS ===================== */
{ id:"res-axial", figuras:["tensao-deformacao"], tema:"resmat", titulo:"Solicitação axial, propriedades e ensaios", padrao:true,
  subtemas:["Solicitação axial","Propriedades","Propriedades elásticas","Lei de Hooke","Deformação","Ensaios","Barras compostas","Energia de deformação","Efeitos térmicos","Coeficiente de segurança","Estruturas hiperestáticas"],
  resumo:"A base de tudo: σ = N/A e a Lei de Hooke σ = E·ε. A partir daí saem alongamento, energia de deformação, tensões térmicas e a repartição de carga em barras compostas. Em problemas hiperestáticos, o equilíbrio não basta — é preciso a compatibilidade de deformações.",
  pontos:[
    "Trabalhando em newtons e milímetros, o resultado sai direto em MPa e E vale 200.000 a 210.000 MPa.",
    "Módulo de elasticidade mede **rigidez**, não resistência. Todos os aços têm praticamente o mesmo E.",
    "Poisson: ν = −ε_transversal/ε_longitudinal, entre 0,25 e 0,35 nos metais; G = E/[2(1+ν)].",
    "Diagrama de tração: limite de proporcionalidade → escoamento → limite de resistência (início da estricção) → ruptura.",
    "**Resiliência** é a energia absorvida no regime elástico (área até o escoamento). **Tenacidade** é a energia total até a fratura.",
    "Em barras compostas em paralelo, a carga se reparte na proporção das **rigidezes E·A**, não das áreas.",
    "Dilatação restringida gera σ = E·α·ΔT, independente do comprimento. Aquecimento comprime; resfriamento traciona.",
    "Método dos estados limites usa coeficientes parciais que majoram ações e minoram resistências, com base probabilística."],
  formulas:[
    "σ = N/A        ε = δ/L        δ = N·L/(E·A)",
    "G = E/[2(1+ν)]",
    "U = P²·L/(2·A·E) = ½·P·δ",
    "σ_térmica = E·α·ΔT",
    "Barras em paralelo: reparte-se por E·A, com ε igual"],
  armadilhas:[
    "Repartir a carga de barras compostas pelas áreas, ignorando os módulos diferentes.",
    "Confundir resiliência com tenacidade, ou rigidez com resistência.",
    "Esquecer que em dilatação **livre** não há tensão alguma — só deslocamento."] },

{ id:"res-flexao", figuras:["viga-biapoiada-q","viga-biapoiada-p","viga-balanco-p"], tema:"resmat", titulo:"Flexão, vigas e diagramas",
  subtemas:["Flexão","Diagramas","Momento de inércia","Cisalhamento em vigas","Cisalhamento","Flechas","Superposição","Viga hiperestática","Flexão composta"],
  resumo:"Toda questão de viga começa pelas reações e pelos diagramas de cortante e momento. Com o momento máximo, σ = M/W dá a tensão; com as fórmulas clássicas de flecha, verifica-se o serviço. Vale memorizar os casos usuais — eles cobrem a esmagadora maioria das questões.",
  pontos:[
    "dV/dx = −q e dM/dx = V. Logo, o momento é **máximo onde o cortante se anula**.",
    "Biapoiada com q: M = qL²/8 e V = qL/2. Biapoiada com P central: M = PL/4. Balanço com P: M = P·L. Balanço com q: M = qL²/2.",
    "Engastada-apoiada com q: R_apoio = 3qL/8 e M_engaste = qL²/8. Biengastada: qL²/12 nos engastes e qL²/24 no vão.",
    "Retângulo: I = bh³/12 e W = bh²/6. Círculo: I = πd⁴/64. A inércia cresce com o **cubo** da altura.",
    "Teorema dos eixos paralelos: I = I_cg + A·d². O termo de transporte costuma dominar em perfis abertos.",
    "Tensão de flexão é linear na altura, nula na linha neutra. Cisalhamento é parabólico, **máximo na linha neutra**: 1,5V/A no retângulo, 4V/3A no círculo.",
    "Flechas: PL³/48EI (biapoiada central), 5qL⁴/384EI (biapoiada distribuída), PL³/3EI (balanço com P), qL⁴/8EI (balanço com q).",
    "Flexão composta: σ = P/A ± P·e/W. Sem tração se a carga cair no núcleo central (e ≤ h/6 no retângulo)."],
  formulas:[
    "σ = M·y/I = M/W        W = I/y_max",
    "τ = V·Q/(I·b)",
    "I = I_cg + A·d²",
    "Superposição: some as flechas de cada carregamento",
    "σ = P/A ± P·e/W"],
  armadilhas:[
    "Aplicar a fórmula de biapoiada em viga em balanço, ou vice-versa. Confira sempre a vinculação.",
    "Usar 500 cm³ como 5×10⁴ mm³ — são 5×10⁵ mm³.",
    "Trocar 1,5V/A (retângulo) por 4V/3A (círculo).",
    "Em problema hiperestático, tentar resolver só com as três equações de equilíbrio."] },

{ id:"res-torcao", figuras:["eixo-flexao-torcao"], tema:"resmat", titulo:"Torção de eixos",
  subtemas:["Torção","Solicitações combinadas"],
  resumo:"Em seção circular, a tensão de cisalhamento cresce linearmente do centro para a superfície e o ângulo de torção acumula ao longo do comprimento. Quando há flexão junto com torção, o dimensionamento usa um momento equivalente, cuja expressão depende do critério de falha adotado.",
  pontos:[
    "τ = T·r/J, com J = πd⁴/32 na seção maciça. Daí τ_max = 16T/(πd³).",
    "Em flexão a fórmula análoga é σ = 32M/(πd³) — o fator é 32, não 16, porque I = J/2.",
    "Eixo **vazado** tem J muito maior para a mesma massa, porque o material fica longe do centro. Daí eixos e estruturas tubulares.",
    "Trechos em série somam ângulos, com o mesmo torque atravessando todos: φ = Σ T·L/(G·J).",
    "Como J varia com d⁴, uma pequena redução de diâmetro derruba muito a rigidez torcional.",
    "Torque e potência: T = 9.550·P[kW]/n[rpm]. Menor rotação, maior torque, maior eixo.",
    "Momento equivalente por Tresca: √(M² + T²). Por von Mises: √(M² + 0,75·T²)."],
  formulas:[
    "τ_max = 16·T/(π·d³)        φ = T·L/(G·J)",
    "J_maciço = π·d⁴/32        J_vazado = π(D⁴ − d⁴)/32",
    "T = 9.550·P[kW]/n[rpm]",
    "Tresca:    d³ = 32·√(M² + T²)/(π·σ_adm)",
    "von Mises: d³ = 32·√(M² + 0,75T²)/(π·σ_adm)"],
  armadilhas:[
    "Esquecer de converter o ângulo de radianos para graus na resposta final.",
    "Usar o fator 32 (flexão) onde cabe 16 (torção).",
    "Aplicar a expressão de Tresca quando o enunciado pede von Mises — as duas aparecem como alternativas."] },

{ id:"res-tensoes", figuras:["elemento-tensao","mohr"], tema:"resmat", titulo:"Estado de tensões, Mohr e critérios de falha",
  subtemas:["Estado plano","Estado plano de tensões","Transformação de tensões","Critérios de falha","Concentração de tensões","Extensometria"],
  resumo:"O círculo de Mohr organiza tudo: o centro é a média das tensões normais, o raio é o cisalhamento máximo no plano, e os cruzamentos com o eixo horizontal são as tensões principais. Com as principais em mãos, von Mises ou Tresca dizem se o material escoa.",
  pontos:[
    "Centro = (σx+σy)/2. Raio = √[((σx−σy)/2)² + τxy²] = τ_max no plano.",
    "σ1,2 = centro ± raio. O ângulo dos planos principais sai de tg(2θp) = 2τxy/(σx−σy).",
    "Em estado plano, σ3 = 0 conta como tensão principal. O cisalhamento **absoluto** pode ser maior que o do plano.",
    "**Tresca** é sempre mais conservador que **von Mises**; von Mises correlaciona melhor com o experimento e é o critério dos códigos modernos.",
    "Quando as principais têm sinais opostos, a tensão de von Mises supera a maior delas em módulo.",
    "Cisalhamento puro equivale a tração e compressão iguais a 45° — daí eixo frágil sob torção romper em hélice.",
    "Kt é puramente **geométrico**; Kf = 1 + q(Kt − 1) incorpora a sensibilidade ao entalhe do material.",
    "Concentração é crítica em fadiga e em materiais frágeis; em dúctil sob carga estática, o escoamento local redistribui."],
  formulas:[
    "σ1,2 = (σx+σy)/2 ± √[((σx−σy)/2)² + τxy²]",
    "tg(2θp) = 2τxy/(σx − σy)",
    "von Mises:  σ' = √(σ1² − σ1σ2 + σ2²)",
    "Tresca:  σ1 − σ3",
    "Roseta 45°:  εx = εa, εy = εc, γxy = 2εb − (εa + εc)",
    "Strain gage:  ΔR/R = GF · ε"],
  armadilhas:[
    "Comparar só a maior tensão principal com o escoamento, ignorando a segunda.",
    "Esquecer σ3 = 0 no critério de Tresca quando as duas do plano têm o mesmo sinal.",
    "Achar que o extensômetro a 45° mede γxy diretamente — ele mede deformação **linear** naquela direção."] },

{ id:"res-flambagem", figuras:["coluna-flambagem"], tema:"resmat", titulo:"Flambagem de colunas",
  subtemas:["Flambagem"],
  resumo:"Flambagem é instabilidade, não escoamento: a coluna perde a forma antes de esgotar a resistência do material. A carga crítica de Euler depende de E e da geometria — nunca da tensão de escoamento — e é inversamente proporcional ao **quadrado** do comprimento efetivo.",
  pontos:[
    "Pcr = π²EI/(KL)², sempre com o **menor** momento de inércia da seção.",
    "Coeficientes K: bi-rotulada 1; engastada-livre 2; biengastada 0,5; engastada-rotulada 0,7.",
    "Reduzir o comprimento de flambagem pela metade **quadruplica** a carga crítica — daí os travamentos intermediários.",
    "Euler é teoria elástica: só vale enquanto σcr fica abaixo do limite de proporcionalidade, ou seja, para colunas esbeltas.",
    "Esbeltez limite: λ_lim = π√(E/σe). Para aço com σe = 250 MPa, λ_lim ≈ 89.",
    "Abaixo do limite, a coluna escoa antes de flambar e usam-se fórmulas empíricas (Johnson, Tetmajer).",
    "Aço de maior resistência **não** melhora a flambagem elástica, porque E é praticamente o mesmo em todos os aços."],
  formulas:[
    "Pcr = π²·E·I/(K·L)²",
    "σcr = π²E/λ²        λ = K·L/r        r = √(I/A)",
    "λ_limite = π·√(E/σ_escoamento)"],
  armadilhas:[
    "Usar o maior momento de inércia da seção. A coluna flamba no eixo mais fraco.",
    "Esquecer o coeficiente K e tratar toda coluna como bi-rotulada.",
    "Supor que trocar por aço mais nobre resolve um problema de flambagem elástica."] },

{ id:"res-vasos", tema:"resmat", titulo:"Vasos de pressão de parede fina",
  subtemas:["Vasos de pressão"],
  resumo:"Em cilindro de parede fina, a tensão circunferencial é o **dobro** da longitudinal. Essa razão 2:1 explica por que o vaso tende a romper com trinca paralela ao eixo e por que a costura longitudinal soldada é a mais exigida pelos códigos.",
  pontos:[
    "Cilindro: σ_circunferencial = pD/(2t) e σ_longitudinal = pD/(4t).",
    "Esfera: σ = pD/(4t) em todas as direções — por isso é a forma mais eficiente para alta pressão.",
    "Para as mesmas condições, o cilindro exige o **dobro** da espessura da esfera.",
    "A hipótese de parede fina vale para D/t > 20; abaixo disso, a variação da tensão na espessura importa.",
    "A tensão radial varia de −p na face interna a zero na externa e é desprezada na parede fina.",
    "A solda longitudinal recebe exigência maior de eficiência de junta e exame radiográfico que a circunferencial."],
  formulas:[
    "Cilindro:  σ_circ = p·D/(2t)      σ_long = p·D/(4t)",
    "Esfera:    σ = p·D/(4t)",
    "Espessura mínima (esfera):  t = p·D/(4·σ_adm)"],
  armadilhas:[
    "Inverter as duas tensões do cilindro — a circunferencial é a maior, sempre.",
    "Aplicar a fórmula da esfera em cilindro e subdimensionar a parede pela metade.",
    "Esquecer de somar a sobre-espessura de corrosão à espessura calculada."] },

/* ===================== 5. ELEMENTOS DE MÁQUINAS ===================== */
{ id:"elm-engrenagens", tema:"elemmaq", titulo:"Engrenagens e trens de transmissão",
  subtemas:["Engrenagens","Trem epicicloidal"],
  resumo:"O módulo define o tamanho do dente e é o que precisa ser comum a duas engrenagens que engrenam. A relação de transmissão troca rotação por torque mantendo a potência. Em trens compostos, as relações se multiplicam; no epicicloidal, entra o termo do braço.",
  pontos:[
    "Para engrenar, duas engrenagens precisam do mesmo **módulo** e do mesmo **ângulo de pressão** (usualmente 20°).",
    "m = d/z = p/π. Diâmetro externo = d + 2m.",
    "i = z_coroa/z_pinhão = d₂/d₁. A rotação cai por i e o torque sobe por i (idealmente).",
    "Em trem **composto**, as relações se multiplicam. Em trem simples com engrenagem loca, a relação total não muda — só o sentido.",
    "Forças: Ft = 2T/d transmite potência; Fr = Ft·tgφ apenas carrega os mancais.",
    "Helicoidais engrenam gradualmente, com mais capacidade e menos ruído, mas geram **esforço axial**; bi-helicoidais cancelam esse empuxo.",
    "Interferência (undercutting) ocorre com pinhão de poucos dentes: z_min ≈ 17 para φ = 20° e ≈ 12 para φ = 25°.",
    "Epicicloidal com anel fixo: i = 1 + z_anel/z_solar. O '+1' é a assinatura do braço."],
  formulas:[
    "m = d/z = p/π        d_ext = m·(z + 2)",
    "i = z₂/z₁ = d₂/d₁        i_total = i₁ × i₂ × …",
    "Ft = 2T/d        Fr = Ft · tg φ",
    "Epicicloidal (anel fixo):  i = 1 + z_anel/z_solar",
    "z_mínimo ≈ 2/sen²φ"],
  armadilhas:[
    "Confundir módulo com passo circular: p = π·m.",
    "Usar raio em vez de diâmetro em Ft = 2T/d, dobrando a força.",
    "Esquecer o '+1' no trem epicicloidal com anel fixo."] },

{ id:"elm-mancais", tema:"elemmaq", titulo:"Mancais e lubrificação",
  subtemas:["Mancais","Mancais de rolamento","Mancais hidrodinâmicos","Lubrificação"],
  resumo:"Rolamento é seleção de catálogo: converte-se o carregamento em carga equivalente P e aplica-se L10 = (C/P)^a. Mancal hidrodinâmico é outro mundo: o filme de óleo é gerado pela própria rotação, o atrito em regime é baixíssimo e o momento crítico é a partida.",
  pontos:[
    "L10 é a vida atingida por **90%** de um lote — 10% falham antes. Expoente a = 3 para esferas e 10/3 para rolos.",
    "A vida varia com o **cubo** da carga: dobrar a carga reduz a vida a 1/8.",
    "Carga combinada: P = X·Fr + Y·Fa, com X e Y de catálogo.",
    "Carga variável usa média ponderada pelo expoente, não média aritmética: os picos dominam.",
    "Mancal **hidrodinâmico** forma a cunha de óleo pela rotação; o desgaste ocorre nas partidas e paradas, daí o jacking oil em máquinas grandes.",
    "Mancal **hidrostático** depende de bomba externa e funciona com o eixo parado.",
    "Curva de Stribeck: à esquerda do mínimo há contato entre asperezas (limítrofe e misto); à direita, filme completo e atrito viscoso crescente.",
    "Alojamento de graxa deve ser preenchido de 30% a 50%: excesso é batido pelos elementos rolantes, aquece e degrada o lubrificante."],
  formulas:[
    "L10 = (C/P)^a        a = 3 esferas; 10/3 rolos",
    "L10h = (10⁶/(60·n))·(C/P)^a",
    "P = X·Fr + Y·Fa",
    "P_eq = [Σ(fração · Pᵢ^a)]^(1/a)"],
  armadilhas:[
    "Somar diretamente carga radial e axial em vez de usar os fatores X e Y.",
    "Usar média aritmética para carga variável — subestima muito o dano.",
    "Achar que mais graxa lubrifica melhor. É causa comum de falha em motores relubrificados em excesso."] },

{ id:"elm-fadiga", tema:"elemmaq", titulo:"Fadiga e dimensionamento de eixos",
  subtemas:["Fadiga","Eixos"],
  resumo:"Fadiga é a causa da maioria das falhas em serviço e é traiçoeira porque a fratura tem aparência frágil e não dá aviso. O dimensionamento parte do limite de fadiga corrigido, separa a tensão em média e alternada e aplica um critério — Goodman, Soderberg ou Gerber.",
  pontos:[
    "Se' ≈ 0,5·Sut para aços com Sut ≤ 1.400 MPa. Fatores de Marin corrigem acabamento, tamanho, carregamento, temperatura e confiabilidade.",
    "Ligas de **alumínio não têm limite de fadiga**: especifica-se resistência para um número de ciclos.",
    "σa = (σmax − σmin)/2 e σm = (σmax + σmin)/2. Atenção ao sinal de σmin negativo, que aumenta σa e reduz σm.",
    "**Goodman** usa Sut; **Soderberg** usa Sy e é mais conservador; **Gerber** é parabólico e ajusta melhor aos dados.",
    "Tensões médias de **compressão** são benéficas — daí jateamento com granalha e roleteamento aumentarem a vida.",
    "A fratura típica mostra origem em um concentrador na superfície, marcas de praia e zona final de ruptura brusca.",
    "Regra de Palmgren-Miner: D = Σ nᵢ/Nᵢ, falha prevista em D = 1; por ser linear e ignorar a ordem, adota-se D admissível de 0,2 a 0,5.",
    "Velocidade crítica do eixo é a rotação que coincide com a frequência natural de flexão do conjunto."],
  formulas:[
    "Se = ka·kb·kc·kd·ke·Se'        Se' ≈ 0,5·Sut",
    "Goodman:  σa/Se + σm/Sut = 1/n",
    "Soderberg: σa/Se + σm/Sy = 1/n",
    "Kf = 1 + q·(Kt − 1)",
    "D = Σ nᵢ/Nᵢ"],
  armadilhas:[
    "Achar que a fadiga dá aviso por deformação plástica — ela não dá.",
    "Errar o sinal de σmin em ciclo alternado, o que muda σa e σm de uma vez.",
    "Aplicar Kf também à tensão média em material dúctil (conservador demais)."] },

{ id:"elm-fixacao", tema:"elemmaq", titulo:"Chavetas, parafusos e molas",
  subtemas:["Chavetas","Uniões parafusadas","Molas"],
  resumo:"Elementos de fixação e armazenamento de energia. A chaveta é o fusível mecânico da montagem; o parafuso pré-carregado absorve pouca da carga externa e por isso resiste bem à fadiga; a mola tem rigidez governada pela quarta potência do diâmetro do fio.",
  pontos:[
    "Chaveta: verificar **cisalhamento** (τ = 2T/(d·b·L)) e **esmagamento** (σ = 4T/(d·h·L)).",
    "A chaveta é propositalmente o elemento mais fraco: rompe antes do eixo ou do cubo.",
    "Cerca de 90% do torque de aperto vence atrito; só ~10% vira pré-carga — daí a dispersão de ±25% no controle por torque.",
    "Pré-cargas usuais: 0,75·At·Sp em junta reutilizável e 0,90·At·Sp em conexão permanente.",
    "Constante da junta C = kb/(kb+km): a carga externa se soma ao parafuso só na fração C. Com km = 4kb, apenas 20%.",
    "O raciocínio da pré-carga vale enquanto a junta permanece comprimida; se a carga externa superar a pré-carga, a junta abre e o parafuso recebe tudo.",
    "Mola: k = Gd⁴/(8D³N). Índice C = D/d entre 6 e 12 é a faixa usual.",
    "Fator de Wahl corrige curvatura e cisalhamento direto; cresce quando C diminui.",
    "Molas em **série** somam flexibilidades (ficam mais moles); em **paralelo** somam rigidezes."],
  formulas:[
    "Chaveta:  τ = 2T/(d·b·L)        σ = 4T/(d·h·L)",
    "T_aperto ≈ K·Fi·d,  K ≈ 0,2",
    "C = kb/(kb + km)        ΔF_parafuso = C·P_externa",
    "k_mola = G·d⁴/(8·D³·N)",
    "Kw = (4C−1)/(4C−4) + 0,615/C"],
  armadilhas:[
    "Trocar a fórmula de cisalhamento pela de esmagamento na chaveta.",
    "Somar a carga externa inteira à pré-carga do parafuso.",
    "Inverter série e paralelo em molas — é o oposto de resistores elétricos."] },

{ id:"elm-transmissao", tema:"elemmaq", titulo:"Correias, acoplamentos, freios e vedação", padrao:true,
  subtemas:["Transmissão por correias","Acoplamentos","Seleção de acoplamentos","Freios e embreagens","Vedação"],
  resumo:"Elementos de ligação entre o acionador e a máquina acionada. A correia transmite por atrito e depende da diferença de trações; o acoplamento acomoda desalinhamento residual; a embreagem transmite torque por atrito em faces; o selo mecânico veda sem vazamento visível.",
  pontos:[
    "Potência da correia: P = (F1 − F2)·v. É a **diferença** que transmite; a soma carrega os mancais.",
    "F1/F2 = e^(μθ) no limiar do escorregamento. Correia em V multiplica o atrito efetivo pelo encunhamento.",
    "Correias dentadas não dependem de atrito e não escorregam — obrigatórias quando o sincronismo é essencial.",
    "Acoplamento flexível acomoda desalinhamento **residual**; nunca dispensa o alinhamento na montagem.",
    "Desalinhamento é causa principal de falha de mancais e selos, com assinatura em 2× a rotação e vibração axial.",
    "Fator de serviço majora o torque nominal conforme a natureza do acionamento e o regime — ignorá-lo é causa comum de falha.",
    "Embreagem de disco: T = μ·F·R_médio·nº de faces. Disco entre dois pratos tem **duas** faces.",
    "Selo mecânico elimina vazamento visível e não desgasta a luva; gaxeta **precisa** gotejar para se lubrificar."],
  formulas:[
    "P = (F1 − F2)·v        F1/F2 = e^(μθ)",
    "T = μ · F · R_médio · nº de faces",
    "T = 9.550·P[kW]/n[rpm]"],
  armadilhas:[
    "Usar a soma das trações em vez da diferença na potência da correia.",
    "Contar uma face só na embreagem de disco único.",
    "Apertar a gaxeta até parar de pingar — queima a gaxeta e sulca a luva."] },

/* ===================== 6. FUNDAMENTOS DA DINÂMICA ===================== */
{ id:"din-particula", tema:"dinamica", titulo:"Cinemática e dinâmica da partícula", padrao:true,
  subtemas:["Cinemática","Dinâmica da partícula","Atrito","Movimento circular","Dinâmica do veículo","Potência","Movimento relativo","Sistemas de partículas","Princípio de d'Alembert"],
  resumo:"Escolha o método pelo que o enunciado fornece: força e deslocamento pedem trabalho-energia; força e tempo pedem impulso-quantidade de movimento; aceleração instantânea pede Newton. Em plano inclinado e curvas, o atrito costuma ser o limitador.",
  pontos:[
    "Movimento uniformemente acelerado: v = v₀ + at, s = v₀t + ½at², v² = v₀² + 2as.",
    "Aceleração **normal** muda a direção (a_n = v²/R); **tangencial** muda o módulo. São perpendiculares e se compõem vetorialmente.",
    "Na iminência de escorregar em plano inclinado, μ = tg θ — independe da massa.",
    "Aceleração máxima de veículo é limitada pelo atrito: a_max = μ·g. Mais potência só faz patinar.",
    "Velocidade máxima em curva plana: v = √(μ·g·R), também independente da massa.",
    "Em descida, a componente do peso **ajuda** o movimento e aumenta a distância de frenagem.",
    "Forças internas de um sistema de partículas têm resultante nula: não alteram o movimento do centro de massa.",
    "Princípio de d'Alembert: somando a força de inércia fictícia (−m·a), o problema dinâmico vira estático.",
    "Aceleração de Coriolis (2ω × v_rel) aparece sempre que há movimento relativo a um referencial girante."],
  formulas:[
    "ΣF = m·a        P = F·v",
    "a_n = v²/R        a_t = dv/dt",
    "μ = tg θ  (iminência em plano inclinado)",
    "a_max = μ·g        v_max = √(μ·g·R)",
    "a = a_O + α×r + ω×(ω×r) + 2ω×v_rel + a_rel"],
  armadilhas:[
    "Somar escalarmente a_n e a_t. Elas são perpendiculares: a = √(a_n² + a_t²).",
    "Esquecer a componente do peso na rampa ao calcular frenagem.",
    "Achar que a energia cinética de um sistema se conserva só porque não há forças externas — colisões dissipam."] },

{ id:"din-energia", tema:"dinamica", titulo:"Trabalho, energia e potência",
  subtemas:["Trabalho e energia"],
  resumo:"O teorema trabalho-energia contabiliza o trabalho **líquido** de todas as forças, incluindo o negativo do atrito. Quando o problema envolve mola, lembre que a força varia linearmente e o trabalho é ½kx².",
  pontos:[
    "T₁ + U₁→₂ = T₂, com T = ½mv² + ½I_G·ω² para corpo rígido.",
    "Energia potencial gravitacional: mgh. Elástica: ½kx².",
    "Sem atrito, a velocidade ao pé de uma rampa independe da massa e do formato: v = √(2gh).",
    "O atrito realiza trabalho **negativo**, que se dissipa como calor.",
    "Em bloco que comprime mola: ½mv² = ½kx², logo v = x·√(k/m) — o mesmo grupo √(k/m) das vibrações.",
    "Potência média = trabalho/tempo. Em movimento uniforme, P = F·v."],
  formulas:[
    "T₁ + U₁→₂ = T₂",
    "T = ½mv² + ½I_G·ω²",
    "V_g = m·g·h        V_e = ½·k·x²",
    "P = F·v = T·ω"],
  armadilhas:[
    "Usar k·x em vez de ½kx² no trabalho da mola.",
    "Esquecer a parcela de rotação (½I·ω²) em corpo que rola.",
    "Não descontar o trabalho do atrito do trabalho motor."] },

{ id:"din-impulso", tema:"dinamica", titulo:"Impulso, quantidade de movimento e impacto",
  subtemas:["Impulso","Impacto","Momento angular"],
  resumo:"A quantidade de movimento se conserva em qualquer colisão sem forças externas; a energia cinética só se conserva na colisão perfeitamente elástica. O coeficiente de restituição relaciona **velocidades**, não alturas nem energias.",
  pontos:[
    "m·v₁ + ∫F dt = m·v₂. Use quando o problema dá força e tempo.",
    "e = (v'_B − v'_A)/(v_A − v_B), com 0 ≤ e ≤ 1. e = 1 elástica; e = 0 perfeitamente inelástica.",
    "Na perfeitamente inelástica, os corpos seguem juntos e a perda de energia é máxima.",
    "Colisão elástica entre massas **iguais**: elas simplesmente trocam de velocidade.",
    "Altura de ressalto: h' = e²·h, porque a altura varia com o quadrado da velocidade.",
    "Momento angular se conserva quando o torque externo é nulo: I₁ω₁ = I₂ω₂ (a patinadora que recolhe os braços).",
    "Ao acoplar dois discos girantes, a fração de energia dissipada é I₂/(I₁+I₂).",
    "Jato revertido em 180° gera o **dobro** da força de um jato que apenas para — princípio da turbina Pelton."],
  formulas:[
    "m·v₁ + F·Δt = m·v₂",
    "e = (v'_B − v'_A)/(v_A − v_B)        h' = e²·h",
    "I₁ω₁ = (I₁+I₂)·ω",
    "F = ṁ·ΔV"],
  armadilhas:[
    "Multiplicar a altura por e em vez de e² no ressalto.",
    "Supor conservação de energia cinética em colisão inelástica.",
    "Tratar velocidades como escalares na reversão de jato — o sinal negativo é o que dobra a força."] },

{ id:"din-corpo-rigido", figuras:["pendulo-composto"], tema:"dinamica", titulo:"Corpo rígido: inércia, rotação e rolamento",
  subtemas:["Corpo rígido","Momento de inércia","Rolamento","Pêndulo composto"],
  resumo:"Em corpo rígido, o momento de inércia é o dado que decide o resultado. Vale memorizar os casos clássicos e o teorema dos eixos paralelos. No rolamento sem escorregamento, o ponto de contato é o centro instantâneo de rotação e tem velocidade nula.",
  pontos:[
    "ΣM_G = I_G·α, análogo rotacional de ΣF = m·a.",
    "Momentos de inércia: disco ½mR²; anel mR²; esfera maciça 2/5 mR²; casca 2/3 mR²; barra pelo centro mL²/12; barra pela extremidade mL²/3.",
    "Teorema dos eixos paralelos: I = I_cg + m·d².",
    "Rolamento sem escorregar: v_G = ωR. O ponto de contato tem v = 0; o topo tem 2·v_G.",
    "Descendo um plano: a = g·senθ/(1 + I/mR²). Vence quem tem massa mais concentrada no eixo — esfera, depois cilindro, depois aro.",
    "O resultado do rolamento independe da massa e do raio: só importa a distribuição I/mR².",
    "Barra pivotada solta da horizontal: ω = √(3g/L) ao passar pela vertical.",
    "Pêndulo composto: T = 2π√(I/(m·g·d)), com d do pino ao centro de massa.",
    "Volante: E = ½I·ω², cresce com o quadrado da rotação."],
  formulas:[
    "ΣM_G = I_G·α        E = ½I·ω²",
    "I = I_cg + m·d²",
    "a = g·senθ/(1 + I/(m·R²))",
    "ω = √(3g/L)  (barra pivotada)",
    "T = 2π·√(I/(m·g·d))"],
  armadilhas:[
    "Usar mL²/12 (eixo pelo centro) onde o pino está na extremidade (mL²/3).",
    "Esquecer que o atrito estático no rolamento não realiza trabalho.",
    "No pêndulo composto, medir d até a extremidade em vez de até o centro de massa."] }

);
