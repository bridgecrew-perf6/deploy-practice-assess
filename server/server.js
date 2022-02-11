const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/')))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || 5050

app.listen(5050,() => console.log('server running on 5050'))