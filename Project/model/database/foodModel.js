// 食品字段表
var mongoose = require('mongoose');
// 定义数据表
var Schema = mongoose.Schema;

// 设计表结构
var foodSchema = new Schema({
  // 定义食品名称
  name: {
    type: String, //字段类型
    require: true //是否必须
  },
  // 价格
  price: {
    type: String,
    require: true
  },
  // 食品描述
  desc: {
    type: String,
    require: true,
  },
  // 食品类型
  typeName: {
    type: String,
    require: true,
  },
  // 食品id
  typeid: {
    type: String,
    require: true,
  },
  // 食品图片
  img: {
    type: String,
    require: true,
  },
})
// 将schema对象转成数据模型
var Food = mongoose.model('Food', foodSchema)
// 导出模型
module.exports = Food;