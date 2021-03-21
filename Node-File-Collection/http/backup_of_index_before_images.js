/* This can be done much easier with express */

const http = require('http');
const path = require('path');
const fs = require('fs');

/*Nodemon help us to restart the server automatically*/

const server = http.createServer((req, res) =>{
    if(req.url == '/'){

        //Read the HTML File from the public folder.
        fs.readFile(path.join(__dirname, 'public', 'index.html'),(err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-type': 'text/html' });
            res.end(content);
        })
    }

    //How to get JSON type object array in Node.
    //This is not ideal therefore ideal way is using express.
    if(req.url == '/api/users'){

        const users = [
            {name: 'Bob Smit', age: 40},
            {name: 'Bob Smit', age: 40},
            {name: 'Bob Smit', age: 40}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
* URL - https://www.youtube.com/watch?v=fBNz5xF-Kx4
* Last Checkpoint - 1:13:19
* */
