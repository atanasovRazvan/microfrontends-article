import React from "react";
import './styles.css';

const TodoList = ( { todos } ) => {
    return (
        <div>
            <h1> Todo List </h1>
            {todos.map(todo => <div key={todo.id} className="todo"> {todo.name} </div>)}
        </div>
    )
}

export default TodoList;
