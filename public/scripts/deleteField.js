const deleteField = document.querySelector(".schedule-item .recycle");
const schedule = document.querySelector("#schedule-items");
const fieldItem = document.querySelector(".schedule-item");

    deleteField.addEventListener("click", () => {
    schedule.removeChild(fieldItem);

   

 