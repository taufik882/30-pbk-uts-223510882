<template>
    <ul>
      <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @remove="removeTodo(index)" />
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
        this.$emit('remove-todo', index); // Emit event dengan nama berbeda
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
  