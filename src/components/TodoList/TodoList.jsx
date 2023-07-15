import { Box } from "grommet";
import { Todo } from "../Todo/Todo";

const TodoList = ({ todos, toggleCompletion, deleteTodo }) => {
  return (
    <Box margin={{ top: "medium" }}>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              toggleCompletion={toggleCompletion}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </Box>
  );
};

export { TodoList };
