const itens = require("../../dados/itens.json")

function subotais() {
    itens.forEach(p => {
        p.calcTotais = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id) + 1 
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subotais()
    res.json(itens)
}

const alterar = (req, res) => { res.json("Em construção") }
const excluir = (req, res) => { res.json("Em construção") }

module.exports = {
    criar, listar, alterar, excluir
}