//alert("Hola este es mi Javascript");
//var nombre = "César";
//console.log(nombre)

//let contenidoTitulo = "Mi Web"

//let titulo = document.querySelector(".titulo")
//titulo.innerHTML = contenidoTitulo

//condicionales
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if (textoTitulo == "Mi Web")  {
//    titulo.innerHTML = "Otro";
//}  else {
//    console.log("no se cumple");
//}

//funciones
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};

let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");


function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);
console.log(parrafo);

const form = document.getElementById("form");
const nombre_form = document.getElementById("nombre");
const mensaje = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre_form.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        mensaje.innerHTML = warnings;
    } else {
        mensaje.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});