import React, { Component } from 'react';
import './App.css';

import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(item) {
    this.setState({ list: [...this.state.list, item] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddItem} />
        <List items={this.state.list} />
      </div>
    );
  }
}

export default App;
