//array de productos
//cada producto debe tener un tipo de iva (normal, reducido o exento)
//{nombre: "libreta", precio: 1.80, iva: normal}
//carrito es un array (subconjunto de los productos escogidos)
//criterio=precio < 10

//calcular subtotal sin iva

//array de tipos de IVA (objetos clave valor, nombre: normal, tipo: 21)
//calcular el total con IVA

let productos = [{nombre: "libreta", precio: 1.80, iva: "normal"},
                 {nombre: "lapiz", precio: 2, iva: "reducido"},
                 {nombre: "cuaderno", precio: 8, iva: "exento"},
                 {nombre: "mochila", precio: 60, iva: "normal"}];


let carrito = [];

function annadirAlCarrito(producto){
    carrito.push(producto);
    console.log(`Se ha añadido al carrito el producto ${producto.nombre} con un precio de ${producto.precio}€ y con un IVA ${producto.iva}.`);
}

function calcularSubtotalSinIva(carrito){
    let total=0;
    for (i=0;i<carrito.length;i++){
        total+=carrito[i].precio;
    }
    return total;
}


for(let i=0; i<productos.length;i++){
    if(productos[i].precio<10){
        annadirAlCarrito(productos[i]);
    }
}

console.log(`El importe de los productos sin IVA es de ${calcularSubtotalSinIva(carrito)}`);


let tiposIva = [{nombre: "normal", tipo: 21},
                {nombre: "reducido", tipo: 4},
                {nombre: "exento", tipo: 0}];

let cuotaCarritoIva = 0;

carrito.forEach(function (producto){
    let tipoIvaProducto = tiposIva.find(tipoIva => tipoIva.nombre === producto.iva);
    let cuotaIva = producto.precio * tipoIvaProducto.tipo / 100
    cuotaCarritoIva+=cuotaIva
});

console.log(`El IVA es de ${cuotaCarritoIva}`);

