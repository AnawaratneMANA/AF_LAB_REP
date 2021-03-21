/* This can be done much easier with express*/

const http = require('http');
const path = require('path');
const fs = require('fs');

/*Nodemon help us to restart the server automatically*/

const server = http.createServer((req, res) => {
    //Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    //Extension of the file
    let extname = path.extname(filePath);
    console.log(extname);
    //Initial content type
    let contentType = "text/html";

    //Check ext and set Content type
    switch (extname) {
        case '.js':
            contentType = "text/javascript";
            break;
        case '.css':
            contentType = "text/css";
            break;
        case '.json':
            contentType = "application/json";
            break;
        case '.png':
            contentType = "image/png";
            break;
        case '.jpg':
            contentType = "image/jpg";
            break;
    }
    console.log(contentType);
    //Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code === "ENOENT"){
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-type': contentType});
                    res.end(content, 'utf8');
                })
            } else {
                //Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {

            res.writeHead(200, {"Content-Type" : contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
* URL - https://www.youtube.com/watch?v=fBNz5xF-Kx4
* Last Checkpoint - 1:13:19
* */
