import React, { useState } from "react";
import { Form, Heading, TextInput, Box } from "grommet";

export default function TodoInputField({
  onInputFieldSubmitAdd,
  addTodo,
  onInputChange,
}) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        onInputFieldSubmitAdd(e, addTodo, newTodo, setNewTodo);
      }}
    >
      <Heading level="2">What needs to be done</Heading>
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
}
