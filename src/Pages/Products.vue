<script setup lang="js">
import 'animate.css';
import ProductCard from '../components/ProductCard.vue';
import products from '@/Data/products'; // Import your products data


// Handle events emitted by ProductCard
const handleAddToCart = (product) => {
    console.log("Product added to cart:", product);
};

const handleViewDetails = (product) => {
    console.log("View details for product:", product);
};
</script>

<template>
    <div class="page-with-margin">


        <div class="container">
            <h1 class="animate__animated animate__fadeInDown">Welcome to the products page</h1>
            <p class="animate__animated animate__bounceInLeft">New products coming soon!</p>
            <!-- Pass products and handle emitted events -->
            <ProductCard :products="products" @addToCart="handleAddToCart" @viewDetails="handleViewDetails" />
        </div>

    </div>
</template>

<style scoped>
body {
    background-color: rgb(255, 255, 255);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Center horizontally */
    justify-content: center;
    /* Center vertically */
    text-align: center;
    /* Center text inside the container */
    height: 180vh;
    /* Full viewport height */
    padding: 20px;
    box-sizing: border-box;
}

h1 {
    color: #1C1C1C;
    margin-bottom: 10px;
    /* Add spacing between h1 and p */
}

.page-with-margin {
    margin-top: 5% !important;
}

p {
    color: #1C1C1C;
    margin-bottom: 20px;
    /* Add spacing between p and ProductCard */
}
</style>