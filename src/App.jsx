import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";

const App = () => {
  const onInputField = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInputField onSubmit={onInputField} />
      <TodoList />
    </div>
  );
};

export { App };
