const express = require("express");
// const cors = require('cors');
const mongoose = require("mongoose");
const ContactRouter = require("../contacts/contact.routers");
require("dotenv").config();

const PORT = 3000;
const MONGODB_URL = "mongodb+srv://nelli_admin:ifhbr171123@cluster0.qnmup.mongodb.net/db-contacts?retryWrites=true&w=majority";

module.exports = class ContactServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    await this.initDatabase();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddlewares() {
    this.server.use(express.json());
  }

  initRoutes() {
    this.server.use("/contacts", ContactRouter);
  }

  async initDatabase() {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
  }

  startListening() {
    this.server.listen(PORT, () => {
      console.log("SERVER STARTED LISTENING ON PORT", PORT);
    });
  }
};
