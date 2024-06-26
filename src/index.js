const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const cors = require("cors");
const { dbConnection } = require("./Config/db");

const ProductosRoutes = require("./routes/productoRoutes");
require("dotenv").config( {path:path.resolve( ".env")} );
const PORT = process.env.PORT ||3000;
app.use(cors());

app.use(
  session({
    secret: "a",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: true }));
dbConnection();
app.use(express.json());
app.use("/", ProductosRoutes);

app.listen(PORT, () => console.log("Servidor levantado," ,"http://localhost:"+ PORT));