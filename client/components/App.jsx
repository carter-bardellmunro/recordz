import React from 'react'
import { Route, Link } from 'react-router-dom'

import RecordsList from './RecordsList'
import AddRecord from './AddRecord'
import Header from './Header'

function App() {

  return (
    <div className='app'>
      <Route exact path='/' component={Header} />
      <Route exact path='/records' component={RecordsList} />
      <Route exact path='/add' component={AddRecord} />
    </div>
  )
}


export default App
