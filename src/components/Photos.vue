<template>
  <q-page class="photos-container">
    <h1 class="page-title">Photos from Album: {{ albumsStore.albumTitle }}</h1>
    <q-list bordered v-if="!albumsStore.loading">
      <q-item v-for="photo in albumsStore.photos" :key="photo.id" clickable @click="viewPhoto(photo.id)" class="hover-item">
        <q-item-section>
          <img :src="photo.thumbnailUrl" :alt="photo.title" class="photo-thumbnail" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ photo.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-spinner v-if="albumsStore.loading" color="primary" />
  </q-page>
</template>

<script>
import { useAlbumsStore } from '../store/albums';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'Photos',
  setup() {
    const albumsStore = useAlbumsStore();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      albumsStore.fetchPhotos(route.params.id);
    });

    const viewPhoto = (photoId) => {
      albumsStore.loading = true;
      router.push(`/photos/${photoId}`);
    };

    return {
      albumsStore,
      viewPhoto,
    };
  },
};
</script>

<style scoped>
.photos-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #0f0317; 
}

.hover-item {
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hover-item:hover {
  background-color: #E6E6FA; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin-right: 20px;
}

.q-item-label {
  font-size: 18px;
  color: #4B0082; 
}

@media (max-width: 600px) {
  .photos-container {
    padding: 0 10px;
  }

  .page-title {
    font-size: 20px;
  }

  img {
    width: 80px;
    height: 80px;
  }
}
</style>
