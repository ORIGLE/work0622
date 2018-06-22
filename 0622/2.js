//引包
const express =require("express");
const mysql=require("mysql");
const servse=express();
servse.listen('4000'); //监听端口
//连数据库
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'database'
})
servse.get('/selet',function(request,response){
  db.query('select*from user',function(err,data){
      response.send({data});
      response.end();
  })

})
//设置静态文件夹
servse.use(express.static('www'))