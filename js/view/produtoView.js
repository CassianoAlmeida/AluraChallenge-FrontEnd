const db = fetch('http://localhost:3000/produtos', {
    method: 'GET',
}).then(function(response) {
    return response.json();
})
const dbObjeto = await db;


const listaStarWars = document.getElementById('product-list-star-wars')
const listaConsoles = document.getElementById('product-list-consoles')
const listaDiversos = document.getElementById('product-list-diversos')

function carregaCards() {
    dbObjeto.forEach((element) => {

        const cardProdutoLi = document.createElement("li");
        const cardProdutoImg = document.createElement("img");
        const cardProdutoContainer = document.createElement("div");
        const cardProdutoName = document.createElement("p");
        const cardProdutoPreco = document.createElement("p");
        const cardProdutoLink = document.createElement("a");

        cardProdutoLi.appendChild(cardProdutoImg);
        cardProdutoLi.appendChild(cardProdutoContainer);
        cardProdutoContainer.appendChild(cardProdutoName);
        cardProdutoContainer.appendChild(cardProdutoPreco);
        cardProdutoContainer.appendChild(cardProdutoLink);

        const textoNome = document.createTextNode(`${element.nome}`);
        const textoPreco = document.createTextNode(`${element.preco}`);
        const textoLink = document.createTextNode(`Ver produto`);

        cardProdutoLi.className = "products__list__card";
        cardProdutoImg.alt = `${element.nome}`
        cardProdutoImg.setAttribute('src', `./src/assets/img/${element.imagem}`)
        cardProdutoContainer.className = "products__list__card__content";
        cardProdutoName.className = "products__list__card__content__text";
        cardProdutoName.appendChild(textoNome);
        cardProdutoPreco.className = "products__list__card__content__price";
        cardProdutoPreco.appendChild(textoPreco);
        cardProdutoLink.className = "products__list__card__content__link";
        cardProdutoLink.href = './views/produto.html';
        cardProdutoLink.appendChild(textoLink);

        listaStarWars.appendChild(cardProdutoLi);

        console.log(element.categoria == 'Star Wars')
        if(element.categoria == 'Star Wars') {
            listaStarWars.appendChild(cardProdutoLi);
        } if(element.categoria == 'Consoles') {
            listaConsoles.appendChild(cardProdutoLi)
        } if(element.categoria == 'Diversos') {
            listaDiversos.appendChild(cardProdutoLi)
        }
    });
} 

window.onload = carregaCards();

