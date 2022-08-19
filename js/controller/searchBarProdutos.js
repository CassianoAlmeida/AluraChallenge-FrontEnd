const botaoPesquisa = document.getElementById('button-search');
const conteudoPesquisa = document.getElementById('input-search-bar');


botaoPesquisa.addEventListener('click', () => {
    console.log(conteudoPesquisa.value);
    sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
    window.location = './pesquisa.html';
})


conteudoPesquisa.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        console.log('oi')
        sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
        window.location = './pesquisa.html';
    }
})