const arrastaImagem = document.getElementById("image-input");

arrastaImagem.addEventListener("change", function(){
    const preview = document.getElementById("preview")
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result;
        document.getElementById("img-icon").
            classList.add('novo-produto__add-image__drag-box__icon-hide');
        document.getElementById("drag-box-description").
            classList.add('novo-produto__add-image__drag-box__text-hide');
        });
    reader.readAsDataURL(this.files[0]);
})

//Envia formulário com o item para o mongo.db
const submit = document.querySelector('[data-submit]')

submit.addEventListener('click', () => {
    const data = new FormData();
    data.append('image', arrastaImagem.files[0]);
    fetch('http://localhost:3000/imagem', {
        method: 'POST',
        body: data,
    })

    //sobe dados para o mongo.db
    const date = new Date();
    const imageName = data.get('image').name;
    const imageNewName = `${String((Date.now())).slice(0, -3)}-${imageName}`
    const idInput = document.getElementById("id").value;
    const nameInput = document.getElementById("nome").value;
    const priceInput = document.getElementById("preco").value;
    const selectInput = document.querySelector('select');
    const option = selectInput.children[selectInput.selectedIndex];
    const category = option.textContent;    
    const descriptionInput = document.getElementById("descricao").value;
    const produto = {
        imagem: imageNewName,
        nome: nameInput, 
        preco: priceInput, 
        descricao: descriptionInput,
        categoria: category
    };

    fetch('http://localhost:3000/produtos/' + idInput, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto),
    }).then(console.log('foi'))
})