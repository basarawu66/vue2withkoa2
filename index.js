const Koa = require('koa');
const koastatic = require('koa-static');
const path = require('path');
const router = require('./server/routes');
const logger = require('koa-logger');

const app = new Koa();
const port = process.env.PORT || '3000';
// const http = require('http');
let io

console.log('here');

console.log(path.join(__dirname, "/dist"));
app.use(logger())
app
  .use(router.routes())
  .use(router.allowedMethods());

// console.log('here1');
//app.use(koastatic(path.join(__dirname, "/dist")));
// app.use(koastatic(path.join(__dirname, "/test")));
app.use(koastatic(path.join(__dirname, "/dist")));

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
})

let server = app.listen(port, () => {
  console.log('started http://localhost:', port);
})
