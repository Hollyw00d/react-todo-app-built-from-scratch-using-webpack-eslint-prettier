import { useState } from "react";
import { Form, Heading, TextInput, Box } from "grommet";

const TodoInputField = (props) => {
  const { onSubmit } = props;

  const [newTodo, setNewTodo] = useState("");

  const onInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onInputFieldSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTodo);
    setNewTodo("");
  };

  return (
    <Form onSubmit={onInputFieldSubmit}>
      <Heading level="2">
        <label htmlFor="new-todo">What needs to be done</label>
      </Heading>
      <TextInput
        id="new-todo"
        name="new-todo"
        type="text"
        value={newTodo}
        onChange={onInputChange}
      />
      <Box margin={{ top: "medium" }}>
        <button type="submit">Add Todo</button>
      </Box>
    </Form>
  );
};

export { TodoInputField };
