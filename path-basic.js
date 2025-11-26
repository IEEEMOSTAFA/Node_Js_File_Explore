let path = require("path");

console.log("Current file Info: \n");
console.log("firstname: ", __filename);
console.log("firstname: ", __dirname);
console.log("\n" + "-".repeat(50) + "\n");


let filePath = "/shafayat/documents/nextLevel.pdf";
console.log("analyzing Path : ",filePath, "\n");

console.log("Directory: ", path.dirname(filePath));
console.log("BaseName: ",path.basename(filePath));
console.log("File Extension : ",path.extname(filePath));
console.log("File Name : ",path.basename(filePath,path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");
let parsed = path.parse(filePath);
console.log("Parsed Path Object: ",parsed);