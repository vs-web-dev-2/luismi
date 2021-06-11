let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primos = [2, 3, 5, 7];

// Pares
function obtenerPares1(numeros) {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (esPar(numero)) {
      pares.push(numero);
    }
  }
  return pares;
}
// console.log(obtenerPares1(numeros));
// console.log(obtenerPares1([3, 12, 5, 4, 8, 48, 49]));

function obtenerMultiplos1(numeros, factor) {
  let result = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (esMultiplo(numero, factor)) {
      result.push(numero);
    }
  }
  return result;
}
// let multiplo = 3;
// console.log(obtenerMultiplos1(numeros, multiplo));
// console.log(obtenerMultiplos1(numeros, 3));
// console.log(obtenerMultiplos1([3, 12, 5, 4, 8, 48, 49], 3));
// console.log(obtenerMultiplos1(numeros, "portugal"));
// console.log(obtenerMultiplos1(3, 3));
// console.log(obtenerMultiplos1({ marca: "bh" }, 3));
// console.log(obtenerMultiplos1(["españa", "francia"], 3));
// console.log(obtenerMultiplos1(["2", "6"], 3));

function obtenerCriterio1(numeros, funcionCriterio) {
  let result = [];
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (funcionCriterio(numero)) {
      result.push(numero);
    }
  }
  return result;
}
// console.log(obtenerCriterio1(numeros, esPrimo));
// console.log(obtenerCriterio1(numeros, esMultiplo));
// console.log(obtenerCriterio1(numeros, esPar));
// // función anónima arrow
// console.log(
//   obtenerCriterio1(numeros, (numero) => {
//     if (numero % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   })
// );

// console.log(obtenerCriterio1(numeros, (numero) => (numero % 2 === 0 ? true : false)));

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let esPar2 = (numero) => (numero % 2 === 0 ? true : false);

function esMultiplo(numero, factor = 1) {
  if (numero % factor === 0) {
    return true;
  } else {
    return false;
  }
}

function esPrimo(numero) {
  for (let i = 0; i < primos.length; i++) {
    if (numero === primos[i]) {
      return true;
    }
  }
  return false;
}

function obtenerCriterioGeneral(array, funcionCriterio) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let numero = array[i];
    if (funcionCriterio(numero)) {
      result.push(numero);
    }
  }
  return result;
}
let paises = ["españa", "francia", "eeuu"];
let empezarPorE = (pais) => pais[0] == "e";

console.log(obtenerCriterioGeneral(paises, empezarPorE));
console.log(obtenerCriterioGeneral(["ernesto", "luis"], empezarPorE));
let productos = [
  { nombre: "libreta", precio: 1.8, iva: "normal" },
  { nombre: "lapiz", precio: 0.5, iva: "normal" },
  { nombre: "libro", precio: 19.9, iva: "reducido" },
];
console.log(obtenerCriterioGeneral(productos, (producto) => producto.precio > 10));

console.log(paises.filter(empezarPorE));
console.log(productos.filter((producto) => producto.iva === "normal"));