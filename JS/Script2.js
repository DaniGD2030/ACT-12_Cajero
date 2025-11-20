document.getElementById('btnAñadir').addEventListener("click", agregarDinero);
document.getElementById('btnRetirar').addEventListener("click", retirarDinero);

let saldoFinal = 0;
let ahorro = 0;

function mostrarSaldo() {
    document.getElementById('resumen').innerHTML = `Saldo Actual: ${saldoFinal}`;
}

function agregarDinero(e) {
    e.preventDefault();
    ahorro = parseInt(document.getElementById('cantidad').value);
    saldoFinal += ahorro;
    tipoMov = "Deposito";
    mostrarSaldo();

    const movimiento = { tipoMov, ahorro, saldoFinal };
    let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
    movimientos.push(movimiento);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    document.getElementById('cantidad').value = "";
    mostrarHistorial();
}

function retirarDinero(e) {
    e.preventDefault();
    ahorro = parseInt(document.getElementById('cantidad').value);
    document.getElementById('avisos').innerText = "";
    tipoMov = "Retiro";

    if (saldoFinal < ahorro || saldoFinal == 0) {
        document.getElementById('avisos').innerHTML = `Saldo Insuficiente`;
        document.getElementById('cantidad').value = "";
    } if (ahorro < 0) {
        document.getElementById('avisos').innerHTML = `Cantidad Inválida`;
        document.getElementById('cantidad').value = "";
    } else if (saldoFinal > ahorro) {
        saldoFinal -= ahorro;
        mostrarSaldo();
        const movimiento = { tipoMov, ahorro, saldoFinal };
        let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
        movimientos.push(movimiento);
        localStorage.setItem("movimientos", JSON.stringify(movimientos));

        document.getElementById('cantidad').value = "";
        mostrarHistorial();
    }
}

function mostrarHistorial(){
    const lista = document.getElementById('historial');
    const movimiento = JSON.parse(localStorage.getItem('movimientos')) || [];
    let tabla;
    tabla = `<table borde=0.5>
        <tr>
           <th> Movimiento </th>
           <th> Cantidad </th>
           <th> Saldo </th>
        </tr>`;
        movimiento.forEach((h,index) => {
            tabla += `<tr>
            <td>${h.tipoMov}</td>
            <td>${h.ahorro}</td>
            <td>${h.saldoFinal}</td>
        </tr>`;
            });
            tabla += `</table>`;
            lista.innerHTML = tabla;  
}



