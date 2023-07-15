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

  const toggleCompletion = (e) => {
    const getTodoID = getItemIdFromParent(e, "li", "data-item-id");

    setTodos(
      todos.map((todo) => {
        if (todo.id === getTodoID) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (e) => {
    const getTodoID = getItemIdFromParent(e, "li", "data-item-id");

    setTodos(todos.filter((todo) => todo.id !== getTodoID));
  };

  // Helper functions
  const getItemIdFromParent = (event, elem, dataAttr) => {
    return Number(event.target.closest(elem).getAttribute(dataAttr));
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
