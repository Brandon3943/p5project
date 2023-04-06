import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Signup() {
    const [name, setName] = useState("")
    const [lifePoints, setLifePoints] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e) {
      e.preventDefault()
      if (password === passwordConfirmation) {
      let formData = {
        name: name,
        life_points: lifePoints,
        image_url: imageUrl,
        catch_phares: catchPhrase,
        username: userName,
        password: password,
      }
      fetch("http://localhost:3000/players", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(console.log)
     } else {
        alert("Passwords Do Not Match, try again (:")
     }
    }

    function handleNameUpdate(value) {
        setName(value)
    }
    function handleLifePointUpdate(value) {
        setLifePoints(value)
    }

    function handleImageUpdate(value) {
        setImageUrl(value)
    }

    function handleCatchPhraseUpdate(value) {
        setCatchPhrase(value)
    }

    function handleUserNameUpdate(value) {
        setUserName(value)
    }

    function handlePasswordUpdate(value) {
        setPassword(value)
    }
    
    function handlePasswordConfirmationUpdate(value) {
        setPasswordConfirmation(value)
    }
  

  return (
    <>
    <div className="signup_parent_container">
        <div>
           <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type='text' placeholder="ex: Mokuba" value={name} onChange={(e) => handleNameUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="life_points">Life Points:</label>
            <input type='text' placeholder="ex: 4000" value={lifePoints} onChange={(e) => handleLifePointUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="image_url">Image URL:</label>
            <input type='text' placeholder="ex: http://url.com" value={imageUrl} onChange={(e) => handleImageUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="catch_phrase">Catch Phrase:</label>
            <input type='text' placeholder="ex: Beileve in the Heart of the Cards" value={catchPhrase} onChange={(e) => handleCatchPhraseUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="user_name">Username:</label>
            <input type='text' placeholder="ex: Mokuba14" value={userName} onChange={(e) => handleUserNameUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="password">password:</label>
            <input type='password' placeholder="ex: 1234" value={password} onChange={(e) => handlePasswordUpdate(e.target.value)}/>
            <br></br>
            <label htmlFor="password_confirmation">password confirmation:</label>
            <input type='password' placeholder="ex: 1234" value={passwordConfirmation} onChange={(e) => handlePasswordConfirmationUpdate(e.target.value)}/>
            <br></br>
            <button type="submit">Login</button>
           </form>
        </div>
        <h4>Already have an account?</h4>
        <Link to="/login">Login here</Link>
    </div>
    
    </>
  )
}

export default Signup