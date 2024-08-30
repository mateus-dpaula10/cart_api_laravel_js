mostraProdutosUserNaTela()

function mostraProdutosUserNaTela() {
    fetch(`http://localhost:8000/api/carrinho/${user_id}`)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            qtdProdutosCarrinho(data)
        }
    })
}

function qtdProdutosCarrinho(produtos) {
    const iconQtdCarrinho = calculaQtdCarrinho(produtos)

    function calculaQtdCarrinho(produtos) {
        return produtos.reduce((acc, produtos) => acc + produtos.quantidade, 0)
    }

    document.querySelector('[data-icon-count]').style.display = 'flex'
    document.querySelector('[data-icon-count]').innerText = iconQtdCarrinho
}