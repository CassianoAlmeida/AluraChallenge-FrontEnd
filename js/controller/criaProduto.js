import { getDBCards } from "./getDBCards.js";

const criaProduto = async () => {
    const list = await getDBCards();
    return list
}

//console.log(criaProduto)

const submit = document.querySelector('[data-submit]')

const produto = submit.addEventListener('click', () => {
    const nameInput = document.getElementById("nome").value;
    const priceInput = document.getElementById("preco").value;
    const selectInput = document.querySelector('select');
    const option = selectInput.children[selectInput.selectedIndex];
    const text = option.textContent;    
    const descriptionInput = document.getElementById("descricao").value;
    const produto = {
        image: ImagemCarregadaValue,
        name: nameInput, 
        price: priceInput, 
        category: text, 
        description: descriptionInput
    };
    console.log(produto)
    return produto;
})

const arrastaImagem = document.getElementById("image-input");
const selecionaImagem = document.getElementById("")

var imagemCarregada = "";

arrastaImagem.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        imagemCarregada = reader.result;
        document.getElementById('drag-box').style.backgroundImage = `url(${imagemCarregada})`;
        document.getElementById("img-icon").classList.add('novo-produto__add-image__drag-box__icon-hide');
        document.getElementById("drag-box-description").classList.add('novo-produto__add-image__drag-box__text-hide');        
    });
    reader.readAsDataURL(this.files[0]);
    console.log(imagemCarregada)
})



//inputImagem.addEventListener("change", function(){
//    const reader = new FileReader();
//    reader.addEventListener('load', () => {
//        imagemCarregada = reader.result;
//        document.getElementById('drag-box').style.backgroundImage = `url(${imagemCarregada})`;
//        document.getElementById("img-icon").classList.add('novo-produto__add-image__drag-box__icon-hide');
//        document.getElementById("drag-box-description").classList.add('novo-produto__add-image__drag-box__text-hide');        
//        //console.log(imagemCarregada)
//    });
//    reader.readAsDataURL(this.files[0]);
//})