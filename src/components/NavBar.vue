<template>
    <nav class="navbar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/products">Products </router-link></li>
            <li> <router-link to="/cart">Cart</router-link></li>
        </ul>

    </nav>
</template>
<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  position: fixed; /* Keep it at the top */
  top: 8px;
  right: 12px;
  z-index: 1000;
}

.navbar ul {
  display: flex;
  gap: 15px; /* Space between the links */
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>