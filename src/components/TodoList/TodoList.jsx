import { Box } from "grommet";
import { Todo } from "../Todo/Todo";

const TodoList = ({ todos, toggleCompletion }) => {
  return (
    <Box margin={{ top: "medium" }}>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo {...todo} key={todo.id} toggleCompletion={toggleCompletion} />
          );
        })}
      </ul>
    </Box>
  );
};

export { TodoList };
