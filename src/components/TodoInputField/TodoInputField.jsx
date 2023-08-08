import React, { useState } from "react";
import "./TodoInputField.css";

export default function TodoInputField({
  onInputFieldSubmitAdd,
  addTodo,
  onInputChange,
}) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onInputFieldSubmitAdd(e, addTodo, newTodo, setNewTodo);
      }}
    >
      <h2>What needs to be done</h2>
      <input
        id="new-todo"
        name="new-todo"
        type="text"
        value={newTodo}
        placeholder="Add new todo here"
        onChange={(e) => {
          onInputChange(setNewTodo, e);
        }}
      />
      <div>
        <button
          id="add-to-do-btn"
          disabled={
            newTodo.length === 0 || newTodo.trim() === "" ? "disabled" : null
          }
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
