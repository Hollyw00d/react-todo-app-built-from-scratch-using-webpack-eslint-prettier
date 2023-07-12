import { useState } from "react";
import { Heading, Page, PageContent } from "grommet";
import {} from "grommet-icons";

import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";

const todosData = [
  {
    name: "Go for jog",
    completed: false,
    id: 1,
  },
  {
    name: "Learn React in Udemy",
    completed: true,
    id: 2,
  },
  {
    name: "Go to Gym",
    completed: false,
    id: 3,
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosData);

  const addTodo = (newTodo) => {
    if (newTodo.trim() === "") {
      return;
    }

    const todoId = todos.length + 1;

    setTodos([
      ...todos,
      {
        name: newTodo,
        completed: false,
        id: todoId,
      },
    ]);
  };

  return (
    <Page background="background-front" kind="narrow" height="100vh">
      <PageContent>
        <Heading>Todo App</Heading>
        <TodoInputField onSubmit={addTodo} />
        <TodoList todos={todos} />
      </PageContent>
    </Page>
  );
};

export { App };
