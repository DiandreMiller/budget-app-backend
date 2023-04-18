const {transActionValidator} = require('../models/validators')

const express = require('express')
const transactions = express.Router()
const transactionsArray = ('../models/budgetItems')


transactions.get('/', (request, response) => {
    console.log('transactionsArray',transactionsArray)
    response.json(transactionsArray)
})


// transactions.get('/:id', (request, response) => {
//     if (transactionsArray[request.params.id]) {
//       res.json(transactionsArray[request.params.id]);
//     } else {
//       // res.status(404).json({ error: "Not Found" });
//       response.redirect("/budget");
//     }
//   });

// transactions.post('/', (request, response) => {
//     transactionsArray.push(request.body)
//     response.json(transactions[transactionsArray.length-1])
// })

// transactions.put('/:id', transActionValidator, (request, response) => {
//     const { id } = request.params;
//     if (transactionsArray[id]) {
//         transactionsArray[id] = request.body
//         response.status(200).json(transactionsArray[id])
//     } else {
//         response.status(404).json({error: 'Not Found'})
//     }
// })

// transactions.delete('/:id', transActionValidator, (request, response) => {
//     const { id } = request.params;
//     if (transactionsArray[id]) {
//         const deleteTransAction = transactionsArray.splice(id)
//         response.status(200).json(deleteTransAction)
//     } else {
//         response.status(400).json({error: 'An error has occurred'})
//     }
// })

module.exports = transactions