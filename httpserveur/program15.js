/* un serveur HTPP est un programe qui écoute des port et répond aux requêtes provenant de ces ports en utilisant le protocole HTTP.
par défaut (80,443) 
communément, la machine qui fait tourner ce serveur est aussi appelées serveur HTTP.
*/

const https = require('https');
const utils = require("./utils");
let options = {
  hostname: '127.0.0.1',
  port: 3000,
  method: 'GET'
};

const serveur = https.createServer((req, res) => {
    res.statusCode = 200;
    console.log(Math.random());
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.end(`
        <html>

        </html>
    `);
  });
  
  server.listen(options, () => {
    console.log(`Server running at http://${options.hostname}:${options.port}/`);
  });