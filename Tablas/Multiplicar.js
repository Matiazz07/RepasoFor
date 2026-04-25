function generarTablas() {
    let contenedor = document.getElementById("table-responsive")
    let contenidoTabla = "<table><thead><tr><th>Nivel Sincronización</th><th>Poder de Franxx</th></tr></thead><tbody>";
    let tabla = 5;
    let titulo = document.getElementById("txtTitulo")
    titulo.textContent = "¡TABLA DEL " + tabla + "!";
    for (let i = 1; i <= 10; i++) {
        resultado = Number(tabla) * i;
        contenidoTabla += "<tr class='slide-in' style='--delay: 0.1s'><td>" + tabla + " x " + i + "</td><td><strong>" + resultado + "</strong></td></tr>";
    }
    contenedor.innerHTML = contenidoTabla;
}
