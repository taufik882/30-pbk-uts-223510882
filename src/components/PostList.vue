<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" class="post-item">
      <slot name="post-item" :post="post">
        <h3 class="post-item-title">{{ post.title }}</h3>
        <p class="post-item-body">{{ post.body }}</p>
      </slot>
    </li>
  </ul>
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
  
  @media (max-width: 768px) {
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
    .post-item-title {
      font-size: 1rem;
    }
  
    .post-item-body {
      font-size: 0.8rem;
    }
  }
</style>
  