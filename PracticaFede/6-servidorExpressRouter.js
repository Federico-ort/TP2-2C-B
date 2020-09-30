const express = require('express');
const chalk = require('chalk');
const PORT = 3000;
const app = express();


//ejemplo api con query String: http://localhost:3000/?Nombre=Fede&Apellido=Loterstein
app.get('/', (req, res) => {
    res.send(`
    <html>
        <head></head>
        <body>
            HOME DE API REST CON EXPRESS
            <h1>Nombre: ${req.query.Nombre}</h1>
            <h1>Apellido: ${req.query.Apellido}</h1>
        </body>
    </html>
    `
    )
})

//ejemplo api con params: http://localhost:3000/api/inventors/12/fede
app.get('/api/inventors/:id/:name', (req, res) => {
    res.send(`
    <html>
        <head></head>
        <body>
            HOME DE API REST CON EXPRESS
            <h1>ID: ${req.params.id}</h1>
            <h1>Name: ${req.params.name}</h1>
        </body>
    </html>
    `
    )
})

app.listen(PORT, () => {
    console.log(chalk.yellow('Server de express levantado'));
})