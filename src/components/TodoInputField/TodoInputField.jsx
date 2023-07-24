import { useState } from "react";
import { Form, Heading, TextInput, Box } from "grommet";

const TodoInputField = ({ onInputFieldSubmitAdd, addTodo, onInputChange }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        onInputFieldSubmitAdd(e, addTodo, newTodo, setNewTodo);
      }}
    >
      <Heading level="2">
        <label htmlFor="new-todo">What needs to be done</label>
      </Heading>
      <TextInput
        id="new-todo"
        name="new-todo"
        type="text"
        value={newTodo}
        onChange={(e) => {
          onInputChange(setNewTodo, e);
        }}
      />
      <Box margin={{ top: "medium" }}>
        <button
          disabled={
            newTodo.length === 0 || newTodo.trim() === "" ? "disabled" : null
          }
          type="submit"
        >
          Add Todo
        </button>
      </Box>
    </Form>
  );
};

export { TodoInputField };
