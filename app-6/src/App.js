import React, { Component } from 'react';
import './App.css';

import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      item: ""
    };

    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleItemChange(entry) {
    this.setState({ item: entry });
  }

  handleAddItem() {
    this.setState({
      list: [...this.state.list, this.state.item],
      item: ""
    });
  }

  render() {
    let list = this.state.list.map((item, index) => {
      return (<Todo key={index} item={item} />);
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.item}
            placeholder="Enter new item"
            onChange={e => this.handleItemChange(e.target.value)}
          />
        </div>

        <button onClick={this.handleAddItem}>Add</button>
        
        <br />

        {list}
      </div>
    );
  }
}

export default App;
