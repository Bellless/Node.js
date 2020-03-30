// cherrio插件类似jquery 不用在自定义正则表达式去匹配需要保存的内容
const cheerio = require('cheerio')
let $ = cheerio.load('<div><p>你好</p><img src="www"></img><img src="www.aaaaa"></img></div>')
console.log($('img').attr('src'));
console.log($('p').text());
$('img').each((index, el) => {
  console.log($(el).attr('src'));
})