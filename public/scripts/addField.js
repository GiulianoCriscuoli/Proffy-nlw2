// Procurar o botão

const addNewHour = document.querySelector("#add-time");
addNewHour.addEventListener("click", cloneField);

// contador de fields e limite de fields adicionados

let i = 1;
let limitFields = 4;

// Executar uma ação
function cloneField() {

    validateFields();

    function validateFields() {
        if(i <= limitFields) {

            // Duplicar os campos
            const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
            
            // Colocar na página
            const schedule = document.querySelector("#schedule-items");
            schedule.appendChild(newFieldContainer);
            i++;
            // Limpar os campos
            const fields = newFieldContainer.querySelectorAll('input');
            fields.forEach(field => field.value ="");
            
        }  else {

            let warning = document.querySelector("#schedule-items #warning");

            warning.style.display = 'block';
            warning.style.transform = 'scale(1)';
        }

       

        
    }
    
}
