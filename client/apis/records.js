import request from 'superagent'

const rootUrl = '/api/v1'

export function getRecords () {
  return request.get(rootUrl + '/records')
    .then(res => {
      return res.body
    })
}

export function addRecord (newRecord) {
  return request.post(rootUrl + '/records')
    .send(newRecord)
    .then(res => {
      return res.body
    })
}
