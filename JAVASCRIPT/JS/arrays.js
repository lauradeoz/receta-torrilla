//declaracion de una arrays

let notas = [3, 6, 8, 6, 2, 10, 1];
let alumnos = ["David", "Imna", "Jesús", "Reich", "Lucía", "Mari Sol", "Antonia"];
document.getElementById("resultado").textContent = notas;

//para acceder a un elemento del arrays:
// notas[1]

document.getElementById("resultado").textContent = notas[1];


//mostas el nombre y la nota del tercer alumno
salida = "la nota de " + alumnos[2] + " es de un " + notas[2];
document.getElementById("resultado").textContent = salida;

//mostrar si está aprobado o suspenso

if(notas[2]>=5){
    salida = "Aprobado";
}else{
    salida = "Suspenso"
}
document.getElementById("resultado2").textContent = salida;

//como saber cuantos elementos tiene una array

let numAlumnos = alumnos.length;
console.log(numAlumnos);

//conseguir un numero aleatorio
//math.random() devuelve un número alearotio entre [0, 1)
//si multiplico math.random() * 7, me devuelve un numero aleatrorio entre 0 y 6

let numAleatorio = Math.random() * numAlumnos;
console.log(numAleatorio);
numAleatorio = parseInt(numAleatorio);
document.getElementById("resultado3").textContent = alumnos[numAleatorio];

//