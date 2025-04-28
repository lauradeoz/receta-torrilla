// *Ejercicio 1:
// *crear un objeto llamado persona con las propiedades : nombre, edad y profesion.
// *luego mostrar cada propiedad en la consola por separado

//*ejercicio 2
//*añade un método al objeto persona que devuelva un string con los valores de sus propiedades: "Hola, soy Laura, tengo 26 años y soy diseñadora gráfica"


const persona = {
    nombre: "Laura",
    profesion: "diseñadora gráfica",
    edad: 27,
    presentacion: function() {
        return "Hola, soy " + this.nombre + " tengo " + this.edad + " años y soy " + this.profesion;
    }
}
console.table(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona.presentacion())


//ejercicio 3:
//crear un objeto llamado coche con las propiedades: marca, modelo y año
//añade un método que calcule cuanto años tiene el coche basado en el año actual
//new Date() devuelve la fecha actual
//new Date().getFullYear() devuelve el año actual


const coche = {
    marca: "Seat",
    modelo: "Ibiza",
    anyo: 1980,
    antiguedad: function(){
        const anyoActual = new Date().getFullYear();
        const anyos = anyoActual - this.anyo;
        return anyos;
    }
}

document.getElementById("mensaje").textContent = `Marca: ${coche.marca}, Modelo: ${coche.modelo}, Antigüedad: ${coche.antiguedad()} años`;

//ejercicio 4:
//crea un objeto llamado tienda que cotenga un array de productos
//cada producto debe ser un objeto con las poropiedades: nombre y precio
//añade un método para calcular el precio total en todos los productos

const tienda = {
    productos: [
        {nombre: "Monitor 32 pulgadas", precio: 200.00},
        {nombre: "Teclado", precio: 45},
        {nombre: "Ratón", precio: 10},
        {nombre: "Silla", precio: 120},
    ],
    calcularTotal: function(){
        let total = 0;
        this.productos.forEach( item => {
            total = total + item.precio;
        })
        return total;
    }
}

console.log(tienda.calcularTotal());

//calcular la suma de todos los elementos del array
const precios = [200, 32, 25, 80, 120];
let total = 0;
precios.forEach(item =>{
    total = total + item;
})
console.log(total);

//calcular el producto de todos los elementos del array
let producto = 1;
precios.forEach(item =>{
    producto = producto * item;
})
console.log(producto);


// console.log(tienda.productos[0].nombre);
// console.log(tienda.productos[2].precio);

//calcular el mayor de los elementos del array

let resultado = precios[0];
precios.forEach(item => {
    if(item > resultado){
        resultado = item;
    }
})
console.log(resultado);


//calcular la media de los elementos del array
let media = 0;
precios.forEach(item =>{
    media = total / precios.length;
})

console.log(media);

const frutas = ["manzana", "pera", "melocotón"];
    //comprobar si "pera" está en el array
    let elemento = "pera";
    let existe = false;
    frutas.forEach( item=> {
        if(item == elemento){
            existe = true;
        }
    })
    console.log(existe);

//comprobar utilizado el método include()
let existe2 = frutas.includes(elemento);