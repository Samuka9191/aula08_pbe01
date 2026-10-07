const express = require("express")
const router = express.Router()

const Pedido = require("./controllers/pedidos")
const Itens = require("./controllers/itens")
const Cliente = require("./controllers/cliente")
const Produto = require("./controllers/produto")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/', rotaInicial)

router.post('/produto', Produto.criar)
router.get('/produto', Produto.listar)
router.put('/produto/:id', Produto.alterar)
router.delete('/produto/:id', Produto.excluir)

router.post('/cliente', Cliente.criar)
router.get('/cliente', Cliente.listar)
router.put('/cliente/:id', Cliente.alterar)
router.delete('/cliente/:id', Cliente.excluir)

router.post('/itens', Itens.criar)
router.get('/itens', Itens.listar)
router.put('/itens/:id', Itens.alterar)
router.delete('/itens/:id', Itens.excluir)

router.post('/pedidos', Pedido.criar)
router.get('/pedidos', Pedido.listar)
router.put('/pedidos/:id', Pedido.alterar)
router.delete('/pedidos/:id', Pedido.excluir)

module.exports = router
