koa-router的基本用法：

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
});

app
  .use(router.routes())
  .use(router.allowedMethods());
  
router.all('/user' , (ctx,next) => { }) all() 可以匹配所有方法 .get|put|post|patch|delete|del 

When a route is matched, its path is available at ctx._matchedRoute and if named, the name is available at ctx._matchedRouteName

Route paths will be translated to regular expressions using path-to-regexp.

Query strings will not be considered when matching requests.

Router prefixes
Route paths can be prefixed at the router level:

const router = new Router({
  prefix: '/users'
});

router.get('/', ...); // responds to "/users"
router.get('/:id', ...); // responds to "/users/:id"
URL parameters
Named route parameters are captured and added to ctx.params.

router.get('/:category/:title', (ctx, next) => {
  console.log(ctx.params);
  // => { category: 'programming', title: 'how-to-node' }
});