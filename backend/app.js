/**
 * Created by nxy on 2018/5/23.
 */
const Koa = require('koa');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const Router = require('./routers/index');
const port = 8888;

const app = new Koa();

// 配置控制台日志中间件
app.use(koaLogger());

// 配置ctx.body解析中间件
app.use(bodyParser());

// 初始化路由中间件
app.use()

app.listen(port, () => {
  console.log('server running at port ' + port);
});