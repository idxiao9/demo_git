const koa = require("koa")
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
const getSql = (table) => {
	return ` selcet * from ${table} where id =```
}

const app = new koa()

const pool = mysql.createPool(config)

pool.query(sqlText,[1], (err,rows,fields) => {
	
	
})

function getresult(id) {
	const promisePool = pool.promise()
		
	  promisePool.execute (sqlText,[id]).then(([rows,fields]) =>{
		  // console.log(rows[0].content)
		  console.log(321)
		 app.use(  (ctx) => {
			 
				ctx.body = rows[0].content
				console.log(123) 
			 
				
	})
	  }).catch(err => {
		  console.log(err)
	  })
	 
}


getresult(2)



	
	app.listen(3000,() => {
		console.log( "sever is running at 3000 port!")
	})
	
	
	