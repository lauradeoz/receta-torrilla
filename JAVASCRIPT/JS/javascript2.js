let nombre = "Lucía";
let profesion = "Maestra";
let antiguedad = 35;
let sueldo = 2500;
let plusAntiguedad = 10;

//mostrar por consola (nombre) es (porfesion) y lleva (antiguedad) años trabajando

console.log(nombre + " es " + profesion + " y lleva " + antiguedad + " años trabajando.");

let salida = nombre + " es " + profesion + " y lleva " + antiguedad + " años trabajando.";

document.getElementById("mensaje").textContent = salida;

profesion = "Directora";
antiguedad = antiguedad + 1;

salida = nombre + " es " + profesion + " y lleva " + antiguedad + " años trabajando.";

document.getElementById("mensaje").textContent = salida;

//la empresa ha decidido dar un plus a los travajadores de 10 euros por año trabajado//
//mostrar por pantalla cuanto gana (nombre)

//alculo el sueldo con el plus de antoguedad//
let sueldoTotal = antiguedad * plusAntiguedad + sueldo + plusAntiguedad;

console.log(nombre + " gana en total al mes con su plus " + sueldoTotal + "€")

document.getElementById("mensaje2").textContent = nombre + " gana en total al mes con su plus " + sueldoTotal + "€";