// index.js
const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "Basic");

fs.watch(folderPath, (eventType, filename) => {
  if (filename && filename.endsWith(".js")) {
    console.clear();
    console.log(`--- Ejecutando: ${filename} ---`);
    const filePath = path.join(folderPath, filename);
    require("child_process").exec(
      `node "${filePath}"`,
      (err, stdout, stderr) => {
        if (err) {
          console.error(stderr);
        } else {
          console.log(stdout);
        }
      }
    );
  }
});
