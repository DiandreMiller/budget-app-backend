const transActionValidator = (request, response, next) => {
    if (
      request.body.hasOwnProperty('id') &&
        request.body.hasOwnProperty('itemName') &&
        request.body.hasOwnProperty('amount') &&
        request.body.hasOwnProperty('date') &&
        request.body.hasOwnProperty('from') &&
        request.body.hasOwnProperty('category')
    ) {
      next();
    } else if (!request.body.id || !request.body.itemName || !request.body.amount
    || !request.body.date || !request.body.from || !request.body.category ) {
      return response.status(400).json({ error: 'Missing fields' });
    } else {
      return response
        .status(400)
        .json({ error: "Must fill in required fields" });
    }
  };
  
  module.exports = { transActionValidator};