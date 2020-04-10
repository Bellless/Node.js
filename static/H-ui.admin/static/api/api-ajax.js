const baseurl = 'http://192.168.1.102:3000'
function _ajax(url, type, obj = {}, e = null, s = false) {
  $.ajax({
    url: baseurl + url,
    method: type,
    data: {
      values: obj
    },
    timeout: 1000,
  }, function (ret, err) {
    if (ret) {
      if (ret.code == 200) {
        e(ret);
      } else {
        if (ret.code == -2) {
        //  alert("请重新登录！")
          return
        }
        if (s) {
          s(ret.err)
        } else {
          
        }
      }
    } else {
      if (s) {
        s('请求错误')
      } else {
        
      }
    }
  });
}