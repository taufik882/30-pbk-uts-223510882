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
    <p v-if="loading" class="loading">Loading...</p>
    <PostList v-if="posts.length && !loading" :posts="posts">
      <template #post-item="{ post }">
        <div class="custom-post-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </template>
    </PostList>
    <p v-else-if="!loading" class="no-posts">Tidak ada postingan.</p>
  </div>
</template>

<script>
import PostList from './PostList.vue';

export default {
  components: {
    PostList,
  },
  data() {
    return {
      selectedUser: null,
      users: [],
      posts: [],
      loading: false,
    };
  },
  methods: {
    async fetchPosts() {
      if (!this.selectedUser) return;
      this.loading = true;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`);
        this.posts = await response.json();
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.users = await response.json();
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        this.loading = false;
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

.loading {
  text-align: center;
  color: #999;
}

.no-posts {
  text-align: center;
  color: #999;
}

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
}

@media (max-width: 480px) {
  .post-title {
    font-size: 1.25rem;
  }

  .post-select {
    font-size: 0.9rem;
  }
}
</style>
