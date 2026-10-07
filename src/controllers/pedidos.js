const pedidos = require("../../dados/pedidos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1 
    pedidos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(pedidos)
}
const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    itens.forEach((itens) =>{
      if(itens.id == id ) {
        itens.pedido_id = dados.pedido_id;
        itens.produto_id = dados.produto_id;
        itens.preco = dados.preco
        itens.quantidade = dados.quantidade
      }
    })
}

const excluir = (req, res) => { 
    const id = req.params.id;

    itens.forEach((itens, indice) =>{
        if(itens.id == id ){
            itens.splice(indice, 1)
        }
    })
}

module.exports = {
    criar, listar, alterar, excluir
}