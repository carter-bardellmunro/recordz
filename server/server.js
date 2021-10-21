const express = require('express')
const path = require('path')

const recordRoutes = require('./routes/records')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/records', recordRoutes)

module.exports = server
