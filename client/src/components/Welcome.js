import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="welcome_container">
       <div className="welcome_logo">
        <img src="https://www.dlf.pt/dfpng/middlepng/255-2550524_yugioh-logo-png-logo-yu-gi-oh-png.png" alt="yugioh logo" />
       </div>
       <br></br>
       <div className="login_logout_buttons">
       <Link to="/login"><button>Login</button></Link>
        <br></br>
        <Link to="/signup">Create a new account here</Link>
       </div>
    </div>
  )
}

export default Welcome