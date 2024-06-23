<template>
  <q-page class="todos-container q-pa-md">
    <q-card flat bordered class="q-pa-md card-container">
      <q-card-section class="q-gutter-md">
        <div class="post-title">Daftar Todo List Anda</div>
        <q-input v-model="newTodo" placeholder="Tambah item baru di sini..." outlined />
        <q-btn @click="handleAddTodo" label="Tambah" class="q-mt-md custom-btn" />
        <q-btn-dropdown label="Filter" class="q-mt-md custom-btn">
          <q-list>
            <q-item clickable @click="setFilter('all')">
              <q-item-section>Semua</q-item-section>
            </q-item>
            <q-item clickable @click="setFilter('done')">
              <q-item-section>Selesai</q-item-section>
            </q-item>
            <q-item clickable @click="setFilter('pending')">
              <q-item-section>Belum Selesai</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-card-section>
    </q-card>
    <q-separator spaced class="q-my-md" />
    <TodoList :todos="filteredTodos" @remove-todo="removeTodo" />
  </q-page>
</template>

<script>
import { ref, computed } from 'vue';
import { useTodoStore } from '../store/store';
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoList,
  },
  setup() {
    const store = useTodoStore();
    const newTodo = ref('');

    const handleAddTodo = () => {
      if (newTodo.value.trim()) {
        store.addTodo(newTodo.value);
        newTodo.value = '';
        animateAction('added');
      }
    };

    const setFilter = (filter) => {
      store.setFilter(filter);
    };

    const animateAction = (action) => {
      const notification = document.createElement('div');
      notification.className = `notification ${action}`;
      notification.textContent = `Item ${action}`;
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    };

    const filteredTodos = computed(() => store.filteredTodos);

    return {
      newTodo,
      filteredTodos,
      handleAddTodo,
      setFilter,
      removeTodo: store.removeTodo,
    };
  },
};
</script>

<style scoped>
.todos-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #4B0082; 
}

.card-container {
  background: #F8F8FF; 
  color: #4B0082; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.q-input {
  border-color: #6A0DAD; 
  border-radius: 8px;
}

.custom-btn {
  background-color: #6A0DAD; 
  color: white;
  border-radius: 8px;
}

.custom-btn:hover {
  background-color: #551A8B; 
}

.q-btn-dropdown {
  background-color: #6A0DAD; 
  color: white;
  border-radius: 8px;
}

.q-btn-dropdown:hover {
  background-color: #551A8B; 
}

.q-separator {
  border-color: #6A0DAD; 
}

/* Animations */
.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #6A0DAD; 
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  animation: fadeInOut 2s;
}

.notification.removed {
  background: #EA4335; 
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@media (max-width: 600px) {
  .todos-container {
    padding: 10px;
  }

  .card-container {
    padding: 10px;
  }
}
</style>