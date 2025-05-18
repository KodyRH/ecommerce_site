<script setup>
import './assets/fonts.css'; // <-- Import font styles
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue'; // Correct casing
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view /> <!-- This is where Vue will display your pages -->
    </main>
    <Footer class="footer" />
  </div>
</template>

<style scoped>
/* Ensure the body background color applies globally */
body {
  background-color: #F9F9FB !important;
  margin: 0;
  padding: 0;
}

/* App container to structure the layout */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes up the full viewport height */
}

/* Main content area */
.main-content {
  /* margin-top:5%; */
  flex: 1; /* Allow the main content to grow and take up available space */
  padding: 50px; /* Add padding to prevent content from touching the edges */
  box-sizing: border-box; /* Include padding in the element's width and height */
}

.footer {
  margin-top: 20%; /* Add a margin-top of 50% */
}

</style>