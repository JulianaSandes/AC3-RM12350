module.exports = (app)=>{
    //rota do tipo send
    app.get('/', (req,res)=>{
        res.send('Rota do tipo send')
    })
}
