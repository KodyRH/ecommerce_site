<template>
    <div class="popular">
        <h2>Popular Items</h2>
        <ProductCard :products="filteredProducts" :itemsPerRow="3" @addToCart="handleAddToCart"
            @viewDetails="handleViewDetails" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';
import productsData from '../Data/products.js';

// Define the products data using the Composition API
const products = ref(productsData);

// Define a filtered array of products (control which items to display)
const filteredProducts = computed(() => {
    // Replace the IDs below with the IDs of the products you want to display
    const selectedProductIds = [1, 3, 5];
    return products.value.filter(product => selectedProductIds.includes(product.id));
});

// Define methods for handling events
const handleAddToCart = (product) => {
    console.log('Add to Cart:', product);
};

const handleViewDetails = (product) => {
    console.log('View Details:', product);
};
</script>

<style scoped>
.popular {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.popular h2 {
    font-size: 1.5rem;
    margin-bottom: 0.625rem;
    color: black;
}
</style>