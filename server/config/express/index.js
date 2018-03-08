const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookie = require('cookie-parser')
const registerRoutes = require('../../routes')

require('../db')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cookie())
app.use(session({
  name: 'todo',
  secret: 'todo_list_pass',
  resave: false,
  saveUninitialized: false
}))

const port = process.env.PORT || 3000

const router = express.Router()

app.use('/api', router)

registerRoutes(app, router)

app.listen(port)

console.log('Server running port ' + port)

module.exports = app
