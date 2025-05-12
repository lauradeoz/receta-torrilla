
const apikey = '1b45c5a5a0be7853754278d9dcb2448d';

function obtenerTiempoActual(ciudad){

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric&lang=es`;
  fetch(url)
  .then(data => data.json())
  .then(data => mostrarDatos(data))
}


function mostrarDatosClima(data){
    console.log(data)
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon



    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura)}ºC`
    
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}
  

//evento para leer el texto del input y llamar a obtenerTiempoActual pasandole el texto de busquedad
document.getElementById("buscar").addEventListener('click', () =>{
  const ciudad = document.getElementById("ciudad").value;
  //TODO: comprobar que hay datos

  obtenerTiempoActual(ciudad);
})


