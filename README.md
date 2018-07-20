
## 运行(要提前配置好数据库)
安装依赖
>npm install

运行creat-react-app 
>npm start

启动express-server 
>node /demo/backend/server.js

启动react-app
>cd /demo
>npm start

访问: localhost:3000



## 介绍
demo功能: 

react渲染一个按钮, 按下后会发送post请求(向mysql数据库插入一条数据)

react通过proxy转发post请求给express

express路由得到post请求后向数据库插入数据.

demo结构:

前端是基于create-react-app,
后端基于express,
数据库是mysql,
