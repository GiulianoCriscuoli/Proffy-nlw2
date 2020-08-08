const Database = require('./database/db');

const { subjects, weekdays, getSubject,  convertHours} = require('./utils/format');

/* html da home */

const landingPage = (req, res) => {

    res.render("index.html");
}

/* html do study */

const study = async(req, res) => {
    const filters = req.query;

    if(!filters.subject || !filters.weekday || !filters.time) {
        
        return res.render("study.html", {filters, subjects, weekdays});
        
    }

    const timeToMinutes = convertHours(filters.time);    

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from = ${timeToMinutes}
            AND class_schedule.time_to = ${timeToMinutes}


        )

            AND classes.subject = "${filters.subject}"
    
    `

    // capturando erros

    try {

        const db = await Database;

        const proffys = await db.all(query);

        return res.render("study.html", {proffys, filters, subjects, weekdays})

    } catch(err) {

        console.log("Erro ao conectar", err)
    }

    
}

/* html do give-classes */

const giveClasses = (req, res) => {
    const data = req.query;

// pega as chaves de data e tranforma em arrays

    const isNotEmpty = Object.keys(data).length > 0;

// adiciona um novo objeto para o proffys se o array não for verdadeiro

    if(isNotEmpty) {

        data.subject = getSubject(data.subject);

        proffys.push(data);
        return res.redirect("/study");

    }

    return res.render("give-classes.html",{subjects, weekdays});
}

module.exports = {landingPage, study, giveClasses}