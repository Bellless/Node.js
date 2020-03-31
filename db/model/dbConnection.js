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