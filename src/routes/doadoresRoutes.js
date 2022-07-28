const express = require('express')
const router = express.Router()
const controller = require('../controller/doadoresController')

router.post('/donor', controller.createDonor)
router.patch('/donor/update/:id', controller.updateDonor)
router.delete('/donor/:id', controller.deleteDonor)
router.get('/donors/', controller.getAllDonors)
router.post('/donor/login', controller.loginDonor)
router.get('/donors/payment', controller.getDonorsPaying)

module.exports = router;

