const express = require("express");
require('dotenv').config()
const contactController = require("./contact/infrastructure/adapter/contactController")
const InMemoryContactRepository = require("./contact/infrastructure/adapter/InMemoryContactRepository");

const app = express();
app.use(express.json());

(async () => {

    const port = process.env.PORT || 3000;

    const contactRepository = new InMemoryContactRepository();

    app.use(contactController(contactRepository));

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    })
})()
