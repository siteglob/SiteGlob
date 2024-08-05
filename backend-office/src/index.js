/*console.log('Hola')*/

// Updated index.js for the backend-office
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const { register, login } = require("./controllers/authController");

const { check, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
// Initialized express app
const app = express();
const port = process.env.PORT || 3000;

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Conexión exitosa a la base de datos MongoDB"))
  .catch((error) =>
    console.error("Error al conectar a la base de datos MongoDB:", error)
  );

// Middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Include routes
app.use("/api/auth", require("./routes/auth"));

// Test route
app.get("/", (req, res) => {
  res.send("¡Voy seguro porque YESHUA está conmigo!!!<h1>SiteGlob</h1>");
});

// Starting the server
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

/*require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialized express app
const app = express();
const port = process.env.PORT || 3000;

// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    // useUnifiedTopology

})
.then(() => console.log('Conexión exitosa a la base de datos MongoDB'))
.catch((error) => console.error('Error al conectar a la base de datos MongoDB:', error));

// Middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// Include routes
app.use('/api/auth', require('./routes/auth'));

// Test route
app.get('/', (req, res) => {
  res.send('¡Voy seguro porque YESHUA está conmigo!!!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

















// index.js
/*require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conexión exitosa a la base de datos MongoDB');

        // Definir rutas
        app.get('/', (req, res) => {
            res.send('¡Voy seguro porque JESHUA esta conmigo!!!');
            
        });

        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`);
        });
    })
    .catch((error) => console.error('Error al conectar a la base de datos MongoDB:', error));

*/
