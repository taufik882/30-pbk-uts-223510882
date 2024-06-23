<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="title-container">
          <q-avatar>
            <img src="./assets/logo1.jpeg">
          </q-avatar>
          <div class="brand-title">Taufik Mahaldi</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="drawer">
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('/todos')" class="drawer-item">
          <q-item-section avatar>
            <q-icon name="check_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todo List</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/posts')" class="drawer-item">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Posts</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/albums')" class="drawer-item">
          <q-item-section avatar>
            <q-icon name="photo_album" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Albums</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="page-background">
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="footer">
      <q-toolbar>
        <q-toolbar-title class="footer-title">
          <div class="footer-content">
            <div>Created by Taufik Mahaldi</div>
            <div>&copy; 2024 Tugas PBK. All rights reserved.</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
}
</script>

<style scoped>
.header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #4B0082;
  color: #FFFFFF;
}

.title-container {
  display: flex;
  align-items: center;
}

.brand-title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}

.drawer {
  background-color: #FFFFFF;
}

.drawer-item {
  margin: 10px 0;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #4B0082;
}

.drawer-item:hover {
  background-color: #E6E6FA;
  transform: scale(1.05);
}

.page-background {
  background-color: #F0F0FF; 
}

.footer {
  background-color: #6A0DAD;
  color: #FFFFFF;
}

.footer-title {
  display: flex;
  justify-content: center; 
  align-items: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  text-align: center; 
}

@media (max-width: 600px) {
  .footer-content {
    text-align: center;
    width: 100%;
  }
}
</style>
