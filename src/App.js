import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Test extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/test', {
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method:'post',
      body: JSON.stringify({comment:"Finally, we got it!!!!" })
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>Send Post require</button>
        </form>
      </div>
    );
  }
}

  
class App extends Component {
  render() {
    return (
      <Test />
    );
  }
}

export default App;
