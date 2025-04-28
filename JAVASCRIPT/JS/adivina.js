//crear un script que muestra una frase aleatoria cada vez que cargue el html

let frases = [
"Hoy vas a tener un gran día",
"Mejor no salgas",
"Si sales a la calle te va a llover",
"Las cartas hablan, y yo estoy aquí para escucharlas contigo",
"Cada pregunta que me hagas me debes un bizum de 10€",
"Hoy no tengo ganas de contestarte, déjame",
"El universo tiene un mensaje para ti, pero no te lo voy a decir...",
"Tu camino está lleno de posibilidades, el suicidio es una de ellas",
"Puedo percibir tu futuro, pero no puedo ganantizarte que folles esta noche..."
]
let numFrase = frases.length;
console.log(numFrase)

let fraAleatorio = Math.random() * numFrase;

console.log(fraAleatorio);

fraAleatorio = parseInt(fraAleatorio);

document.getElementById("resultados").textContent = frases[fraAleatorio];


function probarSuerte(){
    location.reload();
}

document.getElementById("probar").addEventListener('click', probarSuerte);