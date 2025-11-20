document.getElementById('btnAñadir').addEventListener("click", añadirDinero());
document.getElementById('btnRetirar').addEventListener("click", retirarDinero());

class cajero {
    constructor(cant) {
        this.cantidad = cant;
        this.saldo = 0;
    }
    generarResumen() {
        const cantidad = this.cantidad;
        const saldo = this.saldo + this.cantidad;

        return `Saldo actual: ${this.saldo}`;
    }

    añadirDinero() {
        const cantidad = parseFloat(document.getElementById('cantidad').value);
        let saldo = parseFloat(localStorage.getItem("saldo")) || [];
        saldo.push(cantidad);
        saldo += cantidad;
        localStorage.setItem("cantidad", JSON.stringify(saldo));
    }
    retirarDinero(index) {
        let saldo = JSON.parse(localStorage.getItem("saldo")) || [];
        saldo.splice(index, 1);
        saldo -= cantidad;
        localStorage.setItem("cantidad", JSON.stringify(saldo));
        mostrarHistorial();
        /* if saldos negativos y saldo insuficiente */
    }
    mostrarHitorial() {
    const historial = document.getElementById('historial');
    const saldoActual = JSON.parse(localStorage.getItem("saldo")) || [];
    
    let tabla = '';
    saldo.textContent = `Saldo Actual: $${saldoActual.toFixed(2)}`;

    if (saldo.length === 0) {
        historial.innerHTML = '<p>No hay movimientos en el historial.</p>';
        return;
    }
    tabla = `<table border="1">
        <tr>
            <th>Movimiento</th>
            <th>Cantidad</th>
            <th>Saldo Actual</th>
        </tr>`;
    hitorial.forEach((h, index) => {
        tabla += `<tr>
            <td>${h.cantidad}</td>
            <td>${h.saldo}</td>
        </tr>`;
    });
    tabla += `</table>`;
    historial.innerHTML = tabla;
}
}

document.addEventListener('DOMContentLoaded', mostrarHistorial());

document.getElementById('btnAñadir').addEventListener("click", function () {

    const saldo = document.getElementById('saldo').value;
    const monto = document.getElementById('monto').value;
    const tasa = parseFloat(document.getElementById('tasa').value);
    const objPrestamo = new Prestamo(nombre, monto, tasa, plazo);

    document.getElementById('resumen').innerHTML = objPrestamo.generarResumen();

});