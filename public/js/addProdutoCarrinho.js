async function addProdutoAoCarrinho(produto, user_id) {
    const existeProduto = await verificaSeExisteNoCarrinho(produto, user_id)
    if (existeProduto.length > 0) {
        alert('Erro: Produto ' + `'${produto.nome}'` + ' já foi adicionado ao carrinho!')
        return
    }

    const data = {
        nome: produto.nome,
        imagem: produto.imagem,
        preco_compra: produto.preco_compra,
        preco_venda: produto.preco_venda,
        responsavel: produto.responsavel,
        descricao: produto.descricao,
        quantidade: 1,
        product_id: produto.id,
        user_id: user_id,
    }

    data.total = data.preco_venda * data.quantidade

    fetch('http://localhost:8000/api/carrinho', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Sucesso: Produto ' + `'${data.item_carrinho.nome}'` + ' adicionado ao carrinho!')
            mostraProdutosUserNaTela()
        } else {
            alert('Erro ao adicionar o produto ao carrinho!')
        }
    })
    .catch(error => console.log('Erro:', error))
}

async function verificaSeExisteNoCarrinho(produto, user_id) {
    const res = await fetch(`http://localhost:8000/api/carrinho/verifica/${produto.id}/${user_id}`)
    const data = await res.json()
    return data
}