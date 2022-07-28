const express = require('express')
const router = express.Router()
const controller = require('../controller/bibliotecaController')

router.post('/library', controller.createLibrary)
router.get('/libraries', controller.findAllLibraries)
router.post('/library/login', controller.loginLibrary)
router.get('/libraries/state', controller.getLibraryByState)
router.get('/libraries/cities', controller.getLibraryByCity)
router.get('/libraries/payment', controller.getLibraryPay)
router.get('/libraries/public', controller.getPublicLibrary)
router.patch('/library/:id', controller.updateLibrary)
router.delete('/library/:id', controller.deleteLibrary)
router.get('/libraries/:id', controller.findLibraryById)

module.exports = router;    


