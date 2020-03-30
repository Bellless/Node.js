// 1.引包
var express = require('express');
// 2.创建一个服务器
var app = express();
// 公开某个指定目录能被公用访问
// use第一个参数为请求地址中的 第二个为static中具体的文件
// /static/xxxx
app.use("/static/", express.static("./static/"));
// 引用模板引擎
app.engine('html', require('express-art-template'))
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// 没有明确的地址，所有请求路径都能进去该方法
// app.use(function () {
//   console.log("万能匹配中间件");
// })
// 当用户请求地址以 './a'开头 则进入该请求中 例如请求地址：./aasasas/casas或者./a/dasda
app.use('/zhongjian', function (req, res, next) {
  console.log("express中间件匹配");
  // 如果没有next()方法 或许的中间件匹配规则不执行==break
  next();
});
app.get('/user/login', function (req, res) {
  // get请求获取传递的参数 用req.query
  console.log(req.query);
  let {
    username,
    password,
  } = req.query;
  if (username === "新华" || password === 123) {
    res.send({
      code: 200,
      msg: "登录成功!",
    })
  } else {
    res.send({
      code: -1,
      msg: '账户或密码错误!',
    })
  }
});
app.post('/user/regist', function (req, res) {
  // post请求获取传递的参数 用req.body
  // let {
  //   us,
  //   pwd,
  // } = req.body;
  // console.log(req.body);
});
// 接口 请求地址 http: //192.168.1.104:3000/produce
app.get('/produce', function (req, res, next) {
  // req请求体 res响应体
  var produce = [{
      name: "苹果",
      price: 120,
      covens: '湖北'
    },
    {
      name: "草莓",
      price: 20,
      covens: '河南'
    },
    {
      name: "橘子",
      price: 80,
      covens: '河南'
    },
    {
      name: "葡萄",
      price: 90,
      covens: '重庆'
    }
  ]
  return res.end(JSON.stringify(produce))
  next();
});
app.get('/err', function (req, res, next) {
  res.render('404.html', {
    msg: "这是模板渲染传递的数据"
  })
  // 方法继续向下执行
  next();
});
app.listen(3000, function () {
  console.log('服务器启动 访问本机ip地址:3000访问');
});