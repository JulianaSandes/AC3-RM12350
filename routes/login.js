const atividades = require('../models/atividades')

module.exports = (app)=>{
    //abrir o arquivo login.ejs
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

      //validar o usuário e a senha
      app.post('/login',async(req,res)=>{
        //recuperar as informações digitadas no formulário
        var dados = req.body
        //conectar com o banco de dados
        var database = require('../config/database')()
        var usuarios = require('../models/usuarios')
        //verificar se o email está cadastardo
        var verificar = await usuarios.findOne({email:dados.email})
        if(!verificar){
            return res.send("Email não Cadastrado!")
        }
        var cript = require('bcryptjs')
        var comparar = await cript.compare(dados.senha,verificar.senha)
        if(!comparar){
            return res.send("Senha Inválida!")
        }
        //buscar as atividades do usuário
        const atividade = require("../models/atividades")
        var buscar = await atividades.find({usuario:verificar._id})
        res.render("atividades.ejs",{lista:buscar,nome:verificar.nome,id:verificar._id})
    })
}