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
 * @api {post} /food/del --删除
 * @apiName foodDelete
 * @apiGroup Food
 *
 * @apiParam {String} id  食品在数据库中生成的id
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 *
 */
router.post('/del', (req, res) => {
  let {
    id
  } = req.body;
  // 删除多个
  // foodModel.remove({
  //   _id: [id1, id2, id3]
  // })
  // 删除单个id
  foodModel.remove({
    _id: id
  })
    .then((data) => {
      console.log(req.body);
      res.send({
        code: 200,
        msg: "删除成功！"
      })
    })
    .catch((err) => {
      res.send({
        code: -200,
        msg: "删除失败！"
      })
    })
})


/**
 * @api {post} /food/foodSearchType --指定条件查询
 * @apiName SearchType
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
    typeid
  } = req.body;
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

/**
 * @api {post} /food/foodKeySearch --关键字查询(模糊查询)
 * @apiName searchKey
 * @apiGroup Food
 *
 * @apiParam {String} key 关键字
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 *
 */
router.post('/foodKeySearch', (req, res) => {
  let {
    key
  } = req.body;
  // 创建一个正则表达式,匹配关键字
  let reg = new RegExp(key)
  // 名字模糊查询
  // name为正则匹配的对应数据库字段
  // foodModel.find({
  //     name: {
  //       $regex: reg
  //     }
  //   })
  // 同时匹配多个字段
  // 数据库操作方法中的都为一个对象 对象里面可以包含数组
  foodModel.find({
      $or: [{
        name: {
          $regex: reg
        },
        desc: {
          $regex: reg
        },
      }]
    })
    .then((data) => {
      console.log(req.body);
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

/**
 * @api {post} /food/foodPageSearch --分页查询
 * @apiName searchPage
 * @apiGroup Food
 *
 * @apiParam {String} pageSize 每页数据条数
 * @apiParam {String} pageSize 对应的页数
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 *
 */
router.post('/pageSerach', (req, res) => {
  // 设置默认的每页数据条数
  let pageSize=req.body.pageSize || 5 
  let page = req.body.page || 1
  foodModel.find().limit(Number(pageSize)).skip(Number((page - 1) * pageSize))
  .then((data) => {
      console.log(req.body);
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

/**
 * @api {post} /food/upData --修改
 * @apiName foodUpdata
 * @apiGroup Food
 *
 * @apiParam {String} _id  对应的食品id
 *
 * @apiSuccess {String} code 成功状态码
 * @apiError {String} code 失败状态码
 * @apiError {String} err 请求错误状态码
 *
 */
router.post('/upData', (req, res) => {
   let {
     name,
     price,
     desc,
     typeName,
     typeid,
     img,
     _id,
  } = req.body
  // update参数,第一个参指定要修改的指定数据，第二个参数说明要修改的内容
  foodModel.update({
        _id
      } ,{
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
        msg: "修改成功！",
        list: data,
      })
    })
    .catch((err) => {
      res.send({
        code: -200,
        msg: "修改失败！"
      })
    })
})
module.exports = router