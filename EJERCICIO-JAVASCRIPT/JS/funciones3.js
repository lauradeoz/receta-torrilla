
const divResultado = document.getElementById("resultado");

//colores de fondo
let colorSuccess = "rgb(51, 209, 36)";
let colorDanger = "rgb(224, 15, 15)";


document.getElementById("botonEnviar").addEventListener('click', carnet2);
function carnet2(){

    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;

    //elimina los espacios del principio y final de un string

    nombreUsuario = nombreUsuario.trim();
    
    let mensajeTxt = mensajeError(nombreUsuario, edadUsuario);

    divResultado.innerHTML = mensajeTxt[0];
    divResultado.style.display = "block";

    if(mensajeTxt[1] == true){
        divResultado.style.backgroundColor = colorSuccess;
    }else{
        divResultado.style.backgroundColor = colorDanger;  
    }
}


//funcion que crea un mensaje de error para el usuario
function mensajeError(nombre, edad){
    let respuesta = ['', false];
    if(nombre ===""){
        respuesta [0] = "<p>Debes introducir un nombre</p>";
    }
    switch(true){
        case edad <0:
            respuesta [0]+= "<p> La edad debe ser un número positivo</p>"
            break;
        case edad < 18:
            respuesta [0]+= "<p>Debes ser mayor de edad</p>";
            break;
        case edad <= 100:
            respuesta [0]+= "<p>Enhorabuena, puedes sacarte el carnet</p>";
            respuesta[1] = true;
            break;
        case edad > 100:
            respuesta [0] += "<p>Lo siento mucho, pero no puedes obtener el permiso</p>";
            break;
            default:
            respuesta [0]+= "<p>La edad introducida no es válida</p>";
    }
    return respuesta;
}


