const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const routing = require('./routes');


app.use(bodyParser());
routing(app);

// app.use((ctx) => {
//     if(ctx.url === '/') {
//         ctx.body = 'home';
//     } else if(ctx.url === '/users') {
//         if(ctx.method === 'GET') {
//             ctx.body = '请求用户列表';
//         } else {
//             ctx.status = 405;
//         }
//     } else if(ctx.url.match(/\/users\/(\w+)/)) {
//         const id = ctx.url.match(/\/users\/(\w+)/)[1];
//         ctx.body = "用户ID" + id;
//     }
//     else { ctx.status = 404; }
// });

app.listen(3000, () => console.log('已启动3000'));
