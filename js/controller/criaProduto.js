//Captura a imagem arrastada para a drag-box-area e mostra preview

const arrastaImagem = document.getElementById("image-input");
let imagemCarregada = "";

arrastaImagem.addEventListener("change", function(){
    const preview = document.getElementById("preview")
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result;
        document.getElementById("img-icon").classList.add('novo-produto__add-image__drag-box__icon-hide');
        document.getElementById("drag-box-description").classList.add('novo-produto__add-image__drag-box__text-hide');        
        // let photo = document.getElementById("image-input").files[0];
        // console.log(photo)
        // let formData = new FormData();
        // formData.append("photo", photo);
        //console.log(formData);
        //fetch('../src/assets/img', {
        //    method: "POST",
        //    body: formData
        //}).then(console.log('imagem cadastrada'));
    });
    reader.readAsDataURL(this.files[0]);
})

//Captura a imagem arrastada para a drag-box-area e mostra preview

const selecionaImagem = document.getElementById("button-input")

selecionaImagem.addEventListener("change", function(){
    const preview = document.getElementById("preview")
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result;
        document.getElementById("img-icon").classList.add('novo-produto__add-image__drag-box__icon-hide');
        document.getElementById("drag-box-description").classList.add('novo-produto__add-image__drag-box__text-hide');
    });
    reader.readAsDataURL(this.files[0]);
})

//Envia formulário com o item para o db.json

const submit = document.querySelector('[data-submit]')

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const image = document.querySelector('#preview').getAttribute('src')
    const nameInput = document.getElementById("nome").value;
    const priceInput = document.getElementById("preco").value;
    const selectInput = document.querySelector('select');
    const option = selectInput.children[selectInput.selectedIndex];
    const category = option.textContent;    
    const descriptionInput = document.getElementById("descricao").value;
    const produto = {
        image: image,
        name: nameInput, 
        price: priceInput, 
        category: category, 
        description: descriptionInput
    };
    console.log(produto)
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto),
    })
})

