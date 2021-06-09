function calcularIva(importe, impuesto=21){
    return importe * impuesto / 100;
}

function calcularImporteTotal(importe,impuesto){
    return importe + calcularIva(importe,impuesto);
}

let importeBase = 100;
let importeTotal = calcularImporteTotal(importeBase);
// console.log("El importe total de " + importeBase + " es " + importeTotal);
console.log(`El importe total de ${importeBase} es ${importeTotal}`);