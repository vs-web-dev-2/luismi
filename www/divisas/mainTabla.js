const nodoFecha = document.getElementById("fecha");
const nodoCotizacionesTableIndice = document.getElementById("cabeceraTabla");
const nodoCotizacionesTable = document.getElementById("tabla");

const url = "https://api.frankfurter.app/latest";

const request = fetch(url);

const bodyJson = request.then((response) => response.json());

bodyJson.then(procesarDatos);

function procesarDatos(data) {
    const fechaString = data.date;
    console.log("fecha: " + fechaString);

    const fechaNumber = Date.parse(fechaString);
    const fechaDate = new Date(fechaString);

    const fechaEuropea = `${fechaDate.getDate()}/${fechaDate.getMonth() + 1}/${fechaDate.getFullYear()}`

    nodoFecha.innerText = fechaEuropea;
    const objetoCotizaciones = data.rates;

    const claves = Object.keys(objetoCotizaciones);

    claves.forEach((divisa) => {
        const nodoDivisaRow = document.createElement("tr");

        const nodoDivisaTd = document.createElement("td");
        nodoDivisaTd.innerText = divisa;
        nodoDivisaTd.className = "divisa";

        const nodoCotizacionTd = document.createElement("td");
        nodoCotizacionTd.innerText = objetoCotizaciones[divisa];
        nodoCotizacionTd.className = "cotizacion";

        const nodoCotizacionInvTd = document.createElement("td");
        nodoCotizacionInvTd.innerText = (1 / objetoCotizaciones[divisa]).toFixed(6);
        nodoCotizacionInvTd.className = "cotizacionInv";

        nodoDivisaRow.appendChild(nodoDivisaTd);
        nodoDivisaRow.appendChild(nodoCotizacionTd);
        nodoDivisaRow.appendChild(nodoCotizacionInvTd);
        nodoCotizacionesTable.appendChild(nodoDivisaRow);
    });
}

request.catch();