import React from 'react';
import logo from './logo.png';
import './App.css';
import UsageBoard from './UsageBoard';
import RealtimeUsageChart from './RealtimeUsageChart';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>EnerTalk Future Card</h2>
      </div>

      {/* TODO: @yongdamsh To view multiple components, apply react-router */}
      <p className="App-intro">Daily Column Chart</p>
      <UsageBoard />

      <RealtimeUsageChart />
    </div>
  );
}

export default App;
