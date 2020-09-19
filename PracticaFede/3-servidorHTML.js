const fs = require('fs');
const http = require('http');
const chalk = require('chalk');
const PORT = 3000;

http.createServer((req, res) => {
    try {
        let html = fs.readFileSync('./index.htm', 'utf-8');
        res.writeHead(200, {'Content-Type': 'text-html'});
        html = html.replace('{mensaje}', 'Hola Mundo del templete');
        res.write(html);
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text-html'});
        res.write('Error interno 500');
    }
    res.end();
}).listen(PORT, '127.0.0.1', () => {
    console.log(chalk.red(`Servidor Web iniciando y escuchando el puerto ${PORT}`));
});