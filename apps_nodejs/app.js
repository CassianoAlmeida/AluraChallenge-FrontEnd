import express from "express";
import db from "./js/config/dbConnect.js";
import routes from "./js/routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open" , () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //necessário para upload de arquivos
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept")
    //res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    //res.header(
    //  "Access-Control-Allow-Headers",
    //  "Origin, X-Requested-With, Content-Type, Accept"
    //);
    next();
  });
  
routes(app);

export default app;