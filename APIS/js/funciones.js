/*
* fetch() es una función nativa de JavaScript que permite realizar peticiones http de manera asíncrona
* El argumento es la url a la que se hace la petición
* Por defecto fetch() realiza una petición GET para obtener datos
* Devuelve una Promise que se resolverá con un objeto Response
* .then() es un método de las Promises que permite manejar el resultado cuando la Promise se resuelve
* response es la respuesta
* .json() extrae el cuerpo de la respuesta y lo convierte de JSON a un objeto JavaScript
* Este método también devuelve una Promise ya que la conversión puede tomar tiempo
* El segundo .then() maneja el resultado de la promesa anterior
* json es el objeto Javascript resultante de la conversión anterior
*/


/*
 * 1. Código asíncrono: Este código no bloquea la ejecución mientras espera la respuesta del servidor
*  2. Encadenamiento de promesas: Permite procesar los datos en etapas
 */

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

/*
* Manejo de errores
*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue correcta');
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.error('Problema con la petición fetch:', error));

/*
* Utilizando async/await
*/

async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:5500/index.html/todos/1');
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Problema con la petición fetch:', error);
    }
  }
  
  fetchData();

//TODO: utilizar otros endpoints


/*
* Como se suele utilizar
*/

const urlBase = 'http://127.0.0.1:5500/index.html';
const endPoint = '/todos/1';


/*
* POST: enviar información
* La información se envía en el body de la petición
*/
const endPost = '/posts';
let requestBody = {
    nombre: 'comentario',
    body: 'Me ha gustado mucho la foto',
    id: 1
}

fetch(`${urlBase}${endPost}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody)
})
      .then(response => response.json())
      .then(json => console.log(json))