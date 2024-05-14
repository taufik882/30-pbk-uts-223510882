<template>
  <div id="app">
    <Navbar @change-view="currentView = $event" />
    <component :is="currentView"></component>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Todos from './components/Todos.vue';
import Post from './components/Post.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    todos: Todos,
    post: Post,
  },
  data() {
    return {
      currentView: 'todos',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
