import React from 'react'
import { useState } from 'react'

function Card({ img, data, handleAddCardToPlayerDeck, handleRemoveCardFromPlayerDeck}) {

  
    
  return (
    <div className="card_container">
     <img src={img} style={{width: "180px"}} className="cards" alt="yugioh_card" />
     <br></br>
     <button onClick={() => handleAddCardToPlayerDeck(data)}>Add</button>
     <button onClick={() => handleRemoveCardFromPlayerDeck(data.id)}>Remove</button>
    </div>
  )
}

export default Card