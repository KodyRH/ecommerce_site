<script>
import { ref, onMounted, onUnmounted } from 'vue';
import products from '@/Data/products';

export default {
  name: 'HeroSection',
  setup() {
    // Pick 4 products for the gallery
    const galleryItems = products.slice(0, 4);
    const currentIndex = ref(0);
    let intervalId = null;

    onMounted(() => {
      intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % galleryItems.length;
      }, 4000); // Change image every 4 seconds
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return { galleryItems, currentIndex };
  }
};
</script>

<template>
  <div class="container">
    <div class="mission">
      <h2>Mission</h2>
      <p>
        At Artisan Grit, we blend bold art with streetwear to create unique designs.
        Every piece tells a story—designed to empower, express, and stand out.
      </p>
    </div>

    <div class="product-images">
      <transition name="fade" mode="out-in">
        <img
          v-if="galleryItems[currentIndex]"
          :key="galleryItems[currentIndex].id"
          :src="galleryItems[currentIndex].image"
          :alt="galleryItems[currentIndex].name"
          class="gallery-image"
        />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
}

.mission {
  color: black;
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
}

.product-images {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.gallery-image {
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.7s;
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.main-content{
  margin-top: 0 !important;
}
</style>