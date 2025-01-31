#!/bin/bash

# Start a virtual display on :99
export DISPLAY=:99
Xvfb :99 -screen 0 1280x720x24 &

# Wait a moment for Xvfb to initialize
sleep 2

# Launch Roblox
# Note: Installing and running Roblox on Linux might require a compatibility layer (like Wine)
# or a native client if available. This is a placeholder command.
echo "Launching Roblox..."
# For example, if using Wine:
# wine "/path/to/RobloxPlayerLauncher.exe" &

# Give time for the game to start
sleep 5

# Start FFmpeg to capture the display and stream it
# This command captures the screen and streams it via WebRTC or another protocol.
# You might need a custom solution or middleware that integrates with your Node.js signaling.
echo "Starting stream..."
ffmpeg -f x11grab -r 30 -s 1280x720 -i $DISPLAY -f mpegts udp://127.0.0.1:1234

# Keep the container running
tail -f /dev/null
