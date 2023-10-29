// router.js
const express = require('express');
const router = express.Router();

// Importa la instancia de ProductManager directamente
const peticion = require('./productManager');

// Lógica para obtener todos los productos
router.get('/', (req, res) => {
  const productos = peticion.ObtenerProductos();
  res.json(productos);
});

router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const producto = peticion.obtenerProductoPorID(productId);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Agregar una nueva ruta POST para agregar productos
router.post('/', (req, res) => {
  // Obtener los datos del producto del cuerpo de la solicitud
  const { Titulo, Descripcion, Precio, Miniatura, Codigo, Cantidad } = req.body;

  // Asegúrate de que se proporcionen los datos requeridos
  if (!Titulo || !Descripcion || !Precio || !Miniatura || !Codigo || !Cantidad) {
    return res.status(400).json({ error: 'Se requieren todos los campos para agregar un producto.' });
  }

  // Agregar el producto a la lista
  peticion.agregarProducto(Titulo, Descripcion, Precio, Miniatura, Codigo, Cantidad);

  // Devolver el producto recién agregado
  const nuevoProducto = peticion.ObtenerProductos().find((producto) => producto.Codigo === Codigo);
  res.status(201).json(nuevoProducto);
});

module.exports = router;
