import { Box } from "grommet";
import { Todo } from "../Todo/Todo";

const TodoList = ({
  todos,
  toggleCompletion,
  toggleEditing,
  deleteTodo,
  onInputFieldSubmitReplace,
  replaceTodo,
  onInputChange,
}) => {
  return (
    <Box margin={{ top: "medium" }}>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              toggleCompletion={toggleCompletion}
              toggleEditing={toggleEditing}
              deleteTodo={deleteTodo}
              onInputFieldSubmitReplace={onInputFieldSubmitReplace}
              replaceTodo={replaceTodo}
              onInputChange={onInputChange}
            />
          );
        })}
      </ul>
    </Box>
  );
};

export { TodoList };
