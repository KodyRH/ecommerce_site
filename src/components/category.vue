<template>
  <div class="category">
    <h2>Shop by Category</h2>
    <ul>
      <li v-for="category in categories" :key="category.id" @click="selectCategory(category.name)"
        :class="{ active: selectedCategory === category.name }">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      categories: [
        { id: 1, name: "OG Design" },
        { id: 2, name: "New Arrivals" },
        { id: 3, name: "Most Popular" },
      ],
      selectedCategory: null,
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      // Emit the selected category to the parent component
      this.$emit("categorySelected", category);
    },
  },
};
</script>

<style scoped>
.category {
  padding: 20px;
  text-align: center;
}

.category h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: black;
  /* Set text color to black */
}

.category ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.category li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  color: black;
  /* Set text color to black */
}

.category li:hover {
  background-color: #f0f0f0;
}

.category li.active {
  background-color: #007bff;
  color: white;
  /* Keep text white for the active state */
  border-color: #007bff;
}
</style>