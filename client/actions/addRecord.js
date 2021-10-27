import { addRecord } from "../apis/records"

export const ADD_RECORD_PENDING = "ADD_PRODUCT_PENDING"
export const ADD_RECORD_SUCCESS = "ADD_PRODUCT_SUCCESS"

export function addRecordPending () {
  return {
    type: ADD_RECORD_PENDING
  }
}
export function addRecordSuccess (record) {
  return {
    type: ADD_RECORD_SUCCESS,
    record: record
  }
}

export function addRecord (record) {
  return (dispatch) => {
    dispatch(addRecordPending())
    return addRecord(record)
      .then((record) => {
        dispatch(addRecordSuccess(record))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.errMessage
        dispatch(showError(errMessage))
      })
  }
}

