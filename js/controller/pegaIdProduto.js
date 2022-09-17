const db = fetch('http://localhost:3000/produtos', {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
})

let id;

const pegaID = db.then(() => {
    const listaLinks = document.getElementsByClassName('products__list__card__content__link');
    return listaLinks
})

const listaLinksObjeto = await pegaID;

for(let i = 0; i < listaLinksObjeto.length; i++) {
    listaLinksObjeto[i].addEventListener('click', () => {
        id = listaLinksObjeto[i].nextSibling.textContent;
        sessionStorage.setItem('id', `${id}`);
        window.location.assign('./views/produto.html');
    })
}

