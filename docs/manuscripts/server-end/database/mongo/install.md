
# Mongo简单部署


> 在mac本地部署MongoDB数据库，用来进行yapi功能测试


### 部署命令

```bash
## 

docker run -d --name=mongo-master --restart=always -p 27017:27017 -v /Users/Shared/web-project/mongo:/data/db   mongo --auth

## --auth表示连接mongodb需要授权
```


- 数据持久化于`/Users/Shared/web-project/mongo`下，账号：root，密码：123456


### 创建用户

```bash
## 登录
mongo

## 切换数据库
use admin

## 创建管理员用户
db.createUser(
	{
		user:"root",
		pwd:"123456",
		roles:[{role:"root",db:"admin"}]
	}
);

## 登录

db.auth("用户名","密码")

## 删除用户

db.dropUser(<user_name>)    删除某个用户，接受字符串参数


```

用navicat连接时，注意验证数据库应该选择管理员所在的数据名，即admin数据库

### 关闭指定端口

```bash
## 查询pid
lsof  -i :8000

## kill端口

kill -9 pid

```