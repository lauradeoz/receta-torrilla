//funcion es una porcion de codigo que se puede reutilizar en cualquier parte del programa.
//crear una funcion que compruebe si la edad de la mascota es correcta o no y devuelva un booleano


//funcion simple ejemplo
function sumar(){
    console.log(2 + 2)
}
sumar();
sumar();
sumar();
sumar();

//parámetros y argumentos
function sumar2(num1, num2){
    console.log(num1 + num2);

}
sumar2(4, 30);
sumar2(45, 90)

//pedri nombre y edad al usuario
let nombre = prompt("Dime tu nombre");
let edad = prompt("Dime tu edad");




//crear una funcion que reciba un nombre y una edad y devuelva un mensaje diciendo si el usuario puede sacar el carnet de conducir o no

function crearMensaje(nombre, edad){
    let resultado = "";
    if(edad >= 18){
        resultado = `${nombre}, puedes sacar el carnet de connducir`;
    }else{
        resultado =`${nombre}, no tienes edad suficiente`;
    }
    return resultado;
}

let mensaje = crearMensaje(nombre, edad);
document.getElementById("mensaje").textContent = mensaje;


