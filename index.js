const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
    ctx.body = 'Koa API';
});

app.listen(3000);