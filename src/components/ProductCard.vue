<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button'; // Import PrimeVue Button
import { defineProps, defineEmits } from 'vue';

// Define props to accept products from the parent component
defineProps({
    products: {
        type: Array,
        required: true,
    },
});

// Define emits to notify the parent component of events
const emit = defineEmits(['addToCart', 'viewDetails']);

const handleClick = (product) => {
    console.log(product.id); // Access the product data
    console.log("Add to Cart button clicked");
    emit('addToCart', product); // Emit the product to the parent component
};

const handleDetailsClick = (product) => {
    console.log("View Details button clicked");
    emit('viewDetails', product); // Emit the product to the parent component
};
</script>

<template>
    <div class="card-container">
        <Card v-for="(product, index) in products" :key="index">
            <template #header>
                <img :src="product.image" alt="Product Image" class="product-image" />
            </template>
            <template #content>
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <p><strong>${{ product.price }}</strong></p>
            </template>
            <template #footer>
                <div class="button-group">
                    <Button label="Add to Cart" class="custom-button" @click="handleClick(product)" />
                    <Button id="detailsBtn" label="More Info" class="custom-button" @click="handleDetailsClick(product)" />
                </div>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Four products per row */
    gap: 20px; /* Space between grid items */
    justify-content: center; /* Center the grid horizontally */
    align-items: center; /* Center the grid vertically */
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    
}

@media (max-width: 768px) {
    .card-container {
        grid-template-columns: repeat(2, 1fr); /* Two products per row on smaller screens */
    }
}

@media (max-width: 480px) {
    .card-container {
        grid-template-columns: 1fr; /* One product per row on very small screens */
    }
}


.product-image {
    width: 100%;
    height: 100%; /* Fixed height for images */
    object-fit: cover; /* Ensures the image is not distorted */
}

.p-card-content h3,
.p-card-content p {
    color: #333333;
}

.p-card {
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-out;
    background-color: #FFFFFF;
    width: 80%; /* Decrease the width of the product cards */
    height: auto; /* Allow height to adjust dynamically */
}

.p-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
}

.custom-button {
    background-color: #010b15;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
}

.custom-button:hover {
    background-color: #040b1b !important;
    transform: scale(1.1);
}

.button-group {
    display: flex;
    justify-content: space-between; /* Push buttons to the left and right */
    align-items: center; /* Align buttons vertically */
    gap: 10px; /* Add spacing between buttons */
    width: 100%; /* Ensure the button group spans the full width of the card */
    padding: 0 10px; /* Optional: Add padding to the sides */
    margin-top: 20px; /* Optional: Add margin to the top */
}
</style>