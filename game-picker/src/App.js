import React, { Component } from 'react';
import './App.css';
import GameListView from './views/GameListView';
import PlayoffBracketView from './views/PlayoffBracketView';

class App extends Component {
  render() {
    return (
      <>
        <PlayoffBracketView />
        <GameListView />
      </>
    );
  }
}

export default App;
