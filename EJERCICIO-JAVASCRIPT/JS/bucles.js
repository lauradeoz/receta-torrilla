
// for(iniciar, condicion; actualizar variable){
//}
//cosole.log(i);

for (let i = 0; i < 5; i++){
console.log(i);
}

//array va entre corchetes y sus elementos van separados por comas 
//se accede a ellos por su indice que comienza en 0

const frutas = ["manzana", "pera", "melocotón"];

//objetos van entre llaver y sus prioridades van separadas por comas
//se accede a ellos por su nombre

console.log(frutas.length);

for (let i = 0; i <= frutas.length; i++){
    console.log("Elemento número;", i, "es:", frutas[i]);
}
for (let i = frutas.length - 1; i >= 0; i--){
    console.log("Elemento número:", i, "es:", frutas[i]);
}

//crear un bucle for que muestre los numeros del 1 al 10

// for (let i = 0; i < 11; i++){
//     console.log(i);
//     }


//crear un bucle que muestre la tabla de multiplicar del 5

for (let i = 0; i < 11; i++){
    console.log("5 x " + i + " = " + i*5);
    }


//crear un buble que muestre la tabla de multiplicar de un numero
//pedir el numero al usuario

// let numero = prompt("Dime un número");

// if(isNaN(numero)){
// alert("No es un número tio...")
// }else{
//     document.getElementById("mensaje").textContent = "Voy a mostrar la tabla de multiplicar de: " + numero;

//     let resultadotxt = "";
    
//     for(let i = 1; i <= 10; i++){
//         resultadotxt += numero + " x " + i + "=" + numero * i + "<br>";
//     }
    
//     document.getElementById("resultado").innerHTML = resultadotxt;
// }


//pedir al usuario la edad de la mascota y mostrar la edad en años humanos
//1 año de perro = 7 años humanos

// realizar las siguientes variaciones tambien:
//que sea un numero
//que sea mayor que 0


// "or" "and(&&)" y "not" son codiciones


// let edadPerro = prompt("Dime la edad de tu perro");

// edadPerro = parseInt(edadPerro);

// if(Number.isInteger(edadPerro) && edadPerro > 0 && edadPerro < 30){
//     document.getElementById("resultadoPerro").textContent = "La edad de tu perro en años humanos es: " + edadPerro * 7;

// }else{
//     alert("No has introducido una edad válida");
// }


//bucle while
//se ejecuta mientras la codicion sea verdadera

let contador = 0;
while(contador < 5){
    console.log("Iteración números:", contador);

    contador++;
}

//mostrar por consola los numeros pares del 0 al 100 utilizando el bucle while


//mostrar por consola utilizando el bucle while los 100 primeros pares comenzando por 0

let pares = 0;
let contador2 = 0;
while(contador2 <= 100){
    console.log("Iteración números", pares);

    pares += 2;
    contador2++;
}


//bucle  do while
//se ejecuta al menos una vez y luego comprueba la condicion
let contador3 = 0;
do{
    console.log("contador:" + contador3)
}while(contador3 >5);