/* Texto I usado nas questões POR-01 a POR-06 */
var TXT_I =
"**Texto I**\n\n" +
"1  A malha dutoviária brasileira é, silenciosamente, uma das espinhas dorsais da economia do país. " +
"Enquanto caminhões e navios ocupam o imaginário popular quando se fala em transporte de combustíveis, " +
"são os dutos que movimentam, dia após dia, a maior parte do petróleo e de seus derivados entre terminais, " +
"refinarias e centros consumidores.\n" +
"5  A vantagem é evidente: um único duto substitui centenas de caminhões-tanque por dia, com consumo " +
"energético por tonelada transportada muito inferior e risco de acidente proporcionalmente menor. " +
"Não se trata, contudo, de um sistema isento de desafios. A integridade da tubulação depende de " +
"inspeção permanente, de controle rigoroso da corrosão e de uma cultura de manutenção que não admite " +
"improvisos.\n" +
"10  Nesse ponto reside o paradoxo: justamente por funcionar bem, a infraestrutura dutoviária torna-se " +
"invisível. Ninguém nota o duto que opera sem incidentes. E é essa invisibilidade, ironicamente, " +
"que costuma dificultar a defesa dos investimentos necessários à sua conservação.";

window.BANCO.push(

{ id:"POR-01", tema:"portugues", subtema:"Compreensão de textos", nivel:"medio",
  texto:TXT_I,
  enunciado:"A ideia central defendida no Texto I é a de que a malha dutoviária",
  alternativas:[
    "ocupa lugar de destaque no imaginário popular brasileiro.",
    "dispensa inspeção e manutenção por ser um sistema fechado e automatizado.",
    "deveria ser substituída progressivamente pelo transporte rodoviário, mais flexível.",
    "apresenta riscos de acidente superiores aos dos demais modais de transporte.",
    "é essencial e eficiente, mas sua própria eficiência a torna pouco percebida, o que compromete a defesa dos recursos para sua manutenção."],
  correta:4,
  explicacao:"O terceiro parágrafo explicita o **paradoxo** que estrutura o texto: o bom funcionamento gera invisibilidade, e a invisibilidade dificulta a obtenção de investimentos. As demais alternativas contrariam informações expressas do texto (linhas 2-3, 5-6 e 7-9).",
  pegadinha:"Em questões de ideia central, desconfie de alternativas que reproduzem um detalhe verdadeiro do texto sem abarcar seu movimento argumentativo." },

{ id:"POR-02", tema:"portugues", subtema:"Mecanismos de coesão", nivel:"medio",
  texto:TXT_I,
  enunciado:"No trecho “Não se trata, **contudo**, de um sistema isento de desafios” (l. 7), o conector destacado estabelece com o período anterior uma relação de",
  alternativas:["conclusão.","oposição.","finalidade.","explicação.","proporção."],
  correta:1,
  explicacao:"“Contudo” é conjunção **adversativa**, equivalente a mas, porém, todavia, entretanto, no entanto. Ela contrapõe as vantagens apresentadas às ressalvas que se seguem.",
  pegadinha:"Não confunda: **conclusivas** (logo, portanto, pois posposto, por conseguinte); **explicativas** (pois anteposto, porque, porquanto); **concessivas** (embora, conquanto, ainda que); **proporcionais** (à medida que, à proporção que)." },

{ id:"POR-03", tema:"portugues", subtema:"Coesão referencial", nivel:"medio",
  texto:TXT_I,
  enunciado:"No trecho “E é essa invisibilidade, ironicamente, que costuma dificultar a defesa dos investimentos” (l. 11-12), a expressão destacada retoma a ideia de que",
  alternativas:[
    "o duto que opera sem incidentes não é notado por ninguém.",
    "os acidentes com dutos são raros.",
    "os investimentos em conservação são insuficientes.",
    "o transporte rodoviário é mais visível que o dutoviário.",
    "a inspeção permanente é dispendiosa."],
  correta:0,
  explicacao:"Trata-se de coesão por **anáfora**: o demonstrativo “essa” retoma o conteúdo do período imediatamente anterior — “Ninguém nota o duto que opera sem incidentes” (l. 11).",
  pegadinha:"Regra prática: **este/esta** aponta para o que virá (catáfora) ou para o que está próximo do falante; **esse/essa** retoma o que já foi dito (anáfora)." },

{ id:"POR-04", tema:"portugues", subtema:"Significação das palavras", nivel:"facil",
  texto:TXT_I,
  enunciado:"No texto, o vocábulo “**isento**” (l. 7) pode ser substituído, sem prejuízo do sentido, por",
  alternativas:["suscetível.","repleto.","livre.","carente.","dependente."],
  correta:2,
  explicacao:"“Isento de desafios” significa **livre de** desafios. O período nega essa condição: o sistema **não** é livre de desafios.",
  pegadinha:"“Isento” também tem o sentido de imparcial (“um julgamento isento”), mas nesse contexto o complemento com a preposição “de” fixa o sentido de livre, desobrigado." },

{ id:"POR-05", tema:"portugues", subtema:"Coordenação e subordinação", nivel:"dificil",
  texto:TXT_I,
  enunciado:"Em “**Enquanto** caminhões e navios ocupam o imaginário popular [...], são os dutos que movimentam [...] a maior parte do petróleo” (l. 2-3), a oração iniciada pelo conector destacado classifica-se como subordinada adverbial",
  alternativas:["concessiva.","consecutiva.","causal.","condicional.","temporal, com valor de simultaneidade."],
  correta:4,
  explicacao:"“Enquanto” é conjunção subordinativa **temporal**, indicando simultaneidade. Neste contexto ela agrega ainda um matiz de contraste entre o que ocupa o imaginário e o que efetivamente transporta o produto, mas sua classificação formal permanece temporal.",
  pegadinha:"“Enquanto que” é construção condenada pela norma-padrão; prefira apenas “enquanto”." },

{ id:"POR-06", tema:"portugues", subtema:"Emprego das classes de palavras", nivel:"dificil",
  texto:TXT_I,
  enunciado:"No trecho “são os dutos **que** movimentam [...] a maior parte do petróleo” (l. 3), o vocábulo destacado é",
  alternativas:[
    "advérbio de intensidade.",
    "preposição acidental.",
    "partícula expletiva, podendo ser retirada sem prejuízo gramatical.",
    "pronome relativo, retomando o antecedente “os dutos” e exercendo a função de sujeito.",
    "conjunção integrante, introduzindo oração subordinada substantiva."],
  correta:3,
  explicacao:"O “que” retoma “os dutos” e funciona como **sujeito** de “movimentam” — daí a concordância no plural. Trata-se de pronome relativo, introduzindo oração subordinada adjetiva restritiva.",
  pegadinha:"Na construção enfática “é... que” (“Foi ontem que ele chegou”), o “que” é de fato partícula expletiva. Aqui, porém, ele tem antecedente e função sintática, o que caracteriza o pronome relativo." },

{ id:"POR-07", tema:"portugues", subtema:"Crase", nivel:"medio",
  enunciado:"Assinale a opção em que o sinal indicativo de crase foi empregado **corretamente**.",
  alternativas:[
    "O produto será distribuído à granel nos terminais.",
    "À medida que os testes avançavam, os resultados se confirmavam.",
    "A equipe começou à trabalhar às oito horas da manhã.",
    "O relatório foi entregue à todos os gestores da unidade.",
    "Ele se dirigiu à ela com muita cortesia."],
  correta:1,
  explicacao:"“À medida que” (locução proporcional) exige a crase. Nas demais: antes de pronome indefinido “todos” não há artigo; antes de **verbo** nunca há crase; em locuções adverbiais com palavra **masculina** (“a granel”, “a pé”, “a lápis”) não há crase; e antes de **pronome pessoal** não há artigo.",
  pegadinha:"Não confunda **à medida que** (proporção: à proporção que) com **na medida em que** (causa: uma vez que)." },

{ id:"POR-08", tema:"portugues", subtema:"Crase", nivel:"medio",
  enunciado:"Assinale a opção em que a crase é **facultativa**.",
  alternativas:[
    "Entreguei o documento à Maria.",
    "Referiu-se às normas de segurança vigentes.",
    "Chegamos às dez horas em ponto.",
    "Retornaremos à sede da empresa amanhã.",
    "Dirigiu-se àquele setor da refinaria."],
  correta:0,
  explicacao:"Diante de **nome próprio feminino de pessoa**, o artigo é facultativo (“Entreguei a Maria” ou “à Maria”), o que torna a crase facultativa. A crase também é facultativa antes de **pronome possessivo feminino singular** (“a/à minha equipe”) e depois da preposição **até** (“até a/à porta”).",
  pegadinha:"Antes de horas determinadas, de “aquele/aquela” e de substantivos femininos que exigem artigo, a crase é **obrigatória**." },

{ id:"POR-09", tema:"portugues", subtema:"Concordância verbal", nivel:"medio",
  enunciado:"Assinale a opção em que a concordância verbal está de acordo com a norma-padrão.",
  alternativas:[
    "Vende-se equipamentos usados no pátio da empresa.",
    "Haviam muitos técnicos aguardando o início do treinamento.",
    "Fazem cinco anos que a unidade entrou em operação.",
    "Deve haverem soluções mais econômicas.",
    "Existem diversas alternativas técnicas para o problema."],
  correta:4,
  explicacao:"O verbo **existir** é pessoal e concorda com o sujeito (“diversas alternativas”). Já **haver** no sentido de existir e **fazer** indicando tempo decorrido são **impessoais** e ficam sempre no singular: “Faz cinco anos”, “Havia muitos técnicos”, “Deve haver soluções”.",
  pegadinha:"“Vendem-se equipamentos” é voz passiva sintética, cujo sujeito é “equipamentos” — o verbo vai para o plural. Diferente de “Precisa-se de funcionários”, em que o “se” é índice de indeterminação do sujeito e o verbo permanece no singular." },

{ id:"POR-10", tema:"portugues", subtema:"Concordância nominal", nivel:"medio",
  enunciado:"Assinale a opção em que a concordância nominal está **incorreta**.",
  alternativas:[
    "Bastantes candidatos compareceram à avaliação.",
    "Foi necessário muita cautela na execução da manobra.",
    "Os relatórios seguem em anexo, conforme solicitado.",
    "É proibida a entrada de pessoas não autorizadas.",
    "Seguem anexas as planilhas de manutenção."],
  correta:1,
  explicacao:"“É necessário” só permanece invariável quando o sujeito vem **sem determinante** (“É necessário cautela”). Com o determinante “muita”, o correto é “Foi **necessária** muita cautela”. As demais estão corretas: “em anexo” é locução invariável; “anexas” concorda com “planilhas”; e “bastantes”, como pronome indefinido adjetivo, varia.",
  pegadinha:"“Menos” e “alerta” como advérbio são invariáveis: “menos pessoas” (nunca “menas”)." },

{ id:"POR-11", tema:"portugues", subtema:"Regência verbal", nivel:"medio",
  enunciado:"Assinale a opção em que a regência verbal está de acordo com a norma-padrão.",
  alternativas:[
    "O engenheiro aspirava ao cargo de coordenador da unidade.",
    "Prefiro trabalhar em campo do que no escritório.",
    "A nova diretriz implicou em mudanças no procedimento.",
    "Os técnicos assistiram o treinamento de segurança na sala de reuniões.",
    "Ele obedeceu as instruções do supervisor sem questionar."],
  correta:0,
  explicacao:"No sentido de **almejar**, “aspirar” é transitivo indireto e rege a preposição **a**. Correções das demais: “assistiram **ao** treinamento” (no sentido de presenciar); “Prefiro trabalhar em campo **a** trabalhar no escritório”; “implicou mudanças” (transitivo direto no sentido de acarretar); “obedeceu **às** instruções”.",
  pegadinha:"Alguns verbos mudam de sentido com a regência: **aspirar o ar** (sorver) × **aspirar ao cargo** (almejar); **visar o cheque** (assinar) × **visar ao lucro** (almejar); **assistir o doente** (dar assistência) × **assistir ao jogo** (presenciar)." },

{ id:"POR-12", tema:"portugues", subtema:"Colocação pronominal", nivel:"dificil",
  enunciado:"Assinale a opção em que a colocação do pronome átono está de acordo com a norma-padrão.",
  alternativas:[
    "Me parece que a solução é mais simples do que se imagina.",
    "Não diga-me que o prazo foi novamente prorrogado.",
    "Tudo se resolverá assim que o relatório for aprovado.",
    "Quando encontrar-me com o gerente, apresentarei a proposta.",
    "Nunca esqueceremo-nos do treinamento realizado naquela ocasião."],
  correta:2,
  explicacao:"O pronome indefinido “Tudo” é palavra atrativa e exige **próclise**. Nas demais: a palavra negativa “Não” atrai o pronome (“Não **me** diga”); não se inicia período com pronome átono na norma-padrão (“**Parece-me**”); a conjunção subordinativa “Quando” atrai o pronome (“Quando **me** encontrar”).",
  pegadinha:"São fatores de próclise: palavras negativas, advérbios, pronomes relativos, indefinidos e interrogativos, conjunções subordinativas e orações optativas. A **mesóclise** só ocorre em futuro do presente ou do pretérito **sem** fator de próclise." },

{ id:"POR-13", tema:"portugues", subtema:"Emprego dos sinais de pontuação", nivel:"medio",
  enunciado:"Assinale a opção em que a pontuação está **correta**.",
  alternativas:[
    "Os equipamentos que apresentaram falha, foram retirados de operação.",
    "Segundo o supervisor a manobra foi executada conforme o previsto.",
    "Solicitamos, portanto que sejam revistos os procedimentos.",
    "O relatório, que foi entregue ontem, apresenta as recomendações finais.",
    "A equipe de manutenção preventiva, concluiu a inspeção no prazo previsto."],
  correta:3,
  explicacao:"A oração adjetiva **explicativa** vem obrigatoriamente entre vírgulas. As demais violam regras básicas: não se separa sujeito de predicado por vírgula (opções E e A); o conectivo intercalado “portanto” exige vírgulas dos dois lados; e a oração adverbial deslocada para o início (“Segundo o supervisor”) deve ser isolada por vírgula.",
  pegadinha:"Adjetiva **restritiva** (sem vírgulas) delimita o antecedente; **explicativa** (entre vírgulas) apenas acrescenta informação. Trocar uma pela outra altera o sentido." },

{ id:"POR-14", tema:"portugues", subtema:"Emprego de tempos e modos verbais", nivel:"medio",
  enunciado:"Assinale a opção em que a forma verbal está empregada de acordo com a norma-padrão.",
  alternativas:[
    "Caso ela mantenha o cronograma, entregaremos no prazo.",
    "Se ele intervir no processo, o resultado será outro.",
    "Quando ele repor as peças, o equipamento voltará a operar.",
    "Assim que eles porem o sistema em operação, avisaremos.",
    "Se eu ver o relatório antes da reunião, farei os comentários."],
  correta:0,
  explicacao:"“Caso” exige **presente do subjuntivo**: “mantenha” está correto. Correções das demais: futuro do subjuntivo de ver é “**vir**” (Se eu vir); de repor é “**repuser**”; de intervir é “**intervier**”; de pôr é “**puserem**”.",
  pegadinha:"O futuro do subjuntivo dos verbos irregulares deriva do pretérito perfeito: fiz → fizer; pus → puser; vim → vier; vi → vir; trouxe → trouxer." },

{ id:"POR-15", tema:"portugues", subtema:"Ortografia oficial", nivel:"medio",
  enunciado:"Assinale a opção em que a palavra destacada foi empregada **corretamente**.",
  alternativas:[
    "Fizemos a reunião **a cerca** de dois meses.",
    "Ele agiu **de encontro** aos interesses da empresa, que aprovou sua conduta.",
    "**Onde** você vai depois da reunião?",
    "O **conserto** entre as partes foi assinado na semana passada.",
    "A equipe trabalhou o dia todo, **mas** não concluiu o serviço."],
  correta:4,
  explicacao:"“Mas” é a conjunção adversativa, correta no contexto. Nas demais: **acordo/pacto** é “concerto” (com C); “conserto” é reparo. **De encontro a** significa contra, em oposição — se a empresa aprovou, o correto seria “ao encontro dos”. Para deslocamento usa-se **aonde** (“Aonde você vai?”). E tempo decorrido pede **há** (“há cerca de dois meses”).",
  pegadinha:"Outras duplas cobradas: **mal** (advérbio, oposto de bem) × **mau** (adjetivo, oposto de bom); **a fim de** (finalidade) × **afim** (semelhante); **senão** (caso contrário) × **se não** (caso não)." },

{ id:"POR-16", tema:"portugues", subtema:"Significação das palavras", nivel:"medio",
  enunciado:"No período “**Conquanto** os prazos fossem apertados, a equipe concluiu o serviço”, o conector destacado pode ser substituído, sem alteração de sentido, por",
  alternativas:["porquanto.","porque.","portanto.","embora.","assim que."],
  correta:3,
  explicacao:"“Conquanto” é conjunção **concessiva**, equivalente a embora, ainda que, se bem que, posto que. Ela admite um fato contrário ao esperado sem impedir a realização da oração principal.",
  pegadinha:"Cuidado com o par: **conquanto** = embora (concessiva); **porquanto** = porque, já que (explicativa/causal). A semelhança gráfica é armadilha frequente." },

{ id:"POR-17", tema:"portugues", subtema:"Vozes verbais", nivel:"medio",
  enunciado:"O período “A empresa implantou novos procedimentos de inspeção” transposto para a voz passiva analítica resulta em",
  alternativas:[
    "Novos procedimentos de inspeção implantaram a empresa.",
    "A empresa foi implantada em novos procedimentos de inspeção.",
    "Novos procedimentos de inspeção foram implantados pela empresa.",
    "Implantou-se a empresa em novos procedimentos de inspeção.",
    "Implantaram-se novos procedimentos de inspeção."],
  correta:2,
  explicacao:"Na passiva analítica, o objeto direto vira sujeito paciente, o verbo assume a forma “ser + particípio” e o sujeito da ativa vira agente da passiva. A alternativa E é a passiva **sintética** (pronominal), também correta gramaticalmente, mas não é a forma pedida pelo enunciado.",
  pegadinha:"Só verbos **transitivos diretos** (ou diretos e indiretos) admitem voz passiva." },

{ id:"POR-18", tema:"portugues", subtema:"Emprego das classes de palavras", nivel:"medio",
  enunciado:"Na frase “Os operadores estavam **bastante** atentos aos indicadores de pressão”, a palavra destacada é",
  alternativas:[
    "substantivo.",
    "advérbio de intensidade, portanto invariável.",
    "adjetivo, concordando com “atentos”.",
    "pronome indefinido, devendo concordar com “operadores”.",
    "conjunção."],
  correta:1,
  explicacao:"Modificando um **adjetivo** (“atentos”), “bastante” é advérbio de intensidade e não varia. Se modificasse um **substantivo** (“bastantes operadores”), seria pronome indefinido adjetivo e concordaria em número.",
  pegadinha:"O mesmo raciocínio vale para “meio”: “meio cansada” (advérbio, invariável) × “meia porção” (numeral, variável)." },

{ id:"POR-19", tema:"portugues", subtema:"Coesão e coerência", nivel:"medio",
  enunciado:"Assinale a opção em que o conectivo estabelece corretamente a relação lógica indicada entre parênteses.",
  alternativas:[
    "Houve falha na alimentação elétrica; **por isso**, o equipamento parou. (consequência)",
    "O equipamento parou **à medida que** houve falha elétrica. (finalidade)",
    "O equipamento parou; **portanto**, houve falha na alimentação elétrica. (causa)",
    "Não houve falha; **todavia**, o equipamento parou por isso. (conclusão)",
    "O equipamento parou **embora** tenha havido falha elétrica. (causa)"],
  correta:0,
  explicacao:"“Por isso” é conectivo **conclusivo/consecutivo**: a parada do equipamento é a consequência da falha elétrica. Na opção C a relação está invertida (portanto introduz conclusão, não causa); em C, “embora” é concessivo; em D, “todavia” é adversativo e o período fica contraditório; em E, “à medida que” é proporcional, não final." },

{ id:"POR-20", tema:"portugues", subtema:"Compreensão de textos", nivel:"medio",
  texto:"Leia o fragmento:\n\n“A segurança de processo não se constrói com heroísmo individual. Ela se constrói com procedimentos escritos, revisados e efetivamente seguidos — inclusive, e sobretudo, nos dias em que tudo parece estar sob controle.”",
  enunciado:"Depreende-se do fragmento que a segurança de processo",
  alternativas:[
    "depende primordialmente da coragem e da iniciativa de cada trabalhador.",
    "é incompatível com a existência de normas e procedimentos rígidos.",
    "só deve ser praticada em situações de emergência declarada.",
    "é resultado de disciplina sistemática e de rotinas formalizadas, especialmente nos períodos de aparente normalidade.",
    "torna dispensáveis os procedimentos escritos quando a equipe é experiente."],
  correta:3,
  explicacao:"O trecho opõe explicitamente “heroísmo individual” a “procedimentos escritos, revisados e efetivamente seguidos”, e o segmento final (“inclusive, e sobretudo, nos dias em que tudo parece estar sob controle”) reforça a exigência de disciplina justamente na normalidade.",
  pegadinha:"O travessão, aqui, introduz um acréscimo enfático — recurso frequente para destacar a informação mais importante do período." },

{ id:"POR-21", tema:"portugues", subtema:"Emprego dos sinais de pontuação", nivel:"dificil",
  enunciado:"Assinale a opção em que a substituição da vírgula por ponto e vírgula preserva a correção gramatical e o sentido do período.",
  alternativas:[
    "Quando o alarme soou, todos deixaram a área imediatamente.",
    "A primeira equipe cuidou da inspeção externa, a segunda, da interna.",
    "O supervisor, que coordenou a manobra, elogiou a equipe.",
    "O relatório, entregue ontem, foi aprovado pela diretoria.",
    "Compramos válvulas, flanges e parafusos para a montagem."],
  correta:1,
  explicacao:"O ponto e vírgula é adequado para separar orações coordenadas **extensas ou que já contenham vírgulas internas** — exatamente o caso de “a segunda, da interna”, em que a vírgula marca a elipse do verbo. Nas demais opções, a vírgula tem função sintática específica (enumeração, aposto, adjunto deslocado, oração adjetiva explicativa) e não admite substituição." },

{ id:"POR-22", tema:"portugues", subtema:"Regência nominal", nivel:"medio",
  enunciado:"Assinale a opção em que a regência **nominal** está de acordo com a norma-padrão.",
  alternativas:[
    "Ela é imune contra qualquer tipo de pressão.",
    "Ele demonstrou ser apto para dirigir a operação, embora avesso à mudanças.",
    "O procedimento é passível de revisão a qualquer momento.",
    "A empresa está atenta com as exigências ambientais.",
    "O resultado foi compatível às expectativas do cliente."],
  correta:2,
  explicacao:"“Passível **de**” é a regência correta. Correções: “avesso **a** mudanças” (sem crase, pois não há artigo antes de plural indefinido); “atenta **a**” ou “atenta **para**”; “compatível **com**”; “imune **a**”.",
  pegadinha:"Regências nominais recorrentes em prova: acessível a, análogo a, ávido de/por, curioso de/sobre, propenso a, relativo a, respeito a/por, prestes a." },

{ id:"POR-23", tema:"portugues", subtema:"Concordância verbal", nivel:"dificil",
  enunciado:"Assinale a opção em que a concordância está de acordo com a norma-padrão.",
  alternativas:[
    "Nenhum dos candidatos apresentaram a documentação exigida.",
    "Fazem dois anos que o equipamento foi substituído.",
    "Foi eu quem elaborou o relatório final.",
    "Cerca de vinte técnicos participou da capacitação.",
    "Mais de um equipamento apresentou falha no último trimestre."],
  correta:4,
  explicacao:"Com a expressão **“mais de um”**, o verbo fica no singular, ainda que a ideia seja de pluralidade (salvo em caso de reciprocidade: “Mais de um se agrediram”). Correções das demais: “Cerca de vinte técnicos **participaram**”; “Nenhum dos candidatos **apresentou**”; “**Fui** eu quem elaborou” (com “quem”, o verbo da segunda oração fica na 3ª pessoa); “**Faz** dois anos” (o verbo fazer indicando tempo decorrido é impessoal)." },

{ id:"POR-24", tema:"portugues", subtema:"Significação das palavras", nivel:"facil",
  enunciado:"No trecho “A perícia constatou que o **iminente** risco de vazamento já havia sido reportado”, a palavra destacada significa",
  alternativas:[
    "duradouro e permanente.",
    "de origem interna.",
    "de grande importância e destaque.",
    "prestes a acontecer.",
    "sem importância."],
  correta:3,
  explicacao:"**Iminente** = que está prestes a ocorrer. Não confundir com **eminente** = notável, ilustre, elevado. A norma regulamentadora fala em “grave e **iminente** risco”, justamente no sentido de perigo prestes a se concretizar.",
  pegadinha:"Outros parônimos frequentes: infligir (aplicar pena) × infringir (violar); ratificar (confirmar) × retificar (corrigir); tráfego (trânsito) × tráfico (comércio ilícito); descriminar (retirar do crime) × discriminar (distinguir, segregar)." }

);
