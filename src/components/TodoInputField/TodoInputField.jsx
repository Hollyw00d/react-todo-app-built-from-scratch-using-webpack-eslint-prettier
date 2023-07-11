import { useState } from "react";

const TodoInputField = (props) => {
  const { onSubmit } = props;

  const [newTodo, setNewTodo] = useState("");

  const onInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onInputFieldSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTodo);
  };

  return (
    <form onSubmit={onInputFieldSubmit}>
      <h2>
        <label htmlFor="new-todo">What needs to be done</label>
      </h2>
      <input
        id="new-todo"
        type="text"
        value={newTodo}
        onChange={onInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export { TodoInputField };
