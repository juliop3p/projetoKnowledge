const mongoose = require('mongoose')

mongoose.connect('mongodb://julio:32991046@omnisstack-shard-00-00-a9vqx.mongodb.net:27017,omnisstack-shard-00-01-a9vqx.mongodb.net:27017,omnisstack-shard-00-02-a9vqx.mongodb.net:27017/test?ssl=true&replicaSet=OmnisStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true
}).catch(err => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })

