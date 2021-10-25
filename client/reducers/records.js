import { FETCH_RECORDS_SUCCESS } from '../actions'

const initialState = []

function records (state = initialState, action) {
  switch (action.type) {
    case FETCH_RECORDS_SUCCESS:
      return action.records
    default:
      return state
  }
}

export default records
