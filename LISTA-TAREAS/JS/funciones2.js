
//selecciona el boton de añadir tarea y me crea un evento para que cuando se haga click en el boton se ejecute la funcion crear tarea
document.getElementById("buttonAdd").addEventListener('click', crearTarea);

//funcion que se encarga de crear una nueva tarea
function crearTarea(){
    //leer los datos del input
    let textoTarea = document.getElementById("inputTarea").value;
    let tipoTarea = document.getElementById("tipoTarea").value;

    //comprobar que hay datos
    //trim() elimina los espacios del principio y del final de un string
    textoTarea = textoTarea.trim();
    //comprueba que textoTarea contenga un string no vacio
    if(textoTarea === ''){
        //textoTarea no tiene nada
        //mostrar un mensaje
        document.getElementById("error").textContent = "No has introducido ninguna tarea";
        //finaliza la ejecucion de la funcion
        return;
    }
    //si llegamos hasta aqui, es porque textoTarea contiene un string con datos


    //para eliminar el texto del error al escribir una nueva tarea:
    document.getElementById("error").textContent = "";

    //creo un objeto para guardar la tarea
    const tarea = {
        texto: textoTarea,
        tipo: tipoTarea,
        tareaRealizada: false
    }

    //creo una variable con un icono de un color u otro para mostrar segun sea el tipo de tarea
    //la variable contiene un icono de color
    let iconoTipo = '&#129001;';
    if(tarea.tipo === 'obligatoria'){
        iconoTipo = '&#128998;';
    }else if(tarea.tipo === 'urgente'){
        iconoTipo = '&#128997;';
    }

    //crear un  nodo de tipo li (etiqueta de html li)
    const li = document.createElement('li');

    //añade contenido al nodo li
    //checkbox es una casilla de verificacion
    li.innerHTML = `
        <div>
        <input type="checkbox" class="tareaRealizada"> 
        ${iconoTipo} 
        <span class="texto-tarea">${tarea.texto}</span>
        </div>
        <button class="eliminar">🗑️</button>`;
    
    //añado el elemento li como hijo del elemento ul que hay en el html
    document.getElementById("listaTareas").appendChild(li);

    //añado un evento click al boton elimiar que elimina el li entero
    li.querySelector('.eliminar').addEventListener('click', function(){
        li.remove();
    })

    //añado un evento al checkbox para modificar la tarea
    li.querySelector('.tareaRealizada').addEventListener('click', function(){
        //comprueba si la casilla está seleccionada
        if(li.querySelector('.tareaRealizada').checked){
            //está seleccionada
            //baja la opacidad
            li.style.opacity = '0.8';
            //tacha el texto
            li.querySelector('.texto-tarea').style.textDecoration = "line-through";
            //modifica el valor tareaRealizada del objeto a true
            tarea.tareaRealizada = true;
        }else{
            //no está seleccionada
            //sube otra vez la opacidad
            li.style.opacity = '1';
            //destacha el texto
            li.querySelector('.texto-tarea').style.textDecoration = "none";
            //marca el objeto como tarea no realizada
            tarea.tareaRealizada = false;
        }
    })

    document.getElementById("inputTarea").value = '';
}