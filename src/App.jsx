import { useState } from "react";
import { Heading, Page, PageContent } from "grommet";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";
import { FilterTodo } from "./components/FilterTodo/FilterTodo.jsx";

const App = () => {
  const todosData = [
    {
      name: "Go for jog",
      id: 1,
      completed: false,
      editing: false,
    },
    {
      name: "Learn React in Udemy",
      id: 2,
      completed: true,
      editing: false,
    },
    {
      name: "Go to Gym",
      id: 3,
      completed: false,
      editing: false,
    },
  ];

  const todoFilters = { 0: "all", 1: "active", 2: "completed" };

  const [todos, setTodos] = useState(todosData);

  const [filter, setFilter] = useState(todoFilters[0]);

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
        editing: false,
      },
    ]);
  };

  const onInputFieldSubmitAdd = (event, addTodo, newTodo, setNewTodo) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const onInputChange = (setNewTodo, event) => {
    setNewTodo(event.target.value);
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

  const onInputFieldSubmitReplace = (event, todoID, name) => {
    event.preventDefault();

    setTodos(
      todos.map((todo) => {
        if (todo.id === todoID) {
          return { ...todo, name, editing: !todo.editing };
        }

        return todo;
      })
    );
  };

  const toggleEditing = (todoID) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoID) {
          return { ...todo, editing: !todo.editing };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todo.id !== todoID));
  };

  const filterTodos = (filterName) => {
    setFilter(filterName);
    return filter;
  };

  return (
    <Page background="background-front" kind="narrow" height="100vh">
      <PageContent>
        <Heading>Todo App</Heading>
        <TodoInputField
          onInputFieldSubmitAdd={onInputFieldSubmitAdd}
          addTodo={addTodo}
          onInputChange={onInputChange}
        />
        <FilterTodo filterTodos={filterTodos} filter={filter} />
        <TodoList
          todos={todos}
          toggleCompletion={toggleCompletion}
          toggleEditing={toggleEditing}
          deleteTodo={deleteTodo}
          onInputFieldSubmitReplace={onInputFieldSubmitReplace}
          onInputChange={onInputChange}
        />
      </PageContent>
    </Page>
  );
};

export { App };
