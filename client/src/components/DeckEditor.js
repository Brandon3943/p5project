import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../cards/Card'

function DeckEditor({ player, setPlayerDeck, playerDeck, handleAddCardToPlayerDeck}) {
    const [deck, setDeck] = useState([])

    useEffect(() => {
        fetch("/cards")
        .then(r => r.json())
        .then(data => setDeck(data))
    }, [])

    let renderCards;

    if(deck) {
      renderCards = deck.map(card => {
          return <Card key={card.id} img={card.image_url} data={card} player={player} setPlayerDeck={setPlayerDeck} playerDeck={playerDeck} handleAddCardToPlayerDeck={handleAddCardToPlayerDeck}/>
      })
    }    


  return (
    <div className="deck_editor_parent_container">
        <div className="current_player_info">
          <img src={player.image_url} alt="player" />
          <p>{player.name}</p>
        </div>  
        <div className="deck_editor_card_container">
            {renderCards}
        </div>      
    </div>
  )
}

export default DeckEditor