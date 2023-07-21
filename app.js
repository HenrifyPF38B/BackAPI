
const express = require("express"),
      app = express(),
      cors = require("cors"),
      mercadopago = require("mercadopago");
      // esta es la  libreria de mercado pago


mercadopago.configure({
  access_token: "TEST-5560570626097728-072022-b846d996aec1526cb840190799711653-307905530",
});

      

app
    .use(express.urlencoded({extended: false}))
    .use(express.json())
    .use(cors())

    // levantan un servidor como este y van creando las rutas con las respuestas
    .get("/albums", (req, res)=>{
      res.json([
        {
        title: "Honest",
        artist: "Justin bieber",
        stock: 100
        },
        {
        title: "Honest",
        artist: "Justin bieber",
        stock: 100
        },
        {
        title: "Honest",
        artist: "Justin bieber",
        stock: 100
        },
        {
        title: "Honest",
        artist: "Justin bieber",
        stock: 100
        },
    ])
    .get("/songs", (req, res)=>{
      res.json([
        {
          title: "Honest",
          artist: "Justin bieber",
          stock: 100
          },
          {
          title: "Honest",
          artist: "Justin bieber",
          stock: 100
          },
          {
          title: "Honest",
          artist: "Justin bieber",
          stock: 100
          },
          {
          title: "Honest",
          artist: "Justin bieber",
          stock: 100
          }
      ])
    })

    })

module.exports = app; 

