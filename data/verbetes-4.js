window.VERBETES = window.VERBETES || [];

window.VERBETES.push(

/* ===================== 11. CORROSÃO ===================== */
{ id:"cor-fundamentos", tema:"corrosao", titulo:"Fundamentos, pilha eletroquímica e formas de corrosão", padrao:true,
  subtemas:["Fundamentos","Pilha eletroquímica","Formas de corrosão","Tipos de corrosão","Corrosão química","Taxa de corrosão","Passivação","Corrosão galvânica","Corrosão seletiva","Corrosão-erosão"],
  resumo:"Corrosão eletroquímica exige quatro elementos simultâneos: ânodo, cátodo, eletrólito e ligação elétrica. Eliminar qualquer um deles interrompe o processo — e é isso que todo método de proteção faz, de uma forma ou de outra.",
  pontos:[
    "No **ânodo** ocorre oxidação e é ali que o metal se perde: Fe → Fe²⁺ + 2e⁻. No cátodo há redução e o metal fica preservado.",
    "Regra prática: o metal **menos nobre** da série galvânica é o ânodo e se sacrifica.",
    "**Relação de áreas** é decisiva: ânodo pequeno com cátodo grande concentra a corrente e perfura rápido. Nunca use parafuso de metal menos nobre em chapa mais nobre.",
    "Corrosão **uniforme** é a mais comum e a menos perigosa, porque é previsível e mensurável; as localizadas (pite, fresta, sob tensão) são traiçoeiras.",
    "**Pite** perfura com perda de massa quase nula e é típico de inox em meio com cloretos. PREN = %Cr + 3,3·%Mo + 16·%N mede a resistência.",
    "**Fresta** ocorre em regiões estagnadas (sob juntas, arruelas, depósitos) por diferença de aeração; ataca antes do pite.",
    "**Passivação** é a película fina de óxido de cromo que protege o inox; exige mínimo de 10,5% de Cr e presença de oxigênio. Cloreto rompe a película localmente.",
    "**Corrosão seletiva**: dezincificação em latões, grafitização em ferro fundido cinzento — a peça mantém a forma mas perde resistência.",
    "**Erosão-corrosão** combina ataque químico com desgaste mecânico; ocorre em alta velocidade, curvas e restrições, e destrói a película protetora continuamente.",
    "Taxa de corrosão em mm/ano define a sobre-espessura de projeto e a vida remanescente de tubulações e vasos."],
  formulas:[
    "Ânodo:  Fe → Fe²⁺ + 2e⁻   (oxidação, perda de metal)",
    "Cátodo (meio aerado neutro):  O₂ + 2H₂O + 4e⁻ → 4OH⁻",
    "Taxa [mm/ano] = (perda de espessura)/(tempo)",
    "PREN = %Cr + 3,3·%Mo + 16·%N",
    "m = (M·I·t)/(n·F)   — lei de Faraday"],
  armadilhas:[
    "Inverter ânodo e cátodo. Quem corrói é sempre o ânodo.",
    "Ignorar a relação de áreas: pequeno ânodo é o pior cenário possível.",
    "Achar que perda de massa pequena significa dano pequeno — o pite desmente isso."] },

{ id:"cor-protecao", tema:"corrosao", titulo:"Proteção catódica, anódica, revestimentos e inibidores",
  subtemas:["Proteção catódica","Proteção anódica","Revestimentos","Inibidores"],
  resumo:"Proteger é interferir na pilha. A proteção catódica força a estrutura a ser cátodo, seja por ânodo de sacrifício, seja por corrente impressa. O revestimento isola o eletrólito, e o inibidor age no próprio meio — cada um cobre uma situação diferente.",
  pontos:[
    "**Ânodo de sacrifício** (Zn, Al, Mg) dispensa fonte externa, tem corrente limitada e é usado em estruturas pequenas ou bem revestidas, e em água do mar (baixa resistividade).",
    "**Corrente impressa** usa retificador e ânodos inertes; atende grandes estruturas e solos de alta resistividade, com corrente ajustável — mas exige energia e supervisão.",
    "Critério clássico de proteção do aço em solo: potencial de −0,85 V em relação ao eletrodo Cu/CuSO₄.",
    "**Superproteção** desprende hidrogênio, descola o revestimento e pode fragilizar aços de alta resistência.",
    "Proteção catódica e revestimento são **complementares**: o revestimento reduz drasticamente a corrente necessária, protegendo só as falhas.",
    "**Proteção anódica** é o oposto: eleva o potencial para manter o metal na faixa passiva. Só serve a materiais passiváveis, em meios específicos, como aço-carbono em ácido sulfúrico concentrado.",
    "Preparação de superfície responde pela maior parte do desempenho de uma pintura; o padrão Sa 2½ (jateamento ao metal quase branco) é o mais especificado em ambiente industrial.",
    "Revestimentos: **barreira** (epóxi), **inibidor** (fosfato de zinco) e **de sacrifício** (primer rico em zinco — protege catodicamente mesmo com risco).",
    "Inibidores anódicos são **perigosos em dose insuficiente**: reduzem a área anódica sem eliminá-la e concentram o ataque em pites."],
  formulas:[
    "Critério aço/solo:  E ≤ −0,85 V  (Cu/CuSO₄)",
    "Zn ≈ −1,10 V | Al ≈ −1,10 V | Mg ≈ −1,55 V  (Cu/CuSO₄)",
    "I = A_exposta · densidade de corrente de proteção",
    "Massa do ânodo:  m = I·t/(capacidade · fator de utilização)"],
  armadilhas:[
    "Usar ânodo de sacrifício em solo de alta resistividade — a corrente não circula.",
    "Aplicar proteção anódica em meio onde o metal não passiva: acelera a corrosão.",
    "Dosar inibidor anódico por baixo, o que localiza o ataque em vez de reduzi-lo."] },

{ id:"cor-meios", tema:"corrosao", titulo:"Corrosão em serviço de refinaria: CST, CUI, MIC e H₂S",
  subtemas:["Corrosão sob tensão","Corrosão sob isolamento","Corrosão microbiológica","Sensitização","Corrosão intergranular","Serviço ácido","H2S","Corrosão por pites","Corrosão por frestas"],
  resumo:"São os mecanismos que mais causam falha em unidades de processo. Todos têm em comum a natureza localizada e o fato de aparecerem onde não se olha: sob o isolamento, sob depósitos, na zona afetada pelo calor da solda.",
  pontos:[
    "**CST (corrosão sob tensão)** exige três fatores simultâneos: material suscetível, meio específico e **tensão de tração** (inclusive residual de soldagem). Falta um, não ocorre.",
    "Inox austenítico + **cloreto** + temperatura acima de ~60 °C é o par clássico de CST; a trinca é ramificada e transgranular.",
    "Alívio de tensões, mudança para duplex ou ferrítico e controle de cloreto são as defesas contra CST.",
    "**CUI (corrosão sob isolamento)** ataca a faixa de aproximadamente −4 °C a 175 °C, onde a água condensa e permanece; é agravada por isolante que absorve água e por barreira de vapor rompida.",
    "Como a CUI fica escondida, a inspeção depende de remoção do isolamento por amostragem, radiografia de perfil ou termografia.",
    "**Sensitização**: entre 425 °C e 815 °C precipita carboneto de cromo no contorno de grão, empobrecendo a vizinhança em Cr e abrindo caminho à corrosão **intergranular**. Solução: graus L (baixo carbono) ou estabilizados com Ti/Nb.",
    "**MIC (corrosão microbiológica)** é típica de água parada, teste hidrostático não drenado e tanques de fundo; bactérias redutoras de sulfato produzem H₂S e pites profundos sob depósito.",
    "**Serviço com H₂S** úmido causa danos por hidrogênio: HIC, SOHIC, SSC e empolamento. A NACE MR0175/ISO 15156 limita dureza (usualmente 22 HRC) e composição.",
    "Aço com dureza alta na zona afetada pelo calor é o ponto fraco em serviço ácido — daí a exigência de pré-aquecimento e TTPS."],
  formulas:[
    "CST = material suscetível + meio específico + tensão de tração",
    "Faixa de sensitização:  425 °C a 815 °C",
    "Faixa crítica de CUI:  −4 °C a 175 °C",
    "Serviço ácido (NACE):  dureza ≤ 22 HRC"],
  armadilhas:[
    "Esquecer a tensão **residual** de soldagem ao avaliar risco de CST — não precisa haver carga externa.",
    "Supor que linha isolada está protegida: o isolamento é justamente o que retém a água.",
    "Confundir sensitização (metalúrgica, contorno de grão) com pite (eletroquímico, cloreto)."] },

/* ===================== 12. SELEÇÃO DE MATERIAIS ===================== */
{ id:"sel-criterios", tema:"selmat", titulo:"Critérios de seleção e famílias de materiais", padrao:true,
  subtemas:["Critérios de seleção","Propriedades","Aços para tubulação","Aços liga","Aços inoxidáveis","Aços duplex","Baixas temperaturas","Ligas de níquel","Ligas de cobre","Ferros fundidos","Polímeros","Elastômeros","Alumínio","Compósitos","Serviço ácido","Cladding"],
  resumo:"Selecionar material é conciliar quatro exigências: resistência mecânica na temperatura de trabalho, compatibilidade com o meio, fabricabilidade (sobretudo soldabilidade) e custo. Em refinaria, o meio costuma mandar mais que a carga mecânica.",
  pontos:[
    "**ASTM A106 Gr.B** é o aço-carbono padrão para tubulação em serviço com temperatura; A53 é para serviços menos severos.",
    "**Aços Cr-Mo** (1¼Cr-½Mo, 2¼Cr-1Mo) resistem à fluência e ao ataque por hidrogênio em alta temperatura — as curvas de Nelson definem os limites.",
    "**Inox austenítico** (304/316) tem excelente resistência à corrosão e tenacidade criogênica, mas é suscetível a CST por cloreto e tem alta dilatação térmica.",
    "**Duplex** (2205) combina o dobro da resistência mecânica do austenítico com boa resistência a cloretos; exige controle rigoroso de aporte na soldagem para manter o balanço de fases.",
    "**Ligas de níquel** (Inconel, Monel, Hastelloy) atendem meios severos e altas temperaturas, a custo elevado — daí o uso em **cladding** ou revestimento por solda em vez de material maciço.",
    "Para **baixa temperatura**, a exigência é tenacidade: aços com estrutura CFC (austeníticos, alumínio) não têm transição dúctil-frágil; aços ferríticos exigem grau específico e ensaio Charpy na temperatura mínima de projeto.",
    "**Ferro fundido cinzento** é frágil, tem excelente amortecimento e usinabilidade; o **nodular** tem ductilidade por causa da grafita esferoidal.",
    "**Alumínio** tem alta relação resistência/peso e não fragiliza a frio, mas perde resistência acima de ~200 °C e sofre corrosão galvânica em contato com aço.",
    "**Elastômeros**: NBR resiste a hidrocarbonetos; EPDM não resiste a óleo, mas é bom em vapor e água; Viton resiste a alta temperatura e químicos agressivos.",
    "**Cladding** e lining separam a função: o substrato de aço-carbono resiste à pressão, a camada nobre resiste ao meio."],
  formulas:[
    "PREN = %Cr + 3,3·%Mo + 16·%N",
    "Índice de mérito (rigidez, peso mínimo):  E/ρ",
    "Índice de mérito (resistência, peso mínimo):  σe/ρ",
    "Serviço ácido:  dureza ≤ 22 HRC (NACE MR0175)"],
  armadilhas:[
    "Escolher inox 316 para meio com cloreto e temperatura elevada, ignorando a CST.",
    "Selecionar aço-carbono comum para serviço criogênico, sem verificar a temperatura de transição.",
    "Comparar materiais só por custo de aquisição, sem contar vida e paradas de manutenção."] },

/* ===================== 13. METALURGIA ===================== */
{ id:"met-estrutura", tema:"metalurgia", titulo:"Estrutura cristalina, defeitos e difusão", padrao:true,
  subtemas:["Estruturas cristalinas","Estrutura cristalina","Defeitos cristalinos","Difusão","Deformação","Recristalização","Mecanismos de endurecimento","Endurecimento","Solidificação"],
  resumo:"As propriedades mecânicas nascem da estrutura cristalina e dos seus defeitos. A discordância é o defeito que permite a deformação plástica com pouca energia — e todo mecanismo de endurecimento consiste em atrapalhar o movimento dela.",
  pontos:[
    "**CFC** (austenita, Al, Cu): muitos sistemas de escorregamento, muito dúctil, **sem** transição dúctil-frágil. **CCC** (ferrita): dúctil à temperatura ambiente, frágil a frio. **HC** (Mg, Zn): pouco dúctil.",
    "Defeitos: pontuais (lacunas, intersticiais), lineares (discordâncias), planares (contornos de grão) e volumétricos (poros, inclusões).",
    "Mecanismos de endurecimento: **refino de grão** (Hall-Petch), **solução sólida**, **encruamento** e **precipitação**. Todos travam discordâncias.",
    "Refino de grão é o único que aumenta resistência **e** tenacidade ao mesmo tempo — os outros trocam tenacidade por resistência.",
    "Hall-Petch: σ = σ₀ + k·d^(−1/2). Grão menor, mais contornos, mais barreiras.",
    "**Encruamento** (trabalho a frio) eleva dureza e limite de escoamento e reduz a ductilidade; a recristalização por recozimento desfaz o efeito.",
    "Sequência do recozimento: **recuperação** (alívio de tensões, sem mudar o grão) → **recristalização** (novos grãos livres de deformação) → **crescimento de grão** (indesejável).",
    "Temperatura de recristalização ≈ 0,4·Tf em kelvin; acima dela o trabalho é 'a quente' e não encrua.",
    "Difusão segue Fick e depende exponencialmente da temperatura (Arrhenius); intersticiais como C e N difundem muito mais rápido que substitucionais.",
    "Na solidificação, resfriamento rápido dá grão fino; a zona coquilhada, colunar e equiaxial descrevem a estrutura de um lingote."],
  formulas:[
    "Hall-Petch:  σ = σ₀ + k·d^(−1/2)",
    "Fick:  J = −D·(dC/dx)        D = D₀·e^(−Q/RT)",
    "x = √(D·t)  (profundidade de difusão)",
    "T_recristalização ≈ 0,4 · T_fusão  [K]",
    "Fator de empacotamento: CFC 0,74 | CCC 0,68 | HC 0,74"],
  armadilhas:[
    "Achar que todo endurecimento reduz a tenacidade — o refino de grão é a exceção.",
    "Confundir recuperação com recristalização: a primeira não muda os grãos.",
    "Supor que aço inox austenítico fica frágil a frio. A estrutura CFC não tem transição."] },

{ id:"met-ferro-carbono", figuras:["fe-c"], tema:"metalurgia", titulo:"Diagrama Fe-C, tratamentos térmicos e temperabilidade",
  subtemas:["Diagrama Fe-C","Regra da alavanca","Tratamentos térmicos","Curvas TTT","Curvas TTT e CCT","Temperabilidade","Martensita","Tratamentos termoquímicos","Elementos de liga","Aços inoxidáveis"],
  resumo:"O diagrama Fe-C diz o que se forma no resfriamento lento; as curvas TTT e CCT dizem o que se forma nas demais velocidades. Têmpera é resfriar rápido o bastante para produzir martensita, e revenido é o tratamento que a torna utilizável.",
  pontos:[
    "Aço **eutetoide** tem 0,77% C e vira perlita integralmente. Abaixo disso é hipoeutetoide (ferrita + perlita); acima, hipereutetoide (cementita + perlita).",
    "Eutetoide a 727 °C: austenita → ferrita + cementita (perlita). Limite entre aço e ferro fundido: 2,11% C.",
    "**Regra da alavanca** dá as frações de fase: a fração de uma fase é proporcional ao segmento **oposto** a ela.",
    "**Recozimento pleno**: forno, grão grosseiro, máxima usinabilidade e ductilidade. **Normalização**: ar calmo, grão mais fino, maior resistência.",
    "**Têmpera** produz martensita, dura e frágil, com tensões residuais altas; é sempre seguida de **revenido**, que troca dureza por tenacidade.",
    "A martensita é formada por transformação **adifusional** (sem difusão), com estrutura tetragonal supersaturada em carbono. Sua dureza depende do %C, não do resfriamento.",
    "**Temperabilidade** ≠ dureza máxima: mede a profundidade de endurecimento. Medida pelo ensaio Jominy; elementos de liga (Mn, Cr, Mo, Ni) a aumentam ao deslocar as curvas para a direita.",
    "**Austêmpera** produz bainita em banho isotérmico, com boa tenacidade e sem as tensões da têmpera convencional.",
    "**Termoquímicos** endurecem só a superfície: cementação (carbono, ~900 °C), nitretação (nitrogênio, ~500 °C, sem têmpera posterior e com pouca distorção), carbonitretação.",
    "Inoxidáveis: **austeníticos** (304/316, não magnéticos, não temperáveis), **ferríticos** (430, magnéticos), **martensíticos** (410/420, temperáveis, usados em facas e válvulas) e **duplex**."],
  formulas:[
    "Eutetoide: 0,77% C a 727 °C",
    "Alavanca:  %fase = (segmento oposto)/(segmento total) × 100",
    "%perlita ≈ %C/0,77   (hipoeutetoide)",
    "Ms, Mf — início e fim da transformação martensítica"],
  armadilhas:[
    "Aplicar a regra da alavanca com o segmento do mesmo lado da fase — é sempre o oposto.",
    "Confundir temperabilidade com dureza. Aço-carbono simples atinge alta dureza na superfície, mas com baixa temperabilidade.",
    "Esquecer o revenido após a têmpera: a peça pode trincar sozinha."] },

{ id:"met-ensaios", figuras:["tensao-deformacao","charpy"], tema:"metalurgia", titulo:"Ensaios mecânicos, fratura e fluência",
  subtemas:["Ensaios mecânicos","Ensaio de tração","Ensaio de dureza","Ensaio Charpy","Fratura","Tenacidade","Fluência"],
  resumo:"Cada ensaio responde a uma pergunta diferente. Tração dá resistência e ductilidade; dureza é o ensaio rápido e quase não destrutivo; Charpy revela a transição dúctil-frágil; fluência governa componentes que trabalham quentes por anos.",
  pontos:[
    "Tração fornece limite de escoamento, limite de resistência, alongamento e estricção. O escoamento convencional é definido a 0,2% de deformação plástica.",
    "A curva de **engenharia** cai após o limite de resistência porque usa a área inicial; a curva **verdadeira** cresce até a ruptura.",
    "Dureza: **Brinell** (esfera, materiais moles e peças grandes), **Rockwell** (rápido, direto, escalas B e C), **Vickers** (pirâmide, qualquer dureza, ideal para camadas finas e microdureza).",
    "Regra útil: Sut [MPa] ≈ 3,45 × HB para aços — permite estimar resistência sem ensaio destrutivo.",
    "**Charpy** mede energia absorvida e revela a temperatura de transição dúctil-frágil, crítica em vasos e tubulações em clima frio.",
    "Aços **CCC** (ferríticos) têm transição; **CFC** (austeníticos, alumínio) não têm e mantêm tenacidade em criogenia.",
    "Fratura **dúctil** tem deformação prévia, estricção, superfície fibrosa e taça-cone; **frágil** é súbita, plana e brilhante, com marcas em espinha de peixe.",
    "Fratura por **fadiga** mostra origem em concentrador, marcas de praia e zona final rasgada — é frágil na aparência mesmo em material dúctil.",
    "**Fluência** é deformação lenta sob carga constante em alta temperatura (acima de ~0,4·Tf); tem três estágios: primário (decrescente), secundário (taxa constante, o de projeto) e terciário (acelerado até a ruptura).",
    "Parâmetro de Larson-Miller permite extrapolar ensaios curtos em alta temperatura para a vida real em serviço."],
  formulas:[
    "σe (0,2%),  Sut = F_max/A₀",
    "Alongamento % = (Lf − L₀)/L₀ × 100",
    "Sut [MPa] ≈ 3,45 · HB",
    "LMP = T·(C + log t),  C ≈ 20",
    "K_IC — tenacidade à fratura;  K = Y·σ·√(πa)"],
  armadilhas:[
    "Ler o pico da curva de engenharia como a tensão real de ruptura.",
    "Esperar transição dúctil-frágil em inox austenítico.",
    "Usar o estágio primário da fluência para dimensionar vida — o de projeto é o secundário."] },

/* ===================== 14. PROCESSOS DE FABRICAÇÃO ===================== */
{ id:"fab-usinagem", tema:"fabricacao", titulo:"Usinagem: parâmetros, ferramentas e acabamento", padrao:true,
  subtemas:["Torneamento","Fresamento","Furação","Retificação","Parâmetros de corte","Tempo de usinagem","Vida de ferramenta","Ferramentas","Fluido de corte","Rugosidade","Cavaco","Processos não convencionais","Tolerâncias"],
  resumo:"Três parâmetros comandam a usinagem: velocidade de corte, avanço e profundidade. A velocidade é a que mais afeta a vida da ferramenta (equação de Taylor); o avanço é o que mais afeta a rugosidade. Saber qual mexer para qual efeito resolve o tema.",
  pontos:[
    "vc = π·D·n/1000, com D em mm, n em rpm e vc em m/min. É a relação mais cobrada.",
    "No torneamento, D é o diâmetro da **peça**; na fresagem e furação, o da **ferramenta**.",
    "Taylor: vc·T^n = C. Aumentar a velocidade derruba a vida da ferramenta de forma acentuada e não linear.",
    "Rugosidade teórica no torneamento: Ra ≈ f²/(32·r). Reduzir o avanço ou aumentar o raio de ponta melhora o acabamento — o avanço entra ao **quadrado**.",
    "Desbaste privilegia avanço e profundidade altos; acabamento usa avanço pequeno e velocidade alta.",
    "Cavaco **contínuo** aparece em material dúctil com alta velocidade; **descontínuo** em material frágil; a **aresta postiça** ocorre em velocidade baixa e piora muito o acabamento.",
    "Quebra-cavacos é questão de segurança e de proteção da peça, não apenas de conveniência.",
    "Materiais de ferramenta em ordem de dureza a quente: aço rápido < metal duro < cerâmica < CBN < diamante. Diamante **não** serve para aço (afinidade química com o ferro).",
    "Fluido de corte refrigera, lubrifica, expulsa cavaco e protege contra corrosão. Em alta velocidade domina a refrigeração; em baixa, a lubrificação.",
    "Retificação é para acabamento fino e materiais duros, com pequena remoção e alto calor específico — risco de queima e trincas.",
    "Não convencionais (eletroerosão, jato d'água, laser) usinam sem esforço mecânico e independem da dureza do material."],
  formulas:[
    "vc = π·D·n/1000   [m/min]",
    "tc = L/(f·n)   (torneamento)",
    "Q = vc · f · ap   (taxa de remoção)",
    "Taylor:  vc · T^n = C",
    "Ra ≈ f²/(32·r)"],
  armadilhas:[
    "Usar o diâmetro da peça na fresagem, onde vale o da ferramenta.",
    "Esquecer o divisor 1000 na conversão de mm/min para m/min.",
    "Aumentar a velocidade para melhorar o acabamento quando o problema está no avanço."] },

{ id:"fab-conformacao", tema:"fabricacao", titulo:"Conformação mecânica a frio e a quente",
  subtemas:["Conformação","Trabalho a frio e a quente"],
  resumo:"A fronteira entre trabalho a frio e a quente não é uma temperatura fixa, e sim a temperatura de recristalização do material. Abaixo dela o metal encrua; acima, ele se recristaliza continuamente e não ganha dureza.",
  pontos:[
    "Trabalho **a frio**: melhor acabamento e tolerância, encruamento (mais dureza, menos ductilidade), maiores esforços, tensões residuais.",
    "Trabalho **a quente**: menores esforços, grandes deformações possíveis, refino de grão, mas acabamento pior e oxidação (carepa).",
    "T_recristalização ≈ 0,4·Tf em kelvin. Chumbo se conforma 'a quente' à temperatura ambiente; tungstênio a 1.100 °C ainda está 'a frio'.",
    "Laminação reduz espessura; forjamento conforma por compressão localizada; extrusão empurra através de matriz (perfis contínuos); trefilação **puxa** através da matriz (fios e arames).",
    "Extrusão e trefilação produzem seções semelhantes: a diferença está no sentido do esforço — empurrar contra puxar.",
    "Estampagem profunda depende da razão de estiramento; o retorno elástico (springback) exige compensação nas matrizes.",
    "Fundição permite geometrias complexas com pouca usinagem; os defeitos típicos são rechupe, porosidade e inclusões de areia.",
    "Metalurgia do pó atende peças pequenas em grande série, com porosidade controlada útil para mancais autolubrificantes."],
  formulas:[
    "T_recristalização ≈ 0,4 · T_fusão  [K]",
    "Redução % = (A₀ − Af)/A₀ × 100",
    "σ = K·ε^n   (curva de encruamento)"],
  armadilhas:[
    "Definir trabalho a quente por uma temperatura absoluta em vez da razão com a de fusão.",
    "Trocar extrusão por trefilação — o sentido do esforço distingue as duas.",
    "Supor que trabalho a quente melhora o acabamento superficial."] },

/* ===================== 15. SOLDAGEM ===================== */
{ id:"sol-processos", tema:"soldagem", titulo:"Processos de soldagem e consumíveis", padrao:true,
  subtemas:["Processos","Eletrodo revestido","Arco submerso","Consumíveis","Gases de proteção","Chanfros","Posições","Simbologia","Brasagem","Corte térmico","Oxicorte"],
  resumo:"Cada processo tem um perfil de aplicação definido por proteção, taxa de deposição e posição de soldagem. Eletrodo revestido é versátil e portátil; arco submerso é o campeão de produtividade em posição plana; TIG é o de melhor qualidade e menor deposição.",
  pontos:[
    "**Eletrodo revestido (SMAW)**: versátil, funciona em campo e com vento, todas as posições, baixa produtividade e gera escória.",
    "**MIG/MAG (GMAW)**: alta produtividade, sem escória, sensível a vento — exige abrigo em campo. MIG usa gás **inerte**; MAG usa gás **ativo** (CO₂ ou mistura).",
    "**TIG (GTAW)**: eletrodo não consumível de tungstênio, máxima qualidade, ideal para passe de raiz, inox e ligas especiais; baixa taxa de deposição.",
    "**Arco submerso (SAW)**: altíssima deposição, arco coberto por fluxo granular, restrito às posições plana e horizontal; padrão em costuras longas de vasos e tubos.",
    "**Arame tubular (FCAW)**: une produtividade do MAG com tolerância de campo; autoprotegido dispensa gás.",
    "Classificação AWS **E7018**: E = eletrodo; 70 = 70 ksi de resistência; 1 = todas as posições; 8 = revestimento básico com pó de ferro, baixo hidrogênio.",
    "Eletrodo **básico** exige ressecagem e acondicionamento em estufa: umidade é fonte direta de hidrogênio difusível e de trinca a frio.",
    "Gases: argônio dá arco estável e boa em finas; CO₂ dá penetração profunda e mais respingos; hélio aumenta o aporte e a velocidade.",
    "Chanfro em V é o mais comum; duplo V reduz distorção e consumo em chapas grossas; U reduz volume de solda em chapas muito espessas.",
    "**Brasagem** une sem fundir o metal base (metal de adição acima de 450 °C); **solda branda** abaixo de 450 °C.",
    "**Oxicorte** só corta aço-carbono e baixa liga: depende da oxidação do ferro. Inox e alumínio exigem plasma ou laser."],
  formulas:[
    "AWS E-XX-YY-ZZ:  resistência | posição | revestimento e corrente",
    "Aporte:  H = (60 · U · I)/(v · 1000)   [kJ/mm]",
    "Diluição = A_metal base/(A_base + A_adição) × 100"],
  armadilhas:[
    "Trocar MIG (inerte) por MAG (ativo).",
    "Especificar oxicorte para inox — não funciona.",
    "Usar eletrodo básico retirado da embalagem sem ressecagem, em aço de alta resistência."] },

{ id:"sol-metalurgia", tema:"soldagem", titulo:"Metalurgia da soldagem, aporte, pré-aquecimento e TTPS",
  subtemas:["Aporte térmico","Carbono equivalente","Ciclo térmico","Pré-aquecimento","TTPS","Metalurgia da solda","Tensões residuais","Distorções","Decoesão lamelar","Inoxidáveis"],
  resumo:"A soldagem é um tratamento térmico local e violento. A zona afetada pelo calor é o ponto fraco da junta, e controlar o aporte, o pré-aquecimento e o tratamento pós-soldagem é o que evita trinca, dureza excessiva e distorção.",
  pontos:[
    "Aporte H = 60·U·I/(v·1000) em kJ/mm. Aporte **alto** dá resfriamento lento (menos trinca a frio, mas grão grosseiro e menos tenacidade); aporte **baixo** dá o contrário.",
    "**Carbono equivalente** estima a soldabilidade: CE = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15. Acima de 0,40% a 0,45% exige pré-aquecimento.",
    "**Pré-aquecimento** retarda o resfriamento e dá tempo ao hidrogênio de escapar; é a defesa central contra a trinca a frio.",
    "**Trinca a frio** (por hidrogênio) precisa de quatro fatores: hidrogênio difusível, microestrutura frágil (martensita na ZAC), tensão de tração e temperatura baixa. Aparece horas ou dias após a solda.",
    "**Trinca a quente** (solidificação) ocorre ainda quente, associada a enxofre, fósforo e a cordões com relação profundidade/largura desfavorável.",
    "**Decoesão lamelar** ocorre em chapa espessa com carga na direção da **espessura**, por inclusões alongadas; evita-se com aço de baixo enxofre e qualidade Z.",
    "**TTPS (alívio de tensões)** reduz tensões residuais, revenido da ZAC e reduz dureza; é exigido em serviço ácido, em espessuras grandes e por vários códigos.",
    "**Distorção** vem da contração restringida; controla-se com sequência de passes alternada, ponteamento, dispositivos e chanfro simétrico. Pré-deformar é técnica clássica.",
    "Em **inox austenítico**, o objetivo oposto: aporte **baixo**, sem pré-aquecimento, para evitar sensitização e distorção; a ferrita delta (5–10%) previne trinca a quente.",
    "Diagrama de Schaeffler/DeLong prevê a microestrutura da solda pelos equivalentes de Cr e Ni."],
  formulas:[
    "H = (60 · U · I)/(v · 1000)   [kJ/mm]",
    "CE(IIW) = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15",
    "Trinca a frio = H₂ + microestrutura frágil + tensão + baixa temperatura",
    "Creq = Cr + Mo + 1,5Si + 0,5Nb        Nieq = Ni + 30C + 0,5Mn"],
  armadilhas:[
    "Aplicar a receita do aço-carbono (pré-aquecer, aporte alto) ao inox austenítico — é o oposto.",
    "Inspecionar aço de alta resistência imediatamente após soldar: a trinca a frio é retardada, e os códigos exigem espera de 24 a 48 h.",
    "Confundir trinca a quente com trinca a frio nas causas e no momento em que aparecem."] },

{ id:"sol-qualidade", tema:"soldagem", titulo:"Descontinuidades, ensaios não destrutivos e qualificação",
  subtemas:["Descontinuidades","Trincas","Trinca a frio","Trinca a quente","Ensaios não destrutivos","Inspeção","Qualificação"],
  resumo:"Descontinuidade só vira defeito quando excede o critério de aceitação do código. Cada END enxerga um tipo de descontinuidade: superficiais com LP e PM; internas com RX e US. A qualificação separa o procedimento (EPS/RQP) do soldador (RQS).",
  pontos:[
    "**Trinca** é a única descontinuidade **sempre** inaceitável, em qualquer código e qualquer tamanho.",
    "Descontinuidades típicas: porosidade, inclusão de escória, falta de fusão, falta de penetração, mordedura, sobreposição e trincas.",
    "**Falta de fusão** e **falta de penetração** são graves porque atuam como entalhe agudo, concentrando tensão; a porosidade esférica é a mais tolerada.",
    "**Líquido penetrante (LP)**: descontinuidades **abertas à superfície**, em qualquer material não poroso. Não detecta defeito subsuperficial.",
    "**Partículas magnéticas (PM)**: superficiais e ligeiramente subsuperficiais, só em material **ferromagnético** — não serve para inox austenítico nem alumínio.",
    "**Radiografia (RX)**: excelente para defeitos volumétricos (porosidade, escória); pouco sensível a trinca perpendicular ao feixe. Gera registro permanente e exige proteção radiológica.",
    "**Ultrassom (US)**: excelente para defeitos **planares** (trinca, falta de fusão), dá profundidade, mas depende de operador qualificado; o phased array registra a inspeção.",
    "Sequência de documentos: **EPS/WPS** é o procedimento; o **RQP/PQR** o qualifica com ensaios; o **RQS/WPQ** qualifica o soldador.",
    "Qualificar o procedimento comprova que a receita produz junta adequada; qualificar o soldador comprova que a pessoa executa a receita.",
    "Variáveis essenciais alteradas exigem **requalificação** do procedimento; variáveis não essenciais só revisão do documento."],
  formulas:[
    "END superficiais:  LP (qualquer material) | PM (ferromagnéticos)",
    "END volumétricos:  RX (volumétricos) | US (planares)",
    "EPS/WPS → RQP/PQR → RQS/WPQ"],
  armadilhas:[
    "Especificar partículas magnéticas para inox austenítico — ele não é ferromagnético.",
    "Contar com radiografia para achar trinca fina perpendicular ao feixe.",
    "Tratar toda descontinuidade como defeito, sem consultar o critério de aceitação."] }

);
