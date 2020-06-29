import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://swapi.dev/api/people/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name)

        this.setState({
          loading: false,
          data: data
        })
      });
  }

  render() {
    // const name = this.state.data.map((n) => <li>{n}</li>);

    return (
      <div>
        {!this.state.loading ? this.state.data.name : "Loading..."}
      </div>
    );
  }
}
export default App;
