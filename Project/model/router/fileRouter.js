const express = require('express')
const router = express.Router()
const multer = require('multer')

// 创建上传的缓存
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 指定文件路径
    cb(null, './static/upload')
  },
  filename: function (req, file, cb) {
    // 指定文件名
    var fileFormat = (file.originalname).split('.')
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})

var upload = multer({
  storage: storage
})

/**
 * @api {post} /file/upload 上传图片（返回图片的服务器地址）
 * @apiName upload
 * @apiGroup file
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/upload', upload.single('uploadImage'), (req, res) => {
  // uploadImage--要图片数据的一个key值即前端调用接口请求的参数  （必须保持一致）
  let {
    size,
    mimetype,
    path,
    filename
  } = req.file
  let types = ['jpg', 'jpeg', 'png', 'gif'] //允许上传的数据类型
  let tmpType = mimetype.split('/')[1]
  if (size > 10000000) {
    return res.send({
      err: -1,
      msg: '尺寸过大,上传图片最大为10MB'
    })
  } else if (types.indexOf(tmpType) == -1) {
    return res.send({
      err: -2,
      msg: '媒体类型错误'
    })
  } else {
    let url = `/public/upload/${filename}`
    res.send({
      err: 0,
      msg: '上传成功！',
      imgUrl: url
    })
  }
})



module.exports = router