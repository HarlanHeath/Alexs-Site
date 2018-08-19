import React, { Component } from "react";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        I'm Alex's site!
      </div>
    );
  }
}

export default App;
