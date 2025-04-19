<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h3>About Us</h3>
        <p>
          Welcome to our e-commerce store! We offer a wide range of products to suit your needs. Shop with confidence and enjoy great deals every day.
        </p>
      </div>
      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: support@ecommerce.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 E-commerce St, Shop City, SC 12345</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 E-commerce Store. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
}

.footer-section {
  flex: 1;
  margin: 10px;
  min-width: 200px;
}

.footer-section h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.footer-section p,
.footer-section ul {
  font-size: 0.9rem;
  line-height: 1.5;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #007bff;
}

.footer-bottom {
  margin-top: 20px;
  font-size: 0.8rem;
}
</style>