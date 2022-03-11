const { urlencoded } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require("./db/conn")
const { use } = require('./routes/productsRoutes')
const ProductsRoutes = require('./routes/productsRoutes')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set("view engine", "handlebars")
app.use(
    express.urlencoded({
        extended: true
    })
)


app.use(express.json())
app.use(express.static(__dirname+'/public'))

app.use("/products", ProductsRoutes)
app.listen(3000)