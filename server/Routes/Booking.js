const express = require('express')
const router = express.Router()
const { create } = require('../Controllers/Booking')

router.post('/bookings', create)


module.exports = router
