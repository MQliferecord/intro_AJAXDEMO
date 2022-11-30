const { request, response } = require('express');
//引入express
const express = require('express');
//建立实例对象
const app = express();
//创建路由规则
/**
 * @request 请求报文
 * @response 响应报文
 */
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('HELLO AJAX');
});

app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('HELLO AJAX');
});

app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {
        name:'MQliferecord'
    };
    response.send(JSON.stringify(data));
});

app.all('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('HELLO IE -8');
});

app.all('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('HELLO IE -8');
    },3000);
});

app.all('/jquery',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {
        name:'MQlifeRecord'
    }
    response.send(data);
});

app.all('/axios',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('hello axios');
});

app.all('/fetch',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('hello fetch');
});

app.all('/jsonp',(request,response)=>{
    const data = {
        name:'MQliferecord'
    };
    let res = JSON.stringify(data);
    response.end(`handle(${res})`);
});



//监听端口
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中......");
})