const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Mahesh@1313'
})

module.exports=pool.promise();