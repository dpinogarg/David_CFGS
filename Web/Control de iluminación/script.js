function conmutar_salida(nombre_variable, valor) {
    fetch(`/awp?${nombre_variable}=${valor}`)
        .then(response => {
            console.log("Comando enviado con éxito");
            if (valor == 1) {
                document.getElementById(nombre_variable).innerHTML = "button-off";
                document.getElementById(nombre_variable).innerHTML = "button-disable";
            } else if (valor == 0) {
                document.getElementById(nombre_variable).innerHTML = "button-disable";
                document.getElementById(nombre_variable).innerHTML = "button-on";
            }
        })
        .catch(error => console.error("Error al enviar el comando", error));
}