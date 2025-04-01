<script setup lang="js">
import { ref } from 'vue';
import Card from 'primevue/card';
import 'animate.css';
import ProductCard from '../components/ProductCard2.vue';

</script>

<template>
    <div class="container">
        <h1 class="animate__animated animate__fadeInDown ">Welcome to the products page</h1>
        <p class="animate__animated animate__bounceInLeft">New products coming soon!</p>
        <ProductCard></ProductCard> 
    </div>
    <!-- probably should call this something different because I am putting listing all my products in the actuall component productcard which doesn't make a whole lot of sense. -->
</template>


<style scoped>
body {
    background-color: rgb(255, 255, 255);
}


h1 {
    color: red;
    /* This will color the text red */
}

p{
    color:red;
}


</style>