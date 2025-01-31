// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { simulateKeyPress, simulateMouseEvent } = require('./inputHandler');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the frontend public folder
app.use(express.static('../frontend/public'));

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('input', (data) => {
    // Example: data might include a sessionId, type of event, and details
    console.log('Received input:', data);
    // Call your input handling functions
    if (data.type === 'keydown') {
      simulateKeyPress(data.key);
    }
    // Add additional cases for other input types as needed
  });
});

server.listen(3000, () => console.log('Server listening on port 3000'));
