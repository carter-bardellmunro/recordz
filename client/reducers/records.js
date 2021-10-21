import { SET_RECORDS } from '../actions'

const initialState = []

function records (state = initialState, action) {
  switch (action.type) {
    case SET_RECORDS:
      return action.records
    default:
      return state
  }
}

export default records
