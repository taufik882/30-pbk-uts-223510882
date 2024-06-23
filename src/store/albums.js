import { defineStore } from 'pinia';

export const useAlbumsStore = defineStore('albums', {
  state: () => ({
    albums: [],
    photos: [],
    albumTitle: '',
    loading: true,
  }),
  actions: {
    async fetchAlbums() {
      this.loading = true;
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      this.albums = await response.json();
      this.loading = false;
    },
    async fetchPhotos(albumId) {
      this.loading = true;
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      this.photos = await response.json();
      
      const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
      const album = await albumResponse.json();
      this.albumTitle = album.title;
      this.loading = false;
    },
    async fetchPhoto(photoId) {
      this.loading = true;
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
      const photo = await response.json();
      this.photos = [photo]; // Assuming a detailed photo view only shows one photo
      this.loading = false;
    },
  },
});
