<template>
  <q-list bordered class="post-list">
    <q-card v-for="post in posts" :key="post.id" flat bordered class="post-item hover-card">
      <q-card-section>
        <div class="post-item-title">{{ post.title }}</div>
        <div class="post-item-body">{{ post.body }}</div>
      </q-card-section>
    </q-card>
  </q-list>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list {
  padding: 0 16px;
}

.post-item {
  padding: 16px;
  transition: background-color 0.3s, transform 0.3s;
}

.post-item:hover {
  background-color: #f9f9f9;
  transform: translateX(5px);
}

.post-item-title {
  font-size: 1.25rem;
  color: #3498db;
  font-weight: 500;
}

.post-item-body {
  font-size: 1rem;
  color: #666;
  margin-top: 8px;
}

.hover-card {
  transition: box-shadow 0.3s, transform 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hover-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
</style>