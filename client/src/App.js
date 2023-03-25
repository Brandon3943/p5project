
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <div className="App">
      <h1>whats up new project</h1>
      <Link to="/navbar">Link to Nav</Link>
      <Link to="/home">Go home</Link>
      

      <Switch>

        <Route path="/navbar">
          <NavBar />
        </Route>

        <Route path="/home">
          <Home />
        </Route>


      </Switch>
    </div>

    
  );
}

export default App;
