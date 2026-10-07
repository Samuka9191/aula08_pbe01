const itens = require("../../dados/itens.json")

const listar = (req, res) => {
    subotais()
    res.json(itens)
}

function subotais() {
    itens.forEach(p => {
        p.calcTotais = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
     if(req.body){
        const novoId = itens.length + 1;

        itens.push(req.body);

        res.send("Pedido cadastrado com sucesso")
     }
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
     res.send("Item alterado com sucesso")
}

const excluir = (req, res) => { 
    const id = req.params.id;

    itens.forEach((itens, indice) =>{
        if(itens.id == id ){
            itens.splice(indice, 1)
        }
    });
    
     res.send("Item excluído com sucesso")
}

module.exports = {
    criar, listar, alterar, excluir
}