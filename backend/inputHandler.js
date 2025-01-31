// inputHandler.js
const { exec } = require('child_process');

function simulateKeyPress(key) {
  // Use xdotool to simulate a key press within the container or on the host
  exec(`xdotool key ${key}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error simulating key press: ${error.message}`);
    } else {
      console.log(`Simulated key press: ${key}`);
    }
  });
}

// Export additional handlers as needed
module.exports = {
  simulateKeyPress,
  // simulateMouseEvent, etc.
};
