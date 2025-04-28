//crear una aplicacion que calcule la edad de un perro en años humanos.
// un año de perro son 7 años humanos
// validaciones: comprobar que el dato introducido es un numero, que es mayor que 0 y que es menor que 30.
//si no se cumple alguna de estas condiciones, mostrar un mensaje de error y volver a pedir el dato
//si el dato es correcto, calcula la edad del perro en años humanos y mostrar el resultado en la pantalla




//do
//pedir edad
//validar edad
//si es correcta: calcular edad y mostrar
//si no es correcta: mostrar mensaje de error
//while(edad no es correcta)



// let esCorrecta = false;
// do{
//     let edadPerro = prompt("Dime la edad de tu perro pofavó");

//     edadPerro = parseInt(edadPerro);
    
//     if(Number.isInteger(edadPerro) && edadPerro > 0 && edadPerro < 30){
//         document.getElementById("resultadoPerro").textContent = "La edad de tu perro en años humanos es: " + edadPerro * 7;
//         esCorrecta = true;
    
//     }else{
//         alert("No has introducido una edad válida");
//     }
    
// }while(esCorrecta == false);







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
