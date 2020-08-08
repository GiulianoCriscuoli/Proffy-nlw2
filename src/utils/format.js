
// Dados


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

// acessando a chave de subject

function getSubject(subjectNumber) {

    let position = +subjectNumber -1;
    return subjects[position];
}

function convertHours(time) {

    const [hour, minutes] = time.split(":");

    return Number((hour * 60) + minutes);

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHours
}