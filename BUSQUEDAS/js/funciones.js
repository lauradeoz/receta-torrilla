import { productos }  from './productos-tecnologia.js';

//mostrar los datos por consola
console.log(productos);

function mostrarDatos(datos){
    document.getElementById("productos").innerHTML = datos.map(producto => 
        `
            <div class="card-producto">
                <p class="card-nombre">${producto.nombre}</p>
                <p class="card-descripcion">${producto.descripcion}</p>
                <div class="card-precio">
                    <p>${producto.precio.toFixed(2)} €</p>
                    <p class="${(producto.disponible)? "azul" : "rojo"}">
                    ${(producto.disponible)? "Disponible" : "No disponible"}
                    </p>
                </div>
                <p class="card-categoria">${producto.categoria}</p>
            </div>
        `
    ).join('');
}

function mostrarCategorias(){

    let listaCategorias = [...new Set(productos.map(producto => producto.categoria))];
    //agrego la categoría todas
    listaCategorias = ["Todas", ...listaCategorias];

    //listaCategorias.unshift("Todas");

    //Set() es un tipo de dato que puede contener múltiples elementos pero sin repetir
    // const categoriasSet = new Set();
    // productos.forEach(producto => {
    //     categoriasSet.add(producto.categoria);
    // });

    document.getElementById("select_categorias").innerHTML = listaCategorias.map(categoria => 
        `
        <option value="${categoria}">${categoria}</option>
        `
    ).join('');
}

mostrarCategorias();
mostrarDatos(productos);

document.getElementById("disponibles").addEventListener('click', () => {
    //crear un array que contenga solo los productos disponibles
    const listaDisponibles = productos.filter(producto => producto.disponible);
    //mostrardatos con ese array
    mostrarDatos(listaDisponibles);
})

document.getElementById("no_disponibles").addEventListener('click', () => {
    //crear un array que contenga solo los productos disponibles
    const listaDisponibles = productos.filter(producto => !producto.disponible);
    //mostrardatos con ese array
    mostrarDatos(listaDisponibles);
})

document.getElementById("todos").addEventListener('click', () => {
    //mostrardatos con ese array
    mostrarDatos(productos);
})

document.getElementById("ordenar-alfabetico").addEventListener('click', () => {
    const productosOrdenados = [...productos];

    // Ordenamos la copia por nombre (orden alfabético ascendente)
    //"Hola".localeCompare("adiós")
    //localeCompare compara dos cadenas de texto sin tener en cuenta los acentos
    //devuelve -1 si la primera cadena debe ir antes que la segunda
    //devuelve 1 si la segunda cadena debe ir antes que la primera
    //devuelve 0 si ambas cadenas son iguales
    productosOrdenados.sort((producto1, producto2) => {
        return producto1.nombre.localeCompare(producto2.nombre);
    });
    mostrarDatos(productosOrdenados);
})

document.getElementById("ordenar-alfabetico-inverso").addEventListener('click', () => {
    const productosOrdenados = [...productos];

    productosOrdenados.sort((producto1, producto2) => {
        return producto2.nombre.localeCompare(producto1.nombre);
    });
    mostrarDatos(productosOrdenados);
})

