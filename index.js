const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
require("./src/db/conn")
const User = require('./src/models/register');


const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/register.html'));
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/login.html'));
})

app.post('/login', async (req, res )=> {

})

app.post('/register', async (req, res) => {
  try {
    const data = new User(req.body)
    const register = await data.save();
    res.sendFile(path.join(__dirname + '/public/thank.html'));
  } catch (error) {
      res.status(400).send({
        error: "Opps! Email already in use!"
      })
  } {

  }
})
app.get('/thank', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/thank.html'));
})
app.listen(port, () => {
  console.log(`Server started on the port ${port}`)
})