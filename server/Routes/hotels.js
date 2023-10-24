const express = require('express')
const router = express.Router()
const { read, list, create, update, remove } = require('../Controllers/hotels')
//http://localhost:5000/api/hotels
//middleware
const { auth } = require('../Middleware/auth')
const { upload } = require('../Middleware/upload')

router.get('/hotels', list)
router.get('/hotels/:id', read)
router.post('/hotels', upload, create)
router.put('/hotels/:id', upload, update)
router.delete('/hotels/:id', remove)


module.exports = router