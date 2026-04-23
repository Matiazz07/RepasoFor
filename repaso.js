function mostrar(opcion) {
    switch (opcion) {
        case 1:
            ejercicio1();
            break;
        case 2:
            imprimirCentenas();
            break;
        case 3:
            imprimirCentenasRegresivo();
            break;
        case 4:
            mostrarMensaje1();
            break;
        case 5:
            mostrarMensaje2();
            break;
        case 6:
            mostrarMensaje3();
            break;
        case 7:
            mostrarMensaje4();
            break;
        case 8:
            imprimirTabla3();
            break;
        case 9:
            imprimirPares();
            break;
        case 10:
            imprimirLista();
            break;
        case 11:
            imprimirLista2();
            break;
        case 12:
            imprimirPiramide();
            break;
        default:
            break;
    }
}

function ejercicio1() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function imprimirCentenas() {
    for (let i = 1200; i < 2400; i += 100)
        console.log(i);
}

function imprimirCentenasRegresivo() {
    for (let i = 1700; i > 800; i -= 100)
        console.log(i);

}

function mostrarMensaje1() {
    for (let i = 5; i < 8; i++)
        console.log(i)
}

function mostrarMensaje2() {
    for (let i = 10; i >= 8; i--)
        console.log(i)
}

function mostrarMensaje3() {
    for (let i = 0; i < 3; i++)
        console.log(i)
}

function mostrarMensaje4() {
    for (let i = 8; i > 5; i--)
        console.log(i)
}

function imprimirTabla3() {
    for (let i = 1; i <= 10; i++) {
        console.log("3 x " + i + " = " + (3 * i))
    }
}

function imprimirPares() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i)
    }
}

function imprimirLista() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log("A" + (i * 10) + "-" + j)
        }
    }
}

function imprimirLista2() {
    for (let i = 1; i <= 9; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila = fila + i
        }
        console.log(fila);
    }
}

function imprimirPiramide() {
    for (let i = 9; i >= 1; i--) {
        let fila = ""
        for (let j = 1; j <= i; j++) {
            fila += i + " "
        }
        console.log(fila)
    }
}