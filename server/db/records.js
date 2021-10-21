const connection = require('./connection')

function getRecords (db = connection) {
  return db('records').select()
}

function addRecord (record) {
  const { artist, album, year } = record
  return db('records')
    .insert({ artist, album, year })
}

module.exports = {
  getRecords,
  addRecord
}
