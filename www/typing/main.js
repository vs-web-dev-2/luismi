console.log("Aterrizando...");

//const nodoHeader document.querySelector('header');
//console.log(nodoHeader);
//console.log(nodoHeader.innerHTML);
//const nodoHeaderH1 = document.querySelector("header hi");
//console.log(nodoHeaderH1);
//console.log(nodoHeaderH1.innerText);
//nodoHeaderH1.innerText = "Otra cosa";

const nodoFrase = document.querySelector("cite");
const frase = nodoFrase.innerText;
console.log(frase);

const nodoTecleo = document.getElementById('tecleo');
console.log(nodoTecleo);
const tecleado = nodoTecleo.value;
console.log(tecleado);

const nodoMensaje = document.getElementById('mensaje');

let inicio;
let haTerminado = false

const nodoBotonEmpezar = document.getElementById("empezar");
nodoBotonEmpezar.addEventListener('click', function onClick() {
    console.log("Click en empezar");
    nodoTecleo.value = "";
    nodoMensaje.innerText = "Ánimo";
    inicio = Date.now();
});

nodoTecleo.addEventListener('input', () => {
    if (haTerminado) return;
    const loTecleado = nodoTecleo.value;
    const ahora = Date.now();
    let tiempo = (ahora - inicio) / 1000;

    if (frase === loTecleado) {
        nodoMensaje.innerText = "Enhorabuena!! Has tardado " + tiempo + " segundos.";
        nodoTecleo.classList.remove("va-bien", "va-mal");
        nodoTecleo.classList.add("terminado");
        haTerminado = true;
    } else {
        if (frase.startsWith(loTecleado)) {
            nodoMensaje.innerText = "Aún no está completa!!";
            nodoTecleo.classList.remove("terminado", "va-mal");
            nodoTecleo.classList.add("va-bien");
        } else {
            nodoMensaje.innerText = "La cagaste!!";
            nodoTecleo.classList.remove("terminado", "va-bien");
            nodoTecleo.classList.add("va-mal");
        }
    }
});
