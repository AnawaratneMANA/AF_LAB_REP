const Koa = require('koa');

const HomeRouter = require('./routes/home.routes');

const app = new Koa();

app.use(HomeRouter.routes()).use(HomeRouter.allowedMethods());

app.use(ctx => {
    ctx.body = "Hello";
});

app.listen (3000, err => {
    if(err){
        console.error(err);
        return;
    }
})
