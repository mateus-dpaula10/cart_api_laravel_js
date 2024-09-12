function removeProdutoCarrinho(produto) {
    fetch(`http://localhost:8000/api/carrinho/destroy/${produto.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message)
        mostraProdutosUserNaTela()
    })
    .catch(error => console.log(error))
}