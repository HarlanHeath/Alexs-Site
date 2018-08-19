import React, { Component } from "react";
import Nav from "./Component/Nav/Nav";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
