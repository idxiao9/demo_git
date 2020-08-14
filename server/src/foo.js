const Koa = require('koa')
const mysql = require('mysql2')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const config = {
	host: '47.115.136.23',
	user: 'dms',
	password: 'Zxk*845120',
	database: 'leon',
	queueLimit: 0,
	connectionLimit: 10,
	waitForConnections: true
}
let log = (value) => {
	console.log(value)
}
const sqlText = 'select * from `storys` where `id` = ?'

let query = (id,cb) => {
	const pool = mysql.createPool(config)
	const promisePool = pool.promise()
		log(123)
		promisePool.execute(sqlText,[id]).then(([rows,feilds]) => {
			cb(rows)
		}).catch((err) => {
			console.log(err)
		}).finally(() => {
			console.log("query have been invoked")
			 pool.end()
			})
			log(456)
}

let amount = (value) => {
	app.use((ctx) => {
		ctx.body = value
	})
}

let amount1 = (value) => {
	router.get('/api/:id',(ctx,next)=>{
		console.log(ctx.params)
		ctx.body = value
	})
}
router
.get('/list' ,(ctx ,next) => {
	ctx.body = "list"
	log(1)
})
.get('api','/api' , (ctx , next) => {
	console.log(ctx.params)
	console.log(ctx._matchedRouteName)
	ctx.body = "this is the api systems"
	log(2)
})
log(3)

query(1,amount)
query(2,amount1)
log(789)

app.use(router.routes())
	.use(router.allowedMethods())

app.listen(3000,() => console.log('server is running in 3000 port!'))