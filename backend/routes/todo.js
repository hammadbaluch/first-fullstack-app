const express = require('express')
const { getTodo, addTodo } = require('../controllers/todo')
const router = express.Router()
router.get("/", (req, res)=>{
    // res.send(getTodo())
    res.send({todos:getTodo()})
})
router.post("/add", (req, res)=>{
    addTodo(req.body.data)
    res.send("todo added!")
})
module.exports = router  