<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { defineProps, defineEmits } from 'vue';

// Define props to accept products and itemsPerRow from the parent component
defineProps({
    products: {
        type: Array,
        required: true,
    },
    itemsPerRow: {
        type: Number,
        default: 4, // Default to 4 items per row
    },
});

// Define emits to notify the parent component of events
const emit = defineEmits(['addToCart', 'viewDetails']);

const handleClick = (product) => {
    emit('addToCart', product);
};

const handleDetailsClick = (product) => {
    emit('viewDetails', product);
};
</script>

<template>
    <div class="card-container" :style="{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }">
        <Card v-for="(product, index) in products" :key="index">
            <template #header>
                <img :src="product.image" alt="Product Image" class="product-image" />
            </template>
            <template #content>
                <h3>{{ product.name }}</h3>
                <p><strong>${{ product.price }}</strong></p>
            </template>
            <template #footer>
                <div class="button-group">
                    <Button label="Add to Cart" class="custom-button" @click="handleClick(product)" />
                    <Button label="More Info" class="custom-button" @click="handleDetailsClick(product)" />
                </div>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.card-container {
    display: grid;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 80%;
    box-sizing: border-box;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.p-card {
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    width: 80%;
    height: auto;
}

h3 {
    color: black;
    /* Make the product title black */
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    color: black;
    /* Make the product price black */
    font-size: 1rem;
    margin: 0.25rem 0;
}

.custom-button {
    background-color: #010b15;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

.button-group {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
}
</style>