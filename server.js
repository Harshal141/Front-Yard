const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use('/', express.static("public"))
app.use('/con',express.static("contributors"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})