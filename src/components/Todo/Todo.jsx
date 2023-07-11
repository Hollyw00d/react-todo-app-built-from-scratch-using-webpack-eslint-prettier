const Todo = (props) => {
  const { item, id } = props;

  return <li key={id}>{item}</li>;
};

export { Todo };
