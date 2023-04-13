import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../cards/Card'
import CurrentDeck from '../cards/CurrentDeck'

function DeckEditor({ player, setPlayerDeck, playerDeck, handleAddCardToPlayerDeck, handleRemoveCardFromPlayerDeck, setCurrentDeck, currentDeck}) {
    const [deck, setDeck] = useState([])

    useEffect(() => {
        fetch("/cards")
        .then(r => r.json())
        .then(data => setDeck(data))
    }, [])

    useEffect(() => {
      fetch(`/players/${player.id}`)
        .then(r => r.json())
        .then(data => setCurrentDeck(data.cards))
    }, [])

    //update frontend and state the rerender after cards added and deleted


    // Loads players current deck on the deck editor page
    let renderCurrentDeck;

    if(currentDeck) {
      renderCurrentDeck = currentDeck.map(card => {
        return <CurrentDeck key={card.id} img={card.image_url} />
      })
    }


    //Loads all card on the deck editor page
    let renderCards;

    if(deck) {
      renderCards = deck.map(card => {
          return <Card key={card.id} img={card.image_url} data={card} player={player} setPlayerDeck={setPlayerDeck} playerDeck={playerDeck} handleAddCardToPlayerDeck={handleAddCardToPlayerDeck} handleRemoveCardFromPlayerDeck={handleRemoveCardFromPlayerDeck} />
      })
    }    


  return (
    <div className="deck_editor_parent_container">
        <div className="current_player_info">
          <img src={player.image_url} alt="player" />
          <h2>{player.name}</h2>
          <h4>Current Deck</h4>
        </div>
        <div className="current_player_deck_container">
          {renderCurrentDeck}
        </div>  
        <div className="deck_editor_card_container">
            {renderCards}
        </div>      
    </div>
  )
}

export default DeckEditor