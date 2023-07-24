import axios from "axios";

const baseURL = "http://localhost:3000/todos";

class TodoApi {
  static async fetchTodos() {
    return axios.get(baseURL);
  }

  static async postTodo(todo) {
    return axios.post(baseURL, {
      name: todo,
      completed: false,
      editing: false,
    });
  }

  static async toggleCompletionStatus(todoID, todo) {
    return axios.patch(`${baseURL}/${todoID}`, {
      completed: !todo[0].completed,
    });
  }

  static async toggleEditingStatus(todoID, todo) {
    return axios.patch(`${baseURL}/${todoID}`, {
      editing: !todo[0].editing,
    });
  }

  static async editName(todoID, todo, name) {
    return axios.patch(`${baseURL}/${todoID}`, {
      name,
      editing: !todo[0].editing,
    });
  }

  static async deleteTodo(todoID) {
    return axios.delete(`${baseURL}/${todoID}`);
  }
}

export { TodoApi };
