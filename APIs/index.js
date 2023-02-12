const express = require('express')
const app = express()

//middleware
app.use(express.json())

let author = "Alexsandro"

app.listen('3000')

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})