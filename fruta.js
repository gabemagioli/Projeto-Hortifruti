const adicionarCarrinho = document.querySelectorAll('.add-carrinho');
const mais = document.querySelectorAll('.mais');
const menos = document.querySelectorAll('.menos');
let quantidadeProdutos = document.querySelectorAll('.inp-fruta');

//adicionando produtos no carrinho

for(let i = 0; i < adicionarCarrinho.length; i++){
    function adicionarProduto(){
        quantidadeProdutos[i].value = Number(quantidadeProdutos[i].value) + 1;
    }
    adicionarCarrinho[i].addEventListener('click', adicionarProduto);
    mais[i].addEventListener('click', adicionarProduto);
}

//removendo produtos do carrinho
for(let y = 0; y < adicionarCarrinho.length; y++){
    menos[y].addEventListener('click', function(){
        quantidadeProdutos[y].value = Number(quantidadeProdutos[y].value) - 1;
        if(quantidadeProdutos[y].value < 0){
            quantidadeProdutos[y].value = 0;
        }
    })
}

//bordas
const displayBorderTop = document.querySelectorAll('.infor-li');
for(let i = 0; i < displayBorderTop.length; i++){
    displayBorderTop[i].addEventListener('mouseover', function(){
        displayBorderTop[i].style.border = 'solid';
    });
}

for(let y = 0; y < displayBorderTop.length; y++){
    displayBorderTop[y].addEventListener('mouseout', function(){
        displayBorderTop[y].style.border = 'none';
    });
}
