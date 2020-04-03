const express = require('express');
// 引用请求路由
const router = express.Router();
// 引用数据表模型
const User = require("../database/userModel.js")

// 基于apidoc的线上生成api接口文档
/**
 * @api {post} /user/regist --用户注册
 * @apiName Regist
 * @apiGroup User
 *
 * @apiParam {String} us 注册的用户名
 * @apiParam {String} ps 注册的密码
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 *
 */
router.post('/regist', (req, res) => {
  // 获取数据
  let {
    us,
    ps
  } = req.body
  // 数据处理
  if (us && ps) {
    User.find({
        us
      })
      .then((data) => {
        if (data.length === 0) {
          return User.insertMany({
            us: us,
            ps: ps
          })
        } else {
          res.send({
            code: -3,
            msg: "账户名已经存在!"
          })
        }
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

/**
 * @api {post} /user/login --用户登录
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String} us 登录的用户名
 * @apiParam {String} ps 登录的密码
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 */
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
  //{us:us,ps:ps} =={us,ps}(两种写法相等)
  User.find({
      us,
      ps
    })
    .then((data) => {
      if (data.length > 0) {
        res.send({
          code: 200,
          msg: '登录成功'
        })
      } else {
        res.send({
          code: -2,
          msg: '用户名/密码错误'
        })
      }
    })
    .catch((err) => {
        res.send({
          code: -200,
          msg: "登录！"
        })
    })

})

module.exports = router