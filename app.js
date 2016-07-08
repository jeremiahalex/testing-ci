const express = require('express')
const app = express()

app.get('/candies', (req, res) => {
  res.status(200).json([{'name': 'bon bon'}])
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
