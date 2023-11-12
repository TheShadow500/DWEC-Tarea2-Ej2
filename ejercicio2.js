window.onload = function(){
    const boton = document.getElementById("boton");
    boton.addEventListener("click", calcularFecha);
}

function calcularFecha(){
    // Cogemos las dos fechas introducidas por el usuario
    let fechaInicial = new Date(document.getElementById("primeraFecha").value);
    let fechaFinal = new Date(document.getElementById("segundaFecha").value);

    // Validamos que las fechas sean correctas y en caso de serlo realizamos la comprobacion
    if(!Date.parse(fechaInicial) || !Date.parse(fechaFinal)){
        window.alert("Debe introducir las fechas");
    }
    else{
        // Convertimos las fechas a milisegundos para operar con ellas
        let tiempoPrimera = fechaInicial.getTime();
        let tiempoSegunda = fechaFinal.getTime();

        // Comprobamos que fecha es mayor para realizar la resta
        let diferencia;
        if(tiempoPrimera >= tiempoSegunda){
            diferencia = tiempoPrimera - tiempoSegunda;
        }
        else{
            diferencia = tiempoSegunda - tiempoPrimera;
        }

        // Se convierte la fecha en milisegundos a días
        diferencia = (diferencia / 1000) / 86400;

        // Se muestra en el HTML el resultado
        if(diferencia == 0){
            document.getElementById("resultado").innerHTML = "Se ha introducido la misma fecha";
        }
        else if(diferencia == 1){
            document.getElementById("resultado").innerHTML = "Diferencia en <b>DÍAS</b> de las fechas: <b>" + diferencia + " día</b>";
        }
        else{
            document.getElementById("resultado").innerHTML = "Diferencia en <b>DÍAS</b> de las fechas: <b>" + diferencia + " días</b>";
        }
    }
}