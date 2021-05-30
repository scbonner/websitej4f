
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

import './App.css';

function App() {
  return (
    <div className="app">
    <Navbar />
   
    <Jumbotron />
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
    </div>
  );
}

export default App;
