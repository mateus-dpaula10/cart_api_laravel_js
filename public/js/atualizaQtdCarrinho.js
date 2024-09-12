const produtosUserCarrinho = document.querySelector('#produtos_carrinho')
const valorTotal = document.createElement('div')

mostraProdutosUserNaTela()

function mostraProdutosUserNaTela() {
    fetch(`http://localhost:8000/api/carrinho/${user_id}`)
    .then(response => response.json())
    .then(data => {
        qtdProdutosCarrinho(data)

        if (data.length > 0) {
            produtosUserCarrinho.innerHTML = ''

            data.forEach(produto => {
                const div = document.createElement('div')
                div.className = 'pCarrinho'

                const valorUnitarioProduto = calculaValorUnitario(produto)
                function calculaValorUnitario(produto) {
                    return produto.preco_venda * produto.quantidade
                }

                div.innerHTML += `
                    <div>
                        <img src="${produto.imagem}" alt="Imagem do produto ${produto.nome}" />
                    </div>

                    <div>
                        <h3>${produto.nome}</h3>
                        <small>${produto.responsavel}</small>
                        <h4>${valorUnitarioProduto.toLocaleString('pt-BR', 
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }
                            )}
                        </h4>
                        <input data-quantidade class="form-control" type="number" min="0" value="${produto.quantidade}" />
                    </div>
                `

                produtosUserCarrinho.append(div)

                div.querySelector('[data-quantidade]').addEventListener('change', function() {
                    const value = div.querySelector('[data-quantidade]').value
                    const total = value * produto.preco_venda   
                    if (value == 0) {
                        removeProdutoCarrinho(produto)
                    } else {
                        mostraProdutosUserNaTelaCarrinho(value, total, produto)
                    }
                })
            })
            
            valorTotalCarrinho(data)
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

function mostraProdutosUserNaTelaCarrinho(quantidade, total, produto) {
    fetch(`http://localhost:8000/api/carrinho/put/${produto.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            quantidade: quantidade,
            total: total
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message)
        mostraProdutosUserNaTela()
    })
    .catch(error => console.log(error))
}

function valorTotalCarrinho(carrinho) {
    valorTotal.className = 'valor_total_carrinho'
    valorTotal.innerHTML = 'Valor total do carrinho: ' + '<b>' + calculaValorTotal(carrinho) + '</b>'

    function calculaValorTotal(carrinho) {
        return carrinho.reduce((acc, carrinho) => acc + carrinho.total, 0).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    produtosUserCarrinho.append(valorTotal)
}