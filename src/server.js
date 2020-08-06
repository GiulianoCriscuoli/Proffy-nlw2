
// Dados

const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: 985746372, 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "química", 
        cost: "20", 
        weekday: [0
        ], 
        time_from: [720], 
        time_to: [1020]
    },

    {
        name: "Diega Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: 985746372, 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "química", 
        cost: "20", 
        weekday: [0
            ], 
        time_from: [720], 
        time_to: [1020]

        }
]

const subjects = [
    
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"

]

const weekdays = [
    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

/* html da home */

const landingPage = (req, res) => {

    res.render("index.html");
}

/* html do study */

const study = (req, res) => {
    const filters = req.query;

    res.render("study.html", {proffys, filters, subjects, weekdays});
}

/* html do give-classes */

const giveClasses = (req, res) => {
    const data = req.query;

// pega as chaves de data e tranforma em arrays

    const isNotEmpty = Object.keys(data).length > 0;

// adiciona um novo objeto para o proffys se o array não for verdadeiro

    if(isNotEmpty) {

        proffys.push(data);

        return res.redirect("/study");

    }

    return res.render("give-classes.html",{subjects, weekdays});
}

const express = require('express');
const app = express();

/* configurando o nunjucks */

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {

    express: app,
    noCache: true

});

/* configurando arquivos estáticos */

app.use(express.static("public"));

/* rotas */

app.get('/', landingPage );
app.get('/study', study);
app.get('/give-classes', giveClasses);

const PORT = app.listen(5500);

console.log("Está rodando na porta: ", PORT.address().port);
