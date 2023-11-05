
## 接入Artalk评论系统

```bash

# 为 Artalk 创建一个目录
mkdir Artalk
cd Artalk

# 拉取 docker 镜像
docker pull artalk/artalk-go

# 生成配置文件
docker run -it -v $(pwd)/data:/data --rm artalk/artalk-go gen config $(pwd)/artalk.yml

# 编辑配置文件
vim data/artalk.yml

# 运行 docker 容器
docker run -d \
  --name artalk \
  -p 0.0.0.0:8080:23366 \
  -v $(pwd)/data:/data \
  artalk/artalk-go

```

# 12324取34












23241
