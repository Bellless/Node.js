var fs = require('fs')

function readfile(filepath) {
  // 所有的异步方法都可以封装
  // promise容器是一个异步容器(有两个参数)  resolve为异步处理成功,reject为异步处理失败
  return new Promise(function (resolve, reject) {
    fs.readFile(filepath, 'utf-8',function (err, data) {
      if (err) {
        // console.log('读取文件失败！');
        reject(err)
      } else {
        // console.log('读取文件成功！');
        resolve(data)
      }
    })
  })
}
readfile('./promise_text/a.js')
  .then(function (data) {
    console.log(data);
    // .then函数的链式调用
    // 返回一个promise容器 将方法在执行一次
    return readfile('./promise_text/b.js')
  })
  .then(function (data) {
    console.log(data);
    return readfile('./promise_text/c.js')
  })
  .then(function (data) {
    console.log(data);
  })
  