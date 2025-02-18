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
        // Ejemplo comunicación con PLC
    } else if (estado) {
        // Si 'modo' no esta presente, examinamos el valor de 'estado'
        if (estado == 'off') {
            document.getElementById('paro').classList.add('button-paro');
            outputText.innerText = 'Alumbrado apagado';
            // Ejemplo comunicación con PLC
        } else if (estado == 'on') {
            document.getElementById('marcha').classList.add('button-marcha');
            outputText.innerText = 'Alumbrado encendido';
            // Ejemplo comunicación con PLC
        }
    }
}

// Llamar a la función al cargar la página
window.onload = updateButtonClasses;

/*

    Mediante la ejecución del conjunto web en el host local de una red ProfiNET,se puede manejar
    la comunicación con el PLC y la actualización de variables via el "Siemens Web Server" o "AWL".

    Para ello se debe incluir en el anterior script líneas de código que manejen la comunicación HTTP
    con el servidor web del PLC. El siguiente fragmento es un ejemplo de cómo se podría realizar:

        function updateVariablesPlc(variable, valor) {
            fetch('/awp?{variable}='{valor})
                .then(response => console.log("Comando enviado exitosamente"))
                .catch(error => console.error("Error: ", error));
        }
    
    Con la inclusión de "updateVariablesPlc(variable, valor)" argumentada con los valores obtenidos
    de la URL por "updateButtonClasses()" se pueden modificar las variables del programa de PLC:

    22  updateVariablesPlc(marca_modo-automatico, 1);
    
    28  updateVariablesPlc(marca_modo-automatico, 0); updateVariablesPlc(salida_alumbrado, 0);

    32  updateVariablesPlc(marca_modo-automatico, 0); updateVariablesPlc(salida_alumbrado, 1);

*/