const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const candiesController = require('./controllers/candies_controller')

// 1.simple routing 
// app.get('/candies', (req, res) => {
//   res.status(200).json([{'name': 'bon bon'}])
// })

// 2.routing to a controller
// app.get('/candies', candiesController.index)

// 3.chaining routing
app.route('/candies')
  .get(candiesController.index)
  // .post(candiesController.create)


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

module.exports = app
