//File System Module - fs module.
const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log("Folder created....");
// });

//Creating a file and writing data into the file.
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'), 'Hello world!',
//     err => {
//     if(err) throw err;
//     console.log("File written to....");
// });

//If we want to add another content we can run it again
/* but it will overwrite the content which are inside the file*/
// fs.appendFile(
//     path.join(__dirname, '/test', 'hello.txt'), '\n' + 'I Love Node JS',
//     err => {
//         if(err) throw err;
//         console.log("File append to....");
//     });

//Reading a file and print data in the file.
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),
//     'utf8',(err, data) => {
//         if(err) throw err;
//         console.log('Data in the File - ' + data);
//     });


//Rename a file
// fs.rename(
//     path.join(__dirname, '/test', 'hello.txt'),
//     path.join(__dirname, '/test', 'helloworld.txt'),
//     err => {
//         if(err) throw err;
//         console.log("File renamed to ....");
//     });
