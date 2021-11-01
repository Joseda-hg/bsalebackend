module.exports = app => {
    const products = require("../controllers/product.controller.js");
    const categories = require("../controllers/category.controller.js");
  
    // Retrieve all Customers
    app.get("/api/products", products.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/api/products/:productId", products.findOne);
    
    // Retrieve a single Customer with customerId
    app.get("/api/categories/", categories.findAll);

    // Retrieve a single Customer with customerId
    app.get("/api/products/category/:CategoryId", products.findByCategory);

    // Retrieve a single Customer with customerId
    app.get("/api/search/:searchTerm", products.search);
  };