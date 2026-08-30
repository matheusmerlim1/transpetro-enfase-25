/* Resumos detalhados por bloco de assunto.
   Cada questão do banco é ligada a um verbete pelo par tema+subtema;
   o verbete marcado com padrao:true recolhe os subtemas não listados. */
window.VERBETES = window.VERBETES || [];

window.VERBETES.push(

/* ===================== 1. TERMODINÂMICA ===================== */
{ id:"ter-conceitos", tema:"termodinamica", titulo:"Conceitos, propriedades e substância pura", padrao:true,
  subtemas:["Conceitos fundamentais","Propriedades","Substância pura","Processos","Entropia","Ciclos"],
  resumo:"Antes de qualquer conta, é preciso classificar o problema. Pergunte três coisas: o sistema é fechado (massa fixa) ou volume de controle (há fluxo)? A substância é gás ideal ou substância pura em tabela? O processo é isobárico, isocórico, isotérmico, isentrópico ou politrópico? Errar essa classificação inicial é a causa mais frequente de erro, porque leva à fórmula errada logo no primeiro passo.",
  pontos:[
    "Propriedade **intensiva** independe da massa (T, p, ρ e todas as específicas). **Extensiva** se divide com a massa (V, U, H, S totais).",
    "Sistema **fechado** troca energia mas não massa. **Volume de controle** admite fluxo. **Isolado** não troca nada.",
    "Processo **quase-estático** mantém o sistema infinitesimalmente próximo do equilíbrio — é o que permite traçar a linha no diagrama e integrar ∫p·dV.",
    "Em substância pura na região bifásica, temperatura e pressão **não são independentes**: fixada uma, a outra fica determinada.",
    "**Ponto triplo**: as três fases coexistem (água: 0,01 °C e 0,6113 kPa). **Ponto crítico**: vf = vg e o calor latente se anula (água: 374 °C e 22,09 MPa).",
    "Acima da pressão crítica não há mudança de fase distinta — é o regime das caldeiras supercríticas.",
    "Título x é fração **mássica** de vapor. A regra da alavanca vale igual para v, u, h e s: y = yf + x·yfg."],
  formulas:[
    "x = (v − vf)/vfg",
    "h = hf + x·hfg",
    "Processo quase-estático:  W = ∫ p·dV"],
  armadilhas:[
    "Título de 0,5 não significa metade do volume ocupado por vapor — vg é centenas de vezes maior que vf.",
    "Energia interna **específica** (u) é intensiva; energia interna **total** (U) é extensiva. O enunciado costuma omitir o adjetivo.",
    "Todo processo reversível é quase-estático, mas nem todo quase-estático é reversível (pode haver atrito externo)."] },

{ id:"ter-primeira-lei", tema:"termodinamica", titulo:"Primeira Lei: sistemas fechados e volumes de controle",
  subtemas:["Primeira Lei","Volume de controle","Câmara de mistura","Processo transiente","Turbina com extração","Expansão livre"],
  resumo:"A Primeira Lei é conservação de energia. Em sistema fechado, tudo se resume a ΔU = Q − W com a convenção de sinais bem fixada. Em volume de controle, o que atravessa a fronteira carrega **entalpia**, não energia interna — é essa a razão de ser da entalpia como propriedade. Regime permanente significa que nada acumula dentro: o que entra sai.",
  pontos:[
    "Convenção clássica: calor que **entra** é positivo; trabalho realizado **pelo** sistema é positivo. Um agitador realiza trabalho sobre o fluido, logo W é negativo.",
    "Recipiente rígido: não há trabalho de fronteira, mas pode haver trabalho de eixo ou elétrico.",
    "Em volume de controle, o termo dominante é quase sempre Δh; energia cinética e potencial só entram quando o enunciado fornece velocidades altas ou cotas.",
    "**Bocal**: sem trabalho, converte entalpia em energia cinética. **Turbina/compressor**: converte Δh em trabalho. **Válvula**: isentálpica. **Trocador**: Q = ṁ·Δh.",
    "Câmara de mistura tem duas entradas e uma saída: resolve-se pelo par de balanços de massa e energia simultaneamente.",
    "Carga de tanque evacuado é transiente: m·u₂ = m·h_linha, o que dá T₂ = k·T_linha — o tanque aquece sozinho.",
    "Expansão livre contra o vácuo: Q = 0 e W = 0, logo ΔU = 0 e, para gás ideal, a temperatura não muda."],
  formulas:[
    "Sistema fechado:  ΔU = Q − W",
    "Volume de controle:  Q̇ − Ẇ = ṁ·[(h₂−h₁) + (V₂²−V₁²)/2 + g(z₂−z₁)]",
    "Isobárico:  Q = m·cp·ΔT   e   W = m·R·ΔT",
    "Isocórico:  W = 0   →   Q = ΔU",
    "Carga de tanque:  u₂ = h_linha  →  T₂ = k·T_linha"],
  armadilhas:[
    "Em bocal, esquecer a velocidade de entrada quando ela é dada. O enunciado só fornece V₁ se quiser que você a use.",
    "Converter kJ/kg para J/kg antes de somar com V²/2. Misturar as unidades muda o resultado por mil.",
    "Em turbina com extração, aplicar ṁ_total × Δh_total superestima a potência: cada corrente entra no balanço separadamente.",
    "Expansão livre **não** é isentrópica: a temperatura não muda, mas a entropia aumenta muito."] },

{ id:"ter-segunda-lei", tema:"termodinamica", titulo:"Segunda Lei, entropia e exergia",
  subtemas:["Segunda Lei","Geração de entropia","Ciclo de Carnot","Exergia","Máquinas acopladas"],
  resumo:"A Primeira Lei diz o que é possível em quantidade; a Segunda diz o que é possível em direção e qualidade. Toda máquina térmica precisa rejeitar calor, nenhuma supera Carnot entre os mesmos reservatórios, e todo processo real gera entropia. A exergia mede a fração da energia que ainda pode virar trabalho — e é ela, não a energia, que se destrói.",
  pontos:[
    "**Kelvin-Planck**: impossível operar em ciclo trocando calor com um único reservatório e produzir trabalho líquido.",
    "**Clausius**: impossível transferir calor de um corpo frio para um quente sem outro efeito.",
    "Rendimento de Carnot depende só das temperaturas **absolutas**: η = 1 − TL/TH.",
    "Desigualdade de Clausius: ∮δQ/T = 0 reversível, < 0 irreversível, > 0 impossível.",
    "Geração de entropia é grandeza de **processo**, nunca propriedade, e é sempre ≥ 0.",
    "Transferência de calor com ΔT finito sempre gera entropia e destrói exergia, mesmo sem perda de energia.",
    "Exergia do calor: X = Q·(1 − T₀/T_fonte). Calor de baixa temperatura tem pouca qualidade, ainda que em grande quantidade.",
    "Teorema de Gouy-Stodola: X_destruída = T₀·S_gerada."],
  formulas:[
    "η_Carnot = 1 − T_frio/T_quente",
    "COP_refrigeração = TL/(TH − TL)      COP_bomba de calor = COP_R + 1",
    "Δs (gás ideal) = cp·ln(T₂/T₁) − R·ln(p₂/p₁)",
    "Δs (incompressível) = m·c·ln(T₂/T₁)",
    "X_destruída = T₀ · S_gerada"],
  armadilhas:[
    "Usar temperatura em Celsius no rendimento de Carnot. É o erro mais explorado do assunto inteiro.",
    "Concluir que rendimento abaixo do de Carnot torna a máquina impossível — torna-a apenas real.",
    "Analisar a entropia de um só lado do trocador: a do vapor cai, mas a do universo sobe.",
    "COP pode e costuma ser maior que 1. Não confundir com rendimento térmico."] },

{ id:"ter-gases", tema:"termodinamica", titulo:"Gases perfeitos e processos",
  subtemas:["Gases perfeitos","Processo politrópico","Processo isentrópico","Processo isotérmico","Compressão em estágios"],
  resumo:"Gás ideal é a hipótese que permite fechar quase todos os cálculos de termodinâmica em prova. A equação de estado liga p, V, m e T; as relações de calores específicos ligam cp, cv, R e k; e o expoente do processo define qual fórmula de trabalho usar. Identificar n é o passo decisivo: n = 0 isobárico, n = 1 isotérmico, n = k isentrópico, n → ∞ isocórico.",
  pontos:[
    "Ar como referência: R = 0,287 kJ/kg·K, cp = 1,005, cv = 0,718, k = 1,4.",
    "Relação de Mayer: cp − cv = R. Daí cv = R/(k−1) e cp = k·R/(k−1).",
    "cp é sempre maior que cv, porque na expansão a pressão constante parte do calor vira trabalho.",
    "Nas relações isentrópicas, o expoente com pressão é (k−1)/k; com volume é (k−1). Trocá-los é erro clássico.",
    "No politrópico com 1 < n < k, o gás aquece mas ainda cede calor ao meio.",
    "Compressão em estágios com inter-resfriamento reduz o trabalho; a razão ótima por estágio é a raiz n-ésima da razão total.",
    "No limite de infinitos estágios, a compressão tende à isotérmica, que é a de menor trabalho possível."],
  formulas:[
    "p·V = m·R·T        R = R̄/M = 8,314/M",
    "T₂/T₁ = (p₂/p₁)^((k−1)/k) = (V₁/V₂)^(k−1)",
    "p₂ = p₁·(V₁/V₂)^k = p₁·rv^k",
    "Politrópico:  W = (p₂V₂ − p₁V₁)/(1 − n)",
    "Isotérmico:  W = m·R·T·ln(V₂/V₁) = m·R·T·ln(p₁/p₂)",
    "Razão ótima por estágio = (p_final/p_inicial)^(1/n)"],
  armadilhas:[
    "Usar pressão manométrica na equação de estado. Ela exige pressão **absoluta**, sempre.",
    "Dividir a razão de pressões pelo número de estágios em vez de extrair a raiz n-ésima.",
    "Em compressão, o sinal negativo do trabalho indica energia entrando. Resultado positivo em compressão é sinal de erro."] },

{ id:"ter-refrigeracao", tema:"termodinamica", titulo:"Refrigeração, bomba de calor e estrangulamento",
  subtemas:["Refrigeração","Bomba de calor","Estrangulamento"],
  resumo:"O ciclo de compressão de vapor tem quatro processos: compressão, condensação, expansão e evaporação. O efeito útil muda conforme o objetivo — no refrigerador é o calor retirado no evaporador, na bomba de calor é o calor entregue no condensador — mas o trabalho gasto é o mesmo do compressor. Daí COP_BC = COP_R + 1, sempre.",
  pontos:[
    "Efeito frigorífico: qL = h1 − h4. Trabalho: w = h2 − h1. Calor rejeitado: qH = h2 − h3.",
    "A válvula de expansão é **isentálpica**: h4 = h3. Parte do líquido vaporiza (flash) e resfria o restante.",
    "COP cresce quando a diferença entre as temperaturas de condensação e evaporação diminui.",
    "Rendimento isentrópico do compressor **divide** o trabalho ideal: w_real = w_s/η.",
    "Sub-resfriar o líquido antes da válvula aumenta o efeito frigorífico sem aumentar o trabalho.",
    "Superaquecer o vapor na sucção protege o compressor contra golpe de líquido."],
  formulas:[
    "COP_R = qL/w = (h1 − h4)/(h2 − h1)",
    "COP_BC = qH/w = (h2 − h3)/(h2 − h1) = COP_R + 1",
    "Carnot:  COP_R,max = TL/(TH − TL)",
    "Estrangulamento:  h₂ = h₁  →  x = (h₁ − hf)/hfg"],
  armadilhas:[
    "Trocar o COP do refrigerador pelo da bomba de calor — a diferença é exatamente 1.",
    "Multiplicar pelo rendimento isentrópico em vez de dividir, o que produziria COP real maior que o ideal.",
    "Chamar o estrangulamento de isentrópico. Ele é isentálpico e fortemente irreversível."] },

/* ===================== 2. MECÂNICA DOS FLUIDOS ===================== */
{ id:"flu-propriedades", tema:"mecflu", titulo:"Propriedades dos fluidos e hidrostática", padrao:true,
  subtemas:["Propriedades dos fluidos","Viscosidade","Hidrostática","Empuxo","Estabilidade","Manometria diferencial","Continuidade","Pressão absoluta"],
  resumo:"Fluido em repouso: a pressão cresce linearmente com a profundidade e não depende da forma do recipiente. Fluido em movimento: a viscosidade liga a tensão de cisalhamento à taxa de deformação. Essas duas ideias sustentam manometria, forças em comportas, empuxo e estabilidade de corpos flutuantes.",
  pontos:[
    "p = p₀ + γ·h. A pressão depende só da altura de coluna, nunca do volume — é o paradoxo hidrostático.",
    "Manômetro: some γ·h ao descer, subtraia ao subir, até um ponto de pressão conhecida.",
    "No manômetro **diferencial** com pontos na mesma cota, vale (γ_manométrico − γ_linha)·h: as colunas do fluido da linha se cancelam.",
    "Força em superfície plana: F = γ·h_cg·A, aplicada **abaixo** do centroide. Em parede vertical com topo na superfície, o centro de pressão fica a 2/3 da altura.",
    "Empuxo = peso do volume deslocado. Fração submersa = razão entre massas específicas.",
    "Estabilidade de flutuante: GM = I/V − BG > 0. Um corpo pode ter G acima de B e ainda ser estável se a linha d'água for larga.",
    "Fluido newtoniano: τ = μ·(du/dy) com μ constante. Bingham tem tensão inicial; tixotrópico varia com o tempo.",
    "Viscosidade de líquidos **cai** com a temperatura; a de gases **sobe**."],
  formulas:[
    "p = p₀ + ρ·g·h        γ = ρ·g",
    "F = γ·h_cg·A        y_cp = y_cg + I_cg/(y_cg·A)",
    "E = γ_fluido · V_deslocado",
    "GM = I/V − BG",
    "τ = μ·(du/dy)        ν = μ/ρ",
    "p_absoluta = p_manométrica + p_atmosférica"],
  armadilhas:[
    "Aplicar a força hidrostática no centroide. Ela age no centro de pressão, sempre mais fundo.",
    "Esquecer a coluna do fluido da linha no manômetro diferencial e usar só γ_Hg·h.",
    "Usar pressão manométrica onde a equação exige absoluta (estado, tabelas, escoamento compressível)."] },

{ id:"flu-escoamento", figuras:["moody"], tema:"mecflu", titulo:"Escoamento em tubulações e perda de carga",
  subtemas:["Regimes de escoamento","Escoamento laminar","Perda de carga","Perda localizada","Escoamento em tubulações","Associação de tubulações","Diagrama de Moody","Bernoulli","Potência","Camada limite","Sifão"],
  resumo:"O número de Reynolds decide tudo: abaixo de 2.000 o escoamento é laminar e f depende só de Re; acima de 4.000 é turbulento e f depende de Re e da rugosidade relativa. Com f na mão, Darcy-Weisbach fecha a perda distribuída, e o coeficiente K ou o comprimento equivalente fecham as localizadas. Bernoulli com perdas e máquina é a equação que amarra o sistema inteiro.",
  pontos:[
    "Em tubos: laminar Re < 2.000; transição 2.000-4.000; turbulento Re > 4.000. Em placa plana, o crítico é Re_x ≈ 5×10⁵.",
    "Laminar: f = 64/Re, a rugosidade é irrelevante e o perfil é parabólico com V_max = 2·V_média.",
    "Turbulento completamente rugoso: as curvas do Moody ficam horizontais e f depende só de ε/D.",
    "Perda distribuída varia com **V²** e, a vazão constante, com **1/D⁵**. Pequena mudança de bitola muda muito o bombeamento.",
    "Em **série** a vazão é a mesma e as perdas somam. Em **paralelo** a perda é a mesma e as vazões somam.",
    "Comprimento equivalente: L_eq = K·D/f. Converte acessórios em trecho reto.",
    "Hazen-Williams é empírica, restrita à água em regime turbulento; C cai com o envelhecimento do tubo.",
    "Na região de entrada, as camadas limite crescem até se encontrarem; só depois de Le o perfil deixa de variar."],
  formulas:[
    "Re = ρVD/μ = VD/ν",
    "h_L = f·(L/D)·V²/(2g)        f_laminar = 64/Re",
    "h_loc = K·V²/(2g)        L_eq = K·D/f",
    "Bernoulli:  p/γ + V²/2g + z + H_bomba = ... + h_L",
    "P = γ·Q·H/η",
    "Camada limite laminar:  δ = 5,0·x/√Re_x"],
  armadilhas:[
    "Assumir turbulência por hábito e ir ao Moody em um caso laminar — óleos escoam laminares em condições comuns.",
    "Confundir o fator de Darcy com o de Fanning, que é quatro vezes menor.",
    "Multiplicar a potência hidráulica pelo rendimento em vez de dividir.",
    "Esquecer as perdas na altura manométrica e subdimensionar a bomba."] },

{ id:"flu-dinamica", tema:"mecflu", titulo:"Quantidade de movimento, medição e semelhança",
  subtemas:["Quantidade de movimento","Medição de vazão","Medição de velocidade","Semelhança","Análise dimensional"],
  resumo:"A equação da quantidade de movimento dá as forças que o escoamento exerce sobre curvas, bocais e pás — sempre com duas parcelas: a estática (pressão × área) e a dinâmica (ṁ·ΔV). A análise dimensional reduz o número de variáveis do problema, e os critérios de semelhança dizem qual adimensional preservar em ensaio de modelo.",
  pontos:[
    "Força em curva: F = p·A + ṁ·V em cada direção. Em linhas pressurizadas, a parcela de pressão domina.",
    "Jato em placa plana: F = ρ·A·V². Em concha que reverte 180°, a força **dobra** — princípio da turbina Pelton.",
    "Venturímetro e placa de orifício medem vazão pela queda de pressão; o venturi recupera muito mais pressão.",
    "Tubo de Pitot mede a pressão dinâmica, logo a velocidade **local**, não a média da seção.",
    "Teorema Pi: número de grupos adimensionais = n variáveis − k dimensões fundamentais.",
    "Escoamento com **superfície livre** (navios, vertedouros) → semelhança de **Froude**: V_m/V_p = √(L_m/L_p).",
    "Escoamento confinado dominado por viscosidade → semelhança de **Reynolds**: com o mesmo fluido, V_m/V_p = L_p/L_m.",
    "Não é possível satisfazer Froude e Reynolds ao mesmo tempo com o mesmo fluido."],
  formulas:[
    "F = p·A + ṁ·V        R = √(Fx² + Fy²)",
    "Placa plana: F = ρAV²      Concha 180°: F = 2ρAV²",
    "Venturi:  V₂ = √[2Δp/(ρ(1 − (A₂/A₁)²))]",
    "Pitot:  V = √(2·g·Δh)",
    "Grupos Π = n − k"],
  armadilhas:[
    "Desprezar o termo de pressão na força em curva, o que subdimensiona grosseiramente a ancoragem.",
    "No venturi, supor V₁ ≈ 0 e ignorar (A₂/A₁)² — o erro cresce quando os diâmetros se aproximam.",
    "Trocar Froude por Reynolds: por Froude o modelo é ensaiado mais devagar; por Reynolds, mais rápido."] },

{ id:"flu-compressivel", tema:"mecflu", titulo:"Escoamento compressível e transientes",
  subtemas:["Escoamento compressível","Golpe de aríete","Transiente hidráulico"],
  resumo:"Quando a velocidade se aproxima da velocidade do som, a densidade deixa de ser constante e o comportamento se inverte em relação ao subsônico: um bocal divergente passa a acelerar o escoamento. Em líquidos, a compressibilidade aparece de outra forma — no golpe de aríete, em que o fechamento rápido de uma válvula gera uma onda de sobrepressão.",
  pontos:[
    "c = √(k·R·T): a velocidade do som depende só da temperatura, para um dado gás.",
    "Ma < 1 subsônico, Ma = 1 sônico, Ma > 1 supersônico, Ma > 5 hipersônico.",
    "Razão crítica de pressões para o ar (k = 1,4): p*/p₀ = 0,528.",
    "Em bocal **convergente**, atingido Ma = 1 na saída ocorre bloqueio (choking): reduzir mais a pressão a jusante não aumenta a vazão.",
    "Para passar de Ma = 1 é indispensável seção **divergente** após a garganta.",
    "Golpe de aríete: Δp = ρ·c·ΔV no fechamento rápido, proporcional a ΔV e não a ΔV².",
    "Fechamento é **rápido** quando o tempo de manobra é menor que 2L/c."],
  formulas:[
    "c = √(k·R·T)        Ma = V/c",
    "p*/p₀ = [2/(k+1)]^(k/(k−1)) = 0,528 para k = 1,4",
    "T₀/T = 1 + ((k−1)/2)·Ma²",
    "Joukowsky:  Δp = ρ·c·ΔV",
    "t_crítico = 2·L/c"],
  armadilhas:[
    "Supor que reduzir a pressão externa aumenta indefinidamente a vazão em bocal convergente bloqueado.",
    "Aplicar Joukowsky pleno a fechamento lento — nesse caso a sobrepressão é atenuada (Michaud).",
    "Achar que tubulação metálica é rígida e não sofre golpe: a celeridade é alta justamente por isso."] }

);
