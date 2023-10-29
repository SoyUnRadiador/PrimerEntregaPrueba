class ProductManager {
    constructor() {
      this.Productos = [];
      this.UltimoID = 0;
      this.CodigosGuardados = new Set();
    }
  
    // Verifica que el código no se repita
    agregarProducto(Titulo, Descripcion, Precio, Miniatura, Codigo, Cantidad) {
      if (this.CodigosGuardados.has(Codigo)) {
        console.error(`El código ${Codigo} ya está en uso.`);
        return;
      }
  
      // Aumenta en 1 el ID
      const ID = this.UltimoID + 1;
      this.UltimoID = ID;
  
      const producto = new AgregarProductos(
        ID,
        Titulo,
        Descripcion,
        Precio,
        Miniatura,
        Codigo,
        Cantidad
      );
  
      // Inserta los productos y el código en ProductManager
      this.Productos.push(producto);
      this.CodigosGuardados.add(Codigo);
    }
  
    // Devuelve los productos
    ObtenerProductos() {
      return this.Productos;
    }
  
    // Devuelve un producto por ID
    obtenerProductoPorID(ID) {
      return this.Productos.find((producto) => producto.ID === ID);
    }
  }
  
class AgregarProductos {
    constructor(ID, Titulo, Descripcion, Precio, Miniatura, Codigo, Cantidad) {
      this.ID = ID;
      this.Titulo = Titulo;
      this.Descripcion = Descripcion;
      this.Precio = Precio;
      this.Miniatura = Miniatura;
      this.Codigo = Codigo;
      this.Cantidad = Cantidad;
    }
  }
  
  // Uso del código
  const peticion = new ProductManager();
  
  // Utiliza agregarProducto para insertar características del producto
  peticion.agregarProducto("Zapatilla", "Zapatilla Marca Nike", 10000, "Imagen.jpg", "1", 10);
  peticion.agregarProducto("Pantalon", "Pantalon Marca Levi`s", 3000, "Imagen.jpg", "2", 20);
  peticion.agregarProducto("Remera", "Remera Marca Vans", 4000, "Imagen.jpg", "3", 15);
  peticion.agregarProducto("Camisa", "Camisa Marca Lacoste", 10000, "Imagen.jpg", "4", 10);
  peticion.agregarProducto("Zapatillas", "Zapatillas Marca Fila", 20000, "Imagen.jpg", "5", 20);
  peticion.agregarProducto("Remera", "Remera Marca Cucci", 15000, "Imagen.jpg", "6", 5);
  peticion.agregarProducto("Pantalon", "Pantalon Marca Furor", 13000, "Imagen.jpg", "7", 15);
  peticion.agregarProducto("Corbata", "Corbata Marca Hermès", 10000, "Imagen.jpg", "8", 8);
  peticion.agregarProducto("Vestido", "Vestido Marca Ted Baker", 30000, "Imagen.jpg", "9", 6);
  peticion.agregarProducto("Falda", "Falda Marca GANNI", 9000, "Imagen.jpg", "10", 7);


const productManagerInstance = new ProductManager();
module.exports = productManagerInstance;
module.exports = peticion;

/*
  // Muestra la lista de productos completa
  console.log("Lista de Productos:");
  console.log(peticion.ObtenerProductos());
  
  // Buscar producto por ID, si no existe, devuelve "Producto no encontrado."
  const productoPorID = peticion.obtenerProductoPorID();
  if (productoPorID) {
    console.log(`Producto con ID ${productoPorID.ID}:`);
    console.log(productoPorID);
  } else {
    console.log("Producto no encontrado");
  }  
*/