const frutas = ["manzana", "fresa", "naranja", "cereza", "melocotón"];

//otra forma de declarar un array, aunque se utiliza menos
// let frutas2 = new Array("tomate", "pepino");

//métodos para modificar un array
//modificar un elemento
console.log(frutas);

frutas[0] = "sandia";

console.log(frutas);

//añadir elementos: push() añade un elemento al final del array
frutas.push("pera");
console.log(frutas);

//unshift() añade un elemento a principio
frutas.unshift("cereza");
console.table(frutas);

//eliminar elementos de un array: pop() elimina el ultimo elemento
frutas.pop();
console.log(frutas);

//shift() elimina el primer elemento
frutas.shift();
console.table(frutas);

// frutas[34] = "melón";
console.table(frutas);

console.log(frutas[100]);

//eliminar elementos del array seleccionados: splice()
frutas.splice(1, 2);
console.table(frutas);

//agregar un elemento a la array ES6
let fruta = "calabaza";
const frutas3 = [fruta, ...frutas];
console.table(frutas3);
const frutas4 = [...frutas, "aguacate"];
console.table(frutas4);

//recorrer un array con foreach
frutas3.forEach(fruta => {
    //se va a ejecutar una vez por elemento de la array
    //cada vez tenemos acceso a un elemento de la array en la variable fruta
    console.log(fruta);
    document.getElementById("listaFrutas").innerHTML += `<li>${fruta}</li>`;
})

document.getElementById("mensaje").textContent = "Vaya Lunes";

console.log(document.getElementById("listaFrutas").textContent);
console.log(document.getElementById("listaFrutas").innerHTML);
