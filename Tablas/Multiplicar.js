function generarTablas() {
    let contenedor = document.getElementById("table-responsive")
    let contenidoTabla = "<table><thead><tr><th>Nivel Sincronización</th><th>Poder de Franxx</th></tr></thead><tbody>";
    let tabla = document.getElementById("txtTabla").value;
    let tablaEnt = parseInt(tabla);
    let titulo = document.getElementById("txtTitulo")
    titulo.textContent = "¡TABLA DEL " + tablaEnt + "!";
    for (let i = 1; i <= 10; i++) {
        resultado = tablaEnt * i;
        contenidoTabla += "<tr class='slide-in' style='--delay: 0.1s'><td>" + tablaEnt + " x " + i + "</td><td><strong>" + resultado + "</strong></td></tr>";
    }
    contenedor.innerHTML = contenidoTabla;
}
