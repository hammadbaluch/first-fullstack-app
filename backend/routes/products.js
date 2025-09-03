const express = require('express')
const productData = require('../data/products.json')
const router = express.Router()
router.get("/", (req, res)=>{
    res.send(productData)
})
module.exports = router  