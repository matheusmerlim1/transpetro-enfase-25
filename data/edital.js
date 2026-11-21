/* Temas do banco + transcrição do Anexo IV do Edital nº 04 - TRANSPETRO/PSP/TERRA/NS - 2026.4 */
window.BANCO = window.BANCO || [];

window.TEMAS = {
  termodinamica: { nome: "1. Termodinâmica" },
  mecflu:        { nome: "2. Mecânica dos Fluidos" },
  transcal:      { nome: "3. Transmissão do Calor" },
  resmat:        { nome: "4. Resistência dos Materiais" },
  elemmaq:       { nome: "5. Elementos de Máquinas" },
  dinamica:      { nome: "6. Fundamentos da Dinâmica" },
  vibracoes:     { nome: "7. Vibrações Mecânicas" },
  maqfluxo:      { nome: "8. Máquinas de Fluxo" },
  mci:           { nome: "9. Motores de Combustão Interna" },
  ciclospot:     { nome: "10. Ciclos de Geração de Potência" },
  corrosao:      { nome: "11. Corrosão" },
  selmat:        { nome: "12. Seleção de Materiais" },
  metalurgia:    { nome: "13. Metalurgia" },
  fabricacao:    { nome: "14. Processos de Fabricação" },
  soldagem:      { nome: "15. Soldagem" },
  estatistica:   { nome: "16. Estatística e Probabilidade" },
  eletrotecnica: { nome: "17. Eletrotécnica" },
  seguranca:     { nome: "18. Segurança e Meio Ambiente" },
  portugues:     { nome: "Língua Portuguesa" },
  ingles:        { nome: "Língua Inglesa" }
};

