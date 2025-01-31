// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (your frontend)
app.use(express.static('public'));

// Basic endpoint for starting a new session (this would later trigger container creation)
app.post('/start-session', (req, res) => {
  // TODO: Launch a new Docker container with a Roblox game session.
  // For now, just return a mock session ID.
  res.json({ sessionId: "session123" });
});

// WebSocket signaling for WebRTC and input forwarding
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('signal', (data) => {
    // Relay signaling messages between client and container (or other clients)
    // TODO: Implement session-specific signaling.
    console.log('Received signal:', data);
  });

  socket.on('input', (data) => {
    // Data should include session ID and input event (keyboard, mouse, etc.)
    console.log('Received input event:', data);
    // TODO: Forward input event to the correct container/game instance (perhaps via an API call or direct command)
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
