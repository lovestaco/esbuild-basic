import { getMessage } from "./file2.js";

function runDemo() {
  console.log("Executing bundled script...");

  const message = getMessage();
  document.getElementById("output").textContent = message;
}

// Export for browser access
window.runDemo = runDemo;
