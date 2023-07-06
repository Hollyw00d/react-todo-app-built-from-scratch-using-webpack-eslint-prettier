import { createElement } from "react";
import { createRoot } from "react-dom/client";

const Todo = (props) => {
  return createElement("li", {}, props.name);
};

const TodoList = () => {
  return createElement("ul", {}, [
    createElement(Todo, { name: "Go for a jog" }),
    createElement(Todo, { name: "Learn React" }),
    createElement(Todo, { name: "Breathe" }),
  ]);
};

const App = () => {
  return createElement("div", {}, [
    createElement("h1", {}, "Todo App"),
    createElement(TodoList),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(createElement(App));
