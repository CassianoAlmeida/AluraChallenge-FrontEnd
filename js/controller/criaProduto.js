//Envia formulário com o item para o mongo.db

const submit = document.querySelector('[data-submit]')

submit.addEventListener('click', (event) => {
    console.log('oi');
    const nameInput = document.getElementById("nome").value;
    const priceInput = document.getElementById("preco").value;
    const selectInput = document.querySelector('select');
    const option = selectInput.children[selectInput.selectedIndex];
    const category = option.textContent;    
    const descriptionInput = document.getElementById("descricao").value;
    const produto = {
        nome: nameInput, 
        price: priceInput, 
        descricao: descriptionInput,
        categoria: category
    };
    console.log(JSON.stringify(produto))
    //fetch('http://localhost:3000/produtos', {
    //    method: 'POST',
    //    headers: {
    //        'Content-Type': 'application/json'
    //    },
    //    body: JSON.stringify(produto),
    //})
})

