const botaoPesquisa = document.getElementById('button-search');
const conteudoPesquisa = document.getElementById('input-search-bar');

botaoPesquisa.addEventListener('click', () => {
    console.log(conteudoPesquisa.value);
    sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
    window.location = './pesquisa.html';
})

//const db = fetch('http://localhost:3000/produtos', {
//    headers: {
//        'Content-Type': 'application/json',
//    },
//    method: 'GET',
//}).then(function(response) {
//    return response.json();
//});
//
//const dbObjeto = await db;
//const pesquisaInput = document.getElementById("input-search-bar")
//
//const nomesListaObjeto = document.querySelectorAll('.produtos__list__card__content__text');
//const nomesListaArray = [];
//
//nomesListaObjeto.forEach(element => {
//    nomesListaArray.push(element.innerHTML);
//})
//
//const cards = document.getElementsByClassName('produtos__list__card');
//
//const nomesMaisCards = {};
//
//for (var i = 0; i < nomesListaArray.length; i++) {
//    nomesMaisCards[nomesListaArray[i]] = cards[i];
//}
//
//console.log(nomesMaisCards)
//console.log(cards);
//console.log(nomesListaArray)
//
//pesquisaInput.addEventListener('input', (event) => {
//    const conteudo = event.target.value
//    console.log(conteudo)
//    let elementosParaEsconder = [];
//    nomesListaArray.forEach(element => {
//        console.log(element)
//        if(!element.includes(conteudo)) {
//            elementosParaEsconder.push(element)
//            console.log(elementosParaEsconder)
//            nomesMaisCards.forEach(element => {
//                console.log(elem)
//            })
//
//        } 
//    });
//})