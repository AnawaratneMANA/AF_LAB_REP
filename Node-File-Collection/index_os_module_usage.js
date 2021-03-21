const os = require('os');

//Platform
console.log(os.platform());
/*Mac - darwin, windows - win32*/

//CPU architecture
console.log(os.arch());

//CPU cores and hardware information.
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Get the uptime of the server
console.log(os.uptime());
