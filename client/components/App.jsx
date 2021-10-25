import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import Records from './Records'

function App() {

  return (
    <div className='app'>
      <Route path='/' component={Records} />
    </div>
  )
}


export default App
