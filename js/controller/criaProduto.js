//Captura a imagem arrastada para a drag-box-area e mostra preview

const arrastaImagem = document.getElementById("image-input");

arrastaImagem.addEventListener("change", function(){
    const preview = document.getElementById("preview")
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result;
        document.getElementById("img-icon").classList.add('novo-produto__add-image__drag-box__icon-hide');
        document.getElementById("drag-box-description").classList.add('novo-produto__add-image__drag-box__text-hide');
        });
    reader.readAsDataURL(this.files[0]);
})

//Envia formulário com o item para o mongo.db
const submit = document.querySelector('[data-submit]')

submit.addEventListener('click', () => {
    //sobe dados para o mongo.db
    const nameInput = document.getElementById("nome").value;
    const priceInput = document.getElementById("preco").value;
    const selectInput = document.querySelector('select');
    const option = selectInput.children[selectInput.selectedIndex];
    const category = option.textContent;    
    const descriptionInput = document.getElementById("descricao").value;
    const produto = {
        nome: nameInput, 
        preco: priceInput, 
        descricao: descriptionInput,
        categoria: category
    };

    console.log(JSON.stringify(produto))

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto),
    }).then(console.log('foi'))
})

