// Procurar o botão

const addNewHour = document.querySelector("#add-time");
addNewHour.addEventListener("click", cloneField);

// Quando clicar no botão

// Executar uma ação
function cloneField() {

// Duplicar os campos
const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

// Limpar os campos

const fields = newFieldContainer.querySelectorAll('input');

// Para cada item limpa os campos

 fields.forEach(field => field.value = "");

// Colocar na página

const schedule = document.querySelector("#schedule-items");
schedule.appendChild(newFieldContainer);

}

    

