import { useState } from "react";
import { Heading, Page, PageContent } from "grommet";
import {} from "grommet-icons";

import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";

const todosData = [
  {
    name: "Go for jog",
    id: 1,
    completed: false,
  },
  {
    name: "Learn React in Udemy",
    id: 2,
    completed: true,
  },
  {
    name: "Go to Gym",
    id: 3,
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosData);

  // Event handlers
  const addTodo = (newTodo) => {
    if (newTodo.trim() === "") {
      return;
    }

    const todoId = todos.length + 1;

    setTodos([
      ...todos,
      {
        name: newTodo,
        id: todoId,
        completed: false,
      },
    ]);
  };

  const toggleCompletion = (todoID) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoID) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todo.id !== todoID));
  };

  return (
    <Page background="background-front" kind="narrow" height="100vh">
      <PageContent>
        <Heading>Todo App</Heading>
        <TodoInputField onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleCompletion={toggleCompletion}
          deleteTodo={deleteTodo}
        />
      </PageContent>
    </Page>
  );
};

export { App };
