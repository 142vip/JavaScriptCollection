*参考文档：https://github.com/PGBI/kong-dashboard*

*注意：\*kong-dashboard应该使用最新版，旧版本（如v2）有bug，访问kong server一直报错。**

```bash
# Start Kong Dashboard
docker run --rm -p 8080:8080 pgbi/kong-dashboard start --kong-url http://kong:8001

# Start Kong Dashboard on a custom port
docker run --rm -p [port]:8080 pgbi/kong-dashboard start --kong-url http://kong:8001

# Start Kong Dashboard with basic auth
docker run --rm -p 8080:8080 pgbi/kong-dashboard start \
  --kong-url http://kong:8001
  --basic-auth user1=password1 user2=password2

# See full list of start options
docker run --rm -p 8080:8080 pgbi/kong-dashboard start --help
```

实际部署

```bash
docker run --rm -p 8080:8080 --network=kong-net --ip=172.18.0.5 pgbi/kong-dashboard start \
  --kong-url http://kong:8001 \
  --basic-auth Taylor=123456 
```

由于本地安装的是kong高版本的应用，也就是最新版本的kong，运行上面的kong-dashboard出现：

```bash
This version of Kong dashboard doesn't support Kong v2.0 and higher.
```

该问题是目前的dashboard是不支持2.0以上的kong的，所以2.0以上版本的kong建议用konga来管理