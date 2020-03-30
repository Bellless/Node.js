var http = require('http')

// 创建一个服务器(serve)
var serve = http.createServer();

// 监听serve和request 设置处理函数
// req(request) 请求对象 res(response)响应对象--响应的数据只能是字符串或者二进制,
//字符串，对象，数据不能被识别
serve.on('request', function (req, res) {
  // response.write("hello http")
  // // 结束响应(结束浏览器刷新 显示数据)end可以响应二进制或者字符串数据
  // response.end();

  // 根据不同的请求路径 响应不同的数据
  var url = req.url;
  console.log(req.url);
  // 访问的远程ip地址 （ip地址用去确定服务器[电脑]地址）
  console.log(req.socket.remoteAddress);
  // 访问的端口号 （端口号用于定位具体的请求程序） 所有需要联网的应用程序都需要占用一个端口号
  if (url == '/produce') {
    res.setHeader('Content-Type', 'application/json', 'charset=utf-8');
    var produce = [{
      name: "小明",
      avage: 1
    }, {
      name: "小红",
      avage: 2
    }, {
      name: "小蓝",
      avage: 3  
      }]
    // 响应返回数据 并结束响应
    res.end(JSON.stringify(produce))
  } else {
    res.end("8080端口应用首页信息")
  }
})

// 绑定端口号启动服务
serve.listen(8080, function () {
  console.log("服务器启动 访问ip地址:8080访问");
})