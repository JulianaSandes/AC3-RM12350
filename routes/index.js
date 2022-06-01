module.exports = (app)=>{
    //rota do tipo send
    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })
}