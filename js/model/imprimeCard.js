export function imprimeCard(nome, preco) {
    const cardBody = `<li class="products__list__card">
                        <img src="/src/assets/img/star-wars-1.png" alt="${nome}">
                        <div class="products__list__card__content">
                            <p class="products__list__card__content__text">${nome}</p>
                            <p class="products__list__card__content__price">${preco}</p>
                            <a class="products__list__card__content__link" href="./views/produto.html">Ver produto</a>
                            </div>
                    </li>`

}