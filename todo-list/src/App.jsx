import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoList from "./components/todo-list/todo-list";

const App = () => (
  <div >
      <TodoList todos={[
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
      ]}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
