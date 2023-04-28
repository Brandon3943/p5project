import { Switch, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/SIgnup";
import DeckEditor from "./components/DeckEditor";
import PlayerEditor from "./components/PlayerEditor";
import { useState, useEffect } from "react";

function App() {
  const [player, setPlayer] = useState({});
  const [currentDeck, setCurrentDeck] = useState([]) 

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        return r.json().then(setPlayer);
      } else {
        return r.json().then(console.log);
      }
    });
  }, []);

  function handleCurrentPlayer(value) {
    setPlayer(value)
  }

  //handles adding and removing card in the deck editor. add/removes from front and backend
  function handleAddCardToPlayerDeck(data) {
    setCurrentDeck(prev => [data, ...prev])
  }

  function handleDelete(id) {
    setCurrentDeck(currentDeck.filter(card => id !== card.id))
  }


  return (
    <div className="App">
      <NavBar player={player} handleCurrentPlayer={handleCurrentPlayer} />

      <Switch>
        <Route exact path="/login">
          <Login handleCurrentPlayer={handleCurrentPlayer} />
        </Route>

        <Route exact path="/signup">
          <Signup handleCurrentPlayer={handleCurrentPlayer} />
        </Route>

        <Route exact path="/playereditor">
          <PlayerEditor player={player} />
        </Route>

        <Route exact path="/deckeditor">
          <DeckEditor player={player} handleAddCardToPlayerDeck={handleAddCardToPlayerDeck} handleDelete={handleDelete} setCurrentDeck={setCurrentDeck} currentDeck={currentDeck} />
        </Route>

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
