const express = require('express')
const route = express.Router()

route.get('/parcelas', (req, res) => {
    x = 50
    res.send(`Ainda há um total de ${x} parcelas a serem pagas`)
})

route.post('/pagamento', (req, res) => {
    res.send('Pagamento efeituado \nParcelas restantes: ', x--)
})

route.put('/atualizar', (req, res) => {
    res.send('Número de parcelas atualizado.')
})

route.delete('/deletar', (req, res) => {
    if (x == 0) {
        res.send("Cliente sem débito pendente!")
    } else {
        res.send("Cliente quitou todos os débitos pendentes!")
    }
})

module.exports = route