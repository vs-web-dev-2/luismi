const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primos = [2, 3, 5, 7];

const esPar = (numero) => (numero % 2 === 0 ? true : false);

function esPrimo(numero) {
  for (let i = 0; i < primos.length; i++) {
    if (numero === primos[i]) {
      return true;
    }
  }
  return false;
}

const elevarAlCubo = (x) => x * x * x;

const resultado = numeros.filter(esPar).filter(esPrimo).map(elevarAlCubo);

// console.log("resultado", resultado);
const sergio = numeros.map((numero) => Math.sqrt(numero)).map(elevarAlCubo);
sergio.push(8);
sergio.push(666);
sergio.length = 0;
sergio.push(8);
sergio.push(8);
sergio.push(7);
// sergio = [8, 9, 7, 6, 5];
const ines = 9;
//ines = 8;

// console.log("sergio", sergio);
// console.log(numeros);

const bicicleta = { marca: "bh" };
bicicleta.marca = "specialized";
bicicleta.color = "negro";
bicicleta.pepe = "negro";
// bicicleta = 9;
// bicicleta = { marca: "orbea" };
console.log(bicicleta);

const misClaves = Object.keys(bicicleta);
console.log(misClaves);
const misValores = Object.values(bicicleta);
console.log(misValores);

console.log(bicicleta.marca);
bicicleta["marca"] = "orbea";
console.log(bicicleta["marca"]);