const email = 'fakelogin@alurageek.com.br';
const senha = 'AluraGeek!@#';

const botaoLogin = document.getElementById('entrar');

botaoLogin.addEventListener('click', () =>{
    const emailField = document.getElementById('email').value;
    const senhaFiled = document.getElementById('senha').value;
    if(emailField == email && senhaFiled == senha){
        window.location.href = 'http://127.0.0.1:3000/views/produtos.html';
    } else {
        alert('E-mail ou senha estão incorretos');
    }
})
