import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => {
        const names = data.results.map((n) => n.name);
        this.setState({ data: names });
      });
  }

  render() {
    const name = this.state.data.map((n) => <li>{n}</li>);

    return (
      <div>
        <ul>{name}</ul>
      </div>
    );
  }
}
export default App;
