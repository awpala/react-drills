import React from 'react';
import Todo from './Todo';

function List(props) {
    let list = props.items.map((item, index) => {
        return (<Todo key={index} item={item} />);
    });

    return (<div>{list}</div>);
}

export default List;