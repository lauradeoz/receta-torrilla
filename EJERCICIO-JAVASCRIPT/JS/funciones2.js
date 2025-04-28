//crear una funcion que reciba 3 parametros:
//edad, tieneCarnet, nombre
//devuelva un string: nombre tiene permiso y puede conducir
//o nombre no puede conducir
// monstrar por consola el resultado

// let nombre = "Josefina";
// let edad = 18;
// let tieneCarnet = true;

// function puedeConducir(nombre, tieneCarnet, edad){
//     let resultado = "";
//     if(edad >= 18 && tieneCarnet == true){
//         resultado = `${nombre}, tiene permiso y puede conducir`;
//     }else{
//         resultado =`${nombre}, no puede conducir`;
//     }
//     return resultado;
// }

// let mensaje = puedeConducir(nombre, tieneCarnet, edad);

// console.log(mensaje)


const divResultado = document.getElementById("resultado");

//colores de fondo
let colorSuccess = "rgb(51, 209, 36)";
let colorDanger = "rgb(224, 15, 15)";


document.getElementById("botonEnviar").addEventListener('click', carnet);


function carnet(){
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;

    //elimina los espacios del principio y final de un string

    nombreUsuario = nombreUsuario.trim();


    //validar los datos de entrada
    if(nombreUsuario === "" || edadUsuario < 0 || edadUsuario > 100){
        alert("Por favor, asegúrate de que los datos que has introducido sean todos correctos");
    }else{
        let mensaje = "";

    if(edadUsuario >= 18){
        mensaje = `${nombreUsuario} puede sacarse el carnet`;
        divResultado.style.backgroundColor = colorSuccess;

    }else{
        mensaje = `${nombreUsuario} tienes que esperar`;
        divResultado.style.backgroundColor = colorDanger;

    }
    document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
    divResultado.style.display = "block";
    } 
}







document.getElementById("nombre").addEventListener('input', function(){
    divResultado.style.display = "none";

})

document.getElementById("edad").addEventListener('input', function(){
    divResultado.style.display = "none";

})


