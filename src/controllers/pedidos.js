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

    pedidos.forEach((pedidos) =>{
      if(pedidos.id == id ) {
        pedidos.cliente_id = dados.cliente_id;
        pedidos.data = dados.data;
      }
    })
     res.send("Pedido alterado com sucesso")
}

const excluir = (req, res) => { 
    const id = req.params.id;

    pedidos.forEach((pedidos, indice) =>{
        if(pedidos.id == id ){
            pedidos.splice(indice, 1)
        }
    });
     res.send("Pedido excluído com sucesso")
}


module.exports = {
    criar, listar, alterar, excluir
}