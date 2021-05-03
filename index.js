const express = require('express')
const app = express()
const port = 1514

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org:${1514}`)
})