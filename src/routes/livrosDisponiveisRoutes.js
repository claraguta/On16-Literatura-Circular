const express = require('express')
const router = express.Router()
const controller = require('../controller/livrosDisponiveisController')

router.get('/books/available/title', controller.getAvailableBooksbyTitle)
router.get('/books/available', controller.getAllAvailableBooks)
router.get('/books/available/genre', controller.getAvailableBooksbyGenre)
router.post('/book/available', controller.createAvailableBook)
router.delete('/book/:id', controller.deleteAvailableBook)
router.patch('/book/available/:id', controller.updateAvailableBooks)
router.get('/books/donor', controller.getAvailableBookByDoner)



module.exports = router;


