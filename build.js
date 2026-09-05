/* Gera a versão de arquivo único a partir do site multi-arquivo.
   Uso:  node build.js
   Saída: transpetro-enfase-25.bundle.html — mesma página, tudo embutido,
   para abrir sem servidor ou publicar como um único arquivo.          */
const fs = require('fs');
const path = require('path');

const raiz = __dirname;
const saida = path.join(raiz, 'transpetro-enfase-25.bundle.html');

const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(raiz, 'assets/style.css'), 'utf8');

const srcs = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const js = srcs
  .map(s => '/* ===== ' + s + ' ===== */\n' + fs.readFileSync(path.join(raiz, s), 'utf8'))
  .join('\n');

if (/<\/script/i.test(js)) throw new Error('algum .js contém </script — abortando para não quebrar o HTML');

const titulo = (html.match(/<title>([^<]*)<\/title>/) || [, 'Transpetro Ênfase 25'])[1];
const corpo = html.slice(html.indexOf('<header'), html.indexOf('</footer>') + '</footer>'.length);

// o botao de portfolio fica depois do </footer>, entao o corte acima nao o pega
const botao = (html.match(/<!-- === Botao de volta ao portfolio[\s\S]*?<!-- === fim do botao === -->/) || [''])[0];

const bundle =
  '<title>' + titulo + '</title>\n' +
  '<style>\n' + css + '\n</style>\n\n' +
  corpo + '\n\n' +
  botao + '\n\n' +
  '<script>\n' + js + '\n<\/script>\n';

fs.writeFileSync(saida, bundle, 'utf8');
console.log('gerado ' + path.basename(saida) +
  '  (' + (Buffer.byteLength(bundle) / 1024).toFixed(0) + ' KB, ' + srcs.length + ' scripts embutidos)');
