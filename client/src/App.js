import { Switch, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/SIgnup";
import DeckEditor from "./components/DeckEditor";
import { useState, useEffect } from "react";

function App() {
  const [player, setPlayer] = useState({});
  const [playerDeck, setPlayerDeck] = useState([])

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

  function handleAddCardToPlayerDeck(playerDeck, data) {
    let formData ={
      player_id: player.id,
      card_id: data.id
    }
    fetch("/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(r => r.json())
      .then(console.log)

    setPlayerDeck([...playerDeck, data])
  }

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/login">
          <Login handleCurrentPlayer={handleCurrentPlayer} />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/deckeditor">
          <DeckEditor player={player} setPlayerDeck={setPlayerDeck} playerDeck={playerDeck} handleAddCardToPlayerDeck={handleAddCardToPlayerDeck} />
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
