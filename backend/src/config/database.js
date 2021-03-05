const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser:true, useUnifiedTopology: true} )


mongoose.Error.messages.general.require = "O atributo '{PATH}' e obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado e menor que limite minimo '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado e maior que limite maximo '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' nao e valido para o atributo '{PATH}'"