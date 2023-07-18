import { useState } from "react";
import { Box, Form, TextInput } from "grommet";

const TodoEdit = ({
  toggleEditing,
  name,
  id,
  onInputFieldSubmitReplace,
  replaceTodo,
  onInputChange,
}) => {
  const [newTodo, setNewTodo] = useState(name);

  return (
    <Form
      onSubmit={(e) => {
        onInputFieldSubmitReplace(e, replaceTodo, id);
      }}
    >
      <TextInput
        id="edit-todo"
        name="edit-todo"
        value={newTodo}
        onChange={(e) => {
          onInputChange(setNewTodo, e);
        }}
      />
      <Box margin={{ top: "medium" }} direction="row" justify="between">
        <button
          onClick={() => {
            toggleEditing(id);
          }}
          type="button"
        >
          Cancel
        </button>
        <button type="submit">Edit Todo</button>
      </Box>
    </Form>
  );
};

export { TodoEdit };
