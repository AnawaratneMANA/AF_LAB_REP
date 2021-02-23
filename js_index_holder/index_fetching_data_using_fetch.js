//Call APIs and fetch JSON type data.
fetch
("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        return response.json();
    }).then(function (data) {
    console.log(data)
});

/*
This will get printed first because JavaScript
is a Asynchronous language, Specially when it come to
HTTP calls (I/O)
 */
console.log("here")

/*
What happens
Capturing the response have 3 types

    1. Call backs
    2. Promises
    3. Async wait.

This method we have is promise type. Promises have a method called
.then() it will get the output from the first operation and then use it
in the next function because then() accept another function as a parameter.


*/


