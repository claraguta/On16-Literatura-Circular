const express = require('express')
const router = express.Router()
const controller = require('../controller/livrosDesejadosController')

router.post('/book/wished', controller.createWishedBook)
router.delete('/books/wished/:id', controller.deleteWishedBook)
router.patch('/book/wished/update/:id', controller.updateWishedBook)
router.get('/books/wished', controller.getAllWishedBooks)
router.get('/books/wished/title', controller.getWishedBooksByTitle)
router.get('/books/wished/genre', controller.getWishedBooksByGenre)
router.get('/books/wished/library', controller.getWishedBookByLibrary)


module.exports = router;

