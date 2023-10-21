const express = require('express')
const router = express.Router()
const { read, list, create, update, remove } = require('../Controllers/hotels')
//http://localhost:5000/api/hotels
//middleware
const { auth } = require('../Middleware/auth')


router.get('/hotels', auth, list)
router.get('/hotels/:id', auth, read)
router.post('/hotels', auth, create)
router.put('/hotels/:id', auth, update)
router.delete('/hotels/:id', auth, remove)


module.exports = router