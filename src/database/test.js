const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async(db) => {

    // inserção de dados

    proffyValue = {
        name: "Giuliano",
        avatar: "https://avatars0.githubusercontent.com/u/60347272?s=460&u=9b0600e47073bce8b90118ff99637a6a861a607a&v=4",
        whatsapp: "899838473",
        bio: "Astronauta de internet"
    }

    classValue = {
        subject: "Química",
        cost: "20"
        
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1020
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues});


    // consultar dados inseridos

    // const selectedProffyAll =  await db.all(`SELECT * FROM proffys`);
    // console.log(selectedProffyAll);

     // consultar as classes de um determinado professor
     // e trazer junto os dados do professor

        const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;

     `) 

    console.log(selectClassesAndProffys);

    

});