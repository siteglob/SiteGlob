require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(cors({
  origin: "http://localhost:3000", // URL de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI,)
  .then(() => console.log("Conexión exitosa a la base de datos MongoDB"))
  .catch((error) => console.error("Error al conectar a la base de datos MongoDB:", error));

// Incluir rutas
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Voy seguro porque YESHUA está conmigo!!!<h1>SiteGlob</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});