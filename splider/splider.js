// node 爬虫测试
// 步骤:
// 1.获取目标网站 http.get
// 2.分析网站内容 cheerio插件(可以jq里面的选择器)
// 3.获取有效信息(下载或者其他等操作)

// （1）请求网站数据
// （2）将数据保存到本地
// 引用https包
const https = require('https')
// 引用文件包
const fs = require('fs')
// 引用数据处理包
const cheerio = require('cheerio')
// 定义爬虫的地址
let url = 'https://blog.csdn.net/Mister_Li_/article/details/102508821'
let jsonurl = 'http://nodejs.cn/index.json'
https.get(url, (res) => {
  // 安全判断
  const {
    statusCode
  } = res; //请求状态码
  const contentType = res.headers['content-type']; //请求类型
  // 定义一个空大error对象 默认是false
  let error;
  if (statusCode !== 200) {
    error = new Error('请求状态码错误');
  } else if (!/^text\/html/.test(contentType)) {
    // !/^application\/json/.test(contentType) 正则验证请求的类型
    // 定义一个错误对象
    error = new Error('请求类型错误');
  }
  if (error) {
    console.error(error.message);
    // 重置缓存
    res.resume();
    return;
  }
  // 会根据数据大小来  数据过大就会分段请求 只要请求数据就会触发data函数 chunk为每次接受的数据片段
  // 因为请求的数据是分段的 所以要定义一个变量将数据整合在一起
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk.toString('utf8');
    console.log("-----");
    console.log(chunk.toString('utf8'));
    // console.log(chunk.toString('utf8'));
  })
  // 数据传输完成
  res.on('end', () => {
    // 将数据保存到指定的本地文件中
    fs.writeFileSync('./splider.html', rawData)
    // 数据处理 (获取我们需要的指定数据 例如只需要图片的src地址)
    // 使用cheerio包处理这个html文件
    // 将爬取到的网页包传递给load()函数处理
    let $ = cheerio.load(rawData)
    $('img').each((index, el) => {
      console.log($(el).attr('src'));
    })
    console.log("数据传输完成");
  })
})