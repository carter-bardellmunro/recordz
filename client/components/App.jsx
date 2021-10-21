import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchRecords } from '../actions'

function App(props) {

  useEffect(() => {
    props.dispatch(fetchRecords())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {props.records.map(record => (
            <li key={record.artist}>{record.artist}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    records: globalState.records
  }
}

export default connect(mapStateToProps)(App)
