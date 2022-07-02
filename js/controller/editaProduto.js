import db from '../view/produtoListaView.js'

db.then(() => {
    const botaoEdita = document.getElementsByClassName('produtos__list__card__button-box__button__edit')
    for(let i = 0; i < botaoEdita.length; i++) {
        botaoEdita[i].addEventListener('click', () => {
            //let id = botaoDeleta[i].parentElement.previousSibling.lastChild.textContent;
            console.log('clickei no botao ' + i)
        })
    }
})