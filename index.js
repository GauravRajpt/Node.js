const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 4000; // Assuming your API is running on port 4000

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Define a POST route to accept data in req.body
app.post('/api/data', (req, res) => {
  const requestData = req.body;
  res.json({ message: 'Data received successfully', data: requestData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
