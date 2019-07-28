//使用express构建服务器
const express=require("express");
const bodyParser=require("body-parser");
//引入路由板块
const flowers_list=require("./routers/flowers_list.js");//详情页路由
const shopping_car=require("./routers/shopping_car.js");//购物车路由
const login=require("./routers/login.js");//登陆注册路由
const product=require("./routers/product.js");//产品列表路由
const flwors_home=require("./routers/flwors_home.js");//首页路由
//npm i -save cors
const cors=require("cors");
//创建服务器
var server=express();
//监听端口
server.listen(8080);
//前后端分离，跨域，只写一次，就可以让整个服务器端所有接口都支持跨域
server.use(cors({
    origin:"http://127.0.0.1:5500"
}))
//使用body-parser中间件
server.use(bodyParser.urlencoded({
    extended:false//不使用扩展的qs模块，而是使用querystring模块
}))
//静态资源托管到public
server.use(express.static("publick"));
//使用用户路由来管理路由
server.use("/login",login);
server.use("/flowers_list",flowers_list);
server.use("/shopping_car",shopping_car);
server.use("/product",product);
server.use("/flwors_home",flwors_home);