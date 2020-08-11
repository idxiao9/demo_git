const Koa = require("koa")
const mysql = require("mysql2")

const config = {
	host: "47.115.136.23",
	user: "dms",
	password: "Zxk*845120",
	database: "leon",
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
}
const sqlText = 'select * from `storys` where `id` = ?'

const app = new Koa()

const pool = mysql.createPool(config)

let poolPromise = pool.promise()
	
	poolPromise.execute(sqlText,[1]).then(([rows,feilds])=>{
		app.use(ctx => {
			ctx.type = 'json'
			ctx.body = rows
		})
	}).catch(err => console.log(err))







app.listen(8000,()=>console.log("server is running at 8000 port"))