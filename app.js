//import express
const express = require("express");

//create an express app
const app = express();

//inport mongoose
const mongoose = require("mongoose");


//import routers
const chronosRoutes = require("./routes/chronos");
const userRoutes = require("./routes/user");

//import environment variables module
require("dotenv").config();

//connection to mongoose
mongoose  
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@p6database.0lkz8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//resolve cors issues
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



//parse request into json
app.use(express.json());

//set up router with frontend root
app.use("/api/chronos", chronosRoutes);
app.use("/api/auth", userRoutes);



//export app
module.exports = app;
