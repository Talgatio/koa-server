const Koa = require('koa');
const http = require('http');
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const config = require('./config');
const app = new Koa();
const router = require('./routes');

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());
server.listen(config.PORT, () => {
  console.log(`HTTP server started successfully on port ${config.PORT}`);
});
