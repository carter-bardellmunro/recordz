import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addNewRecord } from '../actions/addRecord'

function addRecord() {
  // console.log(props)

  const [form, setForm] = useState({
    artist: '',
    album: '',
    year: '',
    price: ''
  })

  function handleChange() {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit() {
    props.dispatch(addNewRecord(form))
  }

  return (
    <div>
      <div>
        <h2>New stock? Add it below.</h2>
      </div>
      <form>
        <label htmlFor='artist'>Artist:
          <input id='artist'
            name='artist'
            onChange={handleChange}
            value={form.artist} />
        </label>
        <label htmlFor='album'>Album:
          <input id='album'
            name='album'
            onChange={handleChange}
            value={form.album} />
        </label>
        <label htmlFor='year'>Year:
          <input id='year'
            name='year'
            onChange={handleChange}
            value={form.year} />
        </label>
        <label htmlFor='price'>Price:
          <input id='price'
            name='price'
            onChange={handleChange}
            value={form.price} />
        </label>
        <button onClick={e => {
          e.preventDefault()
          handleSubmit(form)
        }}>ADD RECORD</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    records: state.records
  }
}

export default connect(mapStateToProps)(addRecord)