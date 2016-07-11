const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/candies', (req, res) => {
  res.status(200).json([{'name': 'bon bon'}])
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
