import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useState} from 'react'

function Login({ handleCurrentPlayer }) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    function handleUserNameUpdate(value) {
        setUserName(value)
    }

    function handlePasswordUpdate(value) {
        setPassword(value)
    }


    function handleSubmit(e) {
      e.preventDefault()
      let formData ={
        username,
        password,
      }
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(data => {
        handleCurrentPlayer(data)
        history.push("/deckeditor")
      })
    }

  return (
    <>
    <div className="login_parent_container">
        <div>
           <form onSubmit={handleSubmit}>
            <label htmlFor="user_name">Username:</label>
            <input type='text' placeholder="ex: Mokuba14" value={username} onChange={(e) => handleUserNameUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="password">password:</label>
            <input type='password' placeholder="ex: 1234" value={password} onChange={(e) => handlePasswordUpdate(e.target.value)}/>
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