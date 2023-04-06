
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Game from './components/Game';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() { 

  return (
    
    <div className="App">
       
          <NavBar />
          
      <Switch>

      <Route exact path="/login">
          <Login />
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
