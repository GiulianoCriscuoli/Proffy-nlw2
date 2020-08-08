
const express = require('express');
const app = express();

const {landingPage, study, giveClasses} = require('./pages')

/* configurando o nunjucks */

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {

    express: app,
    noCache: true,
    autoescape: false

});

/* configurando arquivos estáticos */

app.use(express.static("public"));

/* rotas */

app.get('/', landingPage );
app.get('/study', study);
app.get('/give-classes', giveClasses);

const PORT = app.listen(5500);

console.log("Está rodando na porta: ", PORT.address().port);
