import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function PlayerEditor({ player }) {
    const [name, setName] = useState("")
    const [lifePoints, setLifePoints] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [userName, setUserName] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
      e.preventDefault()
      let formData = {
        name: name,
        life_points: lifePoints,
        image_url: imageUrl,
        catch_phares: catchPhrase,
        username: userName
      }
      console.log(formData)
      fetch(`http://localhost:3000/players/${player.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        history.push("/deckeditor")
      })
    }

    function handleDelete() {
     fetch(`http://localhost:3000/players/${player.id}`, {method: "DELETE"})
       .then(console.log("deleted"))
       history.push("/")      
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


  return (
    <>
    <div className="edit_parent_container">
        <img src={player.image_url} style={{width: "130px", borderRadius: "50%"}} alt="player" />
        <h1>{player.name}</h1>
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
            <button type="submit">Update Player Info</button>
            <br></br>
            <br></br>
            <br></br>
           </form>
        </div>
        <h2 style={{color: "red"}} onClick={handleDelete}>DELETE ACCOUNT</h2>
        <Link to="/deckeditor">Exit Without Save</Link>
    </div>
    
    </>
  )
}

export default PlayerEditor