import React, { useEffect } from "react"
import { connect } from 'react-redux'

import { fetchRecords } from '../actions'

function Records(props) {

  useEffect(() => {
    props.dispatch(fetchRecords())
  }, [])

  return (
    <>
      <h1>Dusty Records</h1>
      <ul>
        {props.records.map(record => (
          <>
            <li key={record.artist}>{record.artist}</li>
            <li key={record.album}>{record.album}</li>
            <li key={record.year}>{record.year}</li>
            <li key={record.price}>${record.price}</li>
          </>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    records: globalState.records
  }
}

export default connect(mapStateToProps)(Records)
