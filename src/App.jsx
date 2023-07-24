import { useState } from "react";
import { Heading, Page, PageContent } from "grommet";
import { Alert } from "@mui/material";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";
import { FilterTodo } from "./components/FilterTodo/FilterTodo.jsx";
import { TodoApi } from "./utils/todoApi/todoApi.jsx";
import { useFetchTodoList } from "./hooks/useFetchTodoList.jsx";

const App = () => {
  const { setTodos, todos, loading, error } = useFetchTodoList();
  const todoFilters = { 0: "all", 1: "active", 2: "completed" };
  const [newFilter, setNewFilter] = useState("all");
  const [showNotifications, setShowNofication] = useState(false);

  // Event handlers
  const addTodo = async (newTodo) => {
    if (newTodo.trim() === "") {
      return;
    }

    try {
      const { data } = await TodoApi.postTodo(newTodo);

      setTodos([...todos, data]);
    } catch (e) {
      setShowNofication(true);
    }
  };

  const onInputFieldSubmitAdd = (event, addTodo, newTodo, setNewTodo) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const onInputChange = (setNewTodo, event) => {
    setNewTodo(event.target.value);
  };

  const toggleCompletion = async (todoID) => {
    const todo = todos.filter((todo) => todo.id === todoID);

    try {
      const { data } = await TodoApi.toggleCompletionStatus(todoID, todo);

      setTodos(
        todos.map((todo) => {
          if (todo.id === todoID) {
            return data;
          }
          return todo;
        })
      );
    } catch (e) {
      setShowNofication(e);
    }
  };

  const onInputFieldSubmitReplace = async (event, todoID, name) => {
    event.preventDefault();

    try {
      const todo = todos.filter((todo) => todo.id === todoID);

      let { data } = await TodoApi.editName(todoID, todo, name);

      setTodos(
        todos.map((todo) => {
          if (todo.id === todoID) {
            return data;
          }
          return todo;
        })
      );
    } catch (e) {
      showNotifications(e);
    }
  };

  const toggleEditing = async (todoID) => {
    const todo = todos.filter((todo) => todo.id === todoID);

    try {
      let { data } = await TodoApi.toggleEditingStatus(todoID, todo);

      setTodos(
        todos.map((todo) => {
          if (todo.id === todoID) {
            return data;
          }
          return todo;
        })
      );
    } catch (e) {
      setShowNofication(e);
    }
  };

  const deleteTodo = async (todoID) => {
    try {
      await TodoApi.deleteTodo(todoID);

      setTodos(todos.filter((todo) => todo.id !== todoID));
    } catch (e) {
      setShowNofication(e);
    }
  };

  const filterTodos = (filter) => {
    const getTodoFilter = todoFilters[filter];
    setNewFilter(getTodoFilter);
  };

  return (
    <Page background="background-front" kind="narrow" height="100vh">
      <PageContent>
        <Heading>Todo App</Heading>
        {showNotifications ? <Alert severity="warning">Warning!</Alert> : null}
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
