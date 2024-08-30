let produtos = []
const contructProducts = document.querySelector('#produtos')
const loader = document.querySelector('.loader')
const user_id = document.querySelector('#user_id').value

getApi()

function getApi() {
    fetch('http://localhost:8000/api/produto-api')
        .then(res => res.json())
        .then(data => {
            produtos = data
            ordenarProdutos()
        })
        .catch(err => console.log(err))    
}

function exibirProdutosNaTela(produtos) {
    loader.style.display = 'none'
    contructProducts.innerHTML = ''
    contructProducts.style.display = 'flex'

    produtos.forEach(produto => {
        const div = document.createElement('div')
        div.className = 'produto'

        div.innerHTML += `
            <div>
                <div class="capa" style="background-image: url('${produto.imagem}')"></div>
            </div>
        
            <div>
                <i title="Adicionar ao carrinho produto '${produto.nome}'" data-add-carrinho class="fa-solid fa-cart-plus"></i>   

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
        `

        contructProducts.append(div)

        div.querySelector('[data-add-carrinho]').addEventListener('click', function() {
            addProdutoAoCarrinho(produto, user_id)
        })
    })
}

function ordenarProdutos() {
    let produtosOrdenados = produtos.sort((a, b) => a.preco_venda - b.preco_venda)
    exibirProdutosNaTela(produtosOrdenados)
}
