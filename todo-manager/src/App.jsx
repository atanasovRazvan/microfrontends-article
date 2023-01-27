import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoManager from "./components/todo-manager/todo-manager";

const App = () => (
  <div className="container">
    <TodoManager
        todos={[
            {
                id: 1,
                name: "Todo #1",
            },
            {
                id: 2,
                name: "Todo #1",
            },
            {
                id: 3,
                name: "Todo #1",
            }
        ]}
        // Some function that updates the todos.
        updateTodos={() => {}}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
