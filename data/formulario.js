window.FORMULARIO = [
  {
    titulo: "1. Termodinâmica",
    itens: [
      { nome: "1ª Lei — sistema fechado", formula: "ΔU = Q − W        (Q entra +, W sai +)" },
      { nome: "1ª Lei — volume de controle, regime permanente", formula: "Q̇ − Ẇ = ṁ·[(h₂−h₁) + (V₂²−V₁²)/2 + g(z₂−z₁)]" },
      { nome: "Gás ideal", formula: "p·V = m·R·T        R = R̄/M = 8,314/M  [kJ/kg·K]", obs: "Ar: R = 0,287 kJ/kg·K; cp = 1,005; cv = 0,718; k = 1,4" },
      { nome: "Calores específicos", formula: "cp − cv = R        k = cp/cv" },
      { nome: "Processo politrópico", formula: "p·Vⁿ = cte        W = (p₂V₂ − p₁V₁)/(1 − n)", obs: "n = 0 isobárico · n = 1 isotérmico · n = k isentrópico · n → ∞ isocórico" },
      { nome: "Relações isentrópicas (gás ideal)", formula: "T₂/T₁ = (p₂/p₁)^((k−1)/k) = (V₁/V₂)^(k−1)" },
      { nome: "Trabalho isotérmico (gás ideal)", formula: "W = m·R·T·ln(V₂/V₁) = m·R·T·ln(p₁/p₂)" },
      { nome: "Título de vapor", formula: "x = m_vapor/m_total        v = vf + x·vfg        h = hf + x·hfg" },
      { nome: "Rendimento de Carnot", formula: "η_Carnot = 1 − T_frio/T_quente        [T em kelvin]" },
      { nome: "COP refrigeração / bomba de calor", formula: "COP_R = QL/W = TL/(TH−TL)        COP_BC = QH/W = COP_R + 1" },
      { nome: "Variação de entropia (gás ideal)", formula: "Δs = cp·ln(T₂/T₁) − R·ln(p₂/p₁) = cv·ln(T₂/T₁) + R·ln(v₂/v₁)" },
      { nome: "Desigualdade de Clausius", formula: "∮ δQ/T ≤ 0        S_ger ≥ 0" },
      { nome: "Exergia de fluxo", formula: "ψ = (h − h₀) − T₀(s − s₀) + V²/2 + g·z" }
    ]
  },
  {
    titulo: "2. Mecânica dos Fluidos",
    itens: [
      { nome: "Pressão hidrostática", formula: "p = p₀ + ρ·g·h        γ = ρ·g" },
      { nome: "Manômetro em U", formula: "p_A + Σ(γ·h ↓) − Σ(γ·h ↑) = p_B" },
      { nome: "Força em superfície plana submersa", formula: "F = γ·h_cg·A        y_cp = y_cg + I_cg/(y_cg·A)" },
      { nome: "Empuxo (Arquimedes)", formula: "E = γ_fluido · V_deslocado" },
      { nome: "Altura metacêntrica", formula: "GM = I/V − BG        estável se GM > 0" },
      { nome: "Lei de Newton da viscosidade", formula: "τ = μ·(du/dy)        ν = μ/ρ" },
      { nome: "Continuidade", formula: "ṁ = ρ·A·V = cte        Q = A·V" },
      { nome: "Bernoulli com perdas e máquina", formula: "p₁/γ + V₁²/2g + z₁ + H_bomba = p₂/γ + V₂²/2g + z₂ + H_turbina + h_L" },
      { nome: "Reynolds", formula: "Re = ρ·V·D/μ = V·D/ν", obs: "Em tubos: laminar Re < 2000 · transição 2000–4000 · turbulento Re > 4000" },
      { nome: "Darcy-Weisbach", formula: "h_L = f · (L/D) · V²/(2g)" },
      { nome: "Fator de atrito laminar", formula: "f = 64/Re        (Re < 2000)" },
      { nome: "Perda localizada", formula: "h_loc = K · V²/(2g)        ou  L_eq via  h = f·(L_eq/D)·V²/2g" },
      { nome: "Hazen-Williams", formula: "h_L = 10,65 · L · Q^1,85 / (C^1,85 · D^4,87)" },
      { nome: "Potência hidráulica", formula: "P = γ·Q·H / η        [W, com γ em N/m³, Q em m³/s, H em m]" },
      { nome: "Perfil laminar em tubo (Hagen-Poiseuille)", formula: "Q = π·ΔP·D⁴/(128·μ·L)        V_max = 2·V_média" },
      { nome: "Teorema Pi de Buckingham", formula: "nº de grupos adimensionais = n (variáveis) − k (dimensões fundamentais)" },
      { nome: "Adimensionais", formula:"Re = ρVD/μ\nFr = V/√(gL)\nWe = ρV²L/σ\nEu = Δp/(ρV²)\nMa = V/c" },
      { nome: "Velocidade do som / bocal", formula: "c = √(k·R·T)        Ma = V/c", obs: "Ma < 1 subsônico · Ma = 1 na garganta (bloqueio) · convergente-divergente para Ma > 1" },
      { nome: "Escoamento compressível isentrópico", formula: "T₀/T = 1 + ((k−1)/2)·Ma²        p*/p₀ = (2/(k+1))^(k/(k−1)) ≈ 0,528 para k=1,4" }
    ]
  },
  {
    titulo: "3. Transmissão de Calor",
    itens: [
      { nome: "Condução (Fourier)", formula: "q = −k·A·dT/dx        Q = k·A·ΔT/L" },
      { nome: "Resistências térmicas", formula:"R_plana = L/(k·A)\nR_cil = ln(r₂/r₁)/(2πkL)\nR_conv = 1/(h·A)" },
      { nome: "Parede composta", formula: "Q = ΔT_total / ΣR" },
      { nome: "Raio crítico de isolamento", formula: "r_cr = k/h  (cilindro)        r_cr = 2k/h  (esfera)" },
      { nome: "Convecção (Newton)", formula: "Q = h·A·(Ts − T∞)" },
      { nome: "Adimensionais", formula:"Nu = h·L/k\nPr = ν/α = μcp/k\nGr = gβΔTL³/ν²\nRa = Gr·Pr" },
      { nome: "Dittus-Boelter (turbulento em tubo)", formula: "Nu = 0,023·Re^0,8·Pr^n        n = 0,4 aquecendo · 0,3 resfriando" },
      { nome: "Radiação (Stefan-Boltzmann)", formula: "q = ε·σ·A·(T⁴ − T_viz⁴)        σ = 5,67×10⁻⁸ W/m²K⁴" },
      { nome: "Aleta — eficiência", formula: "η_aleta = Q_real/Q_ideal        m = √(hP/kA)" },
      { nome: "Trocador — MLDT", formula: "Q = U·A·F·ΔT_ml        ΔT_ml = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂)" },
      { nome: "Coeficiente global com incrustação", formula: "1/(U·A) = 1/(hi·Ai) + Rf,i/Ai + ln(re/ri)/(2πkL) + Rf,e/Ae + 1/(he·Ae)" },
      { nome: "Método ε-NUT", formula: "NUT = U·A/C_min        ε = Q_real/Q_max        Q_max = C_min·(Tq,e − Tf,e)" },
      { nome: "Número de Biot", formula: "Bi = h·Lc/k        Bi < 0,1 → capacitância global válida" }
    ]
  },
  {
    titulo: "4. Resistência dos Materiais",
    itens: [
      { nome: "Tensão normal e Lei de Hooke", formula: "σ = N/A        ε = δ/L        σ = E·ε        δ = N·L/(E·A)" },
      { nome: "Coeficiente de Poisson", formula: "ν = −ε_transv/ε_long        G = E/[2(1+ν)]" },
      { nome: "Flexão", formula: "σ = M·y/I        σ_max = M/W        W = I/y_max" },
      { nome: "Momentos de inércia", formula:"Retângulo I = b·h³/12\nCírculo I = π·d⁴/64\nJ = π·d⁴/32" },
      { nome: "Teorema dos eixos paralelos", formula: "I = I_cg + A·d²" },
      { nome: "Torção", formula: "τ = T·r/J        φ = T·L/(G·J)        P = T·ω" },
      { nome: "Cisalhamento em viga", formula: "τ = V·Q/(I·b)        τ_max = 1,5·V/A (retângulo) · 4V/3A (círculo)" },
      { nome: "Flechas usuais", formula:"Biapoiada carga central: PL³/48EI\nBiapoiada carga distribuída: 5qL⁴/384EI\nEngastada carga na ponta: PL³/3EI\nEngastada distribuída: qL⁴/8EI" },
      { nome: "Tensões principais (estado plano)", formula: "σ1,2 = (σx+σy)/2 ± √[((σx−σy)/2)² + τxy²]" },
      { nome: "Cisalhamento máximo no plano", formula: "τ_max = √[((σx−σy)/2)² + τxy²]" },
      { nome: "Ângulo das tensões principais", formula: "tg(2θp) = 2τxy/(σx − σy)" },
      { nome: "von Mises (estado plano)", formula: "σ' = √(σ1² − σ1σ2 + σ2²) ≤ σe/n" },
      { nome: "Tresca", formula: "σ1 − σ3 ≤ σe/n        (mais conservador que von Mises)" },
      { nome: "Flambagem de Euler", formula: "Pcr = π²·E·I/(K·L)²        σcr = π²E/λ²        λ = KL/r        r = √(I/A)" },
      { nome: "Coeficiente K de flambagem", formula:"bi-rotulada K=1\nengastada-livre K=2\nbiengastada K=0,5\nengastada-rotulada K=0,7" },
      { nome: "Vaso de pressão de parede fina", formula:"Cilindro: σ_circ = p·D/(2t)\nσ_long = p·D/(4t)        Esfera: σ = p·D/(4t)" },
      { nome: "Roseta 45°", formula:"εx = εa\nεy = εc\nγxy = 2εb − (εa + εc)" },
      { nome: "Extensômetro (strain gage)", formula: "ΔR/R = GF · ε        (ponte de Wheatstone)" },
      { nome: "Dilatação térmica restringida", formula: "σ = E·α·ΔT" }
    ]
  },
  {
    titulo: "5. Elementos de Máquinas",
    itens: [
      { nome: "Relação de transmissão", formula: "i = ω1/ω2 = z2/z1 = d2/d1        T2/T1 = i (ideal)" },
      { nome: "Engrenagem cilíndrica", formula: "m = d/z = p/π        d = m·z        d_ext = m·(z+2)" },
      { nome: "Trem epicicloidal (Willis)", formula: "(ω_sol − ω_braço)/(ω_anel − ω_braço) = −z_anel/z_sol" },
      { nome: "Vida de rolamento", formula: "L10 = (C/P)^a  [10⁶ rotações]        a = 3 esferas · 10/3 rolos" },
      { nome: "Vida em horas", formula: "L10h = (10⁶/(60·n))·(C/P)^a" },
      { nome: "Fadiga — limite de resistência", formula: "Se = ka·kb·kc·kd·ke·Se'        Se' ≈ 0,5·Sut  (aços, Sut ≤ 1400 MPa)" },
      { nome: "Goodman modificado", formula: "σa/Se + σm/Sut = 1/n" },
      { nome: "Soderberg", formula: "σa/Se + σm/Sy = 1/n        (mais conservador)" },
      { nome: "Tensões alternada e média", formula: "σa = (σmax − σmin)/2        σm = (σmax + σmin)/2        R = σmin/σmax" },
      { nome: "Concentração de tensão", formula: "σ_max = Kt·σ_nominal        Kf = 1 + q(Kt − 1)" },
      { nome: "Eixo com flexão e torção (ASME)", formula:"d³ = (16n/π)·√[(M/Sy)² + (T/Sy)²]\nfator conforme critério adotado" },
      { nome: "Chaveta — cisalhamento", formula: "τ = 2T/(d·b·L)        Esmagamento: σ = 4T/(d·h·L)" },
      { nome: "Parafuso — pré-carga", formula:"Fi ≈ 0,75·At·Sp (reaproveitável)\n0,90·At·Sp (uso único)        T ≈ K·Fi·d, K ≈ 0,2" },
      { nome: "Mola helicoidal", formula: "k = G·d⁴/(8·D³·N)        τ = 8·F·D/(π·d³)·Ks" },
      { nome: "Correia — potência", formula: "P = (F1 − F2)·v        F1/F2 = e^(μθ)" }
    ]
  },
  {
    titulo: "6. Dinâmica",
    itens: [
      { nome: "2ª Lei de Newton", formula: "ΣF = m·a        ΣM_G = I_G·α" },
      { nome: "Trabalho e energia", formula: "T1 + U1→2 = T2        T = ½mv² + ½I_G·ω²" },
      { nome: "Energia potencial", formula: "V_g = m·g·h        V_e = ½·k·x²" },
      { nome: "Impulso e quantidade de movimento", formula: "m·v1 + ∫F dt = m·v2        H_G = I_G·ω" },
      { nome: "Coeficiente de restituição", formula: "e = (v'_B − v'_A)/(v_A − v_B)        e = 1 elástico · e = 0 plástico" },
      { nome: "Momentos de inércia de massa", formula:"Disco ½mR²\nAnel mR²\nEsfera 2/5 mR²\nBarra (centro) mL²/12\nBarra (extremo) mL²/3" },
      { nome: "Rolamento sem escorregamento", formula: "v_G = ω·R        a_G = α·R" },
      { nome: "Movimento relativo", formula: "a_B = a_A + a_rel + α×r + ω×(ω×r) + 2ω×v_rel" },
      { nome: "Aceleração normal e tangencial", formula: "a_n = v²/ρ = ω²r        a_t = dv/dt = α·r" }
    ]
  },
  {
    titulo: "7. Vibrações Mecânicas",
    itens: [
      { nome: "Frequência natural", formula: "ωn = √(k/m)  [rad/s]        fn = ωn/2π  [Hz]        ωn = √(g/δst)" },
      { nome: "Molas associadas", formula: "Paralelo: keq = k1 + k2        Série: 1/keq = 1/k1 + 1/k2" },
      { nome: "Amortecimento crítico", formula: "cc = 2·√(k·m) = 2·m·ωn        ζ = c/cc" },
      { nome: "Frequência amortecida", formula: "ωd = ωn·√(1 − ζ²)        subamortecido ζ < 1" },
      { nome: "Decremento logarítmico", formula: "δ = ln(x1/x2) = 2πζ/√(1−ζ²) ≈ 2πζ  (ζ pequeno)" },
      { nome: "Fator de amplificação (magnificação)", formula: "M = 1/√[(1−r²)² + (2ζr)²]        r = ω/ωn" },
      { nome: "Transmissibilidade", formula: "TR = √[1+(2ζr)²] / √[(1−r²)²+(2ζr)²]", obs: "Isolamento só ocorre para r > √2. Abaixo disso, o isolador amplifica." },
      { nome: "Desbalanceamento rotativo", formula: "F = m_e·e·ω²        X = (m_e·e/M)·r²·M(r)" },
      { nome: "Velocidade crítica de eixo", formula: "ω_crítica = ωn = √(k/m)" },
      { nome: "Absorvedor dinâmico", formula: "ω_absorvedor = √(k2/m2) = ω_excitação  → amplitude da massa principal = 0" },
      { nome: "2 GDL", formula: "det([K] − ω²[M]) = 0  →  ω1, ω2 e os modos naturais" },
      { nome: "Transdutores", formula:"Acelerômetro: ωn alta, mede ω << ωn\nSismômetro/velocímetro: ωn baixa, mede ω >> ωn\nProximitor: deslocamento relativo eixo-mancal" }
    ]
  },
  {
    titulo: "8. Máquinas de Fluxo",
    itens: [
      { nome: "Potência hidráulica e de eixo", formula: "P_hidr = ρ·g·Q·H        P_eixo = ρ·g·Q·H/η_total" },
      { nome: "Leis de semelhança (rotação)", formula: "Q2/Q1 = n2/n1        H2/H1 = (n2/n1)²        P2/P1 = (n2/n1)³" },
      { nome: "Leis de semelhança (diâmetro)", formula: "Q ∝ D³        H ∝ D²        P ∝ D⁵" },
      { nome: "NPSH disponível", formula: "NPSHd = (p_atm − p_v)/γ ± z_suc − h_L,suc" },
      { nome: "Critério de cavitação", formula: "NPSHd ≥ NPSHr + margem (usualmente 0,5 m ou 10%)" },
      { nome: "Velocidade específica", formula: "ns = n·√Q/H^0,75", obs: "ns baixo → radial (alta H, baixa Q) · ns alto → axial (baixa H, alta Q)" },
      { nome: "Associação de bombas", formula: "Série: soma as alturas (H)        Paralelo: soma as vazões (Q)" },
      { nome: "Altura de Euler", formula: "H_Euler = (U2·Cu2 − U1·Cu1)/g" },
      { nome: "Compressor — trabalho isentrópico", formula: "w = (k/(k−1))·R·T1·[(p2/p1)^((k−1)/k) − 1]" },
      { nome: "Compressão politrópica em n estágios", formula: "razão ótima por estágio = (p_final/p_inicial)^(1/n)" },
      { nome: "Eficiência isentrópica", formula: "Compressor: ηs = w_s/w_real        Turbina: ηs = w_real/w_s" },
      { nome: "Rendimento volumétrico (alternativo)", formula: "ηv = 1 − c·[(p2/p1)^(1/n) − 1]        c = espaço nocivo" },
      { nome: "Curva do sistema", formula: "H_sist = H_estática + K·Q²        ponto de operação = interseção com a curva da bomba" }
    ]
  },
  {
    titulo: "9. Motores de Combustão Interna",
    itens: [
      { nome: "Cilindrada", formula: "Vu = (π·D²/4)·S        V_total = Vu·z" },
      { nome: "Taxa de compressão", formula: "rv = (Vu + Vc)/Vc        = V_PMI/V_PMS" },
      { nome: "Rendimento do ciclo Otto", formula: "η = 1 − 1/rv^(k−1)" },
      { nome: "Rendimento do ciclo Diesel", formula: "η = 1 − (1/rv^(k−1))·[(rc^k − 1)/(k·(rc − 1))]        rc = razão de corte" },
      { nome: "Pressão média efetiva", formula: "pme = W_ciclo/Vu        P = pme·V_total·n/x", obs: "x = 2 para 4 tempos (n em rps), x = 1 para 2 tempos" },
      { nome: "Potência e torque", formula: "P = T·ω = 2π·n·T        (n em rps)" },
      { nome: "Potências", formula: "P_efetiva = P_indicada − P_atrito        η_mec = P_efetiva/P_indicada" },
      { nome: "Consumo específico", formula: "Ce = ṁ_comb/P  [g/kWh]        η_térmico = 3600/(Ce·PCI)  (Ce em g/kWh, PCI em kJ/g... converter unidades)" },
      { nome: "Rendimento térmico via combustível", formula: "η = P/(ṁ_comb·PCI)" },
      { nome: "Velocidade média do pistão", formula: "Vp = 2·S·n" },
      { nome: "Índices de combustível", formula:"Otto → octanagem (resistência à detonação)\nDiesel → cetanagem (facilidade de autoignição)" },
      { nome: "Lubrificante", formula:"SAE 15W-40: 15W = viscosidade a frio, 40 = a 100 °C\nIV = índice de viscosidade\nAPI CI-4 (diesel) / SN (Otto)" }
    ]
  },
  {
    titulo: "10. Ciclos de Potência",
    itens: [
      { nome: "Rankine — rendimento", formula: "η = (w_turb − w_bomba)/q_caldeira = [(h3−h4) − (h2−h1)]/(h3 − h2)" },
      { nome: "Trabalho da bomba", formula: "w_b = v_f·(p2 − p1)        (líquido incompressível)" },
      { nome: "Consumo específico de vapor", formula: "CEV = 3600/w_liq  [kg/kWh]" },
      { nome: "Brayton — rendimento ideal", formula: "η = 1 − 1/rp^((k−1)/k)        rp = p2/p1" },
      { nome: "Back-work ratio", formula: "BWR = w_compressor/w_turbina", obs: "Alto no Brayton (40–60%), desprezível no Rankine (~1–3%)." },
      { nome: "Razão de pressão de trabalho máximo", formula: "rp_ót = (Tmax/Tmin)^(k/(2(k−1)))" },
      { nome: "Ciclo combinado", formula: "η_comb = η_Brayton + η_Rankine − η_Brayton·η_Rankine" },
      { nome: "Regeneração / reaquecimento", formula:"Reaquecimento: eleva o título na saída da turbina e a T média\nRegeneração: pré-aquece a água, elevando a T média de fornecimento de calor" },
      { nome: "Fator de utilização (cogeração)", formula: "FU = (W_liq + Q_útil)/Q_entrada" }
    ]
  },
  {
    titulo: "16. Estatística e Probabilidade",
    itens: [
      { nome: "Média, variância e desvio", formula: "x̄ = Σxi/n        s² = Σ(xi − x̄)²/(n−1)        s = √s²" },
      { nome: "Coeficiente de variação", formula: "CV = s/x̄ · 100%" },
      { nome: "Distribuição normal", formula:"z = (x − μ)/σ        68% em ±1σ\n95% em ±2σ\n99,7% em ±3σ" },
      { nome: "Binomial", formula: "P(X=k) = C(n,k)·p^k·(1−p)^(n−k)        μ = np        σ² = np(1−p)" },
      { nome: "Poisson", formula: "P(X=k) = e^(−λ)·λ^k/k!        μ = σ² = λ" },
      { nome: "Probabilidade condicional / Bayes", formula: "P(A|B) = P(A∩B)/P(B)        P(A|B) = P(B|A)·P(A)/P(B)" },
      { nome: "Exponencial / confiabilidade", formula: "R(t) = e^(−λt)        MTBF = 1/λ" },
      { nome: "Sistemas", formula: "Série: R = R1·R2·…·Rn        Paralelo: R = 1 − Π(1 − Ri)" },
      { nome: "Intervalo de confiança da média", formula: "IC = x̄ ± z·(σ/√n)        z = 1,96 para 95%" },
      { nome: "Capacidade de processo", formula: "Cp = (LSE − LIE)/(6σ)        Cpk = min[(LSE−μ), (μ−LIE)]/(3σ)" }
    ]
  },
  {
    titulo: "17. Eletrotécnica",
    itens: [
      { nome: "Potência trifásica", formula: "P = √3·V_L·I_L·cos φ        S = √3·V_L·I_L        Q = √3·V_L·I_L·sen φ" },
      { nome: "Rotação síncrona", formula: "ns = 120·f/p        [rpm; p = nº de polos]" },
      { nome: "Escorregamento", formula: "s = (ns − n)/ns        f_rotor = s·f" },
      { nome: "Rendimento do motor", formula: "η = P_eixo/P_elétrica        P_eixo = √3·V·I·cos φ·η" },
      { nome: "Conjugado", formula: "T = 9550·P[kW]/n[rpm]        [N·m]" },
      { nome: "Lei de Faraday", formula: "e = −N·dΦ/dt        e = B·L·v" },
      { nome: "Estrela × triângulo", formula: "Y: V_L = √3·V_F, I_L = I_F        Δ: V_L = V_F, I_L = √3·I_F", obs: "Partida Y-Δ reduz a corrente e o conjugado de partida a 1/3." },
      { nome: "Correção do fator de potência", formula: "Qc = P·(tg φ1 − tg φ2)  [kvar]" }
    ]
  }
];
