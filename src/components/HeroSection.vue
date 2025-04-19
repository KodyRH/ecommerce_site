<template>
    <div class="container">
      <div class="mission">
        <h2>Our Mission</h2>
        <p>
          At Grave Threads, we blend bold art with streetwear to create unique, skeleton-inspired designs.
          Every piece tells a story—designed to empower, express, and give back to the community.
        </p>
      </div>
  
      <div class="product-images">
       <h1>Stuff</h1>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'HeroSection'
  }

  
  </script>
  
  <style scoped>
 .container {
  display: flex;
  justify-content: space-between;
  background-color: red !important;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
}

.mission {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
}

.product-images {
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.product-images img {
  width: 150px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
  </style>