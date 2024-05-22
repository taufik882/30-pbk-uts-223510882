<template>
  <ul>
    <slot name="todo-item" v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index">
      <TodoItem :todo="todo" :index="index" @remove="removeTodo(index)" />
    </slot>
  </ul>
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
  },
};
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
}
</style>
