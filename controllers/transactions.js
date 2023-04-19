const {transActionValidator} = require('../models/validators')

const express = require('express')
const transactions = express.Router()
const transactionsArray = require('../models/budgetItems')


transactions.get('/', (request, response) => {
    console.log('transactionsArray',transactionsArray)
    response.json(transactionsArray)
})
// console.log('transactionsArray',transactionsArray)
// transactions.get("/", (req, res) => {
//     res.send(transactionsArray);
//     console.log('test', transactionsArray)
// });


transactions.get('/:index', (request, response) => {
    if (transactionsArray[request.params.index]) {
        response.json(transactionsArray[request.params.index]);
        response.send('test2')
    } else {
      // res.status(404).json({ error: "Not Found" });
      response.redirect("/budget");
    }
  });

transactions.post('/', (request, response) => {
    transactionsArray.push(request.body)
    response.json(transactions[transactionsArray.length-1])
})

transactions.put('/:index', transActionValidator, (request, response) => {
    const { index } = request.params;
    if (transactionsArray[index]) {
        transactionsArray[index] = request.body
        response.status(200).json(transactionsArray[index])
    } else {
        response.status(404).json({error: 'Not Found'})
    }
})

transactions.delete('/:index', (request, response) => {
    const { index } = request.params;
    if (transactionsArray[index]) {
        const deleteTransAction = transactionsArray.splice(index,1)
        response.status(200).json(deleteTransAction)
    } else {
        response.status(400).json({error: 'An error has occurred'})
    }
})

module.exports = transactions