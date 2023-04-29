//Manipulando aba 'sobre'
document.querySelector('#about').addEventListener('mouseover', function(){ //mostrando a aba sobre;
    document.querySelector('.sobre-hidden').style.display = 'inline-block';
});

document.querySelector('#about').addEventListener('mouseout', function(){//removendo a aba sobre
    document.querySelector('.sobre-hidden').style.display = 'none';
});

//manipulando botao ver mais e o botao de sair 

const more = document.querySelectorAll('.more');
const hide = document.querySelectorAll('.daily-hidden')
const sair = document.querySelectorAll('.sair')

for(let i = 0; i < more.length; i++){
    more[i].addEventListener('click',function(){
        hide[i].style.display = 'inline';
    });

    sair[i].addEventListener('click', function(){
        hide[i].style.display = 'none';
    })
}


