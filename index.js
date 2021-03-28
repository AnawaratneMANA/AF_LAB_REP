//Importing libraries.
const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');

const app = new Koa ();
const router = new KoaRouter();

//Replace with DB
const things = ['My Family', 'Programming', 'Music'];

//Another library that convert the view to JSON.
app.use(json());

//BodyParser Middleware
app.use(bodyParser());

// Add additional properties to the context
app.context.user = 'Akash';

//Simple Middleware
//app.use(async  ctx => (ctx.body = {msg: "hello world"}));

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})

//Routes (We can make more requests to delete and edit)
router.get('/', index);
router.get('/add', showAdd);
router.post('/add', add); //we can do same route for different request (GET/POST)

//List of things
async function index(ctx){
    await ctx.render('index', {
        title: 'Things I Love:',
        things: things
    });
}

//Show add page
async function showAdd(ctx){
    await ctx.render('add');
}

async function add(ctx){
    const body = ctx.request.body;
    things.push(body.thing);
    ctx.redirect('/');
}
//Test route. and show the parameter user. And how to get the parameters.
router.get('/test', ctx => (ctx.body = `Hello  ${ctx.user}`));
router.get('/test2/:name', ctx => (ctx.body = `Hello  ${ctx.params.name}`));

//Router Middleware.
app.use(router.routes()).use(router.allowedMethods());


//Starting the server.
app.listen(3000, () => console.log('Server Started....'));
