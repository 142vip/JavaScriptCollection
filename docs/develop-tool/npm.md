

## NPM的使用


### 常用指令

```bash
## 登录
npm login

## 查看当前登录用户
npm whoami

## 全局安装 最新版本
npm install npm@latest -g

## 安装模块
npm install xxx
npm install xxx -D
npm install xxx -S 
npm install xxx -g 
npm install xxx@3.0.0
npm install xxx -save


## 更新模块
npm update xxx

## 推送私有包，可以在package.json中设置private
npm publish

## 发布npm包
npm publish --access public

## 标签
npm publish --tag xx
```


### package.json字段解析

参考：https://blog.csdn.net/tangxiujiang/article/details/119977698