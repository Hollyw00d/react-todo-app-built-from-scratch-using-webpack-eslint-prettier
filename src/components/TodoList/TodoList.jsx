import { Box } from "grommet";
import { Todo } from "../Todo/Todo";

const TodoList = ({
  todos,
  newFilter,
  toggleCompletion,
  toggleEditing,
  deleteTodo,
  onInputFieldSubmitReplace,
  onInputChange,
}) => {
  const newFilterClean = newFilter?.toLowerCase();
  let updatedTodos = todos;

  switch (newFilterClean) {
    case "active":
      updatedTodos = todos.filter((todo) => todo.completed === false);
      break;
    case "completed":
      updatedTodos = todos.filter((todo) => todo.completed === true);
      break;
  }

  return (
    <Box margin={{ top: "medium" }}>
      <ul>
        {updatedTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              toggleCompletion={toggleCompletion}
              toggleEditing={toggleEditing}
              deleteTodo={deleteTodo}
              onInputFieldSubmitReplace={onInputFieldSubmitReplace}
              onInputChange={onInputChange}
            />
          );
        })}
      </ul>
    </Box>
  );
};

export { TodoList };
