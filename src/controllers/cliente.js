const clientes = require("../../dados/cliente.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //autoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}

const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body

    clientes.forEach((cliente) => {
        if(cliente.id == id) {
            cliente.cpf = dados.cpf
            cliente.nome = dados.nome
        }
    })
    res.send("Cliente alterado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id
    
    clientes.forEach((cliente, indice) => { 
        if(cliente.id == id) {
            clientes.splice(indice, 1)
        }
    });

    res.send("Cliente excluído com sucesso")
}

module.exports = {
    criar, listar, alterar, excluir
}