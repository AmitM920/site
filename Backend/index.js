require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
/*should not share database username and pass
and some variables*/
app.get('/', (req, res) => {
   res.send('Hello World!')
})
app.get('/contact', (req,res) => {
   res.send('yoyoyoyo')
})

app.get('/login', (req,res) => {
    res.send('<h1>ao krlo login</h1>')
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})