# Docker脚本备份

```js
#!/usr/bin/env node

/**
 * docker cli工具
 * 例如：
 *  - ./scripts/docker container xxx    容器相关
 *  - ./scripts/network image    xxx    镜像相关
 *  - ./scripts/docker network   xxx    网络相关
 */
const { execShell } = require('./.exec')
const scriptName = process.argv[2]

/**
 * 网络基础信息
 * - 网络名称
 * - 子网掩码
 * - 网关地址
 */
const dockerNetworkInfo = {
  defaultName: 'service_env_net',
  subnet: '172.30.0.0/24',
  gateway: '172.30.0.1'
}

/**
 * docker containers 容器相关指令
 */
const SupportScriptsInContainer = {
  run: '',
  rm: '',
  ps: 'docker ps'
}

/**
 * docker images 相关脚本指令
 */
const SupportScriptsInImage = {
  rm: 'docker rmi **',
  ps: 'docker images'
}

/**
 * docker network 相关脚本指令
 */
const SupportScriptsInNetWork = {
  ls: 'docker network ls',
  create: [
    // 创建网关
    `
      docker network create \
      --subnet=${dockerNetworkInfo.subnet} \
      --gateway=${dockerNetworkInfo.gateway} \
      ${dockerNetworkInfo.defaultName}
    `,
    // 查看创建后基本信息
    `
      docker network inspect ${dockerNetworkInfo.defaultName}
    `
  ],
  rm: [
    // 参数校验
    `
      if test -z "${dockerNetworkInfo.defaultName}";then
        echo "参数错误 网络名称不能为空。脚本执行eg： bash xxx.sh rm  网络名称"
        exit 1;
      fi
    `,
    // 判断网络是否存在
    `
      docker network ls | grep -w "${dockerNetworkInfo.defaultName}"
      if [ $? -eq 1 ] ;then
          echo "容器网络:${dockerNetworkInfo.defaultName} 不存在，删除无效"
        exit 1;
      fi
    `,
    // 删除网络
    `
      docker network rm "${dockerNetworkInfo.defaultName}"
    `
  ],
  inspect:
    `
      docker network inspect ${dockerNetworkInfo.defaultName}
    `
}

function getContainerCommand() {
  const name = process.argv[3]

  if (name in SupportScriptsInContainer) {
    return SupportScriptsInContainer[name]
  }
  // 默认查看所有容器
  return SupportScriptsInContainer.ps
}

function getImageCommand() {
  const name = process.argv[3]

  if (name in SupportScriptsInImage) {
    return SupportScriptsInImage[name]
  }
  return SupportScriptsInImage.ps
}

function getNetworkCommand() {
  const name = process.argv[3]
  if (name in SupportScriptsInNetWork) {
    return SupportScriptsInNetWork[scriptName]
  }
  return SupportScriptsInNetWork.ls
}

// 支持的命令
const SupportScripts = {
  ls: 'docker network ls',
  create: [
    // 创建网关
    `
      docker network create \
      --subnet=${dockerNetworkInfo.subnet} \
      --gateway=${dockerNetworkInfo.gateway} \
      ${dockerNetworkInfo.defaultName}
    `,
    // 查看创建后基本信息
    `
      docker network inspect ${dockerNetworkInfo.defaultName}
    `
  ],
  rm: [
    // 参数校验
    `
      if test -z "${dockerNetworkInfo.defaultName}";then
        echo "参数错误 网络名称不能为空。脚本执行eg： bash xxx.sh rm  网络名称"
        exit 1;
      fi
    `,
    // 判断网络是否存在
    `
      docker network ls | grep -w "${dockerNetworkInfo.defaultName}"
      if [ $? -eq 1 ] ;then
          echo "容器网络:${dockerNetworkInfo.defaultName} 不存在，删除无效"
        exit 1;
      fi
    `,
    // 删除网络
    `
      docker network rm "${dockerNetworkInfo.defaultName}"
    `
  ],
  inspect:
    `
      docker network inspect ${dockerNetworkInfo.defaultName}
    `
}

function getCommand() {
  const scriptName = process.argv[3]
  switch (scriptName) {
    case 'network':
      return getNetworkCommand()
    case 'container':
      return getContainerCommand()
    case 'image':
      return getImageCommand()
  }
}

// 执行
;(async () => {
  const command = getCommand(scriptName)
  await execShell(command)
})()
```
