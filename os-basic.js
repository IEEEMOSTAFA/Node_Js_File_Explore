let os = require("os");

console.log("system info ..\n");
console.log("-".repeat(70));

console.log("\n Platform Details: ");

console.log("Platform  : ", os.platform());
console.log("Architecture  : ", os.arch());
console.log("Type  :", os.type());
console.log("HostName  :", os.hostname());

console.log("-".repeat(70));
console.log("CPU info ::: \n");
let cpus = os.cpus();
console.log("CPU Model : ",cpus[0].model);
console.log("Numbers of Cores : ",cpus.length);
console.log("CPU speed : ",cpus[0].speed);
console.log("CPU info ::: \n");
let totalMem = os.totalmem();
let freeMem = os.freemem();
let uptime = os.uptime();
console.log("Total Memory In the CPU  : ",(totalMem /1024/1024/1024).toFixed(2),"GB");
console.log("Total Free Memory In the CPU  : ",(freeMem /1024/1024/1024).toFixed(2),"GB");
console.log("CPU info ::: \n");


let days = Math.floor(uptime / 86400);
let hours = Math.floor((uptime % 86400) / 3600);
let minutes = Math.floor((uptime % 86400) / 60);

console.log(`${days} days ${hours} Hours ${minutes} Minutes`);