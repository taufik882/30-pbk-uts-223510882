<template>
  <li :class="{ done: todo.done }">
    <slot name="todo-content" :todo="todo" :index="index">
      <input type="checkbox" v-model="todo.done" />
      <span>{{ todo.text }}</span>
      <button @click="$emit('remove', index)">Cancel</button>
    </slot>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
  },
  emits: ['remove'],
};
</script>

<style scoped>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  li.done span {
    text-decoration: line-through;
  }

  li input[type="checkbox"] {
    margin-right: 10px;
  }

  li button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  li button:hover {
    background-color: #c0392b;
  }
</style>
