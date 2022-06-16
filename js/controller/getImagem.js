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
    
const submit = document.querySelector('[data-submit]')

submit.addEventListener('click' , () =>{
    const data = new FormData();
    data.append('image', arrastaImagem.files[0]);
    const imageName = data.get('image').name;
    console.log(imageName);
    fetch('http://localhost:3000/imagem', {
        method: 'POST',
        body: data,
    })
})
    
