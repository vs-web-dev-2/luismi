//Rellenar un array de 100 numeros aleatorios
let arrayCreado = [];

for(let i=1;i<100;i++){
    arrayCreado.push(Math.round(Math.random()*100));
}

console.log(arrayCreado);


//Mostrar sólo los pares
let esPar = x => x%2===0 ? true : false ;
const arrayPares = arrayCreado.filter(esPar);
console.log(arrayPares);


// Mostrar sólo los primos
function esPrimo(numero){
    for (i = numero-1; i>2; i--){
        if(numero%i===0){
            return false;
        }
    }
    return true;
}
const arrayPrimos = arrayCreado.filter(esPrimo);
console.log(arrayPrimos);

// Mostrar el cuadrado de los números primos
let cuadrado = x => x*x
console.log(arrayPrimos.map(cuadrado));


//Juego FizzBuzz
const resultadoFizzBuzz = [];
for(let j=1; j<100;j++){
    if(j%3===0 && j%5===0){
        resultadoFizzBuzz.push("Fizz Buzz");
    }else{
        if(j%3===0){
            resultadoFizzBuzz.push("Fizz");
        }else{
            if(j%5===0){
                resultadoFizzBuzz.push("Buzz");
            }else{
                resultadoFizzBuzz.push(j);
            }
        }
    }
}

console.log(resultadoFizzBuzz);