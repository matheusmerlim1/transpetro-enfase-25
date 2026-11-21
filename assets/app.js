/* ============================================================
   Banco de questões TRANSPETRO 2026 — Ênfase 25 Eng. Mecânica
   ============================================================ */
(function () {
  "use strict";

  var BANCO = window.BANCO || [];
  var TEMAS = window.TEMAS || {};
  var EDITAL = window.EDITAL || {};
  var FORMULARIO = window.FORMULARIO || [];
  var RESUMO = window.RESUMO || [];
  var VERBETES = window.VERBETES || [];
  var FIGURAS = window.FIGURAS || {};
  var SIMBOLOS = window.SIMBOLOS || {};

  /* ---------- legenda das variáveis de um resumo ----------
     Varre os símbolos das próprias fórmulas do verbete e devolve os que
     estiverem definidos no dicionário do tema. O dicionário funciona como
     lista branca: palavra de texto corrido não está lá e não vira variável.
     O dicionário é por tema porque o mesmo símbolo muda de significado
     conforme o assunto (R é constante do gás, resistência ou confiabilidade). */
  var RE_SIMBOLO = /[A-Za-zÀ-ÿΑ-Ωα-ω][A-Za-zÀ-ÿΑ-Ωα-ω0-9_₀-₉'′]*/g;

  function legendaVars(v) {
    var dic = SIMBOLOS[v.tema];
    if (!dic || !v.formulas || !v.formulas.length) return [];
    var achados = {}, ordem = [];
    v.formulas.forEach(function (f) {
      var toks = String(f).match(RE_SIMBOLO) || [];
      toks.forEach(function (t) {
        // tenta o símbolo inteiro e, se não houver, a raiz antes do subscrito
        var chave = dic[t] !== undefined ? t
          : (t.indexOf("_") > 0 && dic[t.split("_")[0]] !== undefined ? t.split("_")[0] : null);
        if (chave === null || achados[chave]) return;
        achados[chave] = true;
        ordem.push(chave);
      });
    });
    return ordem.map(function (k) { return { s: k, d: dic[k] }; });
  }

  // desenho da questão ou do resumo: o SVG vem pronto do banco de figuras
  function renderFigura(id) {
    var f = FIGURAS[id];
    if (!f) return "";
    return '<figure class="qfig">' + f.svg +
      (f.titulo ? '<figcaption class="qfig-leg">' + esc(f.titulo) + "</figcaption>" : "") +
      "</figure>";
  }

  var DATA_PROVA = new Date(2026, 11, 6, 9, 0, 0); // 06/12/2026 (adiada de 29/11)

  /* ---------- armazenamento ---------- */
  var KEY = "transpetro2026_mec_v1";
  var S = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        o.stats = o.stats || {};
        o.star = o.star || {};
        o.simulados = o.simulados || [];
        return o;
      }
    } catch (e) {}
    return { stats: {}, star: {}, simulados: [], theme: null };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  }
  function st(id) {
    if (!S.stats[id]) S.stats[id] = { acertos: 0, erros: 0, seq: 0, rev: false };
    return S.stats[id];
  }
  function registrar(id, acertou) {
    var s = st(id);
    if (acertou) { s.acertos++; s.seq++; if (s.seq >= 2) s.rev = false; }
    else { s.erros++; s.seq = 0; s.rev = true; }
    save();
  }

  /* ---------- utilidades ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var LETRAS = ["A", "B", "C", "D", "E"];

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // marcação mínima: **negrito**, _itálico_
  // no enunciado, o trecho entre ** é o termo sob análise: destaque colorido,
  // bem mais legível que negrito no meio de um período longo
  function fmtQ(t) {
    return esc(t)
      .replace(/\*\*(.+?)\*\*/g, '<mark class="termo">$1</mark>')
      .replace(/_(.+?)_/g, "<i>$1</i>");
  }
  function fmt(t) {
    return esc(t)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/_(.+?)_/g, "<i>$1</i>");
  }
  /* ---------- fórmulas e blocos de dados ----------
     As fórmulas vinham separadas apenas por corridas de espaço, o que as deixava
     coladas lado a lado e ilegíveis em tela estreita. Cada expressão agora vira
     um bloco próprio, e as anotações ficam visualmente subordinadas a ela. */
  function partes(l) {
    return l.split(/\s{3,}/).map(function (s) { return s.trim(); }).filter(Boolean);
  }

  // bloco de dados do enunciado: pares rótulo/valor alinhados em coluna
  function renderDados(txt) {
    var h = '<div class="qbox">';
    txt.split("\n").forEach(function (l) {
      if (!l.trim()) { h += '<span class="d-full d-gap"></span>'; return; }
      var par = l.match(/^([^=]{2,44}?):\s{2,}(.+)$/);
      if (par) {
        h += '<span class="d-k">' + esc(par[1].trim()) + "</span>" +
             '<span class="d-v">' + esc(par[2].trim()) + "</span>";
        return;
      }
      var ps = l.split(/\s{2,}|\s*;\s+/).map(function (s) { return s.trim(); }).filter(Boolean);
      if (ps.length > 1 && ps.some(function (s) { return s.indexOf("=") >= 0; })) {
        ps.forEach(function (s) { h += '<span class="d-full d-v">' + esc(s) + "</span>"; });
        return;
      }
      h += '<span class="d-full d-v">' + esc(l.trim()) + "</span>";
    });
    return h + "</div>";
  }

  // memória de cálculo: o passo à esquerda, a anotação do passo à direita
  function renderCalculo(txt) {
    var h = '<div class="calc">';
    txt.split("\n").forEach(function (l) {
      if (!l.trim()) { h += '<div class="cl-gap"></div>'; return; }
      var ps = partes(l);
      h += '<div class="cl"><span class="cm">' + esc(ps[0]) + "</span>";
      if (ps.length > 1) h += '<span class="cn">' + esc(ps.slice(1).join("   ")) + "</span>";
      h += "</div>";
    });
    return h + "</div>";
  }

  // formulário: uma expressão por linha; nota entre parênteses ou colchetes fica ao lado
  function renderFormula(txt) {
    var linhas = [];
    txt.split("\n").forEach(function (l) {
      partes(l).forEach(function (p) {
        if (/^[([]/.test(p) && linhas.length) linhas[linhas.length - 1].nota = p;
        else linhas.push({ exp: p, nota: "" });
      });
    });
    return '<div class="fform">' + linhas.map(function (o) {
      return '<div class="fl">' + esc(o.exp) +
        (o.nota ? '<span class="fn">' + esc(o.nota) + "</span>" : "") + "</div>";
    }).join("") + "</div>";
  }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pct(n, d) { return d ? Math.round((n / d) * 100) : 0; }
  function hhmmss(s) {
    s = Math.max(0, Math.floor(s));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), q = s % 60;
    return (h ? h + ":" : "") + String(m).padStart(2, "0") + ":" + String(q).padStart(2, "0");
  }
  function temaNome(id) { return (TEMAS[id] && TEMAS[id].nome) || id; }
  function isEsp(id) { return id !== "portugues" && id !== "ingles"; }

  /* ---------- tema visual ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    S.theme = t; save();
  }
  applyTheme(S.theme || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  $("#themeBtn").onclick = function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  };

  /* ---------- navegação ---------- */
  var rolagem = {};   // onde o candidato parou em cada aba
  function go(v) {
    var atual = $(".view.active");
    if (atual) rolagem[atual.id] = window.pageYOffset || 0;

    $$(".view").forEach(function (el) { el.classList.toggle("active", el.id === "view-" + v); });
    $$(".mainnav button").forEach(function (b) { b.classList.toggle("active", b.dataset.view === v); });

    if (v === "home") renderHome();
    if (v === "revisao") renderRevisao();

    // consultar o formulário no meio de uma questão e voltar
    // não deve fazer perder o lugar
    if (window.scrollTo) window.scrollTo(0, rolagem["view-" + v] || 0);
  }
  $$(".mainnav button").forEach(function (b) { b.onclick = function () { go(b.dataset.view); }; });
  $$("[data-goto]").forEach(function (b) { b.onclick = function () { go(b.dataset.goto); }; });

  /* ============================================================
     RESUMO DETALHADO DO ASSUNTO (verbete)
     ============================================================ */
  // cada questão cai em um verbete pelo par tema+subtema;
  // o verbete padrão do tema recolhe os subtemas não mapeados
  function verbeteDe(q) {
    var doTema = VERBETES.filter(function (v) { return v.tema === q.tema; });
    var achado = null;
    doTema.forEach(function (v) {
      if (!achado && v.subtemas && v.subtemas.indexOf(q.subtema) >= 0) achado = v;
    });
    if (achado) return achado;
    var padrao = null;
    doTema.forEach(function (v) { if (!padrao && v.padrao) padrao = v; });
    return padrao;
  }

  function abrirVerbete(v, q) {
    if (!v) return;
    $("#vpTema").textContent = temaNome(v.tema);
    $("#vpTitulo").textContent = v.titulo;

    var h = '<p class="vp-resumo">' + fmt(v.resumo) + "</p>";
    if (v.figuras) v.figuras.forEach(function (id) { h += renderFigura(id); });
    if (v.pontos && v.pontos.length) {
      h += '<div class="vp-rotulo">O que precisa estar sabido</div><ul class="vp-lista">' +
        v.pontos.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ul>";
    }
    if (v.formulas && v.formulas.length) {
      h += '<div class="vp-rotulo">Fórmulas do assunto</div><div class="vp-formulas">' +
        v.formulas.map(function (f) { return '<div class="vp-f">' + esc(f) + "</div>"; }).join("") + "</div>";
      // significado e unidade de cada variável que aparece acima
      var leg = legendaVars(v);
      if (leg.length) {
        h += '<dl class="vp-vars">' + leg.map(function (o) {
          return '<dt>' + esc(o.s) + "</dt><dd>" + esc(o.d) + "</dd>";
        }).join("") + "</dl>";
      }
    }
    if (v.armadilhas && v.armadilhas.length) {
      h += '<div class="vp-rotulo">Onde a banca costuma pegar</div><ul class="vp-lista vp-arm">' +
        v.armadilhas.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ul>";
    }
    $("#vpCorpo").innerHTML = h;

    var n = BANCO.filter(function (x) { return verbeteDe(x) === v; }).length;
    $("#vpCobertura").textContent = n + " questões do banco caem neste assunto" +
      (q && q.subtema ? " · esta é de " + q.subtema : "");

    $("#verbetePainel").classList.remove("hidden");
    $("#vpCorpo").scrollTop = 0;
    document.body.style.overflow = "hidden";
    // marca a página: o CSS usa isso para tirar da frente botões fixos de canto
    document.body.classList.add("com-modal");
  }

  function fecharVerbete() {
    $("#verbetePainel").classList.add("hidden");
    document.body.style.overflow = "";
    document.body.classList.remove("com-modal");
  }

  $$("#verbetePainel [data-fechar]").forEach(function (el) { el.onclick = fecharVerbete; });
  $("#vpFechar").onclick = fecharVerbete;
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !$("#verbetePainel").classList.contains("hidden")) fecharVerbete();
  });

  /* ============================================================
     RENDERIZAÇÃO DE QUESTÃO
     ============================================================ */
  // opts: { modo:"estudo"|"simulado"|"revisao", numero, total, respondida, escolha, onPick }
  function qHTML(q, opts) {
    var h = '<article class="q" data-id="' + q.id + '">';
    h += '<div class="qhead"><div class="qtags">';
    if (opts.numero) h += '<span class="tag">Questão ' + opts.numero + (opts.total ? "/" + opts.total : "") + "</span>";
    h += '<span class="tag tema">' + esc(temaNome(q.tema)) + "</span>";
    if (q.subtema) h += '<span class="tag">' + esc(q.subtema) + "</span>";
    h += '<span class="tag ' + q.nivel + '">' + ({ facil: "Fácil", medio: "Média", dificil: "Difícil" }[q.nivel] || q.nivel) + "</span>";
    h += "</div>";
    h += '<div class="qacoes">';
    if (verbeteDe(q)) h += '<button class="btn tiny verbbtn" title="Abrir o resumo detalhado deste assunto">Resumo do assunto</button>';
    // questão de conta: calculadora ao lado, encaixada na própria questão
    if (q.calculo) h += '<button class="btn tiny calcbtn" title="Abrir a calculadora nesta questão">Calculadora</button>';
    h += '<button class="starbtn' + (S.star[q.id] ? " on" : "") + '" title="Marcar para revisão">★</button>';
    h += "</div></div>";

    if (q.texto) h += '<p class="qtexto">' + fmtQ(q.texto) + "</p>";
    // o desenho vem entre o texto e a pergunta, como nas provas da banca
    if (q.figura) h += renderFigura(q.figura);
    if (q.dados) h += renderDados(q.dados);
    h += '<p class="qpergunta">' + fmtQ(q.enunciado) + "</p>";

    h += '<div class="alts">';
    q.alternativas.forEach(function (a, i) {
      h += '<button class="alt" data-i="' + i + '"><span class="letra">' + LETRAS[i] + "</span><span>" + fmt(a) + "</span></button>";
    });
    h += "</div>";
    h += '<div class="fbslot"></div>';
    h += "</article>";
    return h;
  }

  function marcarGabarito(root, q, escolha) {
    $$(".alt", root).forEach(function (b) {
      var i = +b.dataset.i;
      b.disabled = true;
      if (i === q.correta) b.classList.add("certa");
      else if (i === escolha) b.classList.add("errada");
    });
    var ok = escolha === q.correta;
    var slot = $(".fbslot", root);
    var h = '<div class="feedback ' + (ok ? "ok" : "bad") + '">';
    h += '<div class="fh">' + (ok ? "✓ Você acertou" : "✗ Você errou") + "</div>";

    // espelho do gabarito: uma alternativa por linha, com a letra à esquerda
    h += '<div class="gabarito">';
    q.alternativas.forEach(function (alt, i) {
      var cls = i === q.correta ? "g-certa" : (i === escolha ? "g-errada" : "");
      var marca = i === q.correta ? "✓" : (i === escolha ? "✗" : "");
      h += '<div class="g-linha ' + cls + '">' +
             '<span class="g-letra">' + LETRAS[i] + "</span>" +
             '<span class="g-texto">' + fmt(alt) + "</span>" +
             '<span class="g-marca">' + marca + "</span>" +
           "</div>";
    });
    h += '<div class="g-resumo">Gabarito: letra <b>' + LETRAS[q.correta] + "</b>" +
         (escolha == null ? " · em branco"
            : ok ? "" : " · você marcou a letra " + LETRAS[escolha]) + "</div>";
    h += "</div>";

    if (q.calculo) h += renderCalculo(q.calculo);
    h += "<p>" + fmt(q.explicacao) + "</p>";
    if (q.pegadinha) h += '<p class="muted"><b>Atenção:</b> ' + fmt(q.pegadinha) + "</p>";
    h += "</div>";
    slot.innerHTML = h;
  }

  // antes de trocar a questão, a calculadora precisa sair de dentro dela,
  // senão o innerHTML a leva junto
  function soltarCalculadora() {
    if (window.CALC) window.CALC.soltar();
  }

  // a calculadora vive em assets/calc.js e se anuncia em window.CALC
  function ligarCalculadora(root) {
    var b = $(".calcbtn", root);
    if (!b) return;
    b.onclick = function () {
      if (window.CALC) window.CALC.alternarNaQuestao(root);
    };
  }

  function ligarEstrela(root, q) {
    ligarCalculadora(root);
    var vb = $(".verbbtn", root);
    if (vb) vb.onclick = function () { abrirVerbete(verbeteDe(q), q); };
    var b = $(".starbtn", root);
    if (!b) return;
    b.onclick = function () {
      S.star[q.id] = !S.star[q.id];
      if (!S.star[q.id]) delete S.star[q.id];
      b.classList.toggle("on", !!S.star[q.id]);
      save();
    };
  }

  /* ============================================================
     HOME
     ============================================================ */
  function renderHome() {
    // contagem regressiva
    var dias = Math.ceil((DATA_PROVA - new Date()) / 86400000);
    $("#countdown").innerHTML =
      '<span class="d">' + (dias > 0 ? dias : 0) + "</span>" +
      '<span class="lbl">dias para a prova</span>' +
      '<div class="date">06/12/2026 · 4h30<br><span class="muted">70 questões · 50 específicas</span></div>';

    var feitas = 0, ac = 0, er = 0, rev = 0;
    Object.keys(S.stats).forEach(function (k) {
      var s = S.stats[k];
      if (s.acertos || s.erros) feitas++;
      ac += s.acertos; er += s.erros;
      if (s.rev) rev++;
    });
    Object.keys(S.star).forEach(function (k) { if (!(S.stats[k] && S.stats[k].rev)) rev++; });

    $("#stTotal").textContent = BANCO.length;
    $("#stFeitas").textContent = feitas;
    $("#stAcerto").textContent = (ac + er) ? pct(ac, ac + er) + "%" : "–";
    $("#stErros").textContent = rev;

    var ordem = Object.keys(TEMAS);
    var html = ordem.map(function (t) {
      var qs = BANCO.filter(function (q) { return q.tema === t; });
      if (!qs.length) return "";
      var a = 0, e = 0, vistas = 0;
      qs.forEach(function (q) {
        var s = S.stats[q.id];
        if (s && (s.acertos || s.erros)) { vistas++; a += s.acertos; e += s.erros; }
      });
      var p = (a + e) ? pct(a, a + e) : 0;
      var cls = (a + e) === 0 ? "" : p < 50 ? "low" : p < 75 ? "mid" : "";
      return '<button type="button" class="temacard" data-tema="' + t + '">' +
        '<div class="tt"><span>' + esc(TEMAS[t].nome) + "</span><span>" + qs.length + " q</span></div>" +
        '<div class="bar"><i class="' + cls + '" style="width:' + ((a + e) ? p : 0) + '%"></i></div>' +
        '<div class="sub">' + (vistas ? vistas + " vistas · " + p + "% de acerto" : "ainda não estudado") + "</div>" +
        "</button>";
    }).join("");
    $("#temaGrid").innerHTML = html;
    $$("#temaGrid .temacard").forEach(function (c) {
      c.onclick = function () {
        go("estudo");
        $$("#temaChecks input").forEach(function (i) { i.checked = i.value === c.dataset.tema; });
      };
    });
  }

  $("#resetBtn").onclick = function () {
    if (confirm("Apagar todo o seu progresso gravado neste navegador?")) {
      S = { stats: {}, star: {}, simulados: [], theme: S.theme };
      save(); renderHome();
    }
  };

  /* ============================================================
     ESTUDO
     ============================================================ */
  function renderTemaChecks() {
    var html = Object.keys(TEMAS).map(function (t) {
      var n = BANCO.filter(function (q) { return q.tema === t; }).length;
      if (!n) return "";
      return '<label><input type="checkbox" value="' + t + '" checked> ' +
        esc(TEMAS[t].nome) + '<span class="cnt">' + n + "</span></label>";
    }).join("");
    $("#temaChecks").innerHTML = html;
  }
  renderTemaChecks();

  $("#selAll").onclick = function () { $$("#temaChecks input").forEach(function (i) { i.checked = true; }); };
  $("#selNone").onclick = function () { $$("#temaChecks input").forEach(function (i) { i.checked = false; }); };
  $("#selEsp").onclick = function () { $$("#temaChecks input").forEach(function (i) { i.checked = isEsp(i.value); }); };

  var EST = null;

  function filtrarQuestoes() {
    var temas = $$("#temaChecks input").filter(function (i) { return i.checked; }).map(function (i) { return i.value; });
    var nivel = $("#nivelSel").value;
    var filtro = $("#filtroSel").value;
    return BANCO.filter(function (q) {
      if (temas.indexOf(q.tema) < 0) return false;
      if (nivel && q.nivel !== nivel) return false;
      var s = S.stats[q.id];
      if (filtro === "ineditas") return !s || (!s.acertos && !s.erros);
      if (filtro === "erradas") return !!(s && s.erros);
      if (filtro === "marcadas") return !!S.star[q.id];
      return true;
    });
  }

  $("#startEstudo").onclick = function () {
    var pool = filtrarQuestoes();
    if (!pool.length) { $("#estudoAviso").textContent = "Nenhuma questão atende a esses filtros."; return; }
    $("#estudoAviso").textContent = "";
    if ($("#embaralhar").checked) pool = shuffle(pool);
    var qtd = Math.min(+$("#qtdSel").value, pool.length);
    EST = { lista: pool.slice(0, qtd), i: 0, ac: 0, er: 0 };
    $("#estudoSetup").classList.add("hidden");
    $("#estudoRun").classList.remove("hidden");
    estudoShow();
  };
  $("#sairEstudo").onclick = function () {
    $("#estudoRun").classList.add("hidden");
    $("#estudoSetup").classList.remove("hidden");
    renderTemaChecks();
  };

  function estudoShow() {
    if (EST.i >= EST.lista.length) return estudoFim();
    var q = EST.lista[EST.i];
    soltarCalculadora();
    $("#estudoQ").innerHTML = qHTML(q, { numero: EST.i + 1, total: EST.lista.length });
    var root = $("#estudoQ .q");
    ligarEstrela(root, q);
    $$(".alt", root).forEach(function (b) {
      b.onclick = function () {
        var esc0 = +b.dataset.i;
        marcarGabarito(root, q, esc0);
        var ok = esc0 === q.correta;
        if (ok) EST.ac++; else EST.er++;
        registrar(q.id, ok);
        estudoBar();
        var nx = document.createElement("button");
        nx.className = "btn primary wide";
        nx.textContent = EST.i + 1 >= EST.lista.length ? "Ver resultado" : "Próxima questão →";
        nx.onclick = function () { EST.i++; estudoShow(); };
        $(".fbslot", root).appendChild(nx);
        if (nx.scrollIntoView) nx.scrollIntoView({ behavior: "smooth", block: "center" });
      };
    });
    estudoBar();
  }
  function estudoBar() {
    var t = EST.lista.length;
    $("#estProg").style.width = pct(EST.i + (EST.ac + EST.er > EST.i ? 1 : 0), t) + "%";
    $("#estCount").textContent = (EST.i + 1) + " de " + t;
    var f = EST.ac + EST.er;
    $("#estPlacar").textContent = f ? "✓ " + EST.ac + "  ✗ " + EST.er + "  (" + pct(EST.ac, f) + "%)" : "";
  }
  function estudoFim() {
    var t = EST.ac + EST.er, p = pct(EST.ac, t);
    soltarCalculadora();
    $("#estudoQ").innerHTML =
      '<div class="card resulthead"><div class="resultscore">' + p + "%</div>" +
      "<p>Você acertou <b>" + EST.ac + "</b> de <b>" + t + "</b> questões.</p>" +
      '<div class="verdict ' + (p >= 50 ? "pass" : "fail") + '">' +
      (p >= 70 ? "Bom ritmo — mantenha" : p >= 50 ? "Acima da linha de corte, mas apertado" : "Abaixo do corte de 50% do edital") +
      "</div>" +
      '<div class="row center gap"><button class="btn primary" id="estOutra">Nova rodada</button>' +
      '<button class="btn" id="estRev">Ir para a revisão</button></div></div>';
    $("#estOutra").onclick = function () { $("#sairEstudo").click(); };
    $("#estRev").onclick = function () { $("#sairEstudo").click(); go("revisao"); };
    $("#estProg").style.width = "100%";
    renderHome();
  }

  /* ============================================================
     SIMULADO
     ============================================================ */
  var SIM = null, simTimerId = null;

  function montarSimulado(modelo) {
    var esp = shuffle(BANCO.filter(function (q) { return isEsp(q.tema); }));
    var por = shuffle(BANCO.filter(function (q) { return q.tema === "portugues"; }));
    var ing = shuffle(BANCO.filter(function (q) { return q.tema === "ingles"; }));

    if (modelo === "rapido") return { lista: distribuir(esp, 20), min: 80 };
    if (modelo === "esp") return { lista: distribuir(esp, 50), min: 200 };
    return { lista: distribuir(esp, 50).concat(por.slice(0, 10), ing.slice(0, 10)), min: 270 };
  }

  // distribui proporcionalmente entre os temas, para o simulado não virar monotema
  function distribuir(pool, n) {
    var porTema = {};
    pool.forEach(function (q) { (porTema[q.tema] = porTema[q.tema] || []).push(q); });
    var temas = Object.keys(porTema);
    var out = [], i = 0;
    while (out.length < n && temas.length) {
      var t = temas[i % temas.length];
      if (porTema[t].length) out.push(porTema[t].shift());
      else { temas.splice(i % temas.length, 1); continue; }
      i++;
      if (i > n * 40) break;
    }
    return out.slice(0, n);
  }

  $("#startSim").onclick = function () {
    var m = montarSimulado($("#simModelo").value);
    if (m.lista.length < 5) { alert("Banco insuficiente para este modelo."); return; }
    SIM = {
      lista: m.lista, i: 0, resp: {}, flag: {},
      restante: m.min * 60, comTimer: $("#simTimer").checked, inicio: Date.now()
    };
    $("#simSetup").classList.add("hidden");
    $("#simResult").classList.add("hidden");
    $("#simRun").classList.remove("hidden");
    simNav(); simShow();
    if (simTimerId) clearInterval(simTimerId);
    simTimerId = setInterval(simTick, 1000);
    simTick();
  };

  function simTick() {
    if (!SIM) return;
    if (SIM.comTimer) {
      SIM.restante--;
      $("#simClock").textContent = "⏱ " + hhmmss(SIM.restante);
      $("#simClock").classList.toggle("warn", SIM.restante < 600);
      if (SIM.restante <= 0) { simFim(true); }
    } else {
      $("#simClock").textContent = "⏱ " + hhmmss((Date.now() - SIM.inicio) / 1000);
    }
  }

  function simNav() {
    $("#simNavGrid").innerHTML = SIM.lista.map(function (q, i) {
      var c = "";
      if (SIM.resp[q.id] != null) c += " done";
      if (SIM.flag[q.id]) c += " flag";
      if (i === SIM.i) c += " cur";
      return '<button class="' + c.trim() + '" data-i="' + i + '">' + (i + 1) + "</button>";
    }).join("");
    $$("#simNavGrid button").forEach(function (b) {
      b.onclick = function () { SIM.i = +b.dataset.i; simShow(); };
    });
    var f = Object.keys(SIM.resp).length;
    $("#simProg").style.width = pct(f, SIM.lista.length) + "%";
    $("#simCount").textContent = f + " de " + SIM.lista.length + " respondidas";
  }

  function simShow() {
    var q = SIM.lista[SIM.i];
    soltarCalculadora();
    $("#simQ").innerHTML = qHTML(q, { numero: SIM.i + 1, total: SIM.lista.length });
    var root = $("#simQ .q");
    ligarCalculadora(root);
    var vbs = $(".verbbtn", root);
    if (vbs) vbs.onclick = function () { abrirVerbete(verbeteDe(q), q); };
    // no simulado a estrela serve como "marcar para voltar depois"
    var sb = $(".starbtn", root);
    sb.classList.toggle("on", !!SIM.flag[q.id]);
    sb.title = "Marcar para revisar antes de finalizar";
    sb.onclick = function () {
      SIM.flag[q.id] = !SIM.flag[q.id];
      sb.classList.toggle("on", !!SIM.flag[q.id]);
      simNav();
    };
    var aqui = SIM.i;
    $$(".alt", root).forEach(function (b) {
      var i = +b.dataset.i;
      if (SIM.resp[q.id] === i) b.classList.add("sel");
      b.onclick = function () {
        SIM.resp[q.id] = i;
        $$(".alt", root).forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel");
        simNav();
        // avança sozinho, mas só se o candidato ainda estiver nesta questão
        if (aqui < SIM.lista.length - 1) setTimeout(function () {
          if (SIM && SIM.i === aqui) { SIM.i = aqui + 1; simShow(); }
        }, 180);
      };
    });
    simNav();
    $("#simPrev").disabled = SIM.i === 0;
    $("#simNext").disabled = SIM.i === SIM.lista.length - 1;
  }
  $("#simPrev").onclick = function () { if (SIM.i > 0) { SIM.i--; simShow(); } };
  $("#simNext").onclick = function () { if (SIM.i < SIM.lista.length - 1) { SIM.i++; simShow(); } };
  $("#sairSim").onclick = function () {
    if (confirm("Abandonar o simulado? As respostas serão perdidas.")) {
      clearInterval(simTimerId); SIM = null;
      $("#simRun").classList.add("hidden"); $("#simSetup").classList.remove("hidden");
    }
  };
  $("#finalizarSim").onclick = function () {
    var f = Object.keys(SIM.resp).length;
    var falta = SIM.lista.length - f;
    if (falta && !confirm("Ainda faltam " + falta + " questões em branco. Finalizar mesmo assim?")) return;
    simFim(false);
  };

  function simFim(porTempo) {
    clearInterval(simTimerId);
    var blocos = { esp: { a: 0, t: 0 }, portugues: { a: 0, t: 0 }, ingles: { a: 0, t: 0 } };
    var porTema = {};
    SIM.lista.forEach(function (q) {
      var ok = SIM.resp[q.id] === q.correta;
      var b = isEsp(q.tema) ? "esp" : q.tema;
      blocos[b].t++; if (ok) blocos[b].a++;
      porTema[q.tema] = porTema[q.tema] || { a: 0, t: 0 };
      porTema[q.tema].t++; if (ok) porTema[q.tema].a++;
      // questões em branco não entram nas estatísticas de acerto/erro
      if (SIM.resp[q.id] != null) registrar(q.id, ok);
    });

    var gerais = { a: blocos.portugues.a + blocos.ingles.a, t: blocos.portugues.t + blocos.ingles.t };
    var totalA = blocos.esp.a + gerais.a, totalT = SIM.lista.length;

    var motivos = [];
    if (blocos.esp.t && pct(blocos.esp.a, blocos.esp.t) < 50) motivos.push("aproveitamento inferior a 50% em Conhecimentos Específicos");
    if (gerais.t && pct(gerais.a, gerais.t) < 50) motivos.push("aproveitamento inferior a 50% em Conhecimentos Gerais");
    if (blocos.portugues.t && blocos.portugues.a === 0) motivos.push("grau zero em Língua Portuguesa");
    if (blocos.ingles.t && blocos.ingles.a === 0) motivos.push("grau zero em Língua Inglesa");

    var h = '<div class="card resulthead">';
    if (porTempo) h += '<p class="muted">Tempo esgotado — a prova foi encerrada automaticamente.</p>';
    h += '<div class="resultscore">' + totalA + "/" + totalT + "</div>";
    h += "<p>" + pct(totalA, totalT) + "% de aproveitamento geral</p>";
    h += '<div class="verdict ' + (motivos.length ? "fail" : "pass") + '">' +
      (motivos.length ? "Eliminado — " + motivos.join("; ") : "Aprovado nos cortes do item 7.1.4.3") + "</div></div>";

    h += '<div class="card"><h3>Por bloco</h3><div class="tablewrap"><table class="res"><tr><th>Bloco</th><th class="num">Acertos</th><th class="num">%</th><th class="num">Corte</th></tr>';
    function linha(nome, b, corte) {
      if (!b.t) return "";
      return "<tr><td>" + nome + '</td><td class="num">' + b.a + "/" + b.t + '</td><td class="num">' + pct(b.a, b.t) +
        '%</td><td class="num">' + corte + "</td></tr>";
    }
    h += linha("Conhecimentos Específicos", blocos.esp, "50%");
    h += linha("Língua Portuguesa", blocos.portugues, "> 0");
    h += linha("Língua Inglesa", blocos.ingles, "> 0");
    h += linha("Conhecimentos Gerais (total)", gerais, "50%");
    h += "</table></div></div>";

    h += '<div class="card"><h3>Por assunto</h3><div class="tablewrap"><table class="res"><tr><th>Assunto</th><th class="num">Acertos</th><th class="num">%</th></tr>';
    Object.keys(porTema).sort(function (a, b) { return pct(porTema[a].a, porTema[a].t) - pct(porTema[b].a, porTema[b].t); })
      .forEach(function (t) {
        var o = porTema[t];
        h += "<tr><td>" + esc(temaNome(t)) + '</td><td class="num">' + o.a + "/" + o.t + '</td><td class="num">' + pct(o.a, o.t) + "%</td></tr>";
      });
    h += "</table></div></div>";

    h += '<div class="row center gap"><button class="btn primary" id="simNovo">Novo simulado</button>' +
      '<button class="btn" id="simGab">Ver espelho com comentários</button></div>';
    h += '<div id="simEspelho"></div>';

    $("#simRun").classList.add("hidden");
    $("#simResult").classList.remove("hidden");
    $("#simResult").innerHTML = h;
    window.scrollTo(0, 0);

    S.simulados.push({ data: Date.now(), acertos: totalA, total: totalT }); save();

    $("#simNovo").onclick = function () {
      $("#simResult").classList.add("hidden"); $("#simSetup").classList.remove("hidden");
    };
    $("#simGab").onclick = function () {
      var box = $("#simEspelho");
      if (box.innerHTML) { box.innerHTML = ""; return; }
      box.innerHTML = SIM.lista.map(function (q, i) { return qHTML(q, { numero: i + 1, total: SIM.lista.length }); }).join("");
      $$("#simEspelho .q").forEach(function (root, i) {
        var q = SIM.lista[i];
        ligarEstrela(root, q);
        marcarGabarito(root, q, SIM.resp[q.id]);
      });
    };
    renderHome();
  }

  /* ============================================================
     REVISÃO
     ============================================================ */
  function renderRevisao() {
    var lista = BANCO.filter(function (q) {
      var s = S.stats[q.id];
      return (s && s.rev) || S.star[q.id];
    });
    if (!lista.length) {
      $("#revisaoLista").innerHTML =
        '<div class="card empty">Nada aqui ainda.<br><span class="muted">Erros e questões marcadas com ★ aparecem nesta lista.</span></div>';
      return;
    }
    $("#revisaoLista").innerHTML =
      '<div class="card"><div class="row between"><strong>' + lista.length + ' questão(ões) na fila</strong>' +
      '<button class="btn tiny primary" id="revTreinar">Treinar todas agora</button></div></div>' +
      lista.map(function (q, i) { return qHTML(q, { numero: i + 1, total: lista.length }); }).join("");

    $$("#revisaoLista .q").forEach(function (root, i) {
      var q = lista[i];
      ligarEstrela(root, q);
      $$(".alt", root).forEach(function (b) {
        b.onclick = function () {
          var e = +b.dataset.i;
          marcarGabarito(root, q, e);
          registrar(q.id, e === q.correta);
        };
      });
    });
    $("#revTreinar").onclick = function () {
      go("estudo");
      $$("#temaChecks input").forEach(function (i) { i.checked = true; });
      $("#filtroSel").value = "erradas";
      $("#qtdSel").value = "9999";
      $("#startEstudo").click();
    };
  }

  /* ============================================================
     RESUMO GERAL DA MATÉRIA
     ============================================================ */
  function renderResumo() {
    var box = $("#resumoBox");
    if (!box) return;
    box.innerHTML = RESUMO.map(function (r, k) {
      var n = BANCO.filter(function (q) { return q.tema === r.tema; }).length;
      var h = '<details class="fsec"' + (k === 0 ? " open" : "") + "><summary>" +
        esc(temaNome(r.tema)) + ' <span class="muted">(' + n + " questões)</span></summary>" +
        '<div class="fbody">';
      h += '<p class="r-sintese">' + fmt(r.sintese) + "</p>";
      h += '<div class="r-rotulo">Precisa estar decorado</div><ul class="r-chaves">' +
        r.chaves.map(function (c) { return "<li>" + fmt(c) + "</li>"; }).join("") + "</ul>";
      h += '<div class="r-rotulo">Exemplos resolvidos</div>';
      r.exemplos.forEach(function (e) {
        h += '<div class="r-ex"><div class="r-ex-t">' + fmt(e.titulo) + "</div>" +
          '<div class="r-ex-q">' + fmt(e.enunciado) + "</div>" +
          '<div class="r-ex-s">' + esc(e.solucao) + "</div></div>";
      });
      return h + "</div></details>";
    }).join("");
  }

  $$(".subnav button").forEach(function (b) {
    b.onclick = function () {
      $$(".subnav button").forEach(function (x) { x.classList.toggle("active", x === b); });
      $("#revResumo").classList.toggle("hidden", b.dataset.rev !== "resumo");
      $("#revFila").classList.toggle("hidden", b.dataset.rev !== "fila");
      if (b.dataset.rev === "fila") renderRevisao();
    };
  });

  /* ============================================================
     FORMULÁRIO
     ============================================================ */
  function renderFormulario() {
    $("#formularioBox").innerHTML = FORMULARIO.map(function (sec, k) {
      return '<details class="fsec"' + (k === 0 ? " open" : "") + "><summary>" + esc(sec.titulo) + "</summary>" +
        '<div class="fbody">' + sec.itens.map(function (it) {
          var v = (it.vars && it.vars.length)
            ? '<ul class="fvars">' + it.vars.map(function (x) {
                return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>"
            : "";
          return '<div class="fitem"><div class="fname">' + fmt(it.nome) + "</div>" +
            renderFormula(it.formula) + v +
            (it.obs ? '<div class="fobs">' + fmt(it.obs) + "</div>" : "") + "</div>";
        }).join("") + "</div></details>";
    }).join("");
  }

  // abrir/fechar seções e impressão do formulário
  function detalhesFormulario(abrir) {
    $$("#formularioBox details").forEach(function (d) { d.open = abrir; });
  }
  var btAbrir = $("#abrirTudo"), btFechar = $("#fecharTudo"), btImprimir = $("#imprimirForm");
  if (btAbrir) btAbrir.onclick = function () { detalhesFormulario(true); };
  if (btFechar) btFechar.onclick = function () { detalhesFormulario(false); };
  if (btImprimir) btImprimir.onclick = function () {
    detalhesFormulario(true);           // nada pode ficar escondido no papel
    setTimeout(function () { window.print(); }, 60);
  };
  // Ctrl+P direto também precisa sair completo
  if (window.addEventListener) {
    window.addEventListener("beforeprint", function () { detalhesFormulario(true); });
  }

  /* ============================================================
     EDITAL
     ============================================================ */
  function renderEdital() {
    var h = '<div class="card info"><strong>' + esc(EDITAL.titulo) + "</strong><ul>" +
      EDITAL.fatos.map(function (f) { return "<li>" + fmt(f) + "</li>"; }).join("") + "</ul></div>";

    h += "<h2>Conteúdo programático — Ênfase 25: Engenharia Mecânica</h2>";
    h += EDITAL.programa.map(function (p, k) {
      var n = BANCO.filter(function (q) { return q.tema === p.tema; }).length;
      return '<details class="fsec"><summary>' + (k + 1) + ". " + esc(p.titulo) +
        ' <span class="muted">(' + n + " questões)</span></summary>" +
        '<div class="fbody"><p>' + fmt(p.texto) + "</p>" +
        (p.foco ? '<p class="muted"><b>Foco de prova:</b> ' + fmt(p.foco) + "</p>" : "") +
        "</div></details>";
    }).join("");

    h += "<h2>Conhecimentos Gerais</h2>";
    h += EDITAL.gerais.map(function (p) {
      var n = BANCO.filter(function (q) { return q.tema === p.tema; }).length;
      return '<details class="fsec"><summary>' + esc(p.titulo) + ' <span class="muted">(' + n + " questões)</span></summary>" +
        '<div class="fbody"><p>' + fmt(p.texto) + "</p></div></details>";
    }).join("");

    $("#editalBox").innerHTML = h;
  }

  /* ---------- boot ---------- */
  renderHome();
  renderResumo();
  renderFormulario();
  renderEdital();

  // atalhos de teclado nas alternativas
  document.addEventListener("keydown", function (e) {
    var k = e.key.toUpperCase();
    var idx = LETRAS.indexOf(k);
    if (idx < 0) return;
    if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
    // só nos modos de questão única (estudo e simulado em andamento)
    var box = $("#view-estudo.active #estudoRun:not(.hidden) #estudoQ") ||
              $("#view-simulado.active #simRun:not(.hidden) #simQ");
    if (!box) return;
    var alt = $$(".alt", box).filter(function (b) { return !b.disabled; })[idx];
    if (alt) alt.click();
  });
})();
