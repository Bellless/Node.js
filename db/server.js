const express = require("express");
// 引用数据库连接文件
const db = require('./dbConnection.js');
const app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 引用express路由(相当于指定一个项目文件目录)
const userRouter = require("./model/router/userRouter.js")

// 引用json解析包
const bodyParser = require("body-parser")
// 解析POST请求传递的表单数据格式 x-www-form-urlencode
app.use(bodyParser.urlencoded({
  extended: false
}));
// 解析Post请求传递的json数据格式
app.use(bodyParser.json())

app.use('/user', userRouter)
app.listen(3000, () => {
  console.log("服务器启动 访问本机ip地址:3000访问");
})