const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    disciplina:String,
    intrucoes:String,
    usuario:String
})

const atividades = mongoose.model('atividades', modelo)

module.exports = atividades