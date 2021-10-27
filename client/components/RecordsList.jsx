import React, { useEffect } from "react"
import { connect } from 'react-redux'

import { fetchRecords } from '../actions/records'

import RecordListItem from "./RecordListItem"

function Records(props) {

  useEffect(() => {
    props.dispatch(fetchRecords())
  }, [])

  return (
    <>
      <h1>Dusty Records</h1>
      {props.records.map(record => {
        return (
          <RecordListItem
            key={record.id}
            record={record}
          />
        )
      })}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    records: globalState.records
  }
}

export default connect(mapStateToProps)(Records)
