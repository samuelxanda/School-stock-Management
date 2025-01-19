// Import express
const express = require('express');

// Create an Express app
const app = express();

// Set the port for the server
const port = 5000;  // You can change this to any port you prefer

// Middleware to handle JSON requests
app.use(express.json());

// Create a basic route
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to Express');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
