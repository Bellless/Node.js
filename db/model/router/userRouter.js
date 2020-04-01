const express = require('express');
// 引用请求路由
const router = express.Router();
// 引用数据表模型
const User = require("../database/userModel.js")

// 注册接口
router.post('/regist', (req, res) => {
  // 获取数据
  let {
    us,
    ps
  } = req.body
  // 数据处理
  if (us && ps) {
    User.insertMany({
        us: us,
        ps: ps
      })
      .then((data) => {
        res.send({
          code: 200,
          msg: "注册成功！"
        })
      })
      .catch((err) => {
        res.send({
          code: -200,
          msg: "注册失败！"
        })
      })
  } else {
    return res.send({
      err: -1,
      msg: "参数错误！"
    })
  }
  // 返回数据
  // 因为.then方法为异步方法 所以res.send会多次执行
  // res.send("注册ok")
})

// 登录接口
router.post('/login', (req, res) => {
  let {
    us,
    ps
  } = req.body;
  if (!us || !ps) {
    return res.send({
      code: -1,
      msg: "参数错误"
    })
  }
  //{us:us,ps:ps} =={us,ps}
  User.find({
      us,
      ps
    })
    .then((data) => {
      if (data.length > 0) {
        res.send({ code: 200, msg:'登录成功'})
      } else {
        res.send({
          code: -2,
          msg: '用户名/密码错误'
        })
      }
    })
    .catch((err) => {

    })

})

module.exports = router