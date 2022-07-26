const express = require('express')
const router = express.Router()
const controller = require('../controller/doadoresController')

router.post('/doador', controller.createDoador)
router.patch('/doador/:id', controller.updateDoador)
router.delete('/doador/:id', controller.deleteDoador)
router.get('/doadores/', controller.findAllDoadores)

module.exports = router;
