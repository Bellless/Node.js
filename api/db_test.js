// 1.引包
var express = require('express');
var md5 = require('blueimp-md5');
// 2.创建一个服务器
var app = express();

// 引入数据模型
var user = require('../model/db.js')

app.get('./db_test', function (req, res) {
  // 1.获取数据
  // req.body
  // 2.操作数据库
  // 如果存在，不准许重复注册
  // 如果不存在，注册新建用户
  // 3.发送响应
  var body = req.body
  body.findOne({
    // 或语法判断
    $or: [{
        email: body.email
      },
      {
        name: body.name
      },
    ],
  }, function (err, data) {
    // code统一判断请求状态说明
    // code == 200业务成功 code == 1业务错误 code == 500程序错误
    // 程序错误
    if (err) {
      return res.status(500).json({
        code: 500,
        message: 'Serve Error',
      })
    }
    // 业务错误
    if (data) {
      //名称或者邮箱已经存在  服务端返回json对象拱客户端处理
      return res.status(1).json({
        code: 1,
        message: 'email or name is already exist',
      })
    }
    
    // 将需要的数据加密 加密两层及以上防止暴力破解
    body.password = md5(md5(body.password))
      
    // 返回json数据
    // express 提供了一个返回json数据格式的方法(自动将对象转化成json返回给浏览器)
    new User(body).save(function (err, data) {
      if (err) {
        return res.status(500).json({
          code: 500,
          message: 'Serve Error',
        })
      }
      return res.status(200).json({
        code: 200,
        message: '注册成功！',
      })
    })
  })
})