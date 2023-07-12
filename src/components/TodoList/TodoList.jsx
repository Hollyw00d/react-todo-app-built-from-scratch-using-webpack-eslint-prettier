import { Box, List } from "grommet";

const TodoList = ({ todos }) => {
  return (
    <Box margin={{ top: "medium" }}>
      <List data={todos} pad={{ vertical: "small", horizontal: "small" }} />
    </Box>
  );
};

export { TodoList };
