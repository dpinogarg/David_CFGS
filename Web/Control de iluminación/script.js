function updateButtonClasses() {  
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const estado = urlParams.get('estado');
    const modo = urlParams.get('modo');

    // IDs de los botones
    const ids = ['paro', 'marcha', 'auto'];

    // Limpiar las classes de los botones
    ids.forEach(id => {
        document.getElementById(id).classList.remove('button-paro', 'button-marcha', 'button-auto');
    });

    // Actualizar el texto del parrafo de salida
    const outputText = document.getElementById('output-text');

    // Comprobar si se ha llamado al modo automático
    if (modo) {
        document.getElementById('auto').classList.add('button-modo');
        outputText.innerText = 'Alumbrado en modo automatico';
    } else if (estado) {
        // Si 'modo' no esta presente, examinamos el valor de 'estado'
        if (estado == 'off') {
            document.getElementById('paro').classList.add('button-paro');
            outputText.innerText = 'Alumbrado apagado';
        } else if (estado == 'on') {
            document.getElementById('marcha').classList.add('button-marcha');
            outputText.innerText = 'Alumbrado encendido';
        }
    }
}

// Llamar a la función al cargar la página
window.onload = updateButtonClasses;
