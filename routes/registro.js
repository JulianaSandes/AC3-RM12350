module.exports = (app)=>{
    //abrir o arquivo registro.ejs
    app.get('/registro', (req, res)=>{
        res.render('registro.ejs')
    })
}