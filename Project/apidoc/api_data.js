define({ "api": [
  {
    "type": "post",
    "url": "/food/addfood",
    "title": "--添加菜品",
    "name": "addfood",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>定义食品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>食品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeName",
            "description": "<p>食品类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>食品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>食品图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>成功状态码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>失败状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>请求错误状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/foodSearchType",
    "title": "--分类查询",
    "name": "foodSearchType",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeid",
            "description": "<p>食品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>成功状态码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>失败状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>请求错误状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "--用户登录",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>登录的用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>登录的密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>成功状态码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>失败状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>请求错误状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/regist",
    "title": "--用户注册",
    "name": "Regist",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>注册的用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>注册的密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>成功状态码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>失败状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>请求错误状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./userRouter.js",
    "groupTitle": "User"
  }
] });
