<template>
  <q-page class="photo-detail-container">
    <q-card class="hover-card">
      <q-card-section v-if="!albumsStore.loading">
        <img :src="photo.url" :alt="photo.title" class="photo-detail-img" />
        <div class="photo-info">
          <q-item-label>{{ photo.title }}</q-item-label>
        </div>
      </q-card-section>
      <q-spinner v-if="albumsStore.loading" color="primary" />
    </q-card>
  </q-page>
</template>

<script>
import { useAlbumsStore } from '../store/albums';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'PhotoDetail',
  setup() {
    const albumsStore = useAlbumsStore();
    const route = useRoute();

    onMounted(() => {
      albumsStore.fetchPhoto(route.params.id);
    });

    const photo = computed(() => albumsStore.photos[0] || {});

    return {
      photo,
      albumsStore,
    };
  }
};
</script>

<style scoped>
.photo-detail-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.photo-detail-img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.photo-detail-img:hover {
  transform: scale(1.05);
}

.photo-info {
  text-align: center;
}

.q-item-label {
  font-size: 18px;
  color: #4B0082; 
}

.hover-card {
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hover-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  .photo-detail-container {
    padding: 0 10px;
  }
}
</style>
