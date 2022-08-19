const botaoPesquisa = document.getElementById('button-search');
const conteudoPesquisa = document.getElementById('input-search-bar');
const imgPesquisa = document.getElementById('img-search');
const botaoLogin = document.getElementById('login-button');
const pesquisaContainer = document.getElementById('search-box');

botaoPesquisa.addEventListener('click', () => {
    if(window.innerWidth > 668) {
        sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
        window.location = './views/pesquisa.html';
    } else {
        imgPesquisa.className = "nav__container__search-box__img nav__container__search-box__img-hide";
        botaoLogin.className = "nav__container__login-button-hide";
        pesquisaContainer.className = "nav__container__search-box nav__container__search-box__mobile";
        conteudoPesquisa.className = "nav__container__search-box__input nav__container__search-box__mobile__input";
        conteudoPesquisa.focus();
    }
})

conteudoPesquisa.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        console.log(window.innerWidth)
        sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
        window.location = './views/pesquisa.html';
    }
})