const express = require('express')
const budgetItemsController = require('./controllers/transactions')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())



app.get('/', (request, response) => {
    response.send('This is the home page')
})

app.use('/budget', budgetItemsController)

app.get("*", (request, response) => {
    response.status(404).json({ error: "Sorry, page not found!" });
  });

  

module.exports = app