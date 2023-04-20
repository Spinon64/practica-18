// Importamos la dependencia de Express, una librería para crear servidores web
const express = require("express");

// Importa la dependencia de Mongoose, una librería para conectarse a una base de datos MongoDB
const mongoose = require("mongoose");

// Importa la librería dotenv, que nos permite cargar variables de entorno desde un archivo .env
require("dotenv").config();

// Importa el archivo de rutas para manejar las peticiones relacionadas con usuarios
const userRoutes = require("./routes/user");

// Crea una instancia de Express
const app = express();

// Establece el número de puerto en el que el servidor escuchará
const port = process.env.PORT || 9000;


app.use("/api", userRoutes);

// Define una ruta para la página de inicio
app.get("/", (req, res) => {
  // Envía un mensaje de bienvenida al usuario
  res.sendFile("Welcome to mu API");
});

// Conecta con la base de datos MongoDB utilizando la URI de conexión almacenada en la variable de entorno MONGODB_URI
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// Inicia el servidor y lo hace escuchar en el puerto especificado
app.listen(port, () => console.log("server listening on port", port));
