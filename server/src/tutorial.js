const Koa = require ('koa')
//静态文件组件
const static = require('koa-static')
const path = require('path')
//ctx.render 渲染指定页面到路由
const render = require('koa-art-template')
//路由组件
const Router = require('koa-router')
//bodyParser后才能获取post数据
const bodyParser=require('koa-bodyparser')

const app = new Koa()
//也可以直接写成 const router = require('koa-router')()
const router = new Router()

//配置跨域的中间件
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.headers.origin); // 很奇怪的是，使用 * 会出现一些其他问题
    ctx.set('Access-Control-Allow-Headers', 'content-type');
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
    await next();
})

//指定render路径，注意extname中要把.加上，debug作用未知
render(app,{
	root:path.join(__dirname,'views'),
	extname: '.html',
	debug: process.env.NODE_ENV !== 'production',
})

//配置静态文件地址，文件路径为root/filename
app.use(static(__dirname+"/static"))

//前端post请求发送formData的类型数据时，需要服务端引入中间件body-parser，
// 主要原因是post请求发送的数据，是在http的body里面，所以需要进行解析，否则获取不到数据（数据为空）
app.use(bodyParser())

//可以写成瀑布流，next不是必须，注意异步流程，可以用log方法测试执行顺序来检测
router
.get('/', async (ctx,next) => {
	await ctx.render('index')
})
.post('/add' ,(ctx,next) =>{
	// post 请求中的数据通过bodyparse解析后，才可以在ctx.request.body读取
	  console.log(ctx.request.body)
	 //重定向到其他页面去
	ctx.redirect('/')
})

//将配置好的router做为中间件 挂载到app中去
app.use(router.routes());
app.use(router.allowedMethods());

//配置端口号，以及成功时的回调函数
app.listen(8000,()=>console.log("8000 port"))