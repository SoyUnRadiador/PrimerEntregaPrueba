// app.js
const express = require('express');
const app = express();
const port = 8080;

// Requiere el archivo productManager.js
const peticion = require('./productManager');

// Requiere el archivo router.js para manejar las rutas
const productRouter = require('./router');

// Utiliza el enrutador de productos
app.use('/api/products', productRouter);

// Iniciar el servidor en el puerto 8080
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
