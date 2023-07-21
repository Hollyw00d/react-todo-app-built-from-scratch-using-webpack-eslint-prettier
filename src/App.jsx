import { useEffect, useState } from "react";
import { Heading, Page, PageContent } from "grommet";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";
import { FilterTodo } from "./components/FilterTodo/FilterTodo.jsx";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  const todoFilters = { 0: "all", 1: "active", 2: "completed" };
  const [newFilter, setNewFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = "http://localhost:3000/todos";

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(baseURL);
      setTodos(data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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

  const filterTodos = (filter) => {
    const getTodoFilter = todoFilters[filter];
    setNewFilter(getTodoFilter);
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
        <FilterTodo filterTodos={filterTodos} />
        <TodoList
          loading={loading}
          error={error}
          todos={todos}
          newFilter={newFilter}
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
