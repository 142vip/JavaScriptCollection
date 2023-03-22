#!/bin/bash

## 功能：清除容器，删除旧镜像，创建新的容器
## 参考：https://blog.csdn.net/Dontla/article/details/125210694
## 作者：Chu Fan
## 使用示例：bash xxx.sh 容器名称  镜像地址
##

## 日志颜色定义
readonly successLogger="\033[36m"
readonly errorLogger="\033[1;31m"
readonly warnLogger="\033[1;33m"
## 定义时间
readonly currentTime=$(date "+%Y-%m-%d %H:%M:%S")
readonly repoAddress="registry.cn-hangzhou.aliyuncs.com/142vip/doc_book"
readonly networkName="service_env_net"

## 定义参数
containerName="JavaScriptCollection"
operationName=${1}
version=${2}




## 参数检查
prepare_check(){
  if test -z "${operationName}"
  then
    echo -e "${errorLogger}${currentTime}:参数错误 部署平台不能为空."
    exit 0
  fi

}

## 判断容器存在即删除
## - 一个参数，容器名称
delete_container(){
  docker inspect "${containerName}" -f '{{.Name}}' > /dev/null
  if [ $? -eq 0 ] ;then
    echo -e "${warnLogger}${currentTime}容器：${containerName} 存在，现进行删除"
    docker rm -f "${containerName}"
  fi
}

## 判断镜像存在，即删除
delete_image(){
  ## 判断版本号
  if test -z "${version}";then
      echo -e "${errorLogger}${currentTime}:参数错误 镜像版本号不能为空."
    exit 0
  fi

  if [[ "$(docker images -q "${repoAddress}:${containerName}-${version}" 2> /dev/null)" != "" ]];
    then
      echo -e "${warnLogger}${currentTime}镜像：${repoAddress}:${containerName}-${version}存在，现进行删除"
      docker rmi "${repoAddress}:${containerName}-${version}"
  fi
}

## 环境初始成功
run(){
    if [ "${operationName}" == "408" ];then
        containerName="408CSFamily"
        delete_container
        delete_image
        deploy_408CSFamily
      exit 0
    elif [ "${operationName}" == "jsc" ]; then
        delete_container
        delete_image
        deploy_JavaScriptCollection
      exit 0
    else
      echo -e "${errorLogger}${currentTime}当前操作不支持,目前只支持:408/jsc"
      exit 0
    fi
    exit 0
}

## 部署408CSFamily
deploy_408CSFamily(){
    echo -e "${successLogger}---------------- deploy ${containerName} ali start ---------------- "

    docker run -d --name "${containerName}" \
    -p 0.0.0.0:7000:80 \
    --network="${networkName}"  \
    --restart=unless-stopped \
    --ip=172.30.0.100 \
    "${repoAddress}:${containerName}-${version}"

    echo -e "${successLogger}---------------- deploy ${containerName} ali end ------------------ "
    docker ps
    exit 0
}

## 部署JavaScriptCollection
deploy_JavaScriptCollection(){
    echo -e "${successLogger}---------------- deploy ${containerName}  start ---------------- "

    docker run -d --name "${containerName}" \
    -p 0.0.0.0:7100:80 \
    --network="${networkName}"  \
    --restart=unless-stopped \
    --ip=172.30.0.200 \
    "${repoAddress}:${containerName}-${version}"

    echo -e "${successLogger}---------------- deploy ${containerName}  end ------------------ "
    docker ps
    exit 0
}


prepare_check

run


