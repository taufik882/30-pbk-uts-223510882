<template>
  <div class="post-container">
    <h2 class="post-title">Postingan</h2>
    <div class="post-controls">
      <select v-model="selectedUser" @change="fetchPosts" class="post-select">
        <option value="" disabled selected>Pilih Nama Pengguna</option>
        <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
      </select>
    </div>
    <hr>
    <ul v-if="posts.length" class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <h3 class="post-item-title">{{ post.title }}</h3>
        <p class="post-item-body">{{ post.body }}</p>
      </li>
    </ul>
    <p v-else class="no-posts">Tidak ada postingan.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedUser: null,
      users: [],
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`);
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.post-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.post-title {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.post-controls {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.post-select {
  padding: 12px;
  margin: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: #f9f9f9;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  background: #f8f8f8;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.post-item:hover {
  background-color: #e9e9e9;
}

.post-item-title {
  font-size: 1.25rem;
  margin: 0 0 10px;
  color: #3498db;
}

.post-item-body {
  margin: 0;
  font-size: 1rem;
  color: #666;
}

.no-posts {
  text-align: center;
  color: #999;
}

/* Responsive Design */
@media (max-width: 768px) {
  .post-container {
    padding: 15px;
  }

  .post-title {
    font-size: 1.5rem;
  }

  .post-controls {
    flex-direction: column;
    align-items: center;
  }

  .post-select {
    width: 100%;
    margin: 8px 0;
  }

  .post-item {
    padding: 10px;
  }

  .post-item-title {
    font-size: 1.1rem;
  }

  .post-item-body {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 1.25rem;
  }

  .post-select {
    font-size: 0.9rem;
  }

  .post-item-title {
    font-size: 1rem;
  }

  .post-item-body {
    font-size: 0.8rem;
  }
}
</style>
