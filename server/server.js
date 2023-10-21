const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');
const connectDB = require('./Config/Database')
const app = express();

connectDB()

//middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({limit:'3000mb'}))


readdirSync('./Routes')
    .map((r)=> app.use('/api', require('./Routes/'+r)))

app.listen(5000,()=> console.log(`server running is port 5000`))