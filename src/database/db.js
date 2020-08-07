const Database = require('sqlite-async');
Database.open(__dirname + '/database.sqlite').then(execute);

function execute(db) {
    // tabelas do banco de dados
    db.exec(` 
    
    CREATE TABLE IF NOT EXISTS proffys (

        id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name TEXT,
        avatar TEXT,
        whatsapp TEXT,
        bio TEXT

    );

    CREATE TABLE IF NOT EXISTS classes (

        id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        subject TEXT,
        cost TEXT,
        proffy_id INTEGER
    );

    CREATE TABLE IF NOT EXISTS class_schedule (
        id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        class_id
        weekday INTEGER,
        time_from INTEGER,
        time_to INTEGER

    );

     `);
}