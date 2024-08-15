document.getElementById('formularioVoto').addEventListener('submit', function(event) {
    event.preventDefault();

    const seccionSeleccionada = document.getElementById('seccion').value;
    const resultado = document.getElementById('resultado');

    procesarVoto(seccionSeleccionada);
});

function procesarVoto(seccion) {
    switch (seccion) {
        case 'norte':
            mostrarResultado('Gracias por votar por la sección Norte.');
            break;
        case 'sur':
            mostrarResultado('Gracias por votar por la sección Sur.');
            break;
        case 'centro':
            mostrarResultado('Gracias por votar por la sección Centro.');
            break;
        default:
            mostrarResultado('Sección no válida.');
            break;
    }
}

function mostrarResultado(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
}
