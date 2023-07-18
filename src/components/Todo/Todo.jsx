// import { useState } from "react";
import { Undo, Checkmark, Edit, Trash } from "grommet-icons";
import { TodoEdit } from "../TodoEdit/TodoEdit";
import "./todo.css";

const Todo = ({
  name,
  completed,
  editing,
  id,
  toggleCompletion,
  toggleEditing,
  deleteTodo,
  onInputFieldSubmitReplace,
  onInputChange,
}) => {
  return (
    <li key={id}>
      <div>
        {!editing ? (
          <span style={{ textDecoration: completed ? "line-through" : null }}>
            {name}
          </span>
        ) : (
          <>
            <TodoEdit
              toggleEditing={toggleEditing}
              name={name}
              id={id}
              onInputFieldSubmitReplace={onInputFieldSubmitReplace}
              onInputChange={onInputChange}
            />
          </>
        )}
      </div>
      <div className="btns-container">
        <button
          disabled={editing ? "disabled" : null}
          onClick={() => toggleCompletion(id)}
        >
          {completed ? (
            <>
              Mark Not Done <Undo color="orange" />
            </>
          ) : (
            <>
              Mark Done <Checkmark color="green" />
            </>
          )}
        </button>
        <button
          onClick={() => {
            toggleEditing(id);
          }}
        >
          Edit <Edit color="blue" />
        </button>
        <button
          disabled={editing ? "disabled" : null}
          onClick={() => deleteTodo(id)}
        >
          Delete <Trash color="red" />
        </button>
      </div>
    </li>
  );
};

export { Todo };
