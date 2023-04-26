import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import _ from 'lodash';
import {v4} from 'uuid';

function Game() {
  const playerDeck = useRef()
  const playerGraveYard = useRef()
  const [playerFullDeck, setPlayerFullDeck] = useState([])
  const [state, setState] = useState({
    "playerHand": {
      title: "Player_Hand",
      items: []
    },
    "trapMagicField": {
      title: "TM_Cards",
      items: []
    },
    "monsterField": {
      title: "Monster_Cards",
      items: []
    }
   })

   useEffect(() => {
    fetch("/current_deck")
    .then(r => r.json())
    .then(data => setPlayerFullDeck(data))
    .catch(err => console.log(err))
  }, [])

    function handleClick() {
      let index = Math.floor(Math.random() * playerFullDeck.length)
      setPlayerFullDeck(playerFullDeck.filter(card => playerFullDeck[index].id !== card.id))
      setState(prev => ({...prev, playerHand: {
        title: "Player_Hand",
        items: [...prev.playerHand.items, playerFullDeck[index]]
      }}))
    }

  


   //drag and drop functionality
   function handeDragEnd(destination) {  
    console.log(destination.destination.droppableId) 
    const itemCopy = {...state[destination.source.droppableId].items[destination.source.index]}
    console.log(itemCopy)
    // setState(prev => {
    //   prev = {...prev}
    //   prev[destination.source.droppableId].items.splice(destination.source.index, 1)

    //   prev[destination.destination.droppableId].items.splice(destination.destination.index, 0, itemCopy)
    //   return prev;
    // })  
    
    if(destination.destination.droppableId === 'monsterField' && (itemCopy.card_type !== 'Spell Card' && 'Trap Card')) {      
      setState(prev => {
        prev = {...prev}
        prev[destination.source.droppableId].items.splice(destination.source.index, 1)
  
        prev[destination.destination.droppableId].items.splice(destination.destination.index, 0, itemCopy)
        return prev;
      })  
    }

    if(destination.destination.droppableId === 'trapMagicField' && (itemCopy.card_type === 'Spell Card' && 'Trap Card')) {      
      setState(prev => {
        prev = {...prev}
        prev[destination.source.droppableId].items.splice(destination.source.index, 1)
  
        prev[destination.destination.droppableId].items.splice(destination.destination.index, 0, itemCopy)
        return prev;
      })  
    }

     if(!destination.destination) {
      console.log("not in a droppable area")
      return
     }

     if(destination.destination.index === destination.source.index && destination.destination.droppableId === destination.source.droppableId) {
      console.log("dropped in same place")
      return
     }
   }

  
  
   return (
    <div className="AppGame">
     <DragDropContext onDragEnd={handeDragEnd}>
      {_.map(state, (data, key) => {
        return (
          <div className={`${data.title} row`}>
            <span>{data.title}</span>
            <Droppable droppableId={key}>
              {(provided) => {
               return(
                <div ref={provided.innerRef} {...provided.droppableProps} className="droppable-row">
                  {data.items.map((elem, index) => {
                    return (
                     <Draggable key={elem.id} index={index} draggableId={elem.id.toString()}>
                      {(provided) => {
                        return (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <img src={elem.image_url} alt="yugioh card" style={{width: "90px"}} />
                          </div>
                        )
                      }}
                     </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
               )
              }}
            </Droppable>
          </div>          
        )
      })}
     </DragDropContext>
     <div ref={playerDeck} className="player_deck_location" onClick={() => handleClick()}></div>
     <div ref={playerGraveYard} className="player_graveyard_location" ></div>
    </div>
   )
  }
  
  export default Game