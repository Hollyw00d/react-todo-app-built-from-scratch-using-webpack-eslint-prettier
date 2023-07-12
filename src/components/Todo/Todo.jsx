const Todo = ({ name, completed, id }) => {
  const doneClass = "done";
  const notDoneClass = "not-done";

  const onItemClick = (e) => {
    const targetClass = e.target.classList.value;
    if (targetClass === doneClass) {
      return;
    }
  };

  return (
    <li key={id} style={{ textDecoration: completed ? "line-through" : null }}>
      {name}
      <button
        onClick={onItemClick}
        className={completed ? doneClass : notDoneClass}
      >
        {completed ? "Mark Not Done" : "Mark Done"}
      </button>
    </li>
  );
};

export { Todo };
