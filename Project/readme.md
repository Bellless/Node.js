<!-- 项目目录说明:
1.apidoc为根据apidoc插件生成的api线上文档说明，使用方法:apidoc -i 要注释的目录 -o 注释到的指定目录
2.model为模型+接口
3.model>database 要在数据库生成的表的字段
4.model>router 对应的api接口
5.static 对应的静态目录
6.dbconnection.js 连接对应的数据库
7.serve.js 整个项目运行文件 


跨域问题
原理:ajax 同源策略  协议 主机（域名 ip地址） 端口号(三者保持一致才不会跨域)
解决方案：
1.三者保持一致（本机测试）
2.cors 插件
3.jsonp
4.服务器代理（服务器请求服务器没有跨域问题）
-->
