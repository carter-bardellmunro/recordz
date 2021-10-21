const express = require('express')

const db = require('../db/records')

const router = express.Router()

router.get('/', (req, res) => {
  db.getRecords()
    .then(records => {
      res.json(records)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
