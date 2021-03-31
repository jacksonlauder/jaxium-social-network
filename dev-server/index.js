import express from 'express'
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('Jaxium Social Network Application listening on port 3000!')
})
