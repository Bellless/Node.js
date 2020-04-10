const express = require("express");
// 引用数据库连接文件
const db = require('./dbConnection.js');
// 引用path目录访问静态资源
const path=require('path')
const app = express();

// 使用cors配置跨域
const cors = require('cors')
app.use(cors())

// 访问静态资源
// /publi表示访问时输入的路径   ./static表示访问/public时候实际指定的路径
// __dirname表示访问的是当前目录
app.use("/public", express.static(path.join(__dirname,"./static")));


//设置请求头配置跨域访问
// * 代表所有的请求都会走入这个配置的方法
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

// 引用接口api文件
const userRouter = require("./model/router/userRouter.js")
const foodRouter = require("./model/router/foodRouter.js")
const fileRouter = require("./model/router/fileRouter.js")

// 引用json解析包
const bodyParser = require("body-parser")
// 解析POST请求传递的表单数据格式 x-www-form-urlencode
app.use(bodyParser.urlencoded({
  extended: false
}));
// 解析Post请求传递的json数据格式
app.use(bodyParser.json())

// 使用express router(相当于定义了一个请求目录)
app.use('/user', userRouter)
app.use('/food', foodRouter)
app.use('/file',fileRouter)

app.listen(3000, () => {
  console.log("服务器启动 访问本机ip地址:3000访问");
})