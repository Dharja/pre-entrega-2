// Definición de productos y precios
const productos = [
  { nombre: "Camisa", precio: 1500 },
  { nombre: "Pantalon", precio: 2000 },
  { nombre: "Gorra", precio: 1000 },
  { nombre: "Zapatillas", precio: 2500 }
];

// mostrar los productos
/* el uso de template strings lo implementé por mi cuenta, lo aprendí en un tutorial de yt 
y me pareció muy comodo para utilizarlo, es lo unico que voy a agregar fuera del programa */
function mostrarProductos() {
  let listaProductos = "";
  for (let i = 0; i < productos.length; i++) {
    listaProductos += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
  }
  alert(listaProductos);
}

// array para agregar un producto al carrito
function agregarAlCarrito(carrito, producto) {
  carrito.push(producto);
  alert(`El producto ${producto.nombre} ha sido agregado al carrito`);
}

// Función para mostrar el carrito
function mostrarCarrito(carrito) {
  let listaCarrito = "";
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    listaCarrito += `${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio}\n`;
    total += carrito[i].precio;
  }
  alert(`Productos en el carrito:\n\n${listaCarrito}\nTotal: $${total}`);
}

// Función para buscar un producto por su nombre
function buscarProducto(nombreProducto) {
  const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
  return productoEncontrado || null;
}

// funcion principal del simulador de carrito de compras
function simularCompra() {
  const carrito = [];
  
  // Mostrar los productos disponibles
  mostrarProductos();

  // Pedir al usuario que ingrese el nombre del producto a agregar
  let nombreProducto = prompt("Ingrese el nombre del producto que desea agregar al carrito, para terminar escriba x o pulse 'cancelar' ");

  // Seguir pidiendo productos hasta que el usuario escriba "terminar"
  while (nombreProducto && nombreProducto.toLowerCase() !== "x" || "X") {

    // Buscamos el producto en la lista de productos
    const productoEncontrado = buscarProducto(nombreProducto);

    if (productoEncontrado) {
      // Si encontramos el producto, lo agregamos al carrito
      agregarAlCarrito(carrito, productoEncontrado);
    } else {
      alert("Producto no encontrado");
    }

    // Pedimos el siguiente producto
    nombreProducto = prompt("Ingrese el nombre del producto que desea agregar al carrito:");
  }

  // Mostramos los productos del carrito y el total
  mostrarCarrito(carrito);
}


// Iniciamos la simulación de compra al llamar a la función principal
simularCompra();




