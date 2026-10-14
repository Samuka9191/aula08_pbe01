const produto = require("../../dados/produto.json")

const listar = (req, res) => {
    res.json(produto)
}


const criar = (req, res) => {
     if(req.body){
        const novoId = produto.length + 1;

        produto.push(req.body);

        res.send("Produto cadastrado com sucesso")
     }
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    produto.forEach((produto) =>{
      if(produto.id == id ) {
        produto.nome = dados.nome
        produto.preco = dados.preco
      }
    })
     res.send("Produto alterado com sucesso")
}

const excluir = (req, res) => { 
    const id = req.params.id;

    produto.forEach((produto, indice) =>{
        if(produto.id == id ){
           produto.splice(indice, 1)
        }
    });
     res.send("Produto excluído com sucesso")
}


module.exports = {
    criar, listar, alterar, excluir
}