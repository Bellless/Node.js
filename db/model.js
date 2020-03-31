// 引入mongoose包
var mongoose = require('mongoose');
// 定义数据库连接就节点
var connect = mongoose.connection;

// 连接数据库
mongoose.connect('mongodb://localhost/test', {
  // useMongoClient: true
})
connect.once('open', function () {
  console.log("数据库连接成功！");
})
// 定义数据表
var Schema = mongoose.Schema;

// 设计表结构
var userSchema = new Schema({
  // 定义存储数据字段的类型
  // 存入的邮箱emial字段类型
  email: {
    type: String, //字段类型
    require: true //是否必须
  },
  // 存入的名称字段类型
  name: {
    type: String, //字段类型
    require: true //是否必须
  },
  // 存入的密码
  password: {
    type: String,
    require: true
  },
  // 存入的时间
  created_time: {
    type: Date,
    default: Date.now, //默认的时间为Date.now方法返回的时间戳(当天时间)
  },
  // 存入的头像
  avatar: {
    type: String, //存储头像的链接
    default: '图片地址', //默认的头像
  },
  // 简介
  bio: {
    type: String,
    default: '', //默认是空的 保存数据的完整性
  },
  // 性别
  gender: {
    type: String,
    enum: [-1, 0 - 1], //enum枚举类型 多个值可以选择
  },
  // 状态
  status: {
    type: Number,
    //0 没有权限限制
    //1 不可以评论
    //0 不可以登录
    enum: [0, 1, 2], //enum枚举类型 多个值可以选择
    default: 0, //默认是0
  },
})

// 将文档结构发布为模型
// 导出模型构造函数  这里的读取字段名User会被自动生成小写users集合名称
module.exports = mongoose.model('User', userSchema)


// 将schema对象转成数据模型
// var User = mongoose.model('User', userSchema)
// 操作数据库
// 插入
// User.insertMany({
//     email: "635609622@qq.com",
//     avatar: "www.baidu.com",
//     bio: "mongodb测试"
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("插入成功");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("插入失败");
//   })

// 数据查询
// 查询指定的数据
// User.find({
//     bio: "测试"
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("查询操作成功！并不代表数据对应相同");
//   })
//   .catch((err) => {
//     console.log("查询失败！");
//   })

// // 删除数据
// User.remove()
//   .then((data) => {
//     console.log("删除成功！");
//   })
//   .catch((err) => {
//     console.log("删除失败！");
//   })