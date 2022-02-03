// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json(
  {
    limit: "1mb"
}
));

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos

// Recuperar datos de la tarjeta
server.post("/card", (req, res) => {
  const userCard = {
    palette: req.body.palette,
    name: req.body.name,
    job: req.body.job,
    phone: req.body.phone,
    email: req.body.email,
    linkedin: req.body.linkedin,
    github: req.body.github,
    photo: req.body.photo,
  };
  if (
    userCard.palette !== "" &&
    userCard.name !== "" &&
    userCard.job !== "" &&
    userCard.email !== "" &&
    userCard.linkedin !== "" &&
    userCard.github !== "" &&
    userCard.photo !== ""
  ) {
    const responseSuccess = {
      success: true,
      cardURL: "http//localhost:4000/card/${cardId}",
    };
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: "Error description",
    };
    res.statusCode = 400;
    res.json(responseError);
  }
});

// Ruta para mostrar tarjeta

// Servidor estatico
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));
