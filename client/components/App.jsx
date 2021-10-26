import React from 'react'
import { Route, Link } from 'react-router-dom'

import RecordsList from './RecordsList'
import Header from './Header'

function App() {

  return (
    <div className='app'>
      <Route path='/' component={Header} />
      <Route exact path='/records' component={RecordsList} />
    </div>
  )
}


export default App
