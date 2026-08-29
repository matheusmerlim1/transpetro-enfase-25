/* ============================================================
   Calculadora de apoio — TRANSPETRO 2026
   Painel flutuante, não modal: fica por cima da questão sem
   fechá-la, para acompanhar a conta enquanto se lê o enunciado.
   Avaliação por parser próprio (sem eval), em graus por padrão.
   ============================================================ */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var KEY = "transpetro2026_calc";
  var C = carregar();

  function carregar() {
    try {
      var o = JSON.parse(localStorage.getItem(KEY) || "null");
      if (o) {
        o.hist = o.hist || [];
        o.grau = o.grau !== false;
        return o;
      }
    } catch (e) {}
    return { hist: [], grau: true, x: null, y: null, aberta: false };
  }
  function salvar() {
    try { localStorage.setItem(KEY, JSON.stringify(C)); } catch (e) {}
  }

  /* ============================================================
     AVALIAÇÃO DE EXPRESSÃO
     Analisador descendente recursivo. Não usa eval: entrada do
     usuário nunca vira código.
     ============================================================ */
  var CONSTANTES = {
    pi: Math.PI, "π": Math.PI,
    e: Math.E,
    g: 9.81,          // aceleração da gravidade
    ans: 0            // último resultado, atualizado a cada conta
  };

  var FUNCOES = {
    sen: function (x) { return Math.sin(ang(x)); },
    sin: function (x) { return Math.sin(ang(x)); },
    cos: function (x) { return Math.cos(ang(x)); },
    tan: function (x) { return Math.tan(ang(x)); },
    tg: function (x) { return Math.tan(ang(x)); },
    asen: function (x) { return desang(Math.asin(x)); },
    acos: function (x) { return desang(Math.acos(x)); },
    atan: function (x) { return desang(Math.atan(x)); },
    raiz: Math.sqrt, sqrt: Math.sqrt, "√": Math.sqrt,
    ln: Math.log,
    log: function (x) { return Math.log(x) / Math.LN10; },
    exp: Math.exp,
    abs: Math.abs
  };

  function ang(x) { return C.grau ? x * Math.PI / 180 : x; }
  function desang(x) { return C.grau ? x * 180 / Math.PI : x; }

  function tokenizar(s) {
    var t = [], i = 0;
    s = String(s).replace(/\s+/g, "");
    while (i < s.length) {
      var c = s[i];
      if (/[0-9.,]/.test(c)) {
        var n = "";
        while (i < s.length && /[0-9.,]/.test(s[i])) { n += s[i] === "," ? "." : s[i]; i++; }
        if (!/^\d*\.?\d*$/.test(n) || n === "." || n === "") throw new Error("número inválido");
        // expoente: só quando o e vem seguido de sinal ou dígito (5,67e-8),
        // para não confundir com a constante de Euler em algo como 2e
        if (/[eE]/.test(s[i] || "") && /[-+0-9]/.test(s[i + 1] || "")) {
          var exp = s[i]; i++;
          if (/[-+]/.test(s[i])) { exp += s[i]; i++; }
          if (!/[0-9]/.test(s[i] || "")) throw new Error("expoente incompleto");
          while (i < s.length && /[0-9]/.test(s[i])) { exp += s[i]; i++; }
          n += exp;
        }
        t.push({ t: "num", v: parseFloat(n) });
        continue;
      }
      if (/[a-zA-ZçÇ√π]/.test(c)) {
        var id = "";
        // dígito não entra no identificador: sen30 é sen(30), não um nome
        while (i < s.length && /[a-zA-ZçÇ√π]/.test(s[i])) {
          id += s[i];
          i++;
          // √ e π são símbolos isolados
          if (id === "√" || id === "π") break;
        }
        var low = id.toLowerCase();
        if (FUNCOES[low]) t.push({ t: "fn", v: low });
        else if (CONSTANTES[low] !== undefined) t.push({ t: "num", v: CONSTANTES[low] });
        else throw new Error("não reconheço “" + id + "”");
        continue;
      }
      if (c === "(" || c === "[") { t.push({ t: "lp" }); i++; continue; }
      if (c === ")" || c === "]") { t.push({ t: "rp" }); i++; continue; }
      if (c === "²") { t.push({ t: "pow2" }); i++; continue; }
      if (c === "³") { t.push({ t: "pow3" }); i++; continue; }
      if (c === "%") { t.push({ t: "pct" }); i++; continue; }
      if ("+-−*×·/÷^".indexOf(c) >= 0) {
        var op = c;
        if (op === "−") op = "-";
        if (op === "×" || op === "·") op = "*";
        if (op === "÷") op = "/";
        t.push({ t: "op", v: op });
        i++;
        continue;
      }
      throw new Error("caractere inesperado “" + c + "”");
    }
    return t;
  }

  function avaliar(texto) {
    var t = tokenizar(texto), p = 0;

    function ver() { return t[p]; }
    function comeu(tipo, val) {
      var x = t[p];
      if (x && x.t === tipo && (val === undefined || x.v === val)) { p++; return true; }
      return false;
    }
    // um primário pode começar aqui? usado na multiplicação implícita (2π, 3(4+5))
    function comecaPrimario() {
      var x = t[p];
      return !!x && (x.t === "num" || x.t === "lp" || x.t === "fn");
    }

    function expr() {
      var v = termo();
      while (ver() && ver().t === "op" && (ver().v === "+" || ver().v === "-")) {
        var op = t[p++].v;
        var d = termo();
        v = op === "+" ? v + d : v - d;
      }
      return v;
    }

    function termo() {
      var v = unario();
      for (;;) {
        if (ver() && ver().t === "op" && (ver().v === "*" || ver().v === "/")) {
          var op = t[p++].v;
          var d = unario();
          if (op === "/" && d === 0) throw new Error("divisão por zero");
          v = op === "*" ? v * d : v / d;
        } else if (comecaPrimario()) {
          v = v * unario();     // multiplicação implícita
        } else return v;
      }
    }

    function unario() {
      if (ver() && ver().t === "op" && ver().v === "-") { p++; return -unario(); }
      if (ver() && ver().t === "op" && ver().v === "+") { p++; return unario(); }
      return potencia();
    }

    function potencia() {
      var b = posfixo();
      if (ver() && ver().t === "op" && ver().v === "^") { p++; return Math.pow(b, unario()); }
      return b;
    }

    function posfixo() {
      var v = primario();
      for (;;) {
        if (comeu("pow2")) v = v * v;
        else if (comeu("pow3")) v = v * v * v;
        else if (comeu("pct")) v = v / 100;
        else return v;
      }
    }

    function primario() {
      var x = ver();
      if (!x) throw new Error("expressão incompleta");
      if (x.t === "num") { p++; return x.v; }
      if (x.t === "fn") {
        p++;
        var arg;
        if (comeu("lp")) {
          arg = expr();
          if (!comeu("rp")) throw new Error("falta fechar parêntese");
        } else {
          arg = unario();   // √9, sen30 sem parênteses
        }
        var r = FUNCOES[x.v](arg);
        if (isNaN(r)) throw new Error("fora do domínio de " + x.v);
        return r;
      }
      if (x.t === "lp") {
        p++;
        var v = expr();
        if (!comeu("rp")) throw new Error("falta fechar parêntese");
        return v;
      }
      throw new Error("expressão inválida");
    }

    var res = expr();
    if (p < t.length) throw new Error("expressão inválida perto do fim");
    if (isNaN(res)) throw new Error("resultado indefinido");
    if (!isFinite(res)) throw new Error("resultado fora de faixa");
    return res;
  }

  /* ---------- formatação no padrão brasileiro ---------- */
  function formatar(n) {
    if (n === 0) return "0";
    var abs = Math.abs(n);
    if (abs >= 1e12 || abs < 1e-6) {
      return n.toExponential(6).replace(/\.?0+e/, "e").replace(".", ",");
    }
    var s = n.toPrecision(10);
    if (s.indexOf("e") >= 0) s = String(n);
    s = String(parseFloat(s));
    var parte = s.split(".");
    var inteiro = parte[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parte[1] ? inteiro + "," + parte[1] : inteiro;
  }

  /* ============================================================
     PAINEL
     ============================================================ */
  var TECLAS = [
    ["√", "x²", "x^", "π", "(", ")"],
    ["sen", "cos", "tan", "ln", "log", "g"],
    ["7", "8", "9", "÷", "C", "←"],
    ["4", "5", "6", "×", "%", "Ans"],
    ["1", "2", "3", "−", "=", ""],
    ["0", "00", ",", "+", "", ""]
  ];
  // o "=" ocupa duas linhas na coluna 5; as células vazias são puladas
  var INSERE = {
    "√": "√(", "x²": "²", "x^": "^", "π": "π", "(": "(", ")": ")",
    "sen": "sen(", "cos": "cos(", "tan": "tan(", "ln": "ln(", "log": "log(", "g": "g",
    "÷": "÷", "×": "×", "−": "−", "+": "+", "%": "%", ",": ",", "00": "00"
  };

  var painel, campo, saida, histBox, fab;

  function montar() {
    fab = document.createElement("button");
    fab.id = "calcFab";
    fab.className = "calc-fab";
    fab.title = "Calculadora (tecla K)";
    fab.setAttribute("aria-label", "Abrir calculadora");
    fab.innerHTML = "<span>÷×</span><small>calc</small>";
    document.body.appendChild(fab);

    painel = document.createElement("div");
    painel.id = "calcPainel";
    painel.className = "calcp hidden";   // .calc já é a memória de cálculo do gabarito
    painel.setAttribute("role", "dialog");
    painel.setAttribute("aria-label", "Calculadora");

    var h = '<div class="calc-topo" id="calcArrasta">' +
      '<span class="calc-nome">Calculadora</span>' +
      '<div class="calc-topo-acoes">' +
      '<button class="calc-modo" id="calcModo" title="Alternar entre graus e radianos">DEG</button>' +
      '<button class="calc-x" id="calcFechar" title="Fechar (Esc)">✕</button>' +
      "</div></div>";

    h += '<div class="calc-visor">' +
      '<input id="calcEntrada" class="calc-entrada" type="text" inputmode="text" spellcheck="false" ' +
      'autocomplete="off" placeholder="digite a conta e tecle Enter">' +
      '<div class="calc-saida" id="calcSaida"></div></div>';

    h += '<div class="calc-teclado">';
    TECLAS.forEach(function (linha, li) {
      linha.forEach(function (k, ci) {
        if (!k) return;
        var cls = "calc-t";
        if (/^[0-9]$|^00$|^,$/.test(k)) cls += " num";
        if ("÷×−+".indexOf(k) >= 0) cls += " op";
        if (k === "=") cls += " igual";
        if (k === "C") cls += " lim";
        if (li <= 1) cls += " fn";
        var estilo = k === "=" ? ' style="grid-row:span 2"' : "";
        h += '<button class="' + cls + '" data-k="' + k + '"' + estilo + ">" + k + "</button>";
      });
    });
    h += "</div>";

    h += '<div class="calc-hist" id="calcHist"></div>';
    h += '<div class="calc-pe">Enter calcula · Esc fecha · <b>Ans</b> reaproveita o último resultado</div>';

    painel.innerHTML = h;
    document.body.appendChild(painel);

    campo = $("#calcEntrada");
    saida = $("#calcSaida");
    histBox = $("#calcHist");

    fab.onclick = alternar;
    $("#calcFechar").onclick = fechar;
    $("#calcModo").onclick = function () {
      C.grau = !C.grau;
      $("#calcModo").textContent = C.grau ? "DEG" : "RAD";
      salvar();
      campo.focus();
    };
    $("#calcModo").textContent = C.grau ? "DEG" : "RAD";

    $$(".calc-t", painel).forEach(function (b) {
      b.onclick = function () { tecla(b.dataset.k); };
    });

    campo.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); calcular(); }
      else if (e.key === "Escape") { e.preventDefault(); fechar(); }
    });
    campo.addEventListener("input", previa);

    arrastavel($("#calcArrasta"));
    posicionar();
    renderHist();
  }

  function tecla(k) {
    if (k === "=") return calcular();
    if (k === "C") { campo.value = ""; saida.textContent = ""; saida.className = "calc-saida"; campo.focus(); return; }
    if (k === "←") { campo.value = campo.value.slice(0, -1); previa(); campo.focus(); return; }
    // Ans entra como símbolo: a conta fica legível ("Ans×3") e o valor
    // usado é o cheio, sem o arredondamento da exibição
    if (k === "Ans") { inserir("Ans"); return; }
    inserir(INSERE[k] !== undefined ? INSERE[k] : k);
  }

  function inserir(txt) {
    var i = campo.selectionStart, f = campo.selectionEnd, v = campo.value;
    campo.value = v.slice(0, i) + txt + v.slice(f);
    campo.selectionStart = campo.selectionEnd = i + txt.length;
    campo.focus();
    previa();
  }

  // resultado em tempo real enquanto se digita, sem gravar no histórico
  function previa() {
    var v = campo.value.trim();
    if (!v) { saida.textContent = ""; saida.className = "calc-saida"; return; }
    try {
      var r = avaliar(v);
      saida.textContent = "= " + formatar(r);
      saida.className = "calc-saida";
    } catch (e) {
      saida.textContent = "";
      saida.className = "calc-saida";
    }
  }

  function calcular() {
    var v = campo.value.trim();
    if (!v) return;
    try {
      var r = avaliar(v);
      CONSTANTES.ans = r;
      saida.textContent = "= " + formatar(r);
      saida.className = "calc-saida ok";
      C.hist.unshift({ e: v, r: formatar(r), bruto: r });
      C.hist = C.hist.slice(0, 12);
      salvar();
      renderHist();
      campo.select();
    } catch (err) {
      saida.textContent = err.message;
      saida.className = "calc-saida erro";
    }
  }

  function renderHist() {
    if (!C.hist.length) {
      histBox.innerHTML = '<div class="calc-vazio">as contas feitas aparecem aqui</div>';
      return;
    }
    histBox.innerHTML = C.hist.map(function (h, i) {
      return '<button class="calc-h" data-i="' + i + '" title="Clique para reaproveitar">' +
        '<span class="calc-h-e">' + h.e.replace(/</g, "&lt;") + "</span>" +
        '<span class="calc-h-r">' + h.r + "</span></button>";
    }).join("");
    $$(".calc-h", histBox).forEach(function (b) {
      b.onclick = function () {
        var h = C.hist[+b.dataset.i];
        campo.value = h.e;
        CONSTANTES.ans = h.bruto;
        campo.focus();
        previa();
      };
    });
  }

  /* ---------- posição e arrasto ---------- */
  function posicionar() {
    var larg = 300, alt = 430;
    var x = C.x, y = C.y;
    if (x === null || x === undefined) x = window.innerWidth - larg - 24;
    if (y === null || y === undefined) y = window.innerHeight - alt - 24;
    x = Math.max(8, Math.min(x, window.innerWidth - 120));
    y = Math.max(8, Math.min(y, window.innerHeight - 80));
    painel.style.left = x + "px";
    painel.style.top = y + "px";
  }

  function arrastavel(pega) {
    var ox = 0, oy = 0, arrastando = false;

    function inicio(cx, cy) {
      if (painel.classList.contains("inline")) return;   // encaixado não se arrasta
      arrastando = true;
      ox = cx - painel.offsetLeft;
      oy = cy - painel.offsetTop;
      painel.classList.add("arrastando");
    }
    function mover(cx, cy) {
      if (!arrastando) return;
      var x = Math.max(8, Math.min(cx - ox, window.innerWidth - 120));
      var y = Math.max(8, Math.min(cy - oy, window.innerHeight - 80));
      painel.style.left = x + "px";
      painel.style.top = y + "px";
    }
    function fim() {
      if (!arrastando) return;
      arrastando = false;
      painel.classList.remove("arrastando");
      C.x = painel.offsetLeft;
      C.y = painel.offsetTop;
      salvar();
    }

    pega.addEventListener("mousedown", function (e) {
      if (e.target.closest("button")) return;
      e.preventDefault();
      inicio(e.clientX, e.clientY);
    });
    document.addEventListener("mousemove", function (e) { mover(e.clientX, e.clientY); });
    document.addEventListener("mouseup", fim);

    pega.addEventListener("touchstart", function (e) {
      if (e.target.closest("button")) return;
      var t = e.touches[0];
      inicio(t.clientX, t.clientY);
    }, { passive: true });
    document.addEventListener("touchmove", function (e) {
      if (!arrastando) return;
      var t = e.touches[0];
      mover(t.clientX, t.clientY);
    }, { passive: true });
    document.addEventListener("touchend", fim);
  }

  /* ---------- abrir e fechar ----------
     Dois modos, o mesmo painel: flutuante sobre a página (botão do canto)
     ou encaixado na própria questão (botão ao lado do resumo do assunto).
     O encaixe existe porque o modo flutuante depende de position:fixed,
     que não se comporta igual quando a página é servida dentro de um
     quadro embutido — na questão, o painel está no fluxo e sempre aparece.
  */
  var cartao = null, obsCartao = null;

  function desancorar() {
    if (obsCartao) { obsCartao.disconnect(); obsCartao = null; }
    cartao = null;
    painel.classList.remove("inline");
    if (painel.parentNode !== document.body) document.body.appendChild(painel);
  }

  function abrir() {
    desancorar();
    posicionar();
    painel.classList.remove("hidden");
    fab.classList.add("ativo");
    C.aberta = true;
    salvar();
    campo.focus();
    campo.select();
  }

  function abrirNaQuestao(q) {
    if (!q) return;
    desancorar();
    cartao = q;
    painel.classList.add("inline");
    painel.style.left = "";
    painel.style.top = "";
    var alts = q.querySelector(".alts");
    if (alts && alts.nextSibling) q.insertBefore(painel, alts.nextSibling);
    else q.appendChild(painel);
    painel.classList.remove("hidden");
    fab.classList.add("ativo");
    C.aberta = false;   // o encaixe é da questão atual, não reabre sozinho
    salvar();
    vigiar(q);
    campo.focus();
    campo.select();
  }

  // se a questão for trocada, o painel some junto com ela: traz de volta
  function vigiar(q) {
    if (!window.MutationObserver || !q.parentNode) return;
    obsCartao = new MutationObserver(function () {
      if (!document.body.contains(painel)) fechar();
    });
    obsCartao.observe(q.parentNode, { childList: true, subtree: true });
  }

  function fechar() {
    // devolve o foco à página: sem isso os atalhos A–E continuariam
    // sendo engolidos pelo campo da conta
    campo.blur();
    painel.classList.add("hidden");
    desancorar();
    fab.classList.remove("ativo");
    C.aberta = false;
    salvar();
  }

  function alternar() { painel.classList.contains("hidden") ? abrir() : fechar(); }

  function alternarNaQuestao(q) {
    var aberto = !painel.classList.contains("hidden");
    if (aberto && cartao === q) fechar();
    else abrirNaQuestao(q);
  }

  // o app avisa antes de trocar a questão: sair na hora evita depender
  // do observador, que só corre no ciclo seguinte
  function soltar() { if (cartao) fechar(); }

  window.CALC = {
    abrir: abrir, fechar: fechar,
    alternarNaQuestao: alternarNaQuestao, soltar: soltar
  };

  /* ---------- integração com a página ---------- */
  // a calculadora só faz sentido onde há conta a fazer
  var VISTAS = { "view-estudo": 1, "view-simulado": 1, "view-revisao": 1, "view-formulario": 1 };

  function ajustarVisibilidade() {
    var ativa = $(".view.active");
    var vale = !!(ativa && VISTAS[ativa.id]);
    fab.classList.toggle("off", !vale);
    if (!vale && !painel.classList.contains("hidden")) fechar();
  }

  function ligar() {
    montar();

    // acompanha a troca de abas sem depender do app.js
    if (window.MutationObserver) {
      var obs = new MutationObserver(ajustarVisibilidade);
      $$(".view").forEach(function (v) {
        obs.observe(v, { attributes: true, attributeFilter: ["class"] });
      });
    }
    ajustarVisibilidade();
    // o observer é assíncrono; o clique na navegação ajusta na mesma hora
    document.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("[data-view],[data-goto]")) ajustarVisibilidade();
    });

    document.addEventListener("keydown", function (e) {
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      var alvo = document.activeElement;
      if (alvo && /INPUT|SELECT|TEXTAREA/.test(alvo.tagName)) return;
      if (e.key === "k" || e.key === "K") {
        if (fab.classList.contains("off")) return;
        e.preventDefault();
        alternar();
      }
    });

    if (C.aberta) {
      var ativa = $(".view.active");
      if (ativa && VISTAS[ativa.id]) abrir();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ligar);
  else ligar();
})();
