// import { useState } from "react";
import { Undo, Checkmark, Edit, Trash } from "grommet-icons";
import "./todo.css";

const Todo = ({ name, completed, id, toggleCompletion, deleteTodo }) => {
  const doneClass = "done";
  const notDoneClass = "not-done";

  // const [editItem, setEditItem] = useState();

  // const onTodoEdit = (todoID) => {};

  return (
    <li key={id}>
      <div>
        <span style={{ textDecoration: completed ? "line-through" : null }}>
          {name}
        </span>
      </div>
      <div className="btns-container">
        <button
          onClick={() => toggleCompletion(id)}
          className={completed ? doneClass : notDoneClass}
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
            // onTodoEdit(id);
          }}
        >
          Edit <Edit color="blue" />
        </button>
        <button onClick={() => deleteTodo(id)}>
          Delete <Trash color="red" />
        </button>
      </div>
    </li>
  );
};

export { Todo };
