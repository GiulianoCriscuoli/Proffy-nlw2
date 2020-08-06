const html = document.querySelector("html"); // pega o documento html
const checkbox = document.querySelector("input[name=theme]"); // pega a checkbox

const getStyle = (element, style) => 
window
.getComputedStyle(element)
.getPropertyValue(style);

const initialColors = {

    bg: getStyle(html, "--color-background"),
    colorPrimary: getStyle(html, "--color-primary"),
    colorText: getStyle(html, "--color-text-in-primary")

}

const darkMode = {

    bg: "#454851",
    colorPrimary: "#454851",
    colorText: "#FCEFF9"

}

const transformKey = key => 

    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();


const changeColors = (colors) => {

    Object.keys(colors).map(key => {

        html.style.setProperty(transformKey(key), colors[key]);
    });

}

// Quando checkbox receber o evento de change, target vai modificar as cores

checkbox.addEventListener("change", ({target}) => {

    target.checked ? changeColors(darkMode) : changeColors(initialColors);

});