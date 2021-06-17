console.log("🌜 aterrizando");

// Ejemplo de consulta y lectura simple
// const nodoHeader = document.querySelector("header");
// console.log(nodoHeader);
// console.log(nodoHeader.innerHTML);
// const nodoHeaderH1 = document.querySelector("header h1");
// console.log(nodoHeaderH1);
// console.log(nodoHeaderH1.innerText);
// nodoHeaderH1.innerText = "Otra cosa";

const nodoFrase = document.querySelector("cite");
const frase = nodoFrase.innerText;
console.log(frase);

const nodoTecleo = document.getElementById("tecleo");
console.log(nodoTecleo);
console.log(nodoTecleo.type);
console.log(nodoTecleo.id);
const tecleado = nodoTecleo.value;
console.log(tecleado);

const nodoMensaje = document.getElementById("mensaje");

let inicio;
let haTerminado = false;

const nodoBotonEmpezar = document.getElementById("empezar");
nodoBotonEmpezar.addEventListener("click", () => {
    console.log("✨ click en empezar");
    nodoTecleo.value = "";
    nodoMensaje.innerText = "🎏 ánimo";
    inicio = Date.now();
});

function onInput() {
    if (haTerminado) return;
    const loTecleado = nodoTecleo.value;
    const ahora = Date.now();
    let tiempo = (ahora - inicio) / 1000;
    if (frase === loTecleado) {
        nodoMensaje.innerText = "🎉🌈 enhorabuena ⏳ has tardado " + tiempo;
        nodoTecleo.classList.remove("va-bien", "va-mal");
        nodoTecleo.classList.add("terminado");
        haTerminado = true;
    } else {
        if (frase.startsWith(loTecleado)) {
            nodoMensaje.innerText = "✅ aún no está completa ⏳ llevas " + tiempo;
            nodoTecleo.classList.remove("terminado", "va-mal");
            nodoTecleo.classList.add("va-bien");
        } else {
            nodoMensaje.innerText = "🔥 vas mal ⏳ llevas " + tiempo;
            nodoTecleo.classList.remove("terminado");
            nodoTecleo.classList.remove("va-bien");
            nodoTecleo.classList.add("va-mal");
        }
    }
}

nodoTecleo.addEventListener("input", onInput);