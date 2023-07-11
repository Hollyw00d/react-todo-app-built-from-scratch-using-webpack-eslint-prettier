const TodoInputField = () => {
  return (
    <form>
      <h2>
        <label htmlFor="new-todo">What needs to be done</label>
      </h2>
      <input id="new-todo" type="text" />
    </form>
  );
};

export { TodoInputField };
