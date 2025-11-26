let crypto = require("crypto");


console.log("\n MD Hash: ");

let md5Hash = crypto.createHash("md5").update("password123").digest("hex");
let md5Hash2 = crypto.createHash("md5").update("password123").digest("hex");

console.log("input password: password123");
console.log("MD5 hashed password:",md5Hash);
console.log("MD5 hashed password2:",md5Hash2);

let sha256Hash = crypto.createHash("sha256").update("password123").digest("hex"); 
console.log("input: password123");
console.log("ShA256 Hash Password:",sha256Hash);



