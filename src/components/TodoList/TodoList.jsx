import React from "react";
import { Box } from "grommet";
import { Alert } from "@mui/material";
import Todo from "../Todo/Todo";
import Loader from "../Loader/Loader";

export default function TodoList({
  loading,
  error,
  todos,
  newFilter,
  toggleCompletion,
  toggleEditing,
  deleteTodo,
  onInputFieldSubmitReplace,
  onInputChange,
}) {
  let newFilterClean = "";

  if (newFilter) {
    newFilterClean = newFilter.toLowerCase();
  }

  let updatedTodos = todos;

  switch (newFilterClean) {
    case "active":
      updatedTodos = todos.filter((todo) => todo.completed === false);
      break;
    case "completed":
      updatedTodos = todos.filter((todo) => todo.completed === true);
      break;
    default:
  }

  if (error) {
    return <Alert severity="error">Error while loading Todos</Alert>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <Box margin={{ top: "medium" }}>
      <ul>
        {updatedTodos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            toggleCompletion={toggleCompletion}
            toggleEditing={toggleEditing}
            deleteTodo={deleteTodo}
            onInputFieldSubmitReplace={onInputFieldSubmitReplace}
            onInputChange={onInputChange}
          />
        ))}
      </ul>
    </Box>
  );
}
