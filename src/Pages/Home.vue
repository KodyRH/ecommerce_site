<template>
  <div>
    <HeroSection />
    <Popular />
    <Category />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import Popular from '@/components/popular.vue'
import category from '@/components/category.vue'
import Category from '../components/category.vue'
export default {
  components: {
    HeroSection,
    Popular,
    Category
  }
}
</script>