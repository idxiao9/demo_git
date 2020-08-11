const Koa = require('koa')
const mysql = require('mysql2')

const app = new Koa()

const config = {
	host: '47.115.136.23',
	user: 'dms',
	password: 'Zxk*845120',
	database: 'leon',
	queueLimit: 0,
	connectionLimit: 10,
	waitForConnections: true
}

const sqlText = 'select * from `storys` where `id` = ?'

let query = (id,cb) => {
	const pool = mysql.createPool(config)
	const promisePool = pool.promise()
	
		promisePool.execute(sqlText,[id]).then(([rows,feilds]) => {
			const evi = "lol"
			cb(rows)
		}).catch((err) => {
			console.log(err)
		}).finally(() => {
			console.log("query have been invoked")
			 pool.end()
			})
}

let amount = (value) => {
	app.use((ctx) => {
		ctx.body = value
	})
}

query(1,amount)

app.listen(3000,() => console.log('server is running in 3000 port!'))