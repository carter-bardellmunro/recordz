import { getRecords } from '../apis/records'

export const FETCH_RECORDS_PENDING = 'FETCH_RECORDS_PENDING'
export const FETCH_RECORDS_SUCCESS = 'FETCH_RECORDS_SUCCESS'

export function fetchRecordsPending () {
  return {
    type: FETCH_RECORDS_PENDING
  }
}

export function fetchRecordsSuccess (records) {
  return {
    type: FETCH_RECORDS_SUCCESS,
    records: records
  }
}

export function fetchRecords () {
  return dispatch => {
    dispatch(fetchRecordsPending())
    return getRecords()
      .then((records) => {
        dispatch(fetchRecordsSuccess(records))
        return null
      })
  }
}
