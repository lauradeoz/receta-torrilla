const alumnos = ["Inma", "David", "Jesús", "Marisol", "Antonia"];
const notas = [7,8,9,10,6];


const alumno = {
    nombre: "Imna",
    nota: 7,
    tienePracticas: true
}

console.log(alumnos);
console.log(alumno);

//acceder a un elemento del objeto
console.log(alumno.nombre);
console.log(alumno.nota);

//modificar la nota del alumno
alumno.nota = 8.5;

//agregar propiedades al objeto
alumno.edad = 22
console.log(alumno)

//eliminar propiedades
delete(alumno.edad);
console.log(alumno)


//mostrar por pantalla los datos de alumno

let mensajeTxt = `${alumno.nombre} ha sacado un ${alumno.nota}`;

if(alumno.tienePracticas){
    mensajeTxt += " y tiene prácticas";
}else{
    mensajeTxt += "y no tiene prácticas";
}
document.getElementById("mensajeCompleto").textContent = mensajeTxt;

