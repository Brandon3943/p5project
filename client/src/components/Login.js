import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function handleUserNameUpdate(value) {
        setUserName(value)
    }

    function handlePasswordUpdate(value) {
        setPassword(value)
    }

  return (
    <>
    <div className="login_parent_container">
        <div>
           <form>
            <label htmlFor="user_name">Username:</label>
            <input type='text' placeholder="ex: Mokuba14" value={userName} onChange={(e) => handleUserNameUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="password">password:</label>
            <input type='password' placeholder="ex: Mokuba14" value={password} onChange={(e) => handlePasswordUpdate(e.target.value)}/>
            <br></br>
            <button type="submit">Login</button>
           </form>
        </div>
        <h4>No Account?</h4>
        <Link to="/signup">Create a new account here</Link>
    </div>
    
    </>
  )
}

export default Login