import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoList from "todo_list/TodoList";
import TodoManager from "todo_manager/TodoManager";

const App = () => {
    const [todos, setTodos] = useState([]);

    function handleUpdate (newTodos) {
        setTodos(newTodos);
    }

    return (
        <div className="container">
            <h1>Host Application</h1>
            <div className="wrapper">
                <TodoList todos={todos} />
                <div className="horizontal-line" />
                <TodoManager todos={todos} updateTodos={handleUpdate} />
            </div>
        </div>
    )
};
ReactDOM.render(<App />, document.getElementById("app"));
