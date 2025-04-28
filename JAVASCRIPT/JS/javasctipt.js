//alert("Hola Mundo");//

//decalrar variables//
let nombreAlumno= "Manolo";
let apellidoAlumno= "Pérez";
let edad= 28;
let calificacion = 8;

alert("Hola " + nombreAlumno + " " + apellidoAlumno);

console.log("Hola" + " " + nombreAlumno + ", " + "has sacado un" + " " + calificacion + " " + "este trimestre");

calificacion = 9.5;

console.log("Hola" + " " + nombreAlumno + ", " + "has sacado un" + " " + calificacion + " " + "este trimestre");

console.log(`Hola ${nombreAlumno} has sacado un ${calificacion} este trimestre`);

//operaciones numericas//

let producto = "Jamón Ibérico";
let precio = 100;
const iva = 21;
let precioConIva = precio + precio * iva / 100;

//mostrar por consola: el (producto) cuesta (precio + iva)€//

console.log("el " + producto + " " + "cuesta "  + precioConIva + "€");


//bajar el precio de los productos un tanto por ciento que tenemos en la variable oferta y volver a mostrar el precio//

let oferta = -10;

let precioOferta = precio + precio * oferta / 100;
let precioConOfertaIva = precioOferta + precioOferta * iva / 100;
console.log("el " + producto + " en oferta, ahora cuesta " + precioConOfertaIva);

//llega navida, la mepre quiere repartir los jamones que quedan entre los empleados. muestra cuantos jamones le correspoden a cada empleado y cuantos jamones sobran//

let empleados = 10;
let jamones = 23;
let cantidad = jamones / empleados;
console.log = (cantidad);
let cantidad_entero = parseInt(cantidad);
let sobran = jamones % empleados;

console.log(sobran);
