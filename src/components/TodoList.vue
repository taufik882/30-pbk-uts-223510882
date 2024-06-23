<template>
  <q-list bordered padding class="todo-list">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" @remove="removeTodo" @toggle="animateToggle" />
  </q-list>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  props: {
    todos: Array,
  },
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(index) {
      this.$emit('remove-todo', index);
    },
    animateToggle() {
      const notification = document.createElement('div');
      notification.className = 'notification toggled';
      notification.textContent = 'Item toggled';
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    }
  },
};
</script>

<style scoped>
.todo-list {
  padding: 0;
  background: #F8F8FF; 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
