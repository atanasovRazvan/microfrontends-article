import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoList from "../../todo-list/src/components/todo-list/todo-list";
import TodoManager from "../../todo-manager/src/components/todo-manager/todo-manager";

const App = () => {
    const [todos, setTodos] = useState([]);

    function handleUpdate (newTodos) {
        setTodos(newTodos);
    }

    return (
        <div className="container">
            <TodoList todos={todos} />
            <TodoManager todos={todos} updateTodos={handleUpdate} />
        </div>
    )
};
ReactDOM.render(<App />, document.getElementById("app"));
