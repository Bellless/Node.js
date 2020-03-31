var fs = require('fs')

// 封装一个读取文本的方法
function readfile(filepath) {
  // 创建封装promise对象
  // 所有的异步方法都可以封装
  // promise容器是一个异步容器(有两个参数)  resolve为成功异步处理,reject为失败异步处理
  // 调用了resolve 方法一定会走进.then()方法体中
  // 调用了reject 方法一定会走进.catch()方法体中
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      // 需要的异步处理
      if (err) {
        console.log('读取文件失败！');
        reject(err)
      } else {
        resolve(data)
        console.log('读取文件成功！');
      }
    })
  })
}
readfile('./promisePage/b.js')
  // 在一组链式调用中 只需要一个catch来捕获错误
  .then((data) => {
    console.log(data);
    // .then函数的链式调用
    // 返回一个promise容器 将方法在执行一次
    return readfile('./promisePage/b.js')
  })
  .then((data) => {
    console.log(data);
    return readfile('./promisePage/c.js')
  })
  .then((data) => {
    console.log(data);
    // 手动终止链式函数调用
    throw new Error("手动终止链式调用")
  })
  // 捕获错误
  .catch((err) => {
    console.log('catch');
  })