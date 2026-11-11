// Servidor local simples para testar o app no computador: node servidor.js
// Depois abra http://localhost:5180 (no celular, use o IP do computador na mesma rede Wi-Fi).
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORTA = Number(process.env.PORT) || 5180;
const RAIZ = __dirname;
const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
};

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const arquivo = path.normalize(path.join(RAIZ, url === '/' ? 'index.html' : url));
  if (!arquivo.startsWith(RAIZ)) { res.writeHead(403); return res.end(); }
  fs.readFile(arquivo, (erro, dados) => {
    if (erro) { res.writeHead(404); return res.end('Não encontrado'); }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(arquivo)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(dados);
  });
}).listen(PORTA, () => console.log(`DDS Diário rodando em http://localhost:${PORTA}`));
