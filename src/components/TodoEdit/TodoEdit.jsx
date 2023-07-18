import { useState } from "react";
import { Box, Form, TextInput } from "grommet";

const TodoEdit = ({
  toggleEditing,
  name,
  id,
  onInputFieldSubmit,
  addTodo,
  onInputChange,
}) => {
  const [newTodo, setNewTodo] = useState(name);

  return (
    <Form
      onSubmit={(e) => {
        onInputFieldSubmit(e, addTodo, newTodo, setNewTodo);
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
