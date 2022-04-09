import { getDBCards } from "./js/controller/getDBCards.js";
import { botaoVerConsoles, pageScroll } from "./js/view/scrollSuave.js"


botaoVerConsoles.addEventListener('click', pageScroll(botaoVerConsoles))


getDBCards();
