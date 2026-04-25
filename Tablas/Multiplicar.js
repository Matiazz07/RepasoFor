function generarTablas() {
    let contenedor = document.getElementById("table-responsive")
    let contenidoTabla = "<table><thead><tr><th>Nivel Sincronización</th><th>Poder de Franxx</th></tr></thead><tbody>";
    for (let i = 1; i <= 10; i++) {
        let tabla = 3;
        resultado = Number(tabla) * i;
        contenidoTabla += "<tr class='slide-in' style='--delay: 0.1s'><td>" + tabla + " x " + i + "</td><td><strong>" + resultado + "</strong></td></tr>";
    }
    contenedor.innerHTML = contenidoTabla;
}
