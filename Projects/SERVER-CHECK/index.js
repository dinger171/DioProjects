// Define the server IP and port
var serverIP = "147.185.221.19";
var serverPort = 64363;

// Get the status element
const statusElement = document.getElementById("status");

// Function to check server status
async function checkServerStatus() {
  try {
    const response = await fetch(
      `https://api.mcsrvstat.us/2/${serverIP}:${serverPort}`
    );
    const data = await response.json();

    if (data.online) {
      statusElement.innerHTML = `Server is <span id="online">online!</span>`;
      document.getElementById(
        "players"
      ).innerHTML = `Players count: <b>${data.players.online}</b>`;
      document.getElementById(
        "players-list"
      ).innerHTML = `Players: <b>${data.players.list.join(", ")}</b>`;
    } else {
      statusElement.innerHTML = 'Server is <span id="offline">offline</span>.';
    }
  } catch (error) {
    statusElement.textContent = "Error fetching server status.";
    console.error(error);
  }
}

// Apply user-entered settings
function applySettings() {
  serverIP = document.getElementById("ip_enter").value || "147.185.221.19";
  serverPort = document.getElementById("port_enter").value || 64363;
  document.getElementById("ip_show").innerHTML = `${serverIP}:${serverPort}`;
}

// Call the function when the page loads
window.addEventListener("load", () => {
  checkServerStatus();
  setInterval(checkServerStatus, 5000); // Refresh every 5 seconds
  setInterval(applySettings, 50); // Apply settings continuously
});
