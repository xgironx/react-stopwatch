import React, { Component } from 'react';
import Stopwatch from "./Stopwatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <div> <Stopwatch </div>
      <h3>  {this.props.pStatus} </h3>
      <h3>  {this.props.pNeedReset} </h3>
      <h3>  {this.props.pPeanutGallery[0]} </h3>
    );
  }
}

export default App;
