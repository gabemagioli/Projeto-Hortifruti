const login = document.querySelector('#entrar');
login.addEventListener('click', function(){
    login.value = 'ENTRANDO';
    document.querySelector('input[type=submit]').style.backgroundColor = '#0000FF';
})