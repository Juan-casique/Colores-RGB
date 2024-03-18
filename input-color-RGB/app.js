const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los párrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}


// Actuaizar el input Red (Rojo).
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value; // ésta es la variable global
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});

// Actualizar el input Green (Verde)

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value; // Extraer el valor de donde ocurrió el evento
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

// Actualizar el input Blue (Azul)

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
}) 

