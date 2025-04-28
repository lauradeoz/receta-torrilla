//crear un array de objetos con datos de los alumnos
//cada alumno contiene las claves; nombre, nota, tienePracticas y edad
// const alumnos = []
// const alumno = {
//     nombre: "Imna",
//     nota: 7,
//     tienePracticas: true,
//     edad: 22
// }

// alumnos.push(alumno);


const alumnos = [
    {nombre: "Imna", nota: 7, tienePracticas: true, edad: 22},
    {nombre: "Rocío", nota: 7.5, tienePracticas: true, edad: 23},
    {nombre: "Iván", nota: 8, tienePracticas: true, edad: 19},
    {nombre: "Javi", nota: 9, tienePracticas: true, edad: 18},
    {nombre: "Marisol", nota: 4, tienePracticas: false, edad: 17},
    {nombre: "Jesús", nota: 6, tienePracticas: true, edad: 32},
]

console.log(alumnos[0]);

//mostrar por pantalla el primer elemento de la array
// document.getElementById("mensaje").textContent = alumnos[0].nombre + " ha sacado un " + alumnos[0].nota;
let datos = '';

alumnos.forEach( item => {
    //por cada interaccion del bucle tenemos acceso a un elemento de la array en la variable alumno
    console.log(item.nombre);
    //mostrar el nombre, la nota, la edad y si tiene practicas
    datos = `<li>${item.nombre} tiene ${item.edad} años, ha sacado un ${item.nota}`;

    if(item.tienePracticas){
        datos += " y hará sus prácticas";
    }else{
        datos += " y no hará sus prácticas";
    }
    datos += "</li>";
    document.getElementById("listaAlumnos").innerHTML += datos;
})