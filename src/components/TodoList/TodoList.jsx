import { Box } from "grommet";
import { Todo } from "../Todo/Todo";

const TodoList = ({ todos }) => {
  return (
    <Box margin={{ top: "medium" }}>
      <ul>
        {todos.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
      </ul>
    </Box>
  );
};

export { TodoList };
