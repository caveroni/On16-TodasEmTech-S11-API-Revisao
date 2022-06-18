const controller = require('../controller/seriesController')

const express = require('express')
const router = express.Router()
router.get("/series", controller.getAllSeries)
router.get("/series/genero", controller.getGenreSeries)
router.get("/series/:id", controller.getSerieId)
router.post("/series", controller.addSerie)
router.delete("/series/:id", controller.deleteSerie)
router.patch("/series/:id/liked", controller.updateLiked)
module.exports = router