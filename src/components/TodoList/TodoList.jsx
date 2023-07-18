import { Box } from "grommet";
import { Todo } from "../Todo/Todo";

const TodoList = ({
  todos,
  toggleCompletion,
  toggleEditing,
  deleteTodo,
  onInputFieldSubmit,
  addTodo,
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
              onInputFieldSubmit={onInputFieldSubmit}
              addTodo={addTodo}
              onInputChange={onInputChange}
            />
          );
        })}
      </ul>
    </Box>
  );
};

export { TodoList };
