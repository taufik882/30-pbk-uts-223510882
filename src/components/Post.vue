<template>
  <q-page class="post-container">
    <q-card class="post-card">
      <q-card-section>
        <div class="post-title">Postingan</div>
      </q-card-section>

      <q-card-section>
        <q-form class="post-form">
          <q-select
            v-model="selectedUser"
            :options="userOptions"
            option-label="label"
            option-value="value"
            emit-value
            map-options
            label="Pilih Nama Pengguna"
            filled
            class="post-select"
            placeholder="Pilih pengguna untuk melihat postingan"
          />
          <q-btn
            label="Cari"
            @click="fetchPosts"
            :disable="!selectedUser"
            class="post-button"
            icon="search"
          />
        </q-form>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-spinner v-if="loading" color="primary" class="loading-spinner" />
        <PostList v-if="posts.length && !loading" :posts="posts">
          <template #post-item="{ post }">
            <q-card class="custom-post-item" flat bordered>
              <q-card-section>
                <div class="text-h6">{{ post.title }}</div>
                <div>{{ post.body }}</div>
              </q-card-section>
            </q-card>
          </template>
        </PostList>
        <q-card-section v-else-if="!loading" class="no-posts">Tidak ada postingan.</q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useQuasar } from 'quasar';
import PostList from './PostList.vue';

export default {
  components: {
    PostList,
  },
  setup() {
    const $q = useQuasar();
    const selectedUser = ref(null);
    const users = ref([]);
    const posts = ref([]);
    const loading = ref(false);

    const fetchPosts = async () => {
      if (!selectedUser.value) return;
      loading.value = true;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`);
        posts.value = await response.json();
      } catch (error) {
        $q.notify({
          type: 'negative',
          message: 'Error fetching posts: ' + error.message,
        });
      } finally {
        loading.value = false;
      }
    };

    const fetchUsers = async () => {
      loading.value = true;
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        users.value = await response.json();
      } catch (error) {
        $q.notify({
          type: 'negative',
          message: 'Error fetching users: ' + error.message,
        });
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchUsers);

    const userOptions = computed(() => users.value.map(user => ({ label: user.name, value: user.id })));

    return {
      selectedUser,
      users,
      posts,
      loading,
      fetchPosts,
      userOptions,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.post-container {
  max-width: 800px;
  margin: 20px auto;
  font-family: 'Roboto', sans-serif;
}

.post-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.post-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.post-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.post-select {
  flex-grow: 1;
  margin: 10px;
}

.post-button {
  flex-shrink: 0;
  margin: 10px;
  background-color: #6A0DAD; 
  color: white;
  border-radius: 8px;
}

.post-button:hover {
  background-color: #551A8B; 
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.no-posts {
  text-align: center;
  color: #999;
  font-size: 1rem;
}

.custom-post-item {
  margin-bottom: 20px;
  border-radius: 8px;
  transition: box-shadow 0.3s, transform 0.3s;
}

.custom-post-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

@media (max-width: 600px) {
  .post-container {
    margin: 10px;
  }

  .post-card {
    padding: 10px;
  }

  .post-title {
    font-size: 1.5rem;
  }

  .post-select,
  .post-button {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
