import { Todo } from "../Todo/Todo";

const TodoList = (props) => {
  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export { TodoList };
