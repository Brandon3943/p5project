import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Game() {
  const [playerDeck, setPlayerDeck] = useState([])
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
  
    useEffect(() => {
      drawBoard()
    }, [])

    useEffect(() => {
      fetch("http://localhost:3000/current_deck")
      .then(r => r.json())
      .then(data => setPlayerDeck(data))
    }, [])
    

    function drawBoard() {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      let playerDeckLocation = context.strokeRect(265,110,20,25)
      let playerGraveYardLocation = context.strokeRect(5,110,20,25)
      let playerHandLocation = context.strokeRect(80, 125, 150, 25)
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


    function handleClick(value) {
      console.log(value)
    }

    
    
  

  return (
    <div>
      <canvas ref={canvasRef} />
      <div className="player_parent_container">
        <div ref={playerDeckLocation} className="player_deck_location" onClick={() => handleClick("deck")}></div>
        <div ref={playerGraveYardLocation} className="player_graveyard_location" onClick={() => handleClick("graveyard")}></div>
        <div ref={playerTrapMagicCardLocation1} className="player_trap_magic_location1" onClick={() => handleClick("TM1")}></div>
        <div ref={playerTrapMagicCardLocation2} className="player_trap_magic_location2" onClick={() => handleClick("TM2")}></div>
        <div ref={playerTrapMagicCardLocation3} className="player_trap_magic_location3" onClick={() => handleClick("TM3")}></div>
        <div ref={playerTrapMagicCardLocation4} className="player_trap_magic_location4" onClick={() => handleClick("TM4")}></div>
        <div ref={playerTrapMagicCardLocation5} className="player_trap_magic_location5" onClick={() => handleClick("TM5")}></div>
        <div ref={playerMonsterLocation1} className="player_monster_location1" onClick={() => handleClick("Monster1")}></div>
        <div ref={playerMonsterLocation2} className="player_monster_location2" onClick={() => handleClick("Monster2")}></div>
        <div ref={playerMonsterLocation3} className="player_monster_location3" onClick={() => handleClick("Monster3")}></div>
        <div ref={playerMonsterLocation4} className="player_monster_location4" onClick={() => handleClick("Monster4")}></div>
        <div ref={playerMonsterLocation5} className="player_monster_location5" onClick={() => handleClick("Monster5")}></div>
      </div>
      {/* <img src="../src/assets/YamiYugi-DULI.webp" alt="Yami Yugi" /> */}
    </div>
  )
}

export default Game