const express = require('express')
const router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const { json } = require('express');
const adapter = new FileSync('db.json')
const db = low(adapter)

const posts = db.get('posts')
    .value();

const albuns = db.get('albuns')
.value();

const todos = db.get('todos')
.value();



router.get('/', (req, res)=>{

    res.render('index')

})

router.get('/postagens', (req, res)=>{

    

    res.render('postagens', {posts: posts})
})

router.get('/albuns', (req, res)=>{

    
    res.render('albuns', {albuns: albuns})

})

router.get('/todos', (req, res)=>{

    if(todos.completed){
        todos.completed = "Sim"
    }else{
        todos.completed = "Não"
    }

     res.render('todos', {todos: todos})

})

module.exports  = router;