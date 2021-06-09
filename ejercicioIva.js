function calcularIva(importe){
    const IVA = 0.21;
    return importe * IVA;
}

function calcularImporteTotal(importe){
    return importe + calcularIva(importe);
}

let importeBase = 100;
let importeTotal = calcularImporteTotal(importeBase);
console.log("El importe total de " + importeBase + " es " + importeTotal);
