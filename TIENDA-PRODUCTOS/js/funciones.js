/**
 * Crear un array de objetos que contenga los datos de productos
 * Cada objeto debe tener los siguientes campos: id (que no se repita), nombre, precio, descripcion, oferta, imagen
 * nombre y descripcion son strings
 * precio es numérico
 * oferta es booleano
 * imagen es un string con la ruta a la imagen del producto
 */
const productos = [
    {id: 1, nombre: "Camiseta manga corta", precio: 15.00, descripcion: "Manga corta", oferta: false, imagen: "imagenes/camiseta-gunansroses.jpg"},
    {id: 2, nombre: "Pantalón", precio: 25.00, descripcion: "pantalon vaquero", oferta: false, imagen: "imagenes/pantalon-gris.png"},
    {id: 3, nombre: "Gorra", precio: 10.00, descripcion: "gorra negra", oferta: false, imagen: "imagenes/gorra-negra.png"},
    {id: 4, nombre: "Pañuelo", precio: 5.00, descripcion: "pañuelo negro", oferta: false, imagen: "imagenes/pañuelo-rockero.png"},
    {id: 5, nombre: "Botas", precio: 35.00, descripcion: "botas", oferta: false, imagen: "imagenes/botas-negras.png"},
    {id: 6, nombre: "Calcetines", precio: 5.00, descripcion: "calcetines negros", oferta: false, imagen: "imagenes/calcetines-negros.png"},
    {id: 7, nombre: "Camiseta manga larga", precio: 17.00, descripcion: "Manga larga", oferta: false, imagen: "imagenes/camiseta-manga-larga.png"},
    {id: 8, nombre: "Cinturón", precio: 7.00, descripcion: "cinturon", oferta: false, imagen: "imagenes/cinturon-negro.png"},
]

// productos.forEach(element => {
//     document.getElementById("productos").innerHTML += `
//         <img src="${element.imagen}" class="imagenProducto">
//         <p>${element.nombre}</p>
//     `;
// });

const carrito = [];
const productosDiv = document.getElementById("productos");
const carritoUl = document.getElementById("carrito");
const totalSpan = document.getElementById("total");

productos.forEach(productos => {
     document.getElementById("productos").innerHTML += `
     <section class= container>
     <div class= producto>
    <h3>${productos.nombre}</h3>
    <img src="${productos.imagen}">
    <p>$${productos.precio}</p>
    <button onclick="agregarAlCarrito(${productos.id})">Agregar al carrito</button>
    </div>
    </section>
  `;
});



function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  carritoUl.innerHTML = "";
  let total = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    carritoUl.appendChild(li);
    total += item.precio;
  });
  totalSpan.textContent = total;
}