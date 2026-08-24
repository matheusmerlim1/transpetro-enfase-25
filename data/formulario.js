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
      { nome: "Exergia de fluxo", formula: "ψ = (h − h₀) − T₀(s − s₀) + V²/2 + g·z" },
      { nome: "Relação pressão-volume no processo isentrópico", formula: "p₂ = p₁·(V₁/V₂)^k = p₁·rv^k" },
      { nome: "Câmara de mistura adiabática", formula: "Σ(ṁ·h)_entra = Σ(ṁ·h)_sai\nΣṁ_entra = Σṁ_sai" },
      { nome: "Carga de tanque rígido evacuado", formula: "u₂ = h_linha  →  T₂ = k·T_linha", obs: "O ar entra carregando entalpia e ela vira energia interna: o tanque aquece sozinho." },
      { nome: "Expansão livre (Joule) de gás ideal", formula: "Q = 0 e W = 0  →  ΔU = 0  →  T₂ = T₁", obs: "A pressão cai na razão dos volumes; a entropia aumenta." },
      { nome: "Exergia destruída (Gouy-Stodola)", formula: "X_destruída = T₀ · S_gerada" },
      { nome: "Compressão em n estágios com inter-resfriamento", formula: "razão por estágio = (p_final/p_inicial)^(1/n)" }
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
      { nome: "Escoamento compressível isentrópico", formula: "T₀/T = 1 + ((k−1)/2)·Ma²        p*/p₀ = (2/(k+1))^(k/(k−1)) ≈ 0,528 para k=1,4" },
      { nome: "Pressão absoluta e manométrica", formula: "p_absoluta = p_manométrica + p_atmosférica" },
      { nome: "Manômetro diferencial (pontos na mesma cota)", formula: "p_A − p_B = (γ_manométrico − γ_linha)·h" },
      { nome: "Corpo flutuando entre dois líquidos", formula: "ρ_corpo = ρ₁·f + ρ₂·(1 − f)", obs: "f é a fração de volume imersa no líquido 1." },
      { nome: "Força em curva de tubulação", formula: "F = p·A + ṁ·V   (em cada direção)\nR = √(Fx² + Fy²)" },
      { nome: "Jato sobre placa", formula: "Placa plana: F = ρ·A·V²\nConcha (180°): F = 2·ρ·A·V²" },
      { nome: "Venturímetro", formula: "V₂ = √[ 2Δp / (ρ·(1 − (A₂/A₁)²)) ]        Q = A₂·V₂" },
      { nome: "Tubo de Pitot", formula: "V = √(2·g·Δh)" },
      { nome: "Camada limite laminar em placa plana", formula: "Re_x = U·x/ν        δ = 5,0·x/√Re_x", obs: "Transição em Re_x ≈ 5×10⁵ — diferente do critério de tubos." },
      { nome: "Semelhança de Froude (superfície livre)", formula: "V_modelo/V_protótipo = √(L_modelo/L_protótipo)" },
      { nome: "Perda de carga × diâmetro (vazão fixa)", formula: "h_L ∝ 1/D⁵" },
      { nome: "Tempo crítico de manobra (golpe de aríete)", formula: "t_crítico = 2·L/c" }
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
      { nome: "Número de Biot", formula: "Bi = h·Lc/k        Bi < 0,1 → capacitância global válida" },
      { nome: "Coeficiente global com convecção nos dois lados", formula: "1/U = 1/h_interno + L/k + 1/h_externo" },
      { nome: "Temperatura em interface de parede composta", formula: "T_interface = T_quente − q·R_primeira camada" },
      { nome: "Radiação entre placas paralelas", formula: "q = σ(T₁⁴ − T₂⁴)/(1/ε₁ + 1/ε₂ − 1)" },
      { nome: "Lei do deslocamento de Wien", formula: "λ_max · T = 2.898 μm·K" },
      { nome: "Constante de tempo (capacitância global)", formula: "τ = ρ·Lc·c/h        (T−T∞)/(Ti−T∞) = e^(−t/τ)" },
      { nome: "Efetividade com Cr = 0 (mudança de fase)", formula: "ε = 1 − e^(−NUT)", obs: "Vale para qualquer arranjo de escoamento." }
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
      { nome: "Dilatação térmica restringida", formula: "σ = E·α·ΔT" },
      { nome: "Momentos e cortantes usuais", formula: "Biapoiada com q: M = qL²/8 e V = qL/2\nBiapoiada com P central: M = PL/4\nBalanço com P na ponta: M = P·L\nBalanço com q: M = qL²/2" },
      { nome: "Viga engastada-apoiada com carga distribuída", formula: "R_apoio = 3qL/8        M_engaste = qL²/8" },
      { nome: "Viga biengastada com carga distribuída", formula: "M_engastes = qL²/12        M_vão = qL²/24" },
      { nome: "Índice de esbeltez limite (validade de Euler)", formula: "λ_limite = π·√(E/σ_escoamento)", obs: "Aço com σe = 250 MPa: λ_lim ≈ 89." },
      { nome: "Flexão composta (carga excêntrica)", formula: "σ = P/A ± P·e/W", obs: "Sem tração se a carga ficar no núcleo central: e ≤ h/6 na seção retangular." },
      { nome: "Barras compostas em paralelo", formula: "Reparte-se a carga na proporção das rigidezes E·A, com ε igual" },
      { nome: "Momento polar de eixo vazado", formula: "J = π·(D⁴ − d⁴)/32" },
      { nome: "Tensões em plano inclinado (tração simples)", formula: "σθ = σ·cos²θ        τθ = σ·senθ·cosθ", obs: "τ é máximo em 45°, valendo σ/2." },
      { nome: "Energia de deformação (tração)", formula: "U = P²·L/(2·A·E) = ½·P·δ" },
      { nome: "Momento equivalente em eixo", formula: "Tresca:    Me = √(M² + T²)\nvon Mises: Me = √(M² + 0,75·T²)" }
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
      { nome: "Correia — potência", formula: "P = (F1 − F2)·v        F1/F2 = e^(μθ)" },
      { nome: "Forças no engrenamento (dentes retos)", formula: "Ft = 2T/d        Fr = Ft · tg φ", obs: "φ é o ângulo de pressão, usualmente 20°." },
      { nome: "Trem de engrenagens composto", formula: "i_total = i₁ × i₂ × ... × iₙ" },
      { nome: "Trem epicicloidal com anel fixo", formula: "i = n_solar/n_braço = 1 + z_anel/z_solar" },
      { nome: "Rolamento com carga combinada", formula: "P = X·Fr + Y·Fa" },
      { nome: "Carga equivalente para carga variável", formula: "P_eq = [ Σ(fração · Pᵢ^a) ]^(1/a)", obs: "a = 3 para esferas; 10/3 para rolos." },
      { nome: "Fator de Wahl (molas)", formula: "C = D/d\nKw = (4C − 1)/(4C − 4) + 0,615/C\nτ = Kw · 8FD/(π·d³)" },
      { nome: "Constante da junta parafusada", formula: "C = kb/(kb + km)        ΔF_parafuso = C · P_externa" },
      { nome: "Fator de concentração em fadiga", formula: "Kf = 1 + q·(Kt − 1)" },
      { nome: "Regra de Palmgren-Miner (dano acumulado)", formula: "D = Σ nᵢ/Nᵢ        falha prevista em D = 1" },
      { nome: "Embreagem e freio de disco", formula: "T = μ · F · R_médio · nº de faces" }
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
      { nome: "Aceleração normal e tangencial", formula: "a_n = v²/ρ = ω²r        a_t = dv/dt = α·r" },
      { nome: "Corpo rígido em queda pivotado (barra)", formula: "ω = √(3g/L)   (solta da horizontal, pino na extremidade)" },
      { nome: "Máquina de Atwood com polia de massa", formula: "a = (m₁ − m₂)·g/(m₁ + m₂ + I/R²)", obs: "I/R² é a massa equivalente da polia." },
      { nome: "Altura de ressalto com restituição", formula: "h' = e²·h" },
      { nome: "Pêndulo composto", formula: "T = 2π·√(I/(m·g·d))        d = distância do pino ao centro de massa" },
      { nome: "Rolamento em plano inclinado", formula: "a = g·senθ/(1 + I/(m·R²))", obs: "Esfera 5/7·g·senθ; cilindro 2/3; aro 1/2." },
      { nome: "Aceleração máxima limitada pelo atrito", formula: "a_max = μ·g" },
      { nome: "Velocidade máxima em curva plana", formula: "v_max = √(μ·g·R)" },
      { nome: "Acoplamento de discos (colisão rotacional)", formula: "I₁ω₁ = (I₁+I₂)·ω        fração dissipada = I₂/(I₁+I₂)" }
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
      { nome: "Transdutores", formula:"Acelerômetro: ωn alta, mede ω << ωn\nSismômetro/velocímetro: ωn baixa, mede ω >> ωn\nProximitor: deslocamento relativo eixo-mancal" },
      { nome: "Decremento logarítmico com n ciclos", formula: "δ = (1/n)·ln(x₀/xₙ)        ζ ≈ δ/(2π)" },
      { nome: "Rigidez para transmissibilidade desejada", formula: "TR = 1/(r² − 1)  →  r  →  ωn = ω/r  →  k = m·ωn²" },
      { nome: "Sistema de 2 GDL (três molas iguais)", formula: "ω₁ = √(k/m)        ω₂ = √(3k/m)" },
      { nome: "Amplitude muito acima da crítica", formula: "X → (m_desbalanceada · e)/M_rotor" },
      { nome: "Vibração torcional", formula: "ωn = √(kt/J)        kt = G·J_polar/L" },
      { nome: "Frequência de engrenamento", formula: "GMF = rotação × número de dentes", obs: "Bandas laterais espaçadas da rotação indicam dente defeituoso." }
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
      { nome: "Curva do sistema", formula: "H_sist = H_estática + K·Q²        ponto de operação = interseção com a curva da bomba" },
      { nome: "Trabalho politrópico de compressão", formula: "w = [n/(n−1)]·R·T₁·[(p₂/p₁)^((n−1)/n) − 1]" },
      { nome: "Turbina a gás — trabalhos e BWR", formula: "w_turbina = cp(T₃ − T₄)\nw_compressor = cp(T₂ − T₁)\nBWR = w_compressor/w_turbina" },
      { nome: "Rendimento total da bomba", formula: "η_total = η_hidráulico × η_volumétrico × η_mecânico" },
      { nome: "Usinagem do rotor (trimming)", formula: "Q ∝ D        H ∝ D²        P ∝ D³", obs: "Aproximado; a geometria da pá não se preserva. Limite prático: −20% do diâmetro." },
      { nome: "NPSH com líquido saturado", formula: "NPSHd = z_afogamento − h_perdas", obs: "O termo (p − pv)/γ se anula quando o líquido está na saturação." }
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
      { nome: "Lubrificante", formula:"SAE 15W-40: 15W = viscosidade a frio, 40 = a 100 °C\nIV = índice de viscosidade\nAPI CI-4 (diesel) / SN (Otto)" },
      { nome: "Estado ao final da compressão", formula: "T₂ = T₁·rv^(k−1)        p₂ = p₁·rv^k" },
      { nome: "Rendimento volumétrico", formula: "ηv = ṁ_real/ṁ_teórico        ṁ_teórico = ρ·V_total·(n/60)/x" },
      { nome: "Torque a partir da pme", formula: "4 tempos: T = pme·V/(4π)        2 tempos: T = pme·V/(2π)" },
      { nome: "Razão de corte pelas temperaturas", formula: "rc = V₃/V₂ = T₃/T₂   (combustão a pressão constante)" },
      { nome: "Fator lambda", formula: "λ = AFR_real/AFR_estequiométrica", obs: "λ > 1 pobre; λ < 1 rica. Gasolina: AFR esteq. 14,7; etanol ≈ 9." },
      { nome: "Ganho de densidade por sobrealimentação", formula: "ρ_turbo/ρ_aspirado = (p₂/T₂)/(p₁/T₁)" },
      { nome: "Vazão de arrefecimento", formula: "ṁ = Q/(c·ΔT)", obs: "ΔT típico entre entrada e saída do motor: 5 a 10 °C." }
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
      { nome: "Fator de utilização (cogeração)", formula: "FU = (W_liq + Q_útil)/Q_entrada" },
      { nome: "Entalpia real com rendimento isentrópico", formula: "Turbina:    h₂ = h₁ − η·(h₁ − h₂s)\nCompressor: h₂ = h₁ + (h₂s − h₁)/η" },
      { nome: "Fração extraída em aquecedor regenerativo", formula: "y·h_extração + (1−y)·h_condensado = h_saída" },
      { nome: "Heat rate", formula: "HR = 3.600/η   [kJ/kWh]" },
      { nome: "Regenerador no Brayton", formula: "T₂' = T₂ + ε·(T₄ − T₂)", obs: "Só compensa quando T₂ < T₄, ou seja, em razões de pressão baixas." }
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
      { nome: "Capacidade de processo", formula: "Cp = (LSE − LIE)/(6σ)        Cpk = min[(LSE−μ), (μ−LIE)]/(3σ)" },
      { nome: "Mediana e moda", formula: "Mediana = valor central do rol ordenado\nModa = valor de maior frequência", obs: "Média > mediana indica assimetria à direita." },
      { nome: "Probabilidade total e Bayes", formula: "P(D) = Σ P(Aᵢ)·P(D|Aᵢ)\nP(Aᵢ|D) = P(Aᵢ)·P(D|Aᵢ)/P(D)" }
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
      { nome: "Correção do fator de potência", formula: "Qc = P·(tg φ1 − tg φ2)  [kvar]" },
      { nome: "Perdas no motor", formula: "Perdas = P_entrada − P_eixo        η = P_eixo/P_entrada", obs: "Cobre (Joule), ferro (histerese e Foucault), mecânicas e suplementares." },
      { nome: "Partida estrela-triângulo", formula: "Corrente e conjugado caem a 1/3 do valor da partida direta" }
    ]
  },
  {
    titulo: "11. Corrosão",
    itens: [
      { nome: "Taxa de corrosão", formula: "taxa = (e_inicial − e_atual)/tempo   [mm/ano]" },
      { nome: "Vida remanescente (API 570)", formula: "vida = (e_atual − e_mínima)/taxa", obs: "Usar a espessura ATUAL, nunca a inicial. O intervalo de reinspeção é metade da vida remanescente." },
      { nome: "Reações da pilha eletroquímica", formula: "Ânodo:   Fe → Fe²⁺ + 2e⁻\nCátodo aerado:  O₂ + 2H₂O + 4e⁻ → 4OH⁻\nCátodo ácido:   2H⁺ + 2e⁻ → H₂" },
      { nome: "Critério de proteção catódica", formula: "E ≤ −0,85 V (Cu/CuSO₄)", obs: "−0,95 V na presença de bactérias redutoras de sulfato. Abaixo de −1,10 V há superproteção." },
      { nome: "Índice de resistência ao pite (PREN)", formula: "PREN = %Cr + 3,3·%Mo + 16·%N", obs: "304 ≈ 19; 316 ≈ 25; duplex 2205 ≈ 35; superduplex > 40." },
      { nome: "Raio crítico × faixas críticas", formula: "Sensitização: 425 a 815 °C\nCUI: 50 a 175 °C\nDureza máxima em H₂S (NACE MR0175): 22 HRC" }
    ]
  },
  {
    titulo: "13. Metalurgia",
    itens: [
      { nome: "Regra da alavanca", formula: "fração da fase = segmento OPOSTO / segmento total" },
      { nome: "Pontos do diagrama Fe-C", formula: "Eutetóide:  0,77% C a 727 °C\nEutético:   4,3% C a 1.147 °C\nPeritético: 0,17% C a 1.493 °C\nCementita:  6,67% C\nMáx. C na ferrita: 0,022%" },
      { nome: "Fração de perlita em aço hipoeutetóide", formula: "%perlita = (%C − 0,022)/(0,77 − 0,022)" },
      { nome: "Estruturas cristalinas", formula: "CCC: 2 átomos/célula, FE 0,68, coord. 8\nCFC: 4 átomos/célula, FE 0,74, coord. 12\nHC:  6 átomos/célula, FE 0,74, coord. 12" },
      { nome: "Relação de Hall-Petch", formula: "σy = σ₀ + k·d^(−1/2)", obs: "Refino de grão é o único mecanismo que eleva resistência E tenacidade." },
      { nome: "Difusão (Lei de Fick e Arrhenius)", formula: "J = −D·(dC/dx)        D = D₀·exp(−Q/RT)" },
      { nome: "Correlação dureza-resistência (aços)", formula: "Sut [MPa] ≈ 3,4 × HB" }
    ]
  },
  {
    titulo: "14. Processos de Fabricação",
    itens: [
      { nome: "Velocidade de corte", formula: "Vc = π·D·n/1.000   [m/min, com D em mm e n em rpm]", obs: "No torneamento D é o da peça; no fresamento e na furação, o da ferramenta." },
      { nome: "Rotação a partir da velocidade de corte", formula: "n = 1.000·Vc/(π·D)" },
      { nome: "Tempo de corte", formula: "t = L/(f·n)        f = avanço por rotação" },
      { nome: "Taxa de remoção (torneamento)", formula: "Q = Vc · f · ap" },
      { nome: "Equação de Taylor (vida de ferramenta)", formula: "V · T^n = C", obs: "n ≈ 0,10-0,15 aço rápido; 0,20-0,30 metal duro; 0,40-0,60 cerâmica." },
      { nome: "Rugosidade teórica no torneamento", formula: "Ra ≈ f²/(8·rε)        rε = raio de ponta da ferramenta" },
      { nome: "Ajustes (sistema furo-base)", formula: "a…g → folga    h → deslizante    j…n → incerto    p… → interferência" }
    ]
  },
  {
    titulo: "15. Soldagem",
    itens: [
      { nome: "Aporte térmico (energia de soldagem)", formula: "H = (V · I · 60)/(v · 1.000)   [kJ/mm, com v em mm/min]" },
      { nome: "Aporte efetivo", formula: "H_efetivo = η · H", obs: "η ≈ 0,80 eletrodo revestido; 0,70-0,80 MIG/MAG; > 0,95 arco submerso." },
      { nome: "Carbono equivalente (IIW)", formula: "CE = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15", obs: "CE < 0,40 boa soldabilidade; 0,40-0,60 pré-aquecer; > 0,60 cuidados especiais." },
      { nome: "Condições das trincas", formula: "A frio:   hidrogênio + martensita + tração, abaixo de 200 °C\nA quente: S e P formando filme líquido na solidificação\nLamelar:  tensão na direção da espessura sobre inclusões" },
      { nome: "Ferrita delta em inox austenítico", formula: "Faixa recomendada: 3 a 10 FN", obs: "Prevista pelo diagrama de Schaeffler ou WRC-1992, a partir de Cr_eq e Ni_eq." },
      { nome: "Classificação AWS de eletrodo revestido", formula: "E XX Y Z\nXX = resistência em ksi   Y = posições   Z = revestimento e corrente", obs: "E7018: 70 ksi, todas as posições, básico de baixo hidrogênio." }
    ]
  },
  {
    titulo: "18. Segurança e Meio Ambiente",
    itens: [
      { nome: "Adicionais legais", formula: "Periculosidade (NR-16): 30% do salário-base\nInsalubridade (NR-15): 10, 20 ou 40% do salário mínimo", obs: "Não são acumuláveis — o trabalhador opta pelo mais vantajoso." },
      { nome: "Limites de tolerância a ruído (NR-15)", formula: "85 dB(A) → 8 h     90 dB(A) → 4 h\n95 dB(A) → 2 h     100 dB(A) → 1 h\nMáximo sem proteção: 115 dB(A)" },
      { nome: "Atmosfera em espaço confinado (NR-33)", formula: "Oxigênio aceitável: 19,5% a 23,0% em volume" },
      { nome: "Trabalho em altura (NR-35)", formula: "Acima de 2,00 m do nível inferior, com risco de queda" },
      { nome: "Hierarquia de controle de riscos", formula: "eliminar → substituir → engenharia (EPC) → administrativo → EPI" },
      { nome: "Licenciamento ambiental", formula: "LP (viabilidade) → LI (instalação) → LO (operação)" },
      { nome: "Ordem de prioridade da PNRS", formula: "não geração → redução → reutilização → reciclagem → tratamento → disposição final" }
    ]
  },
  {
    titulo: "12. Seleção de Materiais",
    itens: [
      { nome: "Especificações ASTM/API mais cobradas", formula: "A106  aço-carbono sem costura, alta temperatura\nA333  aço-carbono/liga, BAIXA temperatura (exige impacto)\nA335  aço Cr-Mo (P11, P22, P91), fluência\nA312  inoxidável austenítico (TP304, TP316)\nAPI 5L  duto de transporte (X42 a X80)" },
      { nome: "Famílias de inoxidáveis", formula: "Austenítico (304/316): CFC, não magnético, sofre CST por cloretos\nFerrítico (430): CCC, magnético, melhor em cloretos\nMartensítico (410/420): temperável\nDuplex (2205): ~2× a resistência, PREN alto" },
      { nome: "Limites de temperatura de serviço", formula: "Aço-carbono: fluência acima de ~400-450 °C\nDuplex: −50 a 300 °C (fase sigma e fragilidade a 475 °C)\nCriogenia: exige CFC (austenítico, alumínio) ou 9% Ni" },
      { nome: "Ligas de níquel", formula: "Inconel (Ni-Cr-Fe): alta temperatura e oxidação\nMonel (Ni-Cu): água do mar e HF\nHastelloy (Ni-Mo-Cr): ácidos redutores" },
      { nome: "Elastômeros para vedação", formula: "NBR: óleos e hidrocarbonetos\nEPDM: água quente e vapor (atacado por óleo)\nFKM/Viton: alta temperatura e serviço agressivo" },
      { nome: "Relação dureza-resistência e ductilidade", formula: "Ferro nodular: grafita esferoidal, 3 a 18% de alongamento\nFerro cinzento: grafita lamelar, frágil em tração\nAlumínio: E ≈ 1/3 do aço; densidade ≈ 1/3" }
    ]
  }
];
