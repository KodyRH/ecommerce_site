<script setup lang="js">


</script>

<template>
 
 
</template>

<style scoped>
.hero {
  height: 100vh;
  /* Full viewport height */
  width: 100vw;
  /* Full viewport width */
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/path-to-your-image.jpg') center center / cover no-repeat;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  padding: 0;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.5);
  /* optional overlay */
  padding: 2rem;
  border-radius: 1rem;
  max-width: 800px;
  color: #fff;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

p {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
</style>

<style>
/* Global styles to prevent scrolling */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;

}
</style>