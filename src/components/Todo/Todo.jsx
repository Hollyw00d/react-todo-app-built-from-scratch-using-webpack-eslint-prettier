import { Undo, Checkmark, Edit, Trash } from "grommet-icons";
import "./todo.css";

const Todo = ({ name, completed, id, toggleCompletion }) => {
  const doneClass = "done";
  const notDoneClass = "not-done";

  return (
    <li key={id}>
      <div>
        <span style={{ textDecoration: completed ? "line-through" : null }}>
          {name}
        </span>
      </div>
      <div className="btns-container">
        <button
          onClick={toggleCompletion}
          className={completed ? doneClass : notDoneClass}
          data-item-name={name}
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
        <button>
          Edit <Edit color="blue" />
        </button>
        <button>
          Delete <Trash color="red" />
        </button>
      </div>
    </li>
  );
};

export { Todo };
