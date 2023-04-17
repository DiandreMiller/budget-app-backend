const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.send('This is the home page')
})

module.exports = app