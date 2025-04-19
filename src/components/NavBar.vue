<template>
  <nav class="navbar">
    <div class="logo">Grave Threads</div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo {
  font-family: 'FightingSpirit', sans-serif;
  font-size: 1.8rem;
  color: black;
}

.navbar ul {
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar a {
  color: black;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
