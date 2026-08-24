var TXT_ENG_A =
"**Text I**\n\n" +
"1  Pipeline integrity management has evolved from a reactive discipline into a predictive one. " +
"For decades, operators responded to failures after they occurred; today, the emphasis lies on " +
"anticipating them. In-line inspection tools, commonly known as smart pigs, travel inside the " +
"5  pipeline propelled by the product itself, recording wall thickness, metal loss and geometric " +
"deformations along thousands of kilometres.\n" +
"    The data these devices collect would be worthless, however, unless engineers were able to " +
"interpret it. Corrosion growth rates must be estimated, remaining strength calculated and " +
"10 repair priorities established. A defect that appears alarming on a report may prove harmless, " +
"whereas a modest anomaly located in a highly stressed section may demand immediate action.\n" +
"    Because pipelines often cross populated areas and sensitive ecosystems, the cost of failure " +
"is not merely financial. Regulators have therefore tightened requirements, and operators have " +
"15 had to invest heavily in monitoring. Far from being an expense, such investment has increasingly " +
"been regarded as the cheapest insurance available.";

var TXT_ENG_B =
"**Text II**\n\n" +
"1  Pumping systems account for nearly 20% of the world's electrical energy demand. " +
"Surprisingly, a large share of that energy is wasted. Many pumps were oversized at the design " +
"stage, and their flow is then controlled by throttling a valve — a practice comparable to " +
"5  driving a car with the accelerator pressed to the floor while braking to control the speed.\n" +
"    Variable speed drives offer a far better alternative. Since the power absorbed by a " +
"centrifugal pump varies with the cube of its rotational speed, even a modest reduction in " +
"speed yields substantial savings. Retrofitting existing installations, though, requires careful " +
"10 analysis: systems dominated by static head respond much less favourably than those dominated " +
"by friction losses.";

