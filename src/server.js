const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: 985746372, 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
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
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "química", 
        cost: "20", 
        weekday: [0
            ], 
        time_from: [720], 
        time_to: [1020]

        }
]



/* html da home */

const landingPage = (req, res) => {

    res.sendFile(__dirname + "/views/index.html");
}

/* html do study */

const study = (req, res) => {

    res.sendFile(__dirname + "/views/study.html");
}

/* html do give-classes */

const giveClasses = (req, res) => {

    res.sendFile(__dirname + "/views/give-classes.html");
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

const port = app.listen(5500);

console.log("Está rodando na porta: ",port);
