//Assignment 3: Company Product Catalog
//Learning Objective: Implement data structures in TypeScript to represent and manage product
//information.
//Task: Create a program to represent a product catalog using an array and perform basic queries.
//1. Define an array named inventory to store product information.
//2. Create three separate objects, each representing a product, with properties like name,
//model, cost, and quantity.
//3. Add these product objects to the inventory array using an appropriate array method.
//4. Access and log the quantity property of a specific product (e.g., third product) in the
//inventory array.
//5. Explore adding and accessing more elements within the inventory array to understand
//how to manage product data.
var inventory = [];
var product01 = {
    name: "laptop",
    model: "lenovo",
    cost: 25000,
    quantity: 1
};
var product02 = {
    name: "mobile phone",
    model: "infinix hot12",
    cost: 500000,
    quantity: 6
};
var product03 = {
    name: "airpods",
    model: "apple airpods pro",
    cost: 168999,
    quantity: 4
};
inventory.push(product01, product02, product03);
console.log('Quantity of third product: ${inventory[2].quantity}');
var product04 = {
    name: "tablet",
    model: "samsung galaxy tab",
    cost: 60000,
    quantity: 5
};
inventory.push(product04);
console.log(product01, product02, product03, product04);
