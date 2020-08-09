const express = require('express');
const app = express();

const {
    landingPage, 
    study,
    giveClasses, 
    saveClasses,
    success
    } = require('./pages')

/* configurando o nunjucks */

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {

    express: app,
    noCache: true,

});

/* configurando arquivos estáticos */

app.use(express.static("public"));

/* recebendo dados do body */

app.use(express.urlencoded({ extended: true }))

/* rotas */

app.get('/', landingPage );

app.get('/success', success);

app.get('/study', study);

app.get('/give-classes', giveClasses);
app.post('/save-classes', saveClasses);




const PORT = app.listen(5500);

console.log("Está rodando na porta: ", PORT.address().port);
