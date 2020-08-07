const html = document.querySelector("html"); // pega o documento html
const checkbox = document.querySelector("input[name=theme]"); // pega a checkbox

const getStyle = (element, style) => 
window
.getComputedStyle(element)
.getPropertyValue(style);

//cores iniciais

const initialColors = { colorPrimary: getStyle(html, "--color-primary") }

// cores a serem modificadas

const darkMode = { colorPrimary: "#454851" }

// transformando a chave na variável 

const transformKey = key => 

    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();


// Acessa as keys de cada obejto de cores, mapeia e setta uma nova key de cor

const changeColors = (colors) => {

    Object.keys(colors).map(key => {

        html.style.setProperty(transformKey(key), colors[key]);
    });

}

// Quando checkbox receber o evento de change, target vai modificar as cores

checkbox.addEventListener("change", ({target}) => {

    target.checked ? changeColors(darkMode) : changeColors(initialColors);

});