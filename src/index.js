// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const { request } = require("express");
//const cards = require("./data/cards.json");
const Database = require("better-sqlite3");
const db = new Database("./src/db/database.db", {});

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: "1mb",
  })
);
// Esto es para el motor de plantillas
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 4000
const serverPort = process.env.PORT || 4000;
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
    id: uuidv4(),
  };
  if (
    userCard.palette !== "" &&
    userCard.name !== "" &&
    userCard.job !== "" &&
    userCard.email !== "" &&
    userCard.linkedin !== "" &&
    userCard.github !== ""
  ) {
    const query = db.prepare(
      "INSERT INTO cards (id, palette, name, job, email, linkedin, github, photo, phone) VALUES (?, ?, ?, ? , ?, ?, ?, ?, ? )"
    );
    const createdCard = query.run(
      userCard.id,
      userCard.palette,
      userCard.name,
      userCard.job,
      userCard.email,
      userCard.linkedin,
      userCard.github,
      userCard.photo,
      userCard.phone
    );

    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${userCard.id}`,
      cardId: userCard.id,
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
server.get("/card/:id", (req, res) => {
  const cardId = req.body;
  const query = db.prepare("SELECT * FROM cards WHERE id = ?");
  const cardToRender = query.get(cardId);
  res.render("card", cardToRender);
});

// Servidor estatico
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

const staticServerPathStyles = "./src/styles";
server.use(express.static(staticServerPathStyles));
