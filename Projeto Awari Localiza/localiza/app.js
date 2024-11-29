import express from "express";
import 'dotenv/config';
import db from "./configs/database.js";
import carRouter from "./routes/carRouter.js";
import utilitarioRouter from "./routes/utilitarioRouter.js";
import esportivoRouter from "./routes/esportivoRouter.js";
import clienteRouter from "./routes/clienteRouter.js";
import funcionarioRouter from "./routes/funcionarioRouter.js";
import reservaRouter from "./routes/reservasRouter.js";
import promocaoRouter from "./routes/promocaoRouter.js";

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

// rotas
app.use("/carros", carRouter);
app.use("/utilitarios", utilitarioRouter);
app.use("/esportivos", esportivoRouter);
app.use("/clientes", clienteRouter);
app.use("/funcionarios", funcionarioRouter);
app.use("/reservas", reservaRouter);
app.use("/promocao", promocaoRouter);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});