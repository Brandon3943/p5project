import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function NavBar({ player, handleCurrentPlayer }) {
  const history = useHistory()

  function handleDelete() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      handleCurrentPlayer({})
      history.push("/")
    })}


  return (
    <div className="nav_bar">
      <h1>yugiohbfb.</h1>
      {!player.id ? <div>
      <Link to="/"><button>Go Home</button></Link>
      <br></br>
      <Link to="/login"><button>Login</button></Link>
      <br></br>
      <Link to="/signup">Sign up</Link>
      </div> : 
      <div>
      <Link to="/game"><button>New Game</button></Link>
      <br></br>
      <Link to="/deckeditor"><button>Deck Editor</button></Link>
      <br></br>
      <Link to="/playereditor"><button>Player Editor</button></Link>
      <Link to="/"><h2 onClick={handleDelete}>Logout</h2></Link>
      </div> }
      
    
    </div>
  )
}

export default NavBar