import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import DailyColumnChart from './DailyColumnChart';
import RealtimeUsageChart from './RealtimeUsageChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>EnerTalk Future Card</h2>
        </div>

        {/* TODO: @yongdamsh To view multiple components, apply react-router */}
        <p className="App-intro">Daily Column Chart</p>
        <DailyColumnChart />

        <RealtimeUsageChart />
      </div>
    );
  }
}

export default App;
