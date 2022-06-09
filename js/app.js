import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open" , () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //necessário para upload de arquivos
routes(app);

app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error.field);
});

export default app;