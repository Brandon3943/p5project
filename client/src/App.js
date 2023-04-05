
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Game from './components/Game';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';

function App() {

  //yugi deck
//https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician|Gaia%20The%20Fierce%20Knight|Summoned%20Skull|Curse%20of%20Dragon|Celtic%20Guardian|Feral%20Imp|Beaver%20Warrior|Mystical%20Elf|Giant%20Soldier%20of%20Stone|Rude%20Kaiser|Battle%20Steer|Koumori%20Dragon|Horn%20Imp|Griffore|Catapult%20Turtle|Kuriboh|Magician%20of%20Black%20Chaos|Black%20Luster%20Soldier|Pot%20of%20Greed|Graceful%20Charity|Monster%20Reborn|Brain%20Control|Swords%20of%20Revealing%20Light|Black%20Luster%20Ritual|Black%20Magic%20Ritual|Mystic%20Box|Mystical%20Moon|Multiply|Detonate|Monster%20Revovery|Earth%20Shattering%20Arrow|Horn%20of%20the%20Unicorn|Burning%20Land|De-Spell|Block%20Attack|Stop%20Defense|Shift|Spellbinding%20Circle|Magical%20Hats|Mirror%20Force|Blue-Eyes%20White%20Dragon|Swordstalker|Gadget%20soldier|Vorse%20Raider|Battle%20Ox|Saggi%20the%20Dark%20Clown|Kaiser%20Glider|Thunder%20Dragon|Kaiser%20Sea%20Horse|Des%20Feral%20Imp|Blade%20Knight|Lord%20of%20D|Card%20of%20Demise|Cost%20Down|Soul%20Exchange|The%20flute%20of%20Summoning%20Dragon|Enemy%20Controller|Shrink|Ring%20of%20Defense|Final%20Attack%20Order|Cloning|Crush%20Card%20Virus|Virus%20Cannon|Ring%20of%20Destruction|Magical%20Trick%20Mirror|Red-Eyes%20Black%20Dragon|Axe%20Raider|Alligators%27s%20Sword|Masaki%20the%20Legendary%20Swordsman|Baby%20Dragon|Flame%20Manioulator|Battle%20Warrior|Swordsman%20of%20Landstar|Panther%20Warrior|Jinzo|Little-Winguard|Hayabusa%20Knight|Lightning%20Blade|Flame%20Swordsman|Shield%20&%20Sword|Scapegoat|Graceful%20Dice|Energy%20Drain|Gamble|Graverobber|Skull%20Dice


  return (
    
    <div className="App">
       
          <NavBar />
          
      <Switch>

        <Route exact path="/game">
          <Game />
        </Route>

        <Route path="/">
          <Welcome />
        </Route>


      </Switch>
    </div>

    
  );
}

export default App;
