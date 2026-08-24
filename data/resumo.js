/* Resumo geral do conteúdo da prova — uma síntese por item do Anexo IV,
   com o que precisa estar decorado e um ou dois exemplos resolvidos. */
window.RESUMO = [

{ tema:"termodinamica",
  sintese:"Tudo gira em torno de dois balanços: energia (1ª Lei) e entropia (2ª Lei). Identifique primeiro se o sistema é fechado (massa fixa) ou volume de controle (há fluxo), e se o processo é isobárico, isocórico, isotérmico, isentrópico ou politrópico — isso define qual fórmula usar.",
  chaves:[
    "Sistema fechado: ΔU = Q − W. Volume de controle em regime permanente: Q̇ − Ẇ = ṁ·Δh.",
    "Gás ideal: pV = mRT; cp − cv = R; k = cp/cv. Ar: R = 0,287; cp = 1,005; cv = 0,718; k = 1,4.",
    "Isentrópico: T₂/T₁ = (p₂/p₁)^((k−1)/k). Politrópico: W = (p₂V₂ − p₁V₁)/(1 − n).",
    "Carnot: η = 1 − TL/TH. Refrigeração: COP = TL/(TH − TL). Bomba de calor: COP + 1. Sempre em kelvin.",
    "Título: x = (v − vf)/vfg, e a mesma regra vale para u, h e s.",
    "Válvula é isentálpica; bocal converte entalpia em energia cinética; turbina e compressor trocam Δh por trabalho."],
  exemplos:[
    { titulo:"Máquina térmica — rendimento máximo",
      enunciado:"Uma máquina opera entre 727 °C e 27 °C. Qual o rendimento máximo?",
      solucao:"TH = 1.000 K e TL = 300 K (converter sempre!).\nη = 1 − 300/1.000 = 0,70 → 70%.\nO erro clássico é usar Celsius e chegar a 96%." },
    { titulo:"Bocal adiabático",
      enunciado:"Vapor entra com h = 3.000 kJ/kg a 200 m/s e sai com h = 2.800 kJ/kg. Velocidade de saída?",
      solucao:"h₁ + V₁²/2 = h₂ + V₂²/2\nV₂² = 200² + 2×200.000 = 440.000\nV₂ ≈ 663 m/s.\nAtenção: 200 kJ/kg = 200.000 J/kg." }]
},

{ tema:"mecflu",
  sintese:"Divide-se em hidrostática (fluido parado), dinâmica (Bernoulli + continuidade) e escoamento em tubulações (perda de carga). O número de Reynolds decide o regime e, com ele, como calcular o atrito.",
  chaves:[
    "Hidrostática: p = γ·h. Força em superfície plana: F = γ·h_cg·A, aplicada abaixo do centroide.",
    "Continuidade: A₁V₁ = A₂V₂ — a velocidade varia com o quadrado da razão de diâmetros.",
    "Bernoulli: p/γ + V²/2g + z = constante, mais perdas e máquinas.",
    "Re = VD/ν. Em tubos: laminar < 2.000; turbulento > 4.000. Laminar → f = 64/Re.",
    "Darcy: h_L = f·(L/D)·V²/2g. Perda localizada: h = K·V²/2g.",
    "Potência: P = γ·Q·H/η. Com vazão fixa, h_L varia com 1/D⁵."],
  exemplos:[
    { titulo:"Perda de carga distribuída",
      enunciado:"Água a 2 m/s, tubo de 100 mm e 200 m, f = 0,020, g = 10 m/s². Perda?",
      solucao:"h_L = 0,020 × (200/0,1) × (2²/20)\nh_L = 0,020 × 2.000 × 0,20 = 8,0 m." },
    { titulo:"Potência de bombeamento",
      enunciado:"Q = 50 L/s, H = 40 m, η = 75%, γ = 10.000 N/m³. Potência de eixo?",
      solucao:"P_hidráulica = 10.000 × 0,05 × 40 = 20.000 W\nP_eixo = 20.000/0,75 ≈ 26,7 kW.\nO rendimento divide, nunca multiplica." }]
},

{ tema:"transcal",
  sintese:"Três mecanismos: condução (Fourier), convecção (Newton) e radiação (Stefan-Boltzmann). O truque é montar o circuito de resistências térmicas em série e identificar qual delas domina — é nela que se deve agir.",
  chaves:[
    "Condução plana: R = L/(kA). Cilíndrica: R = ln(r₂/r₁)/(2πkL). Convecção: R = 1/(hA).",
    "Q = ΔT/ΣR. A maior queda de temperatura ocorre na maior resistência.",
    "Raio crítico: r_cr = k/h. Abaixo dele, isolar aumenta a perda.",
    "Radiação varia com T⁴, sempre em kelvin. σ = 5,67×10⁻⁸ W/m²K⁴.",
    "Trocador: Q = U·A·F·MLDT, com MLDT = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂).",
    "Contracorrente dá MLDT maior e permite o frio sair mais quente que o quente."],
  exemplos:[
    { titulo:"Parede composta",
      enunciado:"0,20 m de tijolo (k = 0,80) + 0,040 m de isolante (k = 0,040); de 100 °C a 20 °C. Fluxo?",
      solucao:"R₁ = 0,25 e R₂ = 1,00 m²K/W → ΣR = 1,25\nq = 80/1,25 = 64 W/m².\nInterface: 100 − 64×0,25 = 84 °C." },
    { titulo:"MLDT em contracorrente",
      enunciado:"Quente 100→60 °C; frio 20→50 °C. MLDT?",
      solucao:"ΔT₁ = 100−50 = 50; ΔT₂ = 60−20 = 40\nMLDT = 10/ln(1,25) ≈ 44,8 °C.\nSempre menor que a média aritmética (45)." }]
},

{ tema:"resmat",
  sintese:"Quatro solicitações básicas — tração, flexão, torção e cisalhamento — e a combinação delas. Para vigas, monte os diagramas de cortante e momento; para eixos, combine flexão e torção; para colunas, verifique flambagem.",
  chaves:[
    "σ = N/A; δ = NL/EA; σ = M/W; τ = 16T/πd³ (circular maciça).",
    "Retângulo: I = bh³/12, W = bh²/6. Círculo: I = πd⁴/64, J = πd⁴/32.",
    "Viga biapoiada com q: M_max = qL²/8 e V = qL/2. Balanço com P: M = PL.",
    "Momento é máximo onde o cortante se anula.",
    "Mohr: centro = (σx+σy)/2, raio = √[((σx−σy)/2)² + τxy²]. von Mises < Tresca.",
    "Euler: Pcr = π²EI/(KL)². K = 1 bi-rotulada, 2 engastada-livre, 0,5 biengastada, 0,7 engastada-rotulada.",
    "Vaso cilíndrico: σ_circ = pD/2t é o dobro de σ_long = pD/4t."],
  exemplos:[
    { titulo:"Viga biapoiada",
      enunciado:"Vão de 6,0 m com q = 10 kN/m. Momento e cortante máximos?",
      solucao:"V_max = qL/2 = 30 kN (nos apoios)\nM_max = qL²/8 = 10×36/8 = 45 kN·m (no meio)." },
    { titulo:"Eixo sob flexão e torção",
      enunciado:"M = 300 N·m, T = 400 N·m, σ_adm = 80 MPa. Diâmetro por Tresca?",
      solucao:"Me = √(M² + T²) = 500 N·m\nd³ = 32×500.000/(π×80) = 63.662 mm³\nd ≈ 40 mm." }]
},

{ tema:"elemmaq",
  sintese:"Eixos, engrenagens, mancais e fadiga. Em prova, predominam relação de transmissão, vida de rolamento e critérios de fadiga. Lembre que quase tudo aqui tem dependência não linear: vida com o cubo da carga, rigidez de mola com d⁴.",
  chaves:[
    "i = z₂/z₁ = d₂/d₁; d = m·z; Ft = 2T/d; Fr = Ft·tg φ.",
    "Rolamento: L10 = (C/P)^a, com a = 3 (esferas) e 10/3 (rolos). Dobrar a carga corta a vida a 1/8.",
    "Fadiga: Se' ≈ 0,5·Sut. σa = (σmax−σmin)/2 e σm = (σmax+σmin)/2.",
    "Goodman: σa/Se + σm/Sut = 1/n. Soderberg usa Sy e é mais conservador.",
    "Kf = 1 + q(Kt − 1). Fadiga começa na superfície, em um concentrador.",
    "Mola: k = Gd⁴/(8D³N). Correia: P = (F1 − F2)·v."],
  exemplos:[
    { titulo:"Vida de rolamento",
      enunciado:"C = 50 kN, P = 5 kN, esferas, 1.500 rpm. Vida em horas?",
      solucao:"L10 = (50/5)³ = 1.000 milhões de rotações\nL10h = (10⁶/(60×1.500)) × 1.000 ≈ 11.111 h." },
    { titulo:"Coeficiente de segurança em fadiga",
      enunciado:"σa = 100, σm = 200, Se = 300, Sut = 600 MPa. Goodman?",
      solucao:"100/300 + 200/600 = 0,667 = 1/n\nn = 1,50." }]
},

{ tema:"dinamica",
  sintese:"Escolha o método pelo que o problema fornece: força e deslocamento → trabalho-energia; força e tempo → impulso-quantidade de movimento; aceleração instantânea → Newton. Em corpo rígido, o momento de inércia é o dado decisivo.",
  chaves:[
    "ΣF = ma e ΣM_G = I_G·α. Energia: ½mv² + ½I_G·ω².",
    "Momentos de inércia: disco ½mR²; anel mR²; esfera 2/5 mR²; barra mL²/12 (centro) e mL²/3 (extremo).",
    "Eixos paralelos: I = I_cg + md².",
    "Rolamento sem escorregar: v = ωR; o ponto de contato tem velocidade nula.",
    "Colisão: quantidade de movimento sempre se conserva; energia só se e = 1.",
    "Curva: a_n = v²/R; atrito máximo dá v_max = √(μgR)."],
  exemplos:[
    { titulo:"Barra girando em torno de um pino",
      enunciado:"Barra de 1,5 m solta da horizontal. ω ao passar pela vertical?",
      solucao:"mg(L/2) = ½(mL²/3)ω²\nω = √(3g/L) = √(30/1,5) = √20 ≈ 4,47 rad/s.\nA massa se cancela." },
    { titulo:"Colisão perfeitamente inelástica",
      enunciado:"2 kg a 6 m/s atinge 4 kg parado. Velocidade final e energia perdida?",
      solucao:"v = 12/6 = 2 m/s\nAntes 36 J, depois 12 J → 24 J dissipados." }]
},

{ tema:"vibracoes",
  sintese:"Comece sempre por ωn = √(k/m) e pela razão r = ω/ωn. Com r perto de 1 há ressonância; para isolar vibração é indispensável r > √2. O amortecimento importa muito na ressonância e atrapalha na região de isolamento.",
  chaves:[
    "ωn = √(k/m) = √(g/δ_estático). fn = ωn/2π. Molas: paralelo soma k; série soma 1/k.",
    "cc = 2√(km); ζ = c/cc; ωd = ωn√(1−ζ²).",
    "Na ressonância, amplificação = 1/(2ζ).",
    "Transmissibilidade < 1 apenas para r > √2. Quanto mais mole o isolador, melhor.",
    "Desbalanceamento gera força m·e·ω² e aparece em 1× a rotação; desalinhamento em 2×, com axial alta.",
    "Absorvedor dinâmico é sintonizado pela frequência de excitação: k₂ = m₂·ω²."],
  exemplos:[
    { titulo:"Frequência natural pela deflexão estática",
      enunciado:"Isoladores defletem 1,0 mm sob o peso da máquina. fn?",
      solucao:"ωn = √(9,81/0,001) = 99 rad/s\nfn = 99/2π ≈ 15,8 Hz.\nRegra prática: fn ≈ 15,8/√δ(mm)." },
    { titulo:"Isolamento",
      enunciado:"r = 3,0, sem amortecimento. Transmissibilidade?",
      solucao:"TR = 1/|1 − 9| = 0,125 → 87,5% de isolamento." }]
},

{ tema:"maqfluxo",
  sintese:"Bombas e compressores são o coração da prova da Transpetro. Domine curva H×Q, ponto de operação, leis de semelhança e NPSH. Para compressores, saiba distinguir alternativo de centrífugo e o que é surge.",
  chaves:[
    "Ponto de operação = interseção da curva da bomba com a do sistema (H_est + K·Q²).",
    "Semelhança: Q ∝ n; H ∝ n²; P ∝ n³. Reduzir 20% da rotação corta ~50% da potência.",
    "NPSHd = (p − pv)/γ ± z − h_perdas. Precisa ser maior que o NPSHr, com margem.",
    "Série soma alturas; paralelo soma vazões (mas menos que o dobro na prática).",
    "Deslocamento positivo: vazão fixa, exige válvula de alívio. Centrífuga: vazão depende da pressão.",
    "Surge = vazão baixa demais em compressor centrífugo; stonewall = vazão alta com bloqueio sônico.",
    "Brayton tem BWR de 40-60%; Rankine, de 1-3%."],
  exemplos:[
    { titulo:"Ponto de operação",
      enunciado:"Bomba H = 50 − 0,002Q²; sistema H = 20 + 0,003Q². Qual o ponto?",
      solucao:"50 − 0,002Q² = 20 + 0,003Q² → Q² = 6.000\nQ ≈ 77,5 m³/h e H = 38,0 m." },
    { titulo:"NPSH disponível",
      enunciado:"p_atm = 100 kPa, pv = 4 kPa, γ = 10 kN/m³, bomba 3 m acima do nível, perdas 1,2 m.",
      solucao:"NPSHd = (100−4)/10 − 3,0 − 1,2 = 9,6 − 4,2 = 5,4 m.\nComparar com o NPSHr do fabricante." }]
},

{ tema:"mci",
  sintese:"Comece pelos parâmetros geométricos (cilindrada, taxa de compressão) e depois pelos de desempenho (pme, torque, potência, consumo específico). Otto e Diesel diferem na forma de admitir e inflamar a mistura.",
  chaves:[
    "Vu = (πD²/4)·S; rv = (Vu + Vc)/Vc.",
    "Otto: η = 1 − 1/rv^(k−1). Diesel: mesmo termo × [(rc^k − 1)/(k(rc−1))], sempre > 1.",
    "Para o MESMO rv, o Otto é mais eficiente. O Diesel vence porque usa rv muito maior.",
    "P = pme·V·n/x, com x = 2 (quatro tempos) e 1 (dois tempos). T = 9.550·P/n.",
    "η = 3.600/(Ce·PCI), com Ce em kg/kWh.",
    "Octanagem resiste à detonação (Otto); cetanagem facilita a autoignição (Diesel).",
    "λ = AFR_real/AFR_esteq. λ > 1 é mistura pobre."],
  exemplos:[
    { titulo:"Rendimento do ciclo Otto",
      enunciado:"rv = 8, k = 1,4. Rendimento teórico?",
      solucao:"η = 1 − 1/8^0,4 = 1 − 1/2,297\nη = 1 − 0,435 = 56,5%." },
    { titulo:"Potência pela pme",
      enunciado:"4 tempos, 2,0 L, 3.000 rpm, pme = 800 kPa.",
      solucao:"P = 800 × 0,002 × (50/2) = 40 kW.\nn em rps e x = 2." }]
},

{ tema:"ciclospot",
  sintese:"Rankine (vapor) e Brayton (gás). Em ambos, o rendimento é (trabalho líquido)/(calor fornecido). Reaquecimento, regeneração e ciclo combinado são recursos para elevar a temperatura média de fornecimento de calor.",
  chaves:[
    "Rankine: η = [(h3−h4) − (h2−h1)]/(h3 − h2). Trabalho da bomba: w = v·Δp, quase desprezível.",
    "Reaquecimento eleva o título na saída da turbina (limite prático de 88-90%).",
    "Regeneração pré-aquece a água com vapor extraído, elevando a T média na caldeira.",
    "Brayton ideal: η = 1 − 1/rp^((k−1)/k).",
    "Ciclo combinado: η = ηB + ηR − ηB·ηR.",
    "Cogeração usa fator de utilização: FU = (W + Q_útil)/Q_entrada.",
    "Carnot não é referência prática porque exigiria comprimir mistura bifásica."],
  exemplos:[
    { titulo:"Rendimento do Rankine",
      enunciado:"h3 = 3.400; h4 = 2.200; h1 = 200; w_bomba = 8 kJ/kg.",
      solucao:"h2 = 208; w_liq = 1.200 − 8 = 1.192\nq = 3.400 − 208 = 3.192\nη = 1.192/3.192 ≈ 37,3%." },
    { titulo:"Ciclo combinado",
      enunciado:"Turbina a gás 35% e ciclo a vapor 30% sobre o rejeito.",
      solucao:"η = 0,35 + 0,30 − 0,105 = 54,5%.\nNão somar direto (65%)." }]
},

{ tema:"corrosao",
  sintese:"Quase tudo é corrosão eletroquímica: exige ânodo, cátodo, eletrólito e ligação elétrica. Saiba identificar o TIPO pelo aspecto descrito e associe cada um à sua causa e ao seu controle.",
  chaves:[
    "O metal se corrói no ÂNODO, onde ocorre a oxidação.",
    "Galvânica: metal menos nobre vira ânodo. Área anódica pequena com catódica grande é o pior caso.",
    "Pites: cloretos rompem a passivação; perfura sem perda de massa. PREN = %Cr + 3,3%Mo + 16%N.",
    "Intergranular: sensitização entre 425 e 815 °C. Solução: 304L/316L ou estabilizados (321/347).",
    "CST exige tração + meio específico + material suscetível. Austenítico + cloreto é o par clássico.",
    "Proteção catódica: −0,85 V (Cu/CuSO₄). Anodo de sacrifício (Mg, Zn, Al) ou corrente impressa.",
    "H₂S úmido: NACE MR0175, dureza limitada a 22 HRC.",
    "CUI é mais severa entre 50 e 175 °C."],
  exemplos:[
    { titulo:"Taxa de corrosão e vida remanescente",
      enunciado:"Espessura inicial 12,7 mm; após 10 anos 9,5 mm; mínima requerida 6,0 mm.",
      solucao:"Taxa = (12,7−9,5)/10 = 0,32 mm/ano\nVida = (9,5−6,0)/0,32 ≈ 10,9 anos.\nUsar a espessura ATUAL, não a inicial." },
    { titulo:"Par galvânico",
      enunciado:"Tubo de aço-carbono ligado a válvula de bronze em água do mar. Quem corrói?",
      solucao:"O aço, por ser menos nobre — vira ânodo.\nSolução: junta isolante entre os dois." }]
},

{ tema:"selmat",
  sintese:"Selecionar material é conciliar resistência mecânica, resistência ao meio, temperatura, soldabilidade e custo. Decore as especificações mais citadas e a que serviço cada família atende.",
  chaves:[
    "A106 = aço-carbono sem costura, alta temperatura. A335 = Cr-Mo, fluência. A312 = inox. A333 = baixa temperatura.",
    "Austeníticos (304/316): não magnéticos, boa soldabilidade, sofrem CST por cloretos.",
    "Duplex: o dobro da resistência mecânica e ótimo em cloretos; exige controle de aporte térmico.",
    "Criogenia exige estrutura CFC (austenítico, alumínio) ou 9% Ni — nunca aço-carbono comum.",
    "Inconel: alta temperatura. Monel: água do mar e HF. Hastelloy: ácidos redutores.",
    "Ferro nodular tem grafita esferoidal e é dúctil; o cinzento é frágil em tração.",
    "PTFE: inércia química, mas sofre creep. NBR para óleo; EPDM para vapor (não para óleo)."],
  exemplos:[
    { titulo:"Serviço criogênico",
      enunciado:"Qual material NÃO serve para GNL a −162 °C?",
      solucao:"Aço-carbono comum: estrutura CCC, sofre transição dúctil-frágil.\nServem: 304/316L, alumínio, 9% Ni." },
    { titulo:"Serviço ácido (H₂S)",
      enunciado:"Requisito adicional na especificação?",
      solucao:"Limitar dureza a 22 HRC, controlar carbono equivalente e fazer alívio de tensões (NACE MR0175)." }]
},

{ tema:"metalurgia",
  sintese:"Estrutura cristalina → diagrama Fe-C → tratamento térmico → propriedade final. Se você souber ler o diagrama e associar cada tratamento à microestrutura que produz, a maior parte das questões se resolve.",
  chaves:[
    "CCC: 2 átomos, FE 0,68 (ferrita). CFC: 4 átomos, FE 0,74, muito dúctil (austenita).",
    "Eutetóide: 727 °C e 0,77% C. Eutético: 1.147 °C e 4,3% C. Cementita: 6,67% C.",
    "Regra da alavanca com os segmentos OPOSTOS à fase procurada.",
    "Têmpera → martensita (TCC, adifusional, dura e frágil). Revenido devolve tenacidade.",
    "Recozimento amolece; normalização refina o grão; cementação e nitretação endurecem a superfície.",
    "Refino de grão (Hall-Petch) é o único mecanismo que aumenta resistência E tenacidade.",
    "Metais CCC têm transição dúctil-frágil; CFC não têm."],
  exemplos:[
    { titulo:"Regra da alavanca",
      enunciado:"Aço 0,40% C logo abaixo de 727 °C. Fração de perlita?",
      solucao:"%perlita = (0,40 − 0,022)/(0,77 − 0,022) = 0,378/0,748 ≈ 51%\nFerrita proeutetóide ≈ 49%." },
    { titulo:"Sensitização",
      enunciado:"Inox 304 soldado trinca perto do cordão. Causa?",
      solucao:"Precipitação de Cr₂₃C₆ nos contornos entre 425 e 815 °C, empobrecendo o cromo local.\nSolução: 304L ou 321/347." }]
},

{ tema:"fabricacao",
  sintese:"Duas frentes: conformação (laminação, forjamento, extrusão, trefilação, estampagem) e usinagem (torneamento, fresamento, furação, retífica). Nas contas, o núcleo é Vc = πDn/1000 e o tempo de corte.",
  chaves:[
    "Vc = π·D·n/1.000 (D em mm, Vc em m/min). Tempo: t = L/(f·n).",
    "Taylor: V·T^n = C. Velocidade alta destrói a vida da ferramenta muito mais que avanço ou profundidade.",
    "A quente: menos força, sem encruamento, pior acabamento. A frio: precisão e encruamento.",
    "Trefilação é sempre a frio e por tração; extrusão é por compressão.",
    "Ordem de dureza a quente: aço rápido < metal duro < cerâmica < CBN/diamante (tenacidade é o inverso).",
    "Diamante não usina aço (difusão do carbono no ferro).",
    "Ra é a média aritmética dos desvios. No torneamento, Ra ≈ f²/(8·rε)."],
  exemplos:[
    { titulo:"Rotação a partir da velocidade de corte",
      enunciado:"D = 60 mm, Vc = 120 m/min. Rotação?",
      solucao:"n = 1.000×120/(π×60) = 120.000/188,5 ≈ 637 rpm." },
    { titulo:"Vida da ferramenta",
      enunciado:"V·T^0,25 = 200. Para V = 100 m/min, qual T?",
      solucao:"T^0,25 = 2 → T = 16 min.\nDobrar V reduziria a vida a 1/16." }]
},

{ tema:"soldagem",
  sintese:"Duas metades: metalurgia da solda (ciclo térmico, ZTA, trincas) e processos (eletrodo revestido, TIG, MIG/MAG, arco submerso). As trincas são o assunto mais cobrado — saiba distinguir a quente, a frio e lamelar.",
  chaves:[
    "Aporte: H = V·I·60/(v·1.000) kJ/mm. Alto aporte alarga a ZTA e engrossa o grão.",
    "Trinca a FRIO: hidrogênio + martensita + tensão de tração, abaixo de 200 °C, retardada.",
    "Trinca a QUENTE: S e P formando filme líquido na solidificação.",
    "Decoesão LAMELAR: trincas em degraus, paralelas à chapa, por tensão na espessura.",
    "CE (IIW) = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15. Acima de 0,40 → pré-aquecer.",
    "E7018: 70 ksi, todas as posições, básico de baixo hidrogênio (exige estufa).",
    "TIG: eletrodo não consumível, máxima qualidade, baixa deposição. SAW: fluxo granular, alta deposição, só plana/horizontal.",
    "Oxicorte só funciona em aço-carbono; inox e alumínio exigem plasma."],
  exemplos:[
    { titulo:"Aporte térmico",
      enunciado:"25 V, 200 A, 300 mm/min. Aporte?",
      solucao:"H = (25×200×60)/(300×1.000) = 1,0 kJ/mm." },
    { titulo:"Carbono equivalente",
      enunciado:"C = 0,20; Mn = 1,20; Cr = 0,10; Ni = 0,20; Cu = 0,10.",
      solucao:"CE = 0,20 + 0,20 + 0,02 + 0,02 = 0,44\nAcima de 0,40 → pré-aquecimento recomendado." }]
},

{ tema:"estatistica",
  sintese:"Estatística descritiva, distribuições (normal, binomial, Poisson) e confiabilidade. Em engenharia, a aplicação mais cobrada é confiabilidade de sistemas em série e paralelo.",
  chaves:[
    "s² = Σ(x − x̄)²/(n−1) para amostra; /n para população. CV = s/x̄.",
    "Normal: 68% em ±1σ, 95% em ±2σ, 99,7% em ±3σ. z = (x − μ)/σ.",
    "Binomial: P = C(n,k)p^k(1−p)^(n−k). Poisson: P = e^(−λ)λ^k/k!, com média = variância = λ.",
    "Série: R = ΠRi (menor que o pior). Paralelo: R = 1 − Π(1−Ri) (maior que o melhor).",
    "Exponencial: R(t) = e^(−λt); MTBF = 1/λ. No próprio MTBF, R ≈ 37%.",
    "Cp usa só a dispersão; Cpk incorpora o descentramento e é sempre ≤ Cp.",
    "Weibull: β < 1 mortalidade infantil; β = 1 taxa constante; β > 1 desgaste."],
  exemplos:[
    { titulo:"Confiabilidade de sistema",
      enunciado:"Dois equipamentos com R = 0,90 e 0,80. Série e paralelo?",
      solucao:"Série: 0,90×0,80 = 0,72\nParalelo: 1 − (0,10×0,20) = 0,98." },
    { titulo:"Capacidade de processo",
      enunciado:"Especificação 10,00 ± 0,30; μ = 10,10; σ = 0,10.",
      solucao:"Cp = 0,60/0,60 = 1,00\nCpk = min(0,20; 0,40)/0,30 = 0,67 → processo descentrado." }]
},

{ tema:"eletrotecnica",
  sintese:"O foco é o motor de indução trifásico: rotação síncrona, escorregamento, conjugado e formas de partida. Some a isso potência trifásica e correção de fator de potência.",
  chaves:[
    "ns = 120f/p. Em 60 Hz: 2 polos = 3.600; 4 polos = 1.800; 6 polos = 1.200 rpm.",
    "s = (ns − n)/ns, tipicamente 1 a 5% em carga nominal.",
    "P = √3·V·I·cos φ. T = 9.550·P[kW]/n[rpm].",
    "Partida Y-Δ reduz corrente E conjugado a 1/3 — só serve para carga leve.",
    "Inversor mantém V/f constante para preservar o fluxo e o conjugado.",
    "Correção do FP: Qc = P(tg φ1 − tg φ2). Limite regulatório: 0,92.",
    "Área classificada exige motor certificado (Ex d, Ex e) compatível com zona, grupo e classe de temperatura."],
  exemplos:[
    { titulo:"Escorregamento",
      enunciado:"Motor de 4 polos, 60 Hz, girando a 1.750 rpm.",
      solucao:"ns = 1.800 rpm\ns = (1.800−1.750)/1.800 = 2,78%." },
    { titulo:"Correção de fator de potência",
      enunciado:"P = 100 kW, de 0,70 para 0,95 (tg: 1,020 e 0,329).",
      solucao:"Qc = 100 × (1,020 − 0,329) ≈ 69 kvar." }]
},

{ tema:"seguranca",
  sintese:"Normas regulamentadoras e meio ambiente. Decore números, percentuais e limites — é o tipo de questão em que a banca cobra o dado exato.",
  chaves:[
    "NR-6: EPI gratuito, com CA, e só quando o EPC não bastar. Hierarquia: eliminar > substituir > EPC > administrativo > EPI.",
    "NR-9: riscos ambientais são físicos, químicos e biológicos (não inclui ergonômico nem acidente). PPRA foi substituído pelo PGR (NR-1).",
    "PGR = inventário de riscos + plano de ação.",
    "NR-12: proteções fixas e móveis intertravadas; parada de emergência não pode religar sozinha.",
    "NR-16: periculosidade = 30% do salário-base. NR-15: insalubridade = 10/20/40% do salário mínimo. Não acumulam.",
    "NR-33: oxigênio entre 19,5% e 23,0%; exige PET e vigia externo.",
    "NR-35: altura acima de 2,00 m. NR-15 ruído: 85 dB(A) para 8 h.",
    "Licenciamento: LP (viabilidade) → LI (construção) → LO (operação).",
    "PNRS: não geração > redução > reutilização > reciclagem > tratamento > disposição final."],
  exemplos:[
    { titulo:"Adicionais",
      enunciado:"Diferença entre periculosidade e insalubridade?",
      solucao:"Periculosidade: 30% sobre o salário-base (NR-16).\nInsalubridade: 10, 20 ou 40% sobre o salário mínimo (NR-15).\nNão são acumuláveis — o trabalhador opta." },
    { titulo:"Espaço confinado",
      enunciado:"Faixa aceitável de oxigênio para entrada?",
      solucao:"19,5% a 23,0%. Abaixo é deficiente; acima é enriquecida e aumenta muito o risco de incêndio." }]
},

{ tema:"portugues",
  sintese:"Dez questões. O peso maior está em compreensão de texto, crase, concordância, regência e pontuação. Nas questões de interpretação, a alternativa correta reproduz o movimento argumentativo do texto, não um detalhe isolado.",
  chaves:[
    "Crase: nunca antes de verbo, palavra masculina, pronome pessoal ou plural indefinido. Sempre em 'à medida que' e antes de 'àquele'.",
    "Facultativa antes de nome próprio feminino, possessivo feminino e depois de 'até'.",
    "Haver (existir) e fazer (tempo) são impessoais: sempre no singular. Existir concorda normalmente.",
    "Regência: assistir AO filme; aspirar AO cargo; preferir A (nunca 'do que'); implicar (sem 'em'); obedecer A.",
    "Próclise obrigatória com palavra negativa, advérbio, pronome relativo/indefinido e conjunção subordinativa.",
    "Vírgula nunca separa sujeito de predicado. Adjetiva explicativa entre vírgulas; restritiva sem.",
    "Futuro do subjuntivo vem do pretérito perfeito: ver → vir; pôr → puser; intervir → intervier."],
  exemplos:[
    { titulo:"Crase",
      enunciado:"Por que 'à medida que' leva crase e 'a granel' não?",
      solucao:"'À medida que' é locução proporcional feminina, com artigo.\n'A granel' tem palavra masculina — locução adverbial masculina não recebe crase." },
    { titulo:"Concordância",
      enunciado:"'Fazem cinco anos' ou 'Faz cinco anos'?",
      solucao:"'Faz cinco anos'. O verbo fazer indicando tempo decorrido é impessoal e fica no singular." }]
},

{ tema:"ingles",
  sintese:"Dez questões, quase todas de compreensão de texto técnico. Não é preciso traduzir tudo: localize o trecho referido pelo enunciado e compare com as alternativas. Atenção aos falsos cognatos e aos conectores.",
  chaves:[
    "Conectores de contraste: however, nevertheless, yet, although, whereas, despite/in spite of (+ substantivo ou -ing).",
    "Falsos cognatos: eventually = finalmente; actually = na verdade; comprehensive = abrangente; pretend = fingir.",
    "Modais: must = obrigação; should = recomendação; may = permissão. Em normas, shall = obrigação.",
    "mustn't = proibição × don't have to = não é necessário.",
    "Since/for + present perfect. Past simple com marcador de tempo definido.",
    "Vocabulário técnico: bearing (mancal), shaft (eixo), gasket (junta), gauge (manômetro), impeller (rotor), shutdown (parada), overhaul (revisão geral)."],
  exemplos:[
    { titulo:"Falso cognato",
      enunciado:"'The manager will eventually approve the procedure.'",
      solucao:"eventually = finalmente, com o tempo — NÃO 'eventualmente'.\n'Eventualmente' seria occasionally." },
    { titulo:"Leitura de norma",
      enunciado:"'Entry is prohibited unless oxygen is between 19.5% and 23.0%.'",
      solucao:"unless = a menos que → a entrada só é permitida SE o oxigênio estiver nessa faixa." }]
}

];
