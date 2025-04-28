//muestra por pantalla o por consola la suma de dos numeros

function calculadora (num1, num2, porPantalla=false){
    if(porPantalla){
        document.getElementById("resultado").textContent = num1 + num2;
    }else{
        console.log(num1 + num2);
    }
}


let mostrar = confirm("¿Quieres mostrar el resultado por pantalla?");

calculadora(3, 5, mostrar);
calculadora(4, 7);