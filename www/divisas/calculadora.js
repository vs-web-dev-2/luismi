
const api = "https://api.frankfurter.app";
let divisaOrigen;
let divisaDestino;
document.getElementById("calcular").addEventListener("click", obtenerContravalor);

function obtenerContravalor() {
    const unidades = document.getElementById("inputUnidades").value;
    document.getElementById("spanUnidades").innerText = unidades;

    divisaOrigen = document.getElementById("selectOrigen").value;
    document.getElementById("spanDivisaOrigen").innerText = divisaOrigen;

    divisaDestino = document.getElementById("selectDestino").value;
    document.getElementById("spanDivisaDestino").innerText = divisaDestino;

    const url = `${api}/latest?amount=${unidades}&from=${divisaOrigen}&to=${divisaDestino}`;

    fetch(url)
        .then((response) => response.json())
        .then(procesarDatos);
}

function procesarDatos(datos) {
    const contravalor = parseFloat(datos.rates[divisaDestino]).toFixed(2);
    document.getElementById("spanContravalor").innerText = contravalor;
}