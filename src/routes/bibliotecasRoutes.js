const express = require('express')
const router = express.Router()
const controller = require('../controller/bibliotecaController')

router.post('/biblioteca', controller.createBiblioteca)
router.get('/bibliotecas', controller.findAllBibliotecas)
router.get('/bibliotecas/:id', controller.findBibliotecaById)
router.patch('/bibliotecas/:id', controller.updateBiblioteca)
router.delete('/biblioteca/:id', controller.deleteBiblioteca)
router.post('/biblioteca/login', controller.loginBiblioteca)

module.exports = router;