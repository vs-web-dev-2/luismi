let colores = ["rojo","azul","blanco"];

for (let i=0; i<colores.length;i++){
    console.log(colores[i]);
}


//se llama callback
colores.forEach(function imprimir(color){
    console.log(color);
});

//sintaxis alternativa (sin nombre de la función)
colores.forEach(function (color){
    console.log(color);
});

//sintaxis alternativa (canela en rama)
colores.forEach(color => console.log(color));
