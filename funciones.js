function saludar() {
    console.log("Hola Mundo");
}

saludar();


function saludarPorNombre (nombre){
    console.log("Hola " + nombre);
}

saludarPorNombre("Luismi");

let amigo = "Miguel";
saludarPorNombre(amigo);


function saludarElaborado(nombre, saludo="Hola"){
    console.log(saludo + " " + nombre);
}

saludarElaborado("Luismi","Buenos días");
saludarElaborado("Juanito");

function calcularCircunferencia(r) {
    const PI = 3.14
    return 2 * PI * r;
}

let circun = calcularCircunferencia(3);
console.log("La longitud de la circunferencia es " + circun);

let lado = 10;

function calcularSuperficie(lado){
    return lado * lado;
}

console.log(calcularSuperficie(lado));

const lados = 9;
function calcularPerimetro(lado){
    const lados = 4;
    console.log("Lados local: " + lados) //coge lados de dentro de la funcion
    return lado * lados;
}

console.log(calcularPerimetro(lado));
console.log("Lados global" + lados) //coge lados de "fuera"
