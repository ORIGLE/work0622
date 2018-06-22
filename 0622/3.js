var mysql = require('mysql');
var connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'database',
    port:3306
});
connect.connect();
console.log("mysql has connnected");
connect.end();
console.log("mysql has colsed");