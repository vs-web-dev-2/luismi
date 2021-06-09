const PI = 3.14;
let marca = "bh";
let radio = 30;
let rueda = 2 * PI * radio;
let esDeCarretera = true;

marca = "orbea";
radio = 40;
console.log("Marca: " + marca);
console.log("Longitud rueda: " + rueda);
console.log("Radio: " + radio);
console.log("La bicicleta es de carretera: " + esDeCarretera);

let bici = {
    marca : "bh",
    precio : 300,
    radio : 30,
    esDeCarretera : true,
    color : "rojo"
};

bici.color="azul";
console.log(bici);
console.log(bici.precio);
console.log(bici.color);

let colores = ["rojo","azul","blanco"];
console.log(colores);
console.log(colores[1]);
colores[2]="negro";
console.log(colores[2]);

bici.marca = marca;

console.log(bici);

bici.color = colores[0];
console.log(bici);

let esGrande = bici.radio > 25;
console.log(esGrande);

let meGusta = bici.color !== "azul";
console.log(meGusta);

//declaración
let etiqueta;
//asignación
etiqueta = "hola";
//instrucción
console.log(etiqueta);
//expresión
etiqueta = "horas: " + 12 + 12;
//operadores
//+,-,*,/,%,==,!=