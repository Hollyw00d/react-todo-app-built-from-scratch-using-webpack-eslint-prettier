const Todo = ({ name, completed, id }) => {
  return (
    <li key={id} style={{ textDecoration: completed ? "line-through" : null }}>
      {name}
    </li>
  );
};

export { Todo };
