const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const folder = "./Basic";

fs.watch(folder, (eventType, filename) => {
  if (filename && filename.endsWith(".js")) {
    const filepath = path.join(folder, filename);
    console.clear();
    console.log("🚀 Ejecutando el archivo más reciente:", filename);
    exec(`node "${filepath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`⚠️  Stderr: ${stderr}`);
        return;
      }
      console.log(stdout);
    });
  }
});
