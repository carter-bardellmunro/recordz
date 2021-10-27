import React from "react";
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div>
      <Link to="records"><h1>Records</h1></Link>
      <Link to="add"><h1>Add New Record</h1></Link>
    </div>
  )

}

export default Header