import React, { Component } from 'react';
import './App.css';
import SearchContainer from "./components/Search/SearchContainer";

class App extends Component {
  render() {
    return (
      <main className="container">
        <SearchContainer />
      </main>
    );
  }
}

export default App;
