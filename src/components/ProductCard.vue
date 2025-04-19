<script setup>
import Card from 'primevue/card'
import products from '@/Data/products';
import { ref } from 'vue';
import Button from 'primevue/button';  // Import PrimeVue Button
const productNames = ref([]);

products.forEach(product => {
    productNames.value.push(product.name);
});

console.log(productNames.value);

const handleClick = (product) => {
    console.log(product.id); // have access to the product data
    console.log("button clicked");
    // I will emit this data to the cart page when the user clicks on it. 
}

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
                    <Button id="detailsBtn" label="More Info" class="custom-button" />
                </div>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3 columns */
    grid-template-rows: repeat(3, 1fr);
    /* 3 rows (for a 3x3 grid) */
    gap: 20px;
    /* Space between grid items */
    width: 60vw;
    /* Takes up the full viewport width */
    height: 80vh;
    /* Takes up the full viewport height */
    padding: 20px;
    box-sizing: border-box;
    /* Ensures padding doesn't overflow */
}

#detailsBtn {
    margin: auto;
}

.product-image {
    width: 100%;
    /* Makes image fill the card's width */
    height: 100%;
    /* Ensures the image fills the card's height */
    object-fit: cover;
    /* Ensures the image is not distorted */
}

.p-card-content h3,
.p-card-content p {
    color: #333333;
}

body {
    display: flex;
    justify-content: center;
    /* Horizontally center */
    align-items: center;
    /* Vertically center */
    height: 100vh;
    /* Full viewport height */
    margin: 0;
    /* Remove default margin */
}

.p-card {
    border: 2px solid black;
    /* Adds a black border */
    border-radius: 8px;
    /* Optional: adds rounded corners */
    padding: 10px;
    /* Adds some spacing inside the card */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* Optional: adds a slight shadow */
    transition: transform 0.3s ease-out;
    transform-style: preserve-3d;
    /* Keeps 3D child elements */
    will-change: transform;
    /* Optimizes rendering performance */
    backface-visibility: hidden;
    background-color: #FFFFFF;

}

.p-card:hover {
    /* transform: rotateY(10deg) rotateX(5deg) scale(1.05); */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
}

/* Scoped CSS with deep selector */
.custom-button {
    background-color: #007bff;
    /* Default background color */
    color: white;
    /* Text color */
    padding: 10px 20px;
    /* Padding for the button */
    border-radius: 5px;
    /* Rounded corners */
    font-weight: bold;
    /* Bold text */
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    /* Ensure cursor is a pointer when hovering over the button */
}

/* Hover effect for the Button */
.custom-button:hover {
    background-color: #2059d2 !important;
    transform: scale(1.1);
    /* Slightly enlarge the button on hover */
    cursor: pointer;
    /* Ensure cursor is pointer when hovering */
}


.button-group {
    display: flex;
    gap: 10px;
    /* Adjust spacing here */
    flex-wrap: wrap;
    /* Optional: wrap on smaller screens */
}


</style>
