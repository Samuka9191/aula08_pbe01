const express = require("express")
const router = express.Router()

const Pedido = require("./controllers/pedidos")
const Itens = require("./controllers/itens")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/', rotaInicial)

router.post('/itens', Itens.criar)
router.get('/itens', Itens.listar)
router.put('/itens/:id', Itens.alterar)
router.delete('/itens/:id', Itens.excluir)

router.post('/pedidos', Pedido.criar)
router.get('/pedidos', Pedido.listar)
router.put('/pedidos/:id', Pedido.alterar)
router.delete('/pedidos/:id', Pedido.excluir)

module.exports = router
