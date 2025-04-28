//booleanos
//es un tipo de dato que puede tener dos valores: true y false


//condicionales
/*
 sintaxis:
 if(condicion){
 instrucciones a ejecutar
 }
*/

let nombre = "Andrés";
let tienePermiso = false;
let salida;

//mostrar por pantalla si realemente Andrés tiene permiso

if(tienePermiso){
    salida = nombre + " tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}

/*
 if(condicion){
    codigo que se ejecuta cuando la condicion es verdadera
 }
    else{
    codigo que se ejecuta cuando la condicion es falsa
    }
*/

if(tienePermiso){
    salida = nombre + " tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}
else{
    salida = nombre + " NO tiene permiso"
    document.getElementById("mensaje").textContent = salida;
}

let alumnos = "María";
let nota = 10;

//mostrar por pantalla si (alumno) esta aprobado o suspenso
let estaAprobado = nota >= 5;

if(estaAprobado){
    salida = alumnos + " está aprobada"
}

else{
salida = alumnos + " está suspensa";
}

document.getElementById("resultado").textContent = salida;


//mostrar por pantalla lo mismo de antes pero si la nota es igual a 5 el mensaje será "está aporbada por los pelos"

if(nota == 5){
salida = alumnos + " está aprobada por los pelos";

}else if(nota > 5){
salida = alumnos + " está aprobada";
}
else{
salida = alumnos + " está suspensa";
}

if(nota == 10){
    salida = alumnos + " enhorabuena, has sacado matrícula de honor";
}
document.getElementById("resultado").textContent = salida;
