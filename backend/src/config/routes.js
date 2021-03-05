const express = require('express')

module.exports = function(server){
    //Definir url base para trodas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Cicle de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}