
const apikey = '1b45c5a5a0be7853754278d9dcb2448d';

function obtenerTiempoActual(ciudad){

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric&lang=es`;
  fetch(url)
  .then(data => data.json())
  .then(data => mostrarDatos(data))
}


function mostrarDatos(datos){
console.log(datos);
document.getElementById("resultado").innerHTML = `
  <p>temperatura: ${datos.main.temp}</p>
  <p>Descripción: ${datos.weather[0].description}</p>
`

}

//evento para leer el texto del input y llamar a obtenerTiempoActual pasandole el texto de busquedad
document.getElementById("buscar").addEventListener('click', () =>{
  const ciudad = document.getElementById("ciudad").value;
  //TODO: comprobar que hay datos

  obtenerTiempoActual(ciudad);
})


