const express = require('express') 
const app = express()

app.use(express.json()) 

const seriesRotas = require('./routes/seriesRoutes')
app.use("/reprogramaflix", seriesRotas)

module.exports = app