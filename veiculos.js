const express = require('express')
const route = express.Router()

route.get('/disponiveis', (req,res) => {
    res.send("4x4: Jeep Renegade, Hilux, Fiat Toro, Amarok")
})

route.post('compras', (req, res) => {
    res.send("Dê entrada com seus dados para consultar seu crédito!")
})

route.put('/carros', (req, res) => {
    res.send("Aqui trocamos seu veículo!")
})

route.delete('/cancelar', (res, req) => {
    res.send("Pedido de financiamento cancelado!")
})

module.exports = route