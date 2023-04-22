import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Draggable } from 'react-beautiful-dnd';

function Game() {
  const [playerDeck, setPlayerDeck] = useState([])
  const [playerHand1, setPlayerHand1] = useState(false)
  const [playerHand2, setPlayerHand2] = useState(false)
  const [playerHand3, setPlayerHand3] = useState(false)
  const [playerHand4, setPlayerHand4] = useState(false)
  const [playerHand5, setPlayerHand5] = useState(false)
  const [playerHand6, setPlayerHand6] = useState(false)
  const [playerMonster1, setPlayerMonster1] = useState(false)
  const [playerMonster2, setPlayerMonster2] = useState(false)
  const [playerMonster3, setPlayerMonster3] = useState(false)
  const [playerMonster4, setPlayerMonster4] = useState(false)
  const [playerMonster5, setPlayerMonster5] = useState(false)
  const [currentSelectedCard, setCurrentSelectedCard] = useState(null)
  const canvasRef = useRef()
  let playerDeckLocation = useRef()
  let playerGraveYardLocation = useRef()
  let playerTrapMagicCardLocation1 = useRef()
  let playerTrapMagicCardLocation2 = useRef()
  let playerTrapMagicCardLocation3 = useRef()
  let playerTrapMagicCardLocation4 = useRef()
  let playerTrapMagicCardLocation5 = useRef()
  let playerMonsterLocation1 = useRef()
  let playerMonsterLocation2 = useRef()
  let playerMonsterLocation3 = useRef()
  let playerMonsterLocation4 = useRef()
  let playerMonsterLocation5 = useRef()
  let playerHandLocation1 = useRef()
  let playerHandLocation2 = useRef()
  let playerHandLocation3 = useRef()
  let playerHandLocation4 = useRef()
  let playerHandLocation5 = useRef()
  let playerHandLocation6 = useRef()
  
    useEffect(() => {
      drawBoard()
    }, [])

    useEffect(() => {
      fetch("/current_deck")
      .then(r => r.json())
      .then(data => setPlayerDeck(data))
      .catch(err => console.log(err))
    }, [])    

    function drawBoard() {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      let playerDeckLocation = context.strokeRect(265,110,20,25)
      let playerGraveYardLocation = context.strokeRect(5,110,20,25)
      let playerHandLocation = context.strokeRect(80, 125, 142, 25)
      let playerTrapMagicCardLocation1 = context.strokeRect(60,95,20,25)
      let playerTrapMagicCardLocation2 = context.strokeRect(100,95,20,25)
      let playerTrapMagicCardLocation3 = context.strokeRect(140,95,20,25)
      let playerTrapMagicCardLocation4 = context.strokeRect(180,95,20,25)
      let playerTrapMagicCardLocation5 = context.strokeRect(220,95,20,25)
      let playerTrapMonsterLocation1 = context.strokeRect(60,68,20,25)
      let playerTrapMonsterLocation2 = context.strokeRect(100,68,20,25)
      let playerTrapMonsterLocation3 = context.strokeRect(140,68,20,25)
      let playerTrapMonsterLocation4 = context.strokeRect(180,68,20,25)
      let playerTrapMonsterLocation5 = context.strokeRect(220,68,20,25)
    }

    //this click removes cards from the deck and add them to the player hand
    function handleClick() {
      let index = Math.floor(Math.random() * playerDeck.length)      

      if(!playerHand1) {
          setPlayerHand1(playerDeck[index])
          setPlayerDeck(playerDeck.filter(card => playerDeck[index].id !== card.id))
      } else if (!playerHand2) {
          setPlayerHand2(playerDeck[index])
          setPlayerDeck(playerDeck.filter(card => playerDeck[index].id !== card.id))
      } else if (!playerHand3) {
          setPlayerHand3(playerDeck[index])
          setPlayerDeck(playerDeck.filter(card => playerDeck[index].id !== card.id))
      } else if (!playerHand4) {
          setPlayerHand4(playerDeck[index])
          setPlayerDeck(playerDeck.filter(card => playerDeck[index].id !== card.id))
      } else if (!playerHand5) {
          setPlayerHand5(playerDeck[index])
          setPlayerDeck(playerDeck.filter(card => playerDeck[index].id !== card.id))
      } else if (!playerHand6) {
          setPlayerHand6(playerDeck[index])
          setPlayerDeck(playerDeck.filter(card => playerDeck[index].id !== card.id))
      }  
    }

    //handle endless re render of drag
    function handleDragOver(e) {
      e.preventDefault()
    } 



    
    //broken logic
    function handleOnDrag(value) {
      setCurrentSelectedCard(value)
      handleOnDrop()
      console.log(currentSelectedCard)
    } 

    //broken logic
    function handleOnDrop(e) {
      //console.log(e.pageX, e.pageY)
      console.log(currentSelectedCard)

     if(currentSelectedCard && e) {
      console.log(currentSelectedCard.card_type)
      if((e.pageX > 600 && e.pageX < 695) && (currentSelectedCard.card_type !== "Spell Card" || "Trap Card")) {
        setPlayerMonster1(currentSelectedCard)
        setPlayerHand1(false)
      } else if ((e.pageX > 775 && e.pageX < 855) && (currentSelectedCard.card_type !== "Spell Card" || "Trap Card")) {
        setPlayerMonster2(currentSelectedCard)
        setPlayerHand2(false)
       } else if ((e.pageX > 950 && e.pageX < 1030) && (currentSelectedCard.card_type !== "Spell Card" || "Trap Card")) {
        setPlayerMonster3(currentSelectedCard)
        setPlayerHand3(false)
       } else if ((e.pageX > 1120 && e.pageX < 1200) && (currentSelectedCard.card_type !== "Spell Card" || "Trap Card")) {
         setPlayerMonster4(currentSelectedCard)
         setPlayerHand4(false)
       } else if ((e.pageX > 1300 && e.pageX < 1380) && (currentSelectedCard.card_type !== "Spell Card" || "Trap Card")) {
         setPlayerMonster5(currentSelectedCard)
         setPlayerHand5(false)
       } else {
        alert("error")
       } 
      }  
    }

    

  
    


    
    
  

  return (
    <div>
      <canvas ref={canvasRef} />
      <div className="player_parent_container">
        <div ref={playerDeckLocation} className="player_deck_location" onClick={() => handleClick()}></div>
        <div ref={playerGraveYardLocation} className="player_graveyard_location" ></div>
        <div ref={playerTrapMagicCardLocation1} className="player_trap_magic_location1" ></div>
        <div ref={playerTrapMagicCardLocation2} className="player_trap_magic_location2" ></div>
        <div ref={playerTrapMagicCardLocation3} className="player_trap_magic_location3" ></div>
        <div ref={playerTrapMagicCardLocation4} className="player_trap_magic_location4" ></div>
        <div ref={playerTrapMagicCardLocation5} className="player_trap_magic_location5" ></div>


        
        <div ref={playerMonsterLocation1} className="player_monster_location1" onDrop={(e) => handleOnDrop(e)} onDragOver={handleDragOver}>{playerMonster1 ? <img src={playerMonster1.image_url} alt="card" style={{width: "95px"}} /> : null}</div>

        <div ref={playerMonsterLocation2} className="player_monster_location2" onDrop={(e) => handleOnDrop(e)} onDragOver={handleDragOver}>{playerMonster2 ? <img src={playerMonster2.image_url} alt="card" style={{width: "95px"}} /> : null}</div>

        <div ref={playerMonsterLocation3} className="player_monster_location3" onDrop={(e) => handleOnDrop(e)} onDragOver={handleDragOver}>{playerMonster3 ? <img src={playerMonster3.image_url} alt="card" style={{width: "95px"}} /> : null}</div>

        <div ref={playerMonsterLocation4} className="player_monster_location4" onDrop={(e) => handleOnDrop(e)} onDragOver={handleDragOver}>{playerMonster4 ? <img src={playerMonster4.image_url} alt="card" style={{width: "95px"}} /> : null}</div>

        <div ref={playerMonsterLocation5} className="player_monster_location5" onDrop={(e) => handleOnDrop(e)} onDragOver={handleDragOver}>{playerMonster5 ? <img src={playerMonster5.image_url} alt="card" style={{width: "95px"}} /> : null}</div>


        
        <div ref={playerHandLocation1} className="player_hand_location1" >
          {playerHand1 ? <img src={playerHand1.image_url} alt="card" style={{width: "95px"}} draggable onDragStart={() => handleOnDrag(playerHand1)} /> : null}
        </div>
        <div ref={playerHandLocation2} className="player_hand_location2" >
          {playerHand2 ? <img src={playerHand2.image_url} alt="card" style={{width: "95px"}} draggable onDragStart={() => handleOnDrag(playerHand2)} /> : null}
        </div>
        <div ref={playerHandLocation3} className="player_hand_location3" >
          {playerHand3 ? <img src={playerHand3.image_url} alt="card" style={{width: "95px"}} draggable onDragStart={() => handleOnDrag(playerHand3)} /> : null}
        </div>
        <div ref={playerHandLocation4} className="player_hand_location4" >
          {playerHand4 ? <img src={playerHand4.image_url} alt="card" style={{width: "95px"}} draggable onDragStart={() => handleOnDrag(playerHand4)} /> : null}
        </div>
        <div ref={playerHandLocation5} className="player_hand_location5" >
          {playerHand5 ? <img src={playerHand5.image_url} alt="card" style={{width: "95px"}} draggable onDragStart={() => handleOnDrag(playerHand5)} /> : null}
        </div>
        <div ref={playerHandLocation6} className="player_hand_location6" >
          {playerHand6 ? <img src={playerHand6.image_url} alt="card" style={{width: "95px"}} draggable onDragStart={() => handleOnDrag(playerHand6)} /> : null}
        </div>
    
      </div>
      {/* <img src="../src/assets/YamiYugi-DULI.webp" alt="Yami Yugi" /> */}
    </div>
  )
}

export default Game