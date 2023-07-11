import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoInputField } from "./components/TodoInputField/TodoInputField.jsx";

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInputField />
      <TodoList />
    </div>
  );
};

export { App };
