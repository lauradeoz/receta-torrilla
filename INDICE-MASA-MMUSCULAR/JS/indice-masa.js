//IMC = peso / (altura*altura)

// si imc < 18'5 indica bqajo peso
//si imc > 18'5 y < 25 peso saludable
//si imc > 25 tiene sobrepeso


let verde ='rgb(10, 158, 35)';
let rojo = 'rgb(207, 19, 19)';
let naranja = 'rgb(218, 83, 5)';

//variables para los iconos
let iconoVerde = '🫠';
let iconoRojo = '😒';
let iconoNaranja = '😐';

//evento para el boton
document.getElementById("botonEnviar").addEventListener('click', calcularIMC);



function calcularIMC(){
    //lee los datos de los inputs
    let nombre = document.getElementById("nombre").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
   
    let datosValidados = validarDatos(nombre, peso, altura);
    //si los datos no  son correctos, mostrar mensaje
    if(!datosValidados.sonValidos){
        document.getElementById("mostrarErrores").innerHTML = datosValidados.mensaje;
        return;
    }

    //convierto la altura a metros
    altura = altura / 100;

    //calculo el IMC
    let imc = peso / (altura * altura);

    //redondeo el imc a dos decimales
    imc = imc.toFixed(2);

    //creo el mensaje de salida
    let mensajeTxt = `El paciente ${nombre} tiene un IMC de ${imc} `;

    //añado el resultado del análisis al mensaje
    if(imc < 18.5){
        mensajeTxt += `<span>${iconoRojo}</span> <p>Esto indica un peso por debajo del ideal</p>`;
        document.getElementById("resultadoEstudio").style.backgroundColor = rojo;
    }else if(imc >= 18.5 && imc < 25){
        mensajeTxt += `<span>${iconoVerde}</span> <p>Enhorabuena!! estás en tu peso ideal</p>`;
        document.getElementById("resultadoEstudio").style.backgroundColor = verde;
    }else{
        mensajeTxt += `<span>${iconoNaranja}</span> <p>Tienes sobrepeso</p>`;
        document.getElementById("resultadoEstudio").style.backgroundColor = naranja;
    }
    document.getElementById("resultadoEstudio").innerHTML = mensajeTxt;
}



//TODO: limpiar la salida 

document.getElementById("nombre").addEventListener('input', function(){
    document.getElementById("resultadoEstudio").innerHTML = '';
    document.getElementById("resultadoEstudio").style.backgroundColor = 'transparent';
})

document.getElementById("peso").addEventListener('input', function(){
    document.getElementById("resultadoEstudio").innerHTML = '';
    document.getElementById("resultadoEstudio").style.backgroundColor = 'transparent';
})

document.getElementById("altura").addEventListener('input', function(){
    document.getElementById("resultadoEstudio").innerHTML = '';
    document.getElementById("resultadoEstudio").style.backgroundColor = 'transparent';
})

//validar los datos de entrada
function validarDatos(nombre, peso, altura){

    let resultado = {
        mensaje: '',
        sonValidos: true
    }
    //nombre debe contener algo
    //peso debe ser mayor que 0 y menor que 350
    //altura debe ser mayor que 0 y menor que 210
    if(nombre.trim() === ''){
        resultado.mensaje = "<p>Debe introducir un nombre</p>";
        resultado.sonValidos = false;
    }
    if(peso <= 0 || peso > 350){
        resultado.mensaje += "<p>El peso debe estar comprendido entre 0 y 350 kg</p>";
        resultado.sonValidos = false;
    }
    if(altura <= 0 || altura > 210){
        resultado.mensaje += "<p>La altura debe estar comprendida entre 0 y 210 cm</p>";
        resultado.sonValidos = false;
    }
    return resultado;
}