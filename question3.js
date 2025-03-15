// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a GET route at '/test'
app.get('/test', (req, res) => {
    // Send a JSON response with a message
    res.send({ message: 'Express is working! Jovan T. Gocela' });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    // Log a message indicating the server is running
    console.log('Server is running on port 3000');
});
