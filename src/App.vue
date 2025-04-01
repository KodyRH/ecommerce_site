<script setup>


import NavBar from './components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar />
    <router-view /> <!-- This is where Vue will display your pages -->
  </div>

</template>

<style scoped>
body{
  background-color: white;
}
</style>
