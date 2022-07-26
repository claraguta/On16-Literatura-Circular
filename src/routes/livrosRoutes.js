const express = require('express')
const router = express.Router()
const controller = require('../controller/livrosController')

router.post('/livro', controller.createLivro)

module.exports = router;