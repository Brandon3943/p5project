import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav_bar">
      <h1>Yu-Gi-Oh</h1>
      <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test  test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
      <Link to="/">Go Home</Link>
      <Link to="/game">Go to Game</Link>
    </div>
  )
}

export default NavBar