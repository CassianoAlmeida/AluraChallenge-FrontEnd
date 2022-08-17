const botaoPesquisa = document.getElementById('button-search');
const conteudoPesquisa = document.getElementById('input-search-bar');

botaoPesquisa.addEventListener('click', () => {
    console.log(conteudoPesquisa.value);
    sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
    window.location = './views/pesquisa.html';
})
