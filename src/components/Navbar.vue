<template>
  <nav class="navbar">
    <div class="logo">
      <h1>Taufik Mahaldi</h1>
    </div>
    <div class="links">
      <router-link @click="$emit('change-view', 'todos')" class="link">Todo List</router-link>
      <router-link @click="$emit('change-view', 'post')" class="link">Posts</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  background-color: #3498db;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
}

.links {
  display: flex;
}

.link {
  color: #fff;
  padding: 8px;
  text-decoration: none;
  margin-left: 1.5rem;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
  border-radius: 8px;
  background-color: #38e4f4;
}
</style>