window.EDITAL = {
  titulo: "Edital nº 04 — TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR — 2026.4 · Ênfase 25: Engenharia Mecânica",
  fatos: [
    "Banca: **Fundação Cesgranrio**. Cargo: Profissional Júnior — Ênfase 25: Engenharia Mecânica.",
    "Prova objetiva: **06/12/2026** (adiada de 29/11/2026), com **4 horas e 30 minutos** de duração.",
    "Local, sala e horário: só no **Cartão de Confirmação de Inscrição**, previsto para **01/12/2026** na área do candidato do site da Cesgranrio. Houve retificação dos locais de prova na BA, ES, RJ e SP.",
    "**70 questões**, cada uma valendo 1 ponto, com **cinco alternativas (A a E)** e uma única resposta correta.",
    "Divisão: **50 questões de Conhecimentos Específicos** (Fase 1) + **20 de Conhecimentos Gerais** (Fase 2), sendo 10 de Língua Portuguesa e 10 de Língua Inglesa.",
    "Eliminação (item 7.1.4.3): menos de 50% em Específicas, ou menos de 50% em Gerais, ou **grau zero em qualquer matéria** de Conhecimentos Gerais.",
    "Avançam para a fase seguinte os candidatos ranqueados **pela nota de Conhecimentos Específicos** até 2× o número de vagas mais cadastro de reserva, por ênfase/polo e modalidade de concorrência.",
    "Escolaridade: bacharelado em Engenharia Mecânica reconhecido pelo MEC (ou outra Engenharia com certidão do Conselho atestando todas as atribuições de Engenheiro Mecânico) + registro no Conselho de Classe.",
    "Polos com vagas para a ênfase: Rio de Janeiro, São Paulo, Sul, Norte e Nordeste."
  ],
  programa: [
    {
      tema: "termodinamica", titulo: "Termodinâmica",
      texto: "Estado termodinâmico e propriedades termodinâmicas. Primeira Lei e a conservação de energia. Segunda Lei aplicada a ciclos e processos. Gases perfeitos. Ciclos teóricos de geração de potência e refrigeração.",
      foco: "Propriedades intensivas × extensivas, título de vapor, balanço em volume de controle, rendimento de Carnot, COP de refrigeração e bomba de calor, processos politrópicos, geração de entropia."
    },
    {
      tema: "mecflu", titulo: "Mecânica dos Fluidos",
      texto: "Propriedades e natureza dos fluidos. Hidrostática. Equações constitutivas da dinâmica dos fluidos. Análise dimensional e relações de semelhança. Escoamento em tubulações. Noções de escoamento compressível em bocais. Perdas de carga.",
      foco: "Manometria, empuxo e estabilidade, Bernoulli com perda, Reynolds, Darcy-Weisbach e Hazen-Williams, diagrama de Moody, perdas localizadas, teorema Pi de Buckingham, semelhança de bombas, número de Mach e bocal convergente-divergente."
    },
    {
      tema: "transcal", titulo: "Transmissão do Calor",
      texto: "Fundamentos e mecanismos de transferência de calor. Abordagem elementar dos processos de condução, convecção e radiação. Princípios de operação dos trocadores de calor.",
      foco: "Parede composta e resistência térmica, raio crítico de isolamento, aleta, Nusselt/Prandtl/Grashof, corpo negro e cinza, MLDT com fator de correção, método ε-NUT, fator de incrustação, casco-e-tubos TEMA."
    },
    {
      tema: "resmat", titulo: "Resistência dos Materiais",
      texto: "Solicitações axiais, flexão e torção. Diagramas de força cortante e momento fletor. Momento de inércia das figuras planas. Análise das tensões e deformações. Estado plano de tensões. Tensões/deformações em vigas carregadas transversalmente. Problemas de flexão estaticamente indeterminados. Flambagem. Medições de deformações com extensômetros. Lei de Hooke.",
      foco: "σ = M·y/I, τ = T·r/J, círculo de Mohr, tensões principais, von Mises × Tresca, carga crítica de Euler com coeficiente de flambagem, roseta extensométrica, vasos de pressão de parede fina."
    },
    {
      tema: "elemmaq", titulo: "Elementos de Máquinas",
      texto: "Eixos, engrenagens, mancais e fadiga.",
      foco: "Relação de transmissão, trem de engrenagens, módulo e passo, mancais de rolamento (vida L10) × mancais hidrodinâmicos, curva S-N e limite de fadiga, Goodman/Soderberg, concentração de tensão, uniões parafusadas e chavetas."
    },
    {
      tema: "dinamica", titulo: "Fundamentos da Dinâmica",
      texto: "Dinâmica das partículas. Dinâmica de sistemas de partículas. Dinâmica de corpos rígidos.",
      foco: "Trabalho-energia, impulso-quantidade de movimento, coeficiente de restituição, momento de inércia de massa e teorema dos eixos paralelos, rolamento sem escorregamento, princípio de d'Alembert."
    },
    {
      tema: "vibracoes", titulo: "Vibrações Mecânicas",
      texto: "Sistemas com um grau de liberdade: vibração livre, vibração forçada periódica, vibração transiente, vibrações amortecidas e não-amortecidas. Sistemas com múltiplos graus de liberdade: frequências e modos naturais, vibração livre e vibração forçada. Medições de vibrações: transdutores.",
      foco: "ωn = √(k/m), fator de amortecimento e decremento logarítmico, fator de amplificação e ressonância, transmissibilidade e isolamento (r > √2), absorvedor dinâmico, acelerômetro × velocímetro × proximitor, norma ISO 10816."
    },
    {
      tema: "maqfluxo", titulo: "Máquinas de Fluxo",
      texto: "Princípios de funcionamento e operação de bombas centrífugas e de deslocamento positivo, compressores alternativos, compressores centrífugos, compressores axiais, turbinas a vapor e a gás. Aspectos termodinâmicos associados a essas máquinas. Influência das condições do serviço efetuado por essas máquinas sobre o desempenho das mesmas e cálculo de potência de operação.",
      foco: "Curva H×Q e ponto de operação, leis de semelhança, NPSH disponível × requerido e cavitação, associação série/paralelo, velocidade específica, surge e stonewall em compressores, eficiência politrópica, espaço nocivo."
    },
    {
      tema: "mci", titulo: "Motores de Combustão Interna",
      texto: "Ciclos ar-combustível e real: diagramas pressão × volume dos ciclos Otto e Diesel, diagrama pressão × ângulo de manivela. Motores de dois e de quatro tempos. Comparações entre motores ICE e ICO. Parâmetros: cilindrada unitária e total, taxa de compressão, diâmetro e curso, rendimento térmico e mecânico, torque, potência indicada, potência de atrito, potência líquida, consumo horário e específico, razão de corte. Motores a álcool, diesel, gasolina, GNV e combustíveis alternativos. Propriedades do óleo lubrificante.",
      foco: "η do ciclo Otto e do Diesel, pressão média efetiva, cálculo de cilindrada, consumo específico, octanagem × cetanagem, detonação, viscosidade SAE e classificação API."
    },
    {
      tema: "ciclospot", titulo: "Ciclos de Geração de Potência",
      texto: "Conceitos práticos relativos aos ciclos de Rankine e Brayton. Balanço energético e cálculo de eficiência do ciclo. Principais fatores da perda de eficiência. Equipamentos auxiliares para implementação desses ciclos.",
      foco: "Rankine com reaquecimento e regeneração, trabalho da bomba, título na saída da turbina, back-work ratio do Brayton, razão de pressão ótima, regenerador, ciclo combinado, cogeração."
    },
    {
      tema: "corrosao", titulo: "Corrosão",
      texto: "Corrosão química e eletroquímica. Métodos de proteção anticorrosiva.",
      foco: "Pilha eletroquímica e série galvânica, corrosão galvânica/por frestas/por pites/intergranular/sob tensão, CST por cloretos e por H2S (norma NACE MR0175), proteção catódica por anodo de sacrifício e corrente impressa, revestimentos, inibidores, passivação."
    },
    {
      tema: "selmat", titulo: "Seleção de Materiais",
      texto: "Fatores gerais de influência na seleção de materiais. Principais materiais metálicos e não metálicos de uso industrial e respectivas indicações ao uso.",
      foco: "Aços ASTM A106/A335/A312, inoxidáveis austeníticos × ferríticos × duplex, ligas de níquel, cobre e alumínio, ferros fundidos, polímeros e elastômeros para vedação, compósitos, critérios de serviço em H2S, criogenia e alta temperatura."
    },
    {
      tema: "metalurgia", titulo: "Metalurgia",
      texto: "Estrutura cristalina dos metais. Propriedades mecânicas dos materiais. Transformações de fase. Diagramas de equilíbrio. Ligas ferro-carbono. Tratamentos térmicos. Mecanismos para aumento da resistência mecânica e tenacidade dos aços-carbono.",
      foco: "CCC/CFC/HC e fator de empacotamento, regra da alavanca, diagrama Fe-C (eutetóide 0,77%C a 727 °C), perlita/bainita/martensita, curvas TTT e CCT, têmpera-revenido-normalização-recozimento, ensaios de dureza e Charpy, temperatura de transição dúctil-frágil."
    },
    {
      tema: "fabricacao", titulo: "Processos de Fabricação Mecânica",
      texto: "Conformação mecânica, torneamento, fresamento, furação e retífica.",
      foco: "Velocidade de corte e rotação, avanço e profundidade, tempo de usinagem, laminação/forjamento/extrusão/trefilação/estampagem, trabalho a frio × a quente, fluido de corte, materiais de ferramenta, rugosidade, fresamento concordante × discordante."
    },
    {
      tema: "soldagem", titulo: "Soldagem",
      texto: "Ciclo térmico, pré-aquecimento, pós-aquecimento, tratamentos térmicos, fissuração a quente e de coesão interlamelar. Processos de soldagem: soldagem a gás e oxicorte, eletrodo revestido, TIG, MIG, MAG e arco submerso.",
      foco: "ZTA e aporte térmico, carbono equivalente e trinca a frio por hidrogênio, decoesão lamelar, TTPS/alívio de tensões, classificação AWS de eletrodos (E7018 etc.), gases de proteção, modos de transferência metálica, descontinuidades e END."
    },
    {
      tema: "estatistica", titulo: "Noções de Estatística e Probabilidade com aplicações em Engenharia",
      texto: "Noções de Estatística e Probabilidade com aplicações em Engenharia.",
      foco: "Média, mediana, moda, desvio-padrão e coeficiente de variação, distribuição normal e regra 68-95-99,7, binomial e Poisson, probabilidade condicional e Bayes, confiabilidade em série e paralelo, taxa de falha e MTBF, cartas de controle."
    },
    {
      tema: "eletrotecnica", titulo: "Eletrotécnica",
      texto: "Princípios de funcionamento de geradores e motores elétricos.",
      foco: "Lei de Faraday e Lenz, motor de indução (escorregamento, rotação síncrona), conjugado, fator de potência, ligação estrela × triângulo, partida direta e soft-starter, inversor de frequência, rendimento e potência trifásica."
    },
    {
      tema: "seguranca", titulo: "Segurança do Trabalho e Meio Ambiente",
      texto: "Normas regulamentadoras sobre Equipamentos de Proteção Individual (EPI), Programa de Prevenção de Riscos Ambientais (PPRA), Segurança no Trabalho em Máquinas e Equipamentos, Atividades e Operações Perigosas.",
      foco: "NR-6 (EPI, CA e responsabilidades), NR-9 (agentes físicos, químicos e biológicos; PGR/PPRA), NR-12 (proteções fixas e móveis, dispositivos de parada de emergência, categorias de segurança), NR-16 (periculosidade em inflamáveis, eletricidade e explosivos), NR-13, NR-33 e NR-35 como apoio."
    }
  ],
  gerais: [
    {
      tema: "portugues", titulo: "Língua Portuguesa — 10 questões",
      texto: "1. Compreensão de textos. 2. Ortografia oficial. 3. Mecanismos de coesão textual. 4. Significação das palavras. 5. Emprego de tempos e modos verbais. 6. Emprego das classes de palavras. 7. Coordenação e subordinação. 8. Emprego dos sinais de pontuação. 9. Concordância verbal e nominal. 10. Regência verbal e nominal. 11. Emprego do sinal indicativo de crase. 12. Colocação dos pronomes átonos."
    },
    {
      tema: "ingles", titulo: "Língua Inglesa — 10 questões",
      texto: "1. Compreensão de texto escrito em língua inglesa. 2. Itens gramaticais relevantes para a compreensão dos conteúdos semânticos."
    }
  ]
};
