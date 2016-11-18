import React from 'react';
import logo from './logo.png';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>EnerTalk Future Card</h2>
      </div>
      {/* TODO: @yongdamsh To view multiple components, apply react-router */}
      <Todo />
    </div>
  );
}

export default App;
