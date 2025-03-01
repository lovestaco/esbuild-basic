(() => {
  // file2.js
  function getMessage() {
    return "Hello from bundled file2.js to dev.to!";
  }

  // file.js
  function runDemo() {
    console.log("Executing bundled script...");
    const message = getMessage();
    document.getElementById("output").textContent = message;
  }
  window.runDemo = runDemo;
})();
