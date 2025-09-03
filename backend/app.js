
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const path  = require('path')
const form = require('./routes/form')
const todo = require('./routes/todo')
const auth = require('./routes/auth');
const products = require('./routes/products');
const { verify } = require('./middleware/auth');
const app = express()

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(process.cwd(), 'public')))
app.set("view engine", "ejs")
app.set('views', 'views')
app.use((req, res, next)=>{
    console.log("I'm server");
    next()
})
app.use('/form', form)
app.use('/todo', verify, todo)
app.use('/auth', auth)
app.use('/products', products)

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
