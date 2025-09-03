const express = require('express')
const path = require('path')
const router = express.Router()
router.get('/', (req, res)=>{
    res.render("form", {username: req.query.name || 'DEFAULT'})
})
router.post('/submit', (req, res)=>{
    res.send(req.body)
})
module.exports = router  