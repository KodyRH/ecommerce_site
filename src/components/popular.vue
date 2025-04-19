<template>
    <div class="popular">
        <h2>Popular Items</h2>
        <ul>
            <li v-for="item in popularItems" :key="item.id">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <span>{{ item.price | currency }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Popular",
    data() {
        return {
            popularItems: [
                { id: 1, name: "Item 1", description: "Description of item 1", price: 29.99 },
                { id: 2, name: "Item 2", description: "Description of item 2", price: 49.99 },
                { id: 3, name: "Item 3", description: "Description of item 3", price: 19.99 },
            ],
        };
    },
    filters: {
        currency(value) {
            return `$${value.toFixed(2)}`;
        },
    },
};
</script>

<style scoped>
.popular {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers items horizontally */
    text-align: center; /* Centers text inside the items */
}

.popular h2 {
    font-size: 1.5rem; /* Relative font size */
    margin-bottom: 0.625rem; /* 10px equivalent */
    color: black;
}

.popular ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; /* Use flexbox to align items in a row */
    justify-content: center; /* Center items horizontally */
    gap: 2rem; /* Add spacing between items */
}

.popular li {
    flex: 0 0 auto; /* Prevent items from shrinking or growing */
    max-width: 300px; /* Optional: Limit the width of each item */
    box-sizing: border-box; /* Ensure padding and border are included in width */
    background-color: #100f0f; /* Optional: Add a background color for better visibility */
    padding: 1rem; /* Add padding inside each item */
    border-radius: 8px; /* Optional: Add rounded corners */
    box-shadow: 0 2px 4px rgba(22, 28, 203, 0.1); /* Optional: Add a subtle shadow */
    text-align: center; /* Center text inside each item */
}

.popular li h3 {
    margin: 0;
}

.popular li p {
    margin: 0.3125rem 0; /* 5px equivalent */
}

.popular li span {
    font-weight: bold;
}
</style>