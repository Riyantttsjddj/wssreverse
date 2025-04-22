const http = require('http');
const WebSocket = require('ws');

// Buat HTTP server di port 80
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('WSS Reverse Inject Server is active!');
});

// Setup WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  const ip = req.socket.remoteAddress;
  const headers = req.headers;

  console.log(`Client from ${ip} connected`);
  console.log('--- HEADER INJEKSI ---');
  console.log('Host:', headers['host']);
  console.log('X-Online-Host:', headers['x-online-host']);
  console.log('User-Agent:', headers['user-agent']);
  console.log('----------------------');

  // Kirim pesan sambutan ke client
  ws.send('Connected to WSS Reverse Inject Server');

  // Tangani pesan masuk
  ws.on('message', (msg) => {
    console.log(`[${ip}]: ${msg}`);
    ws.send(`Echo: ${msg}`);
  });

  ws.on('close', () => {
    console.log(`Connection from ${ip} closed`);
  });
});

// Jalankan server di port 80
server.listen(80, () => {
  console.log('WSS Reverse Inject Server running on port 80');
});
    
