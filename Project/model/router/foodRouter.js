const express = require('express');
// 引用请求路由
const router = express.Router();
// 引用数据表模型
const foodModel = require("../database/foodModel.js")

// 基于apidoc的线上生成api接口文档
/**
 * @api {post} /food/addfood --添加菜品
 * @apiName addfood
 * @apiGroup Food
 *
 * @apiParam {String} name 定义食品名称
 * @apiParam {String} price 价格
 * @apiParam {String} desc 食品描述
 * @apiParam {String} typeName 食品类型
 * @apiParam {String} typeid 食品id
 * @apiParam {String} img 食品图片
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 *
 */
router.post('/addfood', (req, res) => {
  let {
    name,
    price,
    desc,
    typeName,
    typeid,
    img
  } = req.body
  foodModel.insertMany({
      name,
      price,
      desc,
      typeName,
      typeid,
      img
    })
    .then((data) => {
      res.send({
        code: 200,
        msg: "菜品添加成功！"
      })
    })
    .catch((err) => {
      res.send({
        code: -200,
        msg: "菜品添加失败！"
      })
    })
})

/**
 * @api {post} /food/foodSearchType --分类查询
 * @apiName foodSearchType
 * @apiGroup Food
 *
 * @apiParam {String} typeid 食品id
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 *
 */
router.post('/foodSearchType', (req, res) => {
  let {
    typeid,
  } = req.body
  foodModel.find({
      typeid,
    })
    .then((data) => {
      console.log(data);
      res.send({
        code: 200,
        msg: "查询成功！",
        list: data,
      })
    })
    .catch((err) => {
      res.send({
        code: -200,
        msg: "查询失败！"
      })
    })
})
module.exports = router