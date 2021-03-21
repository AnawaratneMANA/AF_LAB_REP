const path = require('path');

//Base file name
console.log(__filename)
//file name
console.log(path.basename(__filename));
//Directory
console.log(path.dirname(__filename))
//File extension
console.log(path.extname(__filename))
//Show information in JSON type object.
console.log(path.parse(__filename))
//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
