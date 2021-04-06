//Getting all the exported methods
const Router = require('koa-router');
const {createPost, getPost, getPosts} = require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
});

router.get('/', ctx=> {
    ctx.body = getPosts();
});

router.post('/', async ctx=> {
    let post = ctx.request.body;
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id',ctx => {
    const id = ctx.params.id;
    ctx.body = getPost(id);
});


module.exports = router;

