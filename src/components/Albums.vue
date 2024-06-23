<template>
  <q-page class="albums-container">
    <h1 class="page-title">Albums</h1>
    <p class="page-description">Pilih atau klik daftar albums di bawah ini untuk melihat foto-foto yang ada.</p>
    <q-list bordered v-if="!albumsStore.loading">
      <q-item v-for="album in albumsStore.albums" :key="album.id" clickable @click="goToAlbum(album.id)" class="hover-item">
        <q-item-section>
          <q-item-label>{{ album.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-spinner v-if="albumsStore.loading" color="primary" />
  </q-page>
</template>

<script>
import { useAlbumsStore } from '../store/albums';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Albums',
  setup() {
    const albumsStore = useAlbumsStore();
    const router = useRouter();

    onMounted(albumsStore.fetchAlbums);

    const goToAlbum = (id) => {
      albumsStore.loading = true;
      router.push(`/albums/${id}`);
    };

    return {
      albumsStore,
      goToAlbum,
    };
  },
};
</script>

<style scoped>
.albums-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #4B0082; 
}

.page-description {
  font-size: 16px;
  margin-bottom: 20px;
}

.hover-item {
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hover-item:hover {
  background-color: #E6E6FA; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.q-item-label {
  font-size: 18px;
  color: #6A0DAD; 
}

@media (max-width: 600px) {
  .albums-container {
    padding: 0 10px;
  }

  .page-title {
    font-size: 20px;
  }

  .page-description {
    font-size: 14px;
  }
}
</style>
