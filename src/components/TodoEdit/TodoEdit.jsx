import { useState } from "react";
import { Box, Form, TextInput } from "grommet";

const TodoEdit = ({ toggleEditing, name, id, onInputFieldSubmitReplace }) => {
  const [editStart, setEditStart] = useState(name);

  return (
    <Form
      onSubmit={(e) => {
        onInputFieldSubmitReplace(e, id, editStart);
      }}
    >
      <TextInput
        id="edit-todo"
        name="edit-todo"
        value={editStart}
        onChange={(e) => {
          setEditStart(e.target.value);
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
        <button type="submit">Save Edit</button>
      </Box>
    </Form>
  );
};

export { TodoEdit };
