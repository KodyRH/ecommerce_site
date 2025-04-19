<script setup>

import './assets/fonts.css'; // <-- Import font styles
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue'; // Correct casing
</script>

<template>
  <div>
    <NavBar />
    <router-view /> <!-- This is where Vue will display your pages -->
    <Footer /> <!-- Correct casing -->
  </div>

</template>

<style>

body {
  background-color: #F9F9FB !important;

}
</style>
