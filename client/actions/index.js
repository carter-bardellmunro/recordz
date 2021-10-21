import { getRecords } from '../apis/records'

export const SET_RECORDS = 'SET_RECORDS'

export function setRecords (records) {
  return {
    type: SET_RECORDS,
    records
  }
}

export function fetchRecords () {
  return dispatch => {
    return getRecords()
      .then(records => {
        dispatch(setRecords(records))
        return null
      })
  }
}
