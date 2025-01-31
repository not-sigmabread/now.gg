# Use a lightweight Linux base image
FROM ubuntu:20.04

# Install necessary packages
RUN apt-get update && apt-get install -y \
    xvfb \
    ffmpeg \
    x11-utils \
    xdotool \
    wget \
    libx11-6 \
    # Add any dependencies required for Roblox here
    && rm -rf /var/lib/apt/lists/*

# Copy the script that launches Roblox and starts streaming
COPY launch-roblox.sh /usr/local/bin/launch-roblox.sh
RUN chmod +x /usr/local/bin/launch-roblox.sh

# Start the launch script
CMD ["/usr/local/bin/launch-roblox.sh"]
