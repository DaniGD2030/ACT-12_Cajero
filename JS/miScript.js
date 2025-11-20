document.getElementById('btnAñadir').addEventListener("click", añadirDinero());
document.getElementById('btnRetirar').addEventListener("click", retirarDinero());



class Cajero {
    constructor(m, r, a) {
        this.monto = m;
        this.retiro = r;
        this.añadir = a;
    }
    generarResumen() {
        const monto = this.monto;
        const saldo = monto+this.monto;

        return `Saldo actual: ${this.saldo} <br>`;
    }
}
function añadirDinero() {
    const cantidad = parseFloat(document.getElementById('btn').value);
    let saldo = parseFloat(localStorage.getItem("saldo")) || [];
    saldo.push(cantidad);
    saldo += cantidad;
    localStorage.setItem("cantidad", JSON.stringify(saldo));
}

function mostrarHitorial() {
    const historial = document.getElementById('historial');
    const saldo = JSON.parse(localStorage.getItem("saldo")) || [];
    let tabla;
    tabla = `<table border="1">
        <tr>
            <th>Movimiento</th>
            <th>Cantidad</th>
            <th>Saldo Actual</th>
        </tr>`;
    saldo.forEach((h, index) => {
        tabla += `<tr>
            <td>${h.cantidad}</td>
            <td>${h.saldo}</td>
        </tr>`;
    });
    tabla += `</table>`;
    historial.innerHTML = tabla;
}

function retirarDinero(index) {
    let saldo = JSON.parse(localStorage.getItem("saldo")) || [];
    saldo.splice(index, 1);
    saldo -= cantidad;
    localStorage.setItem("cantidad", JSON.stringify(saldo));
    mostrarHistorial();
    /* if saldos negativos y saldo insuficiente */
}

document.addEventListener('DOMContentLoaded', mostrarHistorial());

document.getElementById('btnAñadir').addEventListener("click", function () {

    const saldo = document.getElementById('saldo').value;
    const monto = document.getElementById('monto').value;
    const tasa = parseFloat(document.getElementById('tasa').value);
    const objPrestamo = new Prestamo(nombre, monto, tasa, plazo);

    document.getElementById('resumen').innerHTML = objPrestamo.generarResumen();

});