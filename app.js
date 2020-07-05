const express = require('express')
const app = express();
const router = require('./router/router')
const port = 3001;
const handlebars = require('express-handlebars')
const path = require('path')


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)


app.listen(port, ()=>{

    console.log("Servidor Rodando");
    
})