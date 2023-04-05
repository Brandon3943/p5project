import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Game() {
  // const [nullPlayerMonsterFeild, setNullPlayerMonsterFeild] = useState([null, null, null, null, null])
  // const [nullPlayerTrapMagicFeild, setNullPlayerTrapMagicFeild] = useState([null, null, null, null, null])
  // const [nullPlayerGraveYard, setNullPlayerGraveYard] = useState(null)
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

    useEffect(() => {
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician|Gaia%20The%20Fierce%20Knight|Summoned%20Skull|Curse%20of%20Dragon|Celtic%20Guardian|Feral%20Imp|Beaver%20Warrior|Mystical%20Elf|Giant%20Soldier%20of%20Stone|Rude%20Kaiser|Battle%20Steer|Koumori%20Dragon|Horn%20Imp|Griffore|Catapult%20Turtle|Kuriboh|Magician%20of%20Black%20Chaos|Black%20Luster%20Soldier|Pot%20of%20Greed|Graceful%20Charity|Monster%20Reborn|Brain%20Control|Swords%20of%20Revealing%20Light|Black%20Luster%20Ritual|Black%20Magic%20Ritual|Mystic%20Box|Mystical%20Moon|Multiply|Detonate|Monster%20Revovery|Earth%20Shattering%20Arrow|Horn%20of%20the%20Unicorn|Burning%20Land|De-Spell|Block%20Attack|Stop%20Defense|Shift|Spellbinding%20Circle|Magical%20Hats|Mirror%20Force|Blue-Eyes%20White%20Dragon|Swordstalker|Gadget%20soldier|Vorse%20Raider|Battle%20Ox|Saggi%20the%20Dark%20Clown|Kaiser%20Glider|Thunder%20Dragon|Kaiser%20Sea%20Horse|Des%20Feral%20Imp|Blade%20Knight|Lord%20of%20D|Card%20of%20Demise|Cost%20Down|Soul%20Exchange|The%20flute%20of%20Summoning%20Dragon|Enemy%20Controller|Shrink|Ring%20of%20Defense|Final%20Attack%20Order|Cloning|Crush%20Card%20Virus|Virus%20Cannon|Ring%20of%20Destruction|Magical%20Trick%20Mirror|Red-Eyes%20Black%20Dragon|Axe%20Raider|Alligators%27s%20Sword|Masaki%20the%20Legendary%20Swordsman|Baby%20Dragon|Flame%20Manioulator|Battle%20Warrior|Swordsman%20of%20Landstar|Panther%20Warrior|Jinzo|Little-Winguard|Hayabusa%20Knight|Lightning%20Blade|Flame%20Swordsman|Shield%20&%20Sword|Scapegoat|Graceful%20Dice|Energy%20Drain|Gamble|Graverobber|Skull%20Dice")
      .then(r => r.json())
      .then(setPlayerDeck)
    }, [])

    if(playerDeck.data) {
      playerDeck.data.map(img => console.log(img.name))
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
    </div>
  )
}

export default Game