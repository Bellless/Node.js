// Node比较偏底层
// Node.js中, 没有全局作用域，只有模块作用域
// 即：每个模块是相互独立的，互不干扰
// require('./a.js') 加载某个用户自定义的模块
// module.exports=xxx (导出单个成员) 可以直接导出自定义的  方法 在接收模块中使用require.对象 获取值
// module.exports={}(导出多个成员)
var text = '哈哈哈哈哈'
console.log(text);
// 使用require方法加载node中的模块
// fs文件处理模块(readFile--读,writeFile--写)
var fs = require('fs')
// fs.mkdir("文件名",(err)=>{})   使用fs模块创建文件
fs.readFile('../read.txt','utf-8', function (error, data) {
  // 文件读取成功是二进制,用转化成字符串
  // 成功data==null 失败data=obj
  if (error) {
    // 如果error是个对象 进入这个条件
    console.log('文件读取失败！');
  } else {
    console.log("文件读取成功！");
    console.log(data.toString());
  }
})
fs.writeFile('../write.txt', '这是node.js模板写入的文件', function (status) {
  // writeFile只有个失败的回调函数
  // 失败--status==null 成功status==obj
  console.log(status);
  if (status) {
    console.log("文件写入失败！");
  } else {
    console.log("文件写入成功");
  }
})

// fs.readdir(readdir读取本地的某个目录)
// 其它部分模板
var os = require('os');

console.log(os.cpus());


