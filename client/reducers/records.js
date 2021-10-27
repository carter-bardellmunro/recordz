import { FETCH_RECORDS_SUCCESS } from '../actions/records'
import { ADD_RECORD_SUCCESS } from '../actions/addRecord'

const initialState = []

function records (state = initialState, action) {
  switch (action.type) {
    case FETCH_RECORDS_SUCCESS:
      return action.records
    case ADD_RECORD_SUCCESS:
      return [...state, action.record]  
    default:
      return state
  }
}

export default records
