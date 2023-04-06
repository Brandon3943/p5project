import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  function handleDelete() {
    fetch("/logout", {
      method: "DELETE",
    })
  }

  return (
    <div className="nav_bar">
      <h1>Yu-Gi-Oh</h1>
      <Link to="/">Go Home</Link>
      <Link to="/game">Go to Game</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/deckeditor">Deck Editor</Link>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/"><p onClick={handleDelete}>Logout</p></Link>
    </div>
  )
}

export default NavBar