
import React from 'react';
import Logo from './Logo'
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'
import Card from './Card';
import Trainings from './Trainings'
import Jeannette from './Jeannette'
//import CardFlip from './CardFlip'
//import GraceB from './GraceB'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom';

import './App.css';

function App() {
  return (


    <div className="app">
  {/* return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
} */}



<Router>
  
   {/* //<Jumbotron />  */}
    <Navbar />
    <Logo />
    <Card />
    <Jeannette />
    {/* <GraceB /> */}
    <Trainings />
    {/* <CardFlip /> */}
    {/* <Accordion /> */}
    <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </Router>
    </div>
  
  );
}

export default App;
