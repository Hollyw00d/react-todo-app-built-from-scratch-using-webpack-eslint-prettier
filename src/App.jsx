import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";
import { useState } from "react";

const todosData = [
  {
    name: "Go for jog",
    id: 1,
  },
  {
    name: "Learn React in Udemy",
    id: 2,
  },
  {
    name: "Go to Gym",
    id: 3,
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosData);

  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        name: newTodo,
        id: todos.length + 1,
      },
    ]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInputField onSubmit={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export { App };
