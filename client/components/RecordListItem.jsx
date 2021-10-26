import React from 'react'

function RecordListItem(props) {
  const record = props.record

  return (
    <div>
      <h3>${record.price}</h3>
      <h4>{record.album}</h4>
      <p>{record.artist}</p>
      <p>{record.year}</p>
      <button>ADD TO CART</button>
    </div>
  )
}

export default RecordListItem