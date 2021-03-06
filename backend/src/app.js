require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const studentsRouter = require('./routes/students')
const nativeLanguagesRouter = require('./routes/nativeLanguages')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/students', studentsRouter)
app.use('/nativeLanguages', nativeLanguagesRouter)

module.exports = app
