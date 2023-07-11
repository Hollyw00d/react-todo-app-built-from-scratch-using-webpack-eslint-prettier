import { Todo } from "../Todo/Todo";

const todoData = [
  {
    item: "Go for a jog",
    id: 1,
  },
  {
    item: "Learn React",
    id: 2,
  },
  {
    item: "Breath",
    id: 3,
  },
];

const TodoList = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todoData.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export { TodoList };
