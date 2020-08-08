const Database = require('./db');
const createProffy = require('./createProffy');


Database.then(async(db) => {

    // inserção de dados

    proffyValue = {
        name: "Giuliano",
        avatar: "https://avatars0.githubusercontent.com/u/60347272?s=460&u=9b0600e47073bce8b90118ff99637a6a861a607a&v=4",
        whatsapp: "899838473",
        bio: "Astronauta de internet"
    }

    classValue = {
        subject: 1,
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

    //await createProffy(db, {proffyValue, classValue, classScheduleValues});

   //console.log(createProffy)
    


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

    // o horário do time_from(8h) tem que ser menor ou igual ao horário solicitado
    // o time_to precisa acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)

});