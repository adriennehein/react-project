// class component example

import React from 'react';

class Todolist extends React.Component  {
    render()  {
        return(
            <ul>
                {this.props.todos.map( todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        )
    }
}


export default Todolist;