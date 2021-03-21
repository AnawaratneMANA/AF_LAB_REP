//Importing libraries
const Koa = require('koa'); //Contains the parsing method.
const bodyParser = require('koa-bodyparser');

//Importing the logic files that we have crated.
const HomeRoute = require('./home.router');
const PostRoute = require('./api/posts.route');



//Creating the Koa application
const app = new Koa();

//Registering the body-parser.
app.use(bodyParser());
/**
 * Content-Type = application/ json when bodyParse see this it will convert it
 * into the relevant format. understand the type of body and convert this is also a middleware.
 * Middleware will not block unless we specifically ask. Unlike below routes it will not execute
 * anything below other than the one getting hit.
 */

//We are registering the routes.
app.use(HomeRoute.routes()).use(HomeRoute.allowedMethods());

app.use(PostRoute.routes()).use(PostRoute.allowedMethods());

//Default statement if both of the above /post or /home are not present
app.use(ctx => {
    ctx.body = 'Hello Default';
});

console.log("Server is running at port 3000");
app.listen(3000, err=>{
    if(err){
        console.log(err);
    }
});

/**
 * NPM Dependacy installation documentation - https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
 */

/**
 * in UUID v1 they also some part from the mac as well therefore
 * some times some part of v1 addresses are same but v4 use all randomly
 * generate numbers. so entire thing is unique.
 */


/**
 * koa-router has built in method to define the routes we don't have to
 * write switch statements/ if statement but it will automatically help us to
 * have the post/get methods in a modular way.
 */
