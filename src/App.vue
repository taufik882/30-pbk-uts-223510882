<template>
  <div id="app">
    <Navbar @change-view="changeView" />
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
    Todos,
    Post,
  },
  data() {
    return {
      currentView: 'Todos',
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    },
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