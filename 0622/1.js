//引包
let express =require('express');
let server=express();
server.listen(4000); //监听端口
server.get('/add',function(request,response){
    response.send({data:[
        {name:"张三",age:18},
        {name:"李四",age:20}
    ]});
    response.end();



})
//设置静态文件夹
server.use(express.static('www'))