window.BANCO.push(

{ id:"ING-01", tema:"ingles", subtema:"Reading comprehension", nivel:"medio",
  texto:TXT_ENG_A,
  enunciado:"According to Text I, the main change in pipeline integrity management has been the shift from",
  alternativas:[
    "onshore pipelines to offshore pipelines.",
    "a reactive approach, in which failures were addressed after occurring, to a predictive one, focused on anticipating them.",
    "manual inspection to automated welding.",
    "government regulation to voluntary self-assessment.",
    "predictive maintenance back to corrective maintenance."],
  correta:1,
  explicacao:"As linhas 1 a 3 são explícitas: “has evolved from a reactive discipline into a predictive one [...] today, the emphasis lies on anticipating them”." },

{ id:"ING-02", tema:"ingles", subtema:"Vocabulary", nivel:"medio",
  texto:TXT_ENG_A,
  enunciado:"In the fragment “The data these devices collect would be **worthless**” (l. 7), the word in bold means",
  alternativas:["stored electronically.","of no value or use.","extremely valuable.","difficult to obtain.","expensive to process."],
  correta:1,
  explicacao:"O sufixo **-less** indica ausência: worth (valor) + less = sem valor. Compare com **-ful** (useful, harmful) e com outros exemplos: harmless, useless, endless, priceless (este último, atenção, significa *inestimável*, ou seja, valiosíssimo)." },

{ id:"ING-03", tema:"ingles", subtema:"Reading comprehension", nivel:"medio",
  texto:TXT_ENG_A,
  enunciado:"The relationship expressed by the connector “**whereas**” (l. 11) is one of",
  alternativas:["purpose.","addition.","cause.","contrast.","condition."],
  correta:3,
  explicacao:"**Whereas** introduz **contraste**, equivalendo a *while* (no sentido contrastivo) ou *on the other hand*. No trecho, opõe o defeito de aparência alarmante mas inofensivo à anomalia modesta que exige ação imediata.",
  pegadinha:"Conectores de contraste frequentes: however, nevertheless, nonetheless, yet, although, though, even though, despite/in spite of (seguidos de substantivo ou -ing), whereas, while." },

{ id:"ING-04", tema:"ingles", subtema:"Reading comprehension", nivel:"dificil",
  texto:TXT_ENG_A,
  enunciado:"The last sentence of Text I — “Far from being an expense, such investment has increasingly been regarded as the cheapest insurance available” — indicates that the investment in monitoring is",
  alternativas:[
    "considered a waste of resources by most operators.",
    "cheaper than any other type of insurance policy on the market.",
    "seen not as a cost, but as the most economical way of preventing much greater losses.",
    "gradually being abandoned due to its price.",
    "required only in populated areas."],
  correta:2,
  explicacao:"A expressão **far from** nega enfaticamente o que vem a seguir (“longe de ser uma despesa”). O trecho argumenta que o monitoramento é a forma mais barata de prevenir perdas maiores — a palavra *insurance* é usada em sentido **figurado**, o que descarta a alternativa B." },

{ id:"ING-05", tema:"ingles", subtema:"Grammar — conditionals", nivel:"dificil",
  texto:TXT_ENG_A,
  enunciado:"In “The data these devices collect **would be** worthless, however, **unless** engineers **were able** to interpret it” (l. 7-8), the structure used corresponds to",
  alternativas:[
    "a first conditional, expressing a likely future situation.",
    "reported speech.",
    "a zero conditional, expressing a general truth.",
    "a third conditional, expressing an unreal situation in the past.",
    "a second conditional, expressing a hypothetical situation in the present."],
  correta:4,
  explicacao:"Estrutura da **segunda condicional**: *if/unless + past simple, would + infinitive*, para hipóteses no presente ou futuro improvável. **Unless** equivale a *if... not*: “unless engineers were able” = “if engineers were not able”.",
  pegadinha:"Zero: *if + present, present* (verdades gerais). Primeira: *if + present, will + inf* (futuro provável). Terceira: *if + past perfect, would have + particípio* (passado irreal)." },

{ id:"ING-06", tema:"ingles", subtema:"Vocabulary", nivel:"medio",
  texto:TXT_ENG_A,
  enunciado:"In “Regulators have therefore **tightened** requirements” (l. 13-14), the verb in bold is closest in meaning to",
  alternativas:["made stricter.","relaxed.","published.","cancelled.","postponed."],
  correta:0,
  explicacao:"**To tighten** significa apertar, tornar mais rígido — o oposto de *to loosen* ou *to relax*. Também aparece no sentido literal em engenharia: *to tighten a bolt* (apertar um parafuso)." },

{ id:"ING-07", tema:"ingles", subtema:"Reading comprehension", nivel:"medio",
  texto:TXT_ENG_B,
  enunciado:"According to Text II, throttling a valve to control pump flow is compared to driving a car with the accelerator fully pressed while braking because both practices",
  alternativas:[
    "consume energy that is then deliberately destroyed, resulting in waste.",
    "increase the useful life of the equipment.",
    "reduce the pressure at the pump discharge with no energy penalty.",
    "are the recommended procedures in modern installations.",
    "are impossible to implement in practice."],
  correta:0,
  explicacao:"A analogia ilustra a ineficiência: a bomba continua entregando energia plena e parte dela é dissipada na válvula de controle, exatamente como a energia do motor dissipada nos freios." },

{ id:"ING-08", tema:"ingles", subtema:"Reading comprehension", nivel:"medio",
  texto:TXT_ENG_B,
  enunciado:"Text II states that the power absorbed by a centrifugal pump varies with the **cube** of its rotational speed. This means that reducing the speed to 80% of the original value reduces the power to approximately",
  alternativas:["20%","40%","51%","64%","80%"],
  correta:2,
  calculo:"P ∝ n³\n(0,80)³ = 0,512 → about 51%",
  explicacao:"É a terceira lei de semelhança das turbomáquinas: reduzir apenas 20% da rotação corta praticamente metade da potência consumida — a base da economia obtida com inversores de frequência.",
  pegadinha:"64% seria o quadrado (a variação da **altura manométrica**), e 80%, a variação linear (a **vazão**)." },

{ id:"ING-09", tema:"ingles", subtema:"Reading comprehension", nivel:"dificil",
  texto:TXT_ENG_B,
  enunciado:"According to the last sentence of Text II, retrofitting existing installations with variable speed drives is **less** advantageous in systems",
  alternativas:[
    "with more than one pump in parallel.",
    "dominated by static head.",
    "using centrifugal pumps.",
    "dominated by friction losses.",
    "operating at constant flow."],
  correta:1,
  explicacao:"O texto afirma que “systems dominated by static head respond much less favourably”. Faz sentido físico: a altura estática não diminui com a rotação, de modo que existe uma rotação mínima abaixo da qual a bomba simplesmente não entrega vazão alguma." },

{ id:"ING-10", tema:"ingles", subtema:"Vocabulary", nivel:"medio",
  texto:TXT_ENG_B,
  enunciado:"In “even a modest reduction in speed **yields** substantial savings” (l. 8), the verb in bold can be replaced, without change in meaning, by",
  alternativas:["prevents.","measures.","produces.","delays.","requires."],
  correta:2,
  explicacao:"**To yield** = produzir, render, gerar (também: ceder). Em contextos técnicos, cuidado com o falso amigo: *yield strength* é a **tensão de escoamento**, e *yield point*, o ponto de escoamento." },

{ id:"ING-11", tema:"ingles", subtema:"Grammar — modal verbs", nivel:"medio",
  enunciado:"Read the sentence: “All personnel **must** wear hearing protection in this area.” The modal verb in bold expresses",
  alternativas:["possibility.","advice.","ability.","obligation.","permission."],
  correta:3,
  explicacao:"**Must** expressa obrigação forte, frequentemente vinda de norma ou regulamento. Compare: *should* (conselho, recomendação), *may/might* (possibilidade ou permissão), *can/could* (capacidade ou permissão informal), *have to* (obrigação, muitas vezes externa).",
  pegadinha:"Atenção à negativa: **mustn't** = proibição (“não se pode”), enquanto **don't have to** = ausência de obrigação (“não é necessário”). São sentidos opostos." },

{ id:"ING-12", tema:"ingles", subtema:"Grammar — passive voice", nivel:"medio",
  enunciado:"Choose the option that correctly transforms the sentence “The technicians inspected the valves last week” into the passive voice.",
  alternativas:[
    "The valves have been inspected by the technicians last week.",
    "The valves was inspected by the technicians last week.",
    "The valves are inspected by the technicians last week.",
    "The technicians were inspected the valves last week.",
    "The valves were inspected by the technicians last week."],
  correta:4,
  explicacao:"Passiva = *be* no mesmo tempo do verbo original + particípio passado. Como o original está no *past simple* e o sujeito paciente é plural, usa-se **were inspected**.",
  pegadinha:"A expressão de tempo definido *last week* é incompatível com o *present perfect* — o que elimina a alternativa A." },

{ id:"ING-13", tema:"ingles", subtema:"Grammar — verb tenses", nivel:"medio",
  enunciado:"Choose the option that completes the sentence correctly: “The compressor _______ in operation since 2019 without any major overhaul.”",
  alternativas:["has been","is","was","had been","will be"],
  correta:0,
  explicacao:"O marcador **since** (ponto de início) exige *present perfect* para ações iniciadas no passado e que continuam até o presente. Com **for** (duração), a mesma estrutura se aplica: *has been in operation for six years*." },

{ id:"ING-14", tema:"ingles", subtema:"Technical vocabulary", nivel:"medio",
  enunciado:"In a maintenance report, the term “**shutdown**” refers to",
  alternativas:[
    "the closing of a company.",
    "a software update.",
    "a planned or unplanned stoppage of a plant or equipment for maintenance or safety reasons.",
    "the start-up procedure of a unit.",
    "an unexpected increase in production."],
  correta:2,
  explicacao:"Vocabulário técnico frequente: **shutdown** (parada), **start-up** (partida), **turnaround** (parada geral programada de uma unidade), **downtime** (tempo de indisponibilidade), **uptime** (tempo em operação), **overhaul** (revisão geral), **troubleshooting** (diagnóstico de falhas)." },

{ id:"ING-15", tema:"ingles", subtema:"Technical vocabulary", nivel:"medio",
  enunciado:"Match the technical terms with their meanings. The option in which the term and its Portuguese equivalent are **correctly** paired is",
  alternativas:[
    "shaft — carcaça",
    "bearing — rolamento ou mancal",
    "gasket — parafuso",
    "gauge — engrenagem",
    "hose — mangueira de aço forjado"],
  correta:1,
  explicacao:"Correspondências corretas: **bearing** = mancal/rolamento; **shaft** = eixo; **housing/casing** = carcaça; **gauge** = manômetro ou calibre; **gear** = engrenagem; **gasket** = junta de vedação; **bolt** = parafuso; **hose** = mangueira (flexível).",
  pegadinha:"Outros pares úteis: *weld* (solda), *pipe/tubing* (tubo), *fitting* (conexão), *nozzle* (bocal), *impeller* (rotor de bomba), *blade* (palheta), *seal* (selo), *sleeve* (luva), *pig* (dispositivo de limpeza/inspeção de dutos)." },

{ id:"ING-16", tema:"ingles", subtema:"Grammar — comparatives", nivel:"facil",
  enunciado:"Choose the option that correctly completes the sentence: “Contra-current heat exchangers are usually _______ than parallel-flow ones.”",
  alternativas:["most efficient","efficienter","the more efficient","more efficient","as efficient"],
  correta:3,
  explicacao:"Adjetivos com três ou mais sílabas formam o comparativo com **more... than** e o superlativo com **the most**. Adjetivos curtos usam **-er/-est** (*larger, largest*). Formas irregulares: good/better/best, bad/worse/worst, far/further/furthest." },

{ id:"ING-17", tema:"ingles", subtema:"Grammar — relative pronouns", nivel:"medio",
  enunciado:"Choose the option that correctly completes the sentence: “The engineer _______ designed the system will present the results tomorrow.”",
  alternativas:["what","where","whose","which","who"],
  correta:4,
  explicacao:"**Who** refere-se a pessoas e exerce função de sujeito ou objeto; **which** refere-se a coisas; **that** serve para ambos em orações restritivas; **whose** indica posse; **where** indica lugar; **when**, tempo.",
  pegadinha:"Em orações **não restritivas** (entre vírgulas), *that* não pode ser usado: “The pump, **which** was installed in 2020, failed last week.”" },

{ id:"ING-18", tema:"ingles", subtema:"Vocabulary — false friends", nivel:"dificil",
  enunciado:"In the sentence “The manager will **eventually** approve the new procedure”, the adverb in bold means",
  alternativas:[
    "immediately.",
    "occasionally, from time to time.",
    "in the end, after some time.",
    "possibly, but with little chance.",
    "never."],
  correta:2,
  explicacao:"**Eventually** é um falso cognato clássico: significa *finalmente, com o tempo* — e não *eventualmente*, que em inglês seria *occasionally*.",
  pegadinha:"Outros falsos cognatos frequentes: *actually* (na verdade, não atualmente = currently); *comprehensive* (abrangente, não compreensivo); *pretend* (fingir, não pretender = intend); *support* (apoiar/suportar carga, mas não tolerar = to stand); *realize* (perceber); *parents* (pais, não parentes = relatives)." },

{ id:"ING-19", tema:"ingles", subtema:"Grammar — reported speech", nivel:"dificil",
  enunciado:"Choose the option that correctly reports the sentence: The supervisor said, “We are testing the new valve today.”",
  alternativas:[
    "The supervisor said that we are testing the new valve today.",
    "The supervisor said that they were testing the new valve that day.",
    "The supervisor said that they will test the new valve that day.",
    "The supervisor asked if they were testing the new valve.",
    "The supervisor said that they have tested the new valve today."],
  correta:1,
  explicacao:"No discurso indireto com verbo introdutor no passado, aplica-se o *backshift*: *present continuous* → *past continuous*. Os marcadores também mudam: *today* → *that day*; *now* → *then*; *tomorrow* → *the following day*; *here* → *there*; e os pronomes se ajustam ao novo ponto de vista." },

{ id:"ING-20", tema:"ingles", subtema:"Reading comprehension", nivel:"medio",
  texto:"Read the following safety notice:\n\n“Before entering any confined space, the atmosphere **shall** be tested for oxygen content, flammable gases and toxic contaminants. Entry is prohibited unless the oxygen concentration is between 19.5% and 23.0% by volume. An attendant shall remain outside the space at all times.”",
  enunciado:"According to the notice, entry into a confined space is allowed when",
  alternativas:[
    "the atmosphere has been tested at least once in the previous month.",
    "the oxygen concentration is above 23.0%.",
    "flammable gases are present in low concentration and no attendant is required.",
    "the oxygen concentration lies between 19.5% and 23.0%, and an attendant remains outside the space.",
    "the worker wears a dust mask."],
  correta:3,
  explicacao:"O aviso impõe duas condições cumulativas: a faixa de oxigênio e a permanência do vigia (*attendant*) do lado de fora. Atenção ao **unless** (a menos que), que inverte a condição.",
  pegadinha:"Em textos normativos em inglês, **shall** expressa obrigação (equivale a *must*), **should** expressa recomendação e **may** expressa permissão — distinção decisiva na leitura de códigos como ASME e API." }

);
