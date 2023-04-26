import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import _ from 'lodash';
import {v4} from 'uuid';


const item = {
  id: v4(),
  name: "Blue-Eyes White Dragon"
}

const item2 = {
  id: v4(),
  name: "Monster Reborn"
}

const item3 = {
  id: v4(),
  name: "Dark Magician"
}


function Game() {
  const playerDeck = useRef()
  const playerGraveYard = useRef()
  const [state, setState] = useState({
    "playerHand": {
      title: "Player_Hand",
      items: [item]
    },
    "trapMagicField": {
      title: "TM_Cards",
      items: [item2]
    },
    "monsterField": {
      title: "Monster_Cards",
      items: [item3]
    }
   })

   function handeDragEnd(destination) {    
    const itemCopy = {...state[destination.source.droppableId].items[destination.source.index]}
    setState(prev => {
      prev = {...prev}
      prev[destination.source.droppableId].items.splice(destination.source.index, 1)

      prev[destination.destination.droppableId].items.splice(destination.destination.index, 0, itemCopy)
      return prev;
    })    

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
            <h3>{data.title}</h3>
            <Droppable droppableId={key}>
              {(provided) => {
               return(
                <div ref={provided.innerRef} {...provided.droppableProps} className="droppable-row">
                  {data.items.map((elem, index) => {
                    return (
                     <Draggable key={elem.id} index={index} draggableId={elem.id}>
                      {(provided) => {
                        return (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {elem.name}
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
     <div ref={playerDeck} className="player_deck_location"></div>
     <div ref={playerGraveYard} className="player_graveyard_location" ></div>
    </div>
   )
  }
  
  export default Game