const http = require ("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`  
         <html>
            <head></head>
            <body>
                Esto es una api rest escuchando el puerto 3000
            </body> 
        </html>`);
    res.end();
}).listen(3000,'127.0.0.1', ()=> {
    console.log("Servidor Web iniciando y escuchando el puerto 3000");
})
    