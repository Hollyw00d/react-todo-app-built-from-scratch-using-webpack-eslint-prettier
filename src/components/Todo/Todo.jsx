const Todo = ({ name, completed, id, toggleCompletion }) => {
  const doneClass = "done";
  const notDoneClass = "not-done";

  return (
    <li key={id} style={{ textDecoration: completed ? "line-through" : null }}>
      {name}
      <button
        onClick={toggleCompletion}
        className={completed ? doneClass : notDoneClass}
        data-item-name={name}
      >
        {completed ? "Mark Not Done" : "Mark Done"}
      </button>
    </li>
  );
};

export { Todo };
