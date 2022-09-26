function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 146;
    var euro = 140;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de pesos a dolares es: " + "$" + resultado);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de pesos a euros es: " + "$" + resultado);
    }
    else{
        alert("Completa los requerimientos necesarios para utilizar esta funcion")
    }
}
