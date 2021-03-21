//URL Module
const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100$status=active');

//Serialized URL
console.log(myUrl.href);

//Convert the URL into String/
console.log(myUrl.toString());

//Getting the host only
console.log(myUrl.host);

//Host name (Port number is not there)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Create a object - Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}', ${value}`));

