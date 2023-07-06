import React from "react";
import ReactDOM from "react-dom/client";

const Todo = (props) => {
  return React.createElement("li", {}, props.name);
};

const TodoList = () => {
  return React.createElement("ul", {}, [
    React.createElement(Todo, { name: "Go for a jog" }),
    React.createElement(Todo, { name: "Learn React" }),
    React.createElement(Todo, { name: "Breathe" }),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Todo App"),
    React.createElement(TodoList),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
