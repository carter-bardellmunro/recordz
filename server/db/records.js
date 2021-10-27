const connection = require('./connection')

function getRecords (db = connection) {
  return db('records').select()
}

function addRecord (record, db = connection) {
  const { artist, album, year, price } = record
  return db('records')
    .insert({ artist, album, year, price })
}

module.exports = {
  getRecords,
  addRecord
}
