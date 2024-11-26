import express from "express";
import 'dotenv/config';
import db from "./configs/database.js";

//conexão com o banco
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// criando uma aplicação express
const app = express();

// definindo que vamos receber json na requisicao
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});