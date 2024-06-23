import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    filter: 'all',
  }),
  getters: {
    filteredTodos: (state) => {
      if (state.filter === 'all') {
        return state.todos;
      } else if (state.filter === 'done') {
        return state.todos.filter(todo => todo.done);
      } else if (state.filter === 'pending') {
        return state.todos.filter(todo => !todo.done);
      }
    },
  },
  actions: {
    addTodo(text) {
      this.todos.push({
        text,
        done: false,
      });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    setFilter(filter) {
      this.filter = filter;
    },
  },
});
