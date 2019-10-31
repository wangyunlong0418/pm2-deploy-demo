const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = 'hello koa'
})

app.listen(8090, () => {
    console.log('server is running ');
})