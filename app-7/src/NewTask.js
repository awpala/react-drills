import React, { Component } from 'react';

class NewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: ""
        };

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleItemChange(entry) {
        this.setState({ item: entry });
    }

    handleAddItem() {
        this.props.add(this.state.item);
        this.setState({ item: "" });
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    placeholder="Enter new task"
                    onChange={e => this.handleItemChange(e.target.value)}
                />

                <button onClick={this.handleAddItem}>Add</button>
            </div>
        )
    }
}

export default NewTask;