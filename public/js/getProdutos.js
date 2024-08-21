let produtos = []
const contructProducts = document.querySelector('#produtos')
const loader = document.querySelector('.loader')

fetch('http://localhost:8000/api/produto-api')
    .then(res => res.json())
    .then(data => {
        produtos = data
        exibirProdutosNaTela(produtos)
        ordenarProdutos()
    })
    .catch(err => console.log(err))

function exibirProdutosNaTela(produtos) {
    loader.style.display = 'none'
    contructProducts.innerHTML = ''
    contructProducts.style.display = 'flex'

    produtos.forEach(produto => {
        contructProducts.innerHTML += `
            <div class="produto">       
                <div>
                    <div class="capa" style="background-image: url('${produto.imagem}')"></div>
                </div>
            
                <div>
                    <i title="Adicionar ao carrinho produto '${produto.nome}'" class="fa-solid fa-cart-plus"></i>   

                    <h4>
                        ${produto.nome}                
                    </h4>

                    <small>
                        ${produto.responsavel}
                    </small>
                </div>

                <button class="btn btn-success d-flex justify-content-center align-items-center gap-3 fs-6">
                    ${produto.preco_venda.toLocaleString
                        ('pt-BR', 
                            {
                                style: 'currency',
                                currency: 'BRL'
                            }
                        )
                    }
                </button>
            </div>
        `
    })
}

function ordenarProdutos() {
    let produtosOrdenados = produtos.sort((a, b) => a.preco_venda - b.preco_venda)
    exibirProdutosNaTela(produtosOrdenados)
}
