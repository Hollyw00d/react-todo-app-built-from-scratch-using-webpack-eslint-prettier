import { useState, useEffect } from "react";
import { TodoApi } from "../utils/todoApi/todoApi";

function useFetchTodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      const { data } = await TodoApi.fetchTodos();

      setTodos(data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { setTodos, todos, loading, error };
}

export { useFetchTodoList };
