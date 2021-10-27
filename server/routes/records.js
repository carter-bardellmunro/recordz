const express = require('express')

const db = require('../db/records')

const router = express.Router()

// GET /api/v1/records

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

// POST /api/v1/records

router.post('/', (req, res) => {
  const newRecord = req.body
  db.addRecord(newRecord)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('ADD RECORD ERROR: ' + err.message)
    })
})

module.exports = router
