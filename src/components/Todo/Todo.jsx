const Todo = (props) => {
  const { name, id } = props;

  return <li key={id}>{name}</li>;
};

export { Todo };
