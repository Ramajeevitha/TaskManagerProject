const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors package
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

require('dotenv').config();
require('./db');
const PORT = 8000;

// Enable CORS for all routes
app.use(cors());  // Allow all origins by default, or specify allowed origins

// If you want to restrict CORS to specific origins (for example, localhost:3000), use:
// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with your frontend URL
// }));

// Body parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define your routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Task Manager API is working!'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
