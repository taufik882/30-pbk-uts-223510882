<template>
    <div class="kontener">
      <div class="bodi">
        <h1>Buat Daftar Kegiatan Anda</h1>
        <p>by Taufik Mahaldi</p>
        <div class="menu">
          <input type="text" v-model="newTodo" placeholder="Masukkan item to-do baru" />
          <button @click="addTodo">Tambah</button>
          <div class="dropdown">
            <button class="dropbtn">Filter</button>
            <div class="drop-konten">
              <div class="filter-buttons">
                <button @click="filter = 'all'">Semua</button>
                <button @click="filter = 'done'">Selesai</button>
                <button @click="filter = 'pending'">Belum Selesai</button>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
      <TodoList :todos="filteredTodos" @remove-todo="removeTodo" />
    </div>
</template>

<script>
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      newTodo: '',
      todos: [],
      filter: 'all',
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      } else if (this.filter === 'done') {
        return this.todos.filter(todo => todo.done);
      } else if (this.filter === 'pending') {
        return this.todos.filter(todo => !todo.done);
      }
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo,
          done: false,
        });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.kontener {
  background: #f5f5f5;
  max-width: 50rem;
  margin: 3.75rem auto;
  height: auto;
  padding: 1.25rem;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.bodi {
  flex-wrap: wrap;
}

.bodi h1, .bodi p {
  text-align: center;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.menu input[type="text"],
.menu button,
.menu .dropdown {
  padding: 12px;
  margin-right: 12px;
  cursor: pointer;
}

.menu input[type="text"] {
  width: 60%;
  border: 2px solid #ddd;
  border-radius: 40px;
}

.menu button {
  background-color: #3498db;
  color: white;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

.menu button:hover {
  background-color: #2980b9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown .dropbtn {
  background-color: #3498db;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 40px;
  cursor: pointer;
}

.dropdown .dropbtn:hover {
  background-color: #2980b9;
}

.dropdown .drop-konten {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
}

.dropdown:hover .drop-konten {
  display: block;
}

.filter-buttons {
  display: flex;
  flex-direction: column;
}

.filter-buttons button {
  background: none;
  border: none;
  padding: 12px;
  text-align: left;
  color: #333;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-buttons button:hover {
  background-color: #f1f1f1;
}

@media only screen and (max-width: 768px) {
  .menu input[type="text"] {
    width: 50%;
  }
}

@media only screen and (max-width: 480px) {
  .menu {
    flex-direction: column;
    align-items: stretch;
  }

  .menu input[type="text"] {
    width: 100%;
    margin-bottom: 12px;
  }

  .menu .dropdown {
    margin-left: 0;
    margin-top: 12px;
  }
}
</style>
