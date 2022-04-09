import { getDBCards } from "./js/controller/getDBCards.js";
import { botaoVerConsoles, pageScroll } from "./js/view/scrollSuave.js"


botaoVerConsoles.addEventListener('click', pageScroll(botaoVerConsoles))


getDBCards();


const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Alura Geek"))

app.listen(process.env.PORT || 3000);