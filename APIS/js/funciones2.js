
const urlBase = 'https://jsonplaceholder.typicode.com';
const endPoint = '/todos';
const endPointUsuario = '/users/1';

//son promesas
fetch(`${urlBase}${endPointUsuario}`)
      .then(
        response => response.json()
      )
      .then(
        json =>
          console.log(json),
    )
