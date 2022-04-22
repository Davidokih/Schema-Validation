const express = require('express')
const router = express.Router()

const {
    createStud,
    allStud,
    oneStud,
    updateStud,
    deleteStud
} = require('../controller/studHandler')

router.post('/create', createStud)
router.get('/get', allStud)
router.get('/get/:studid', oneStud)
router.patch('/update/:studid', updateStud)
router.delete('/delete/:studid', deleteStud)

module.exports = router