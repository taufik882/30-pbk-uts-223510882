<template>
  <q-item clickable :class="{ 'q-item--active': todo.done }" class="todo-item q-pa-sm">
    <q-item-section avatar>
      <q-checkbox v-model="todo.done" @update:model-value="$emit('toggle')" class="custom-checkbox" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ todo.text }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn @click="$emit('remove', index)" color="negative" icon="cancel" flat class="custom-remove-btn" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
  },
  emits: ['remove', 'toggle'],
};
</script>

<style scoped>
.todo-item {
  background: #FFFFFF;
  color: #4B0082; 
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-item:hover {
  background: #E6E6FA; 
}

.q-item--active .q-item__label {
  text-decoration: line-through;
  color: #757575;
}

.custom-checkbox input:checked ~ .q-checkbox__bg {
  background-color: #6A0DAD; 
  border-color: #6A0DAD; 
}

.custom-remove-btn {
  color: #EA4335; 
}
</style>
