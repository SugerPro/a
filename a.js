var http=require('http');
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end("point 8887  init the  wx.libai.com.cn ");
    }).listen(8887);
    
console.log('8887');