import React from 'react'
import { useState } from 'react'

function Card({ img, data, player, handleAddCardToPlayerDeck, handleDelete}) {

  function handleAdd() {
    let formData ={
      player_id: player.id,
      card_id: data.id
    }
    fetch("/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(r => r.json())
      .then(() => handleAddCardToPlayerDeck(data))
  }

  function handleRemoveCardFromPlayerDeck(id) {
    console.log(player)
    fetch(`players/${player.id}/decks/${id}`, {method: "DELETE"})
    .then(() => handleDelete(id))
  }
  
    
  return (
    <div className="card_container">
     <img src={img} style={{width: "180px"}} className="cards" alt="yugioh_card" />
     <br></br>
     <button onClick={handleAdd}>Add</button>
     <button onClick={() => handleRemoveCardFromPlayerDeck(data.id)}>Remove</button>
    </div>
  )
}

export default Card