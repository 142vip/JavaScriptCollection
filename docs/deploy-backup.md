---
sidebar: false
---

# deploy脚本备份

```js
#!/usr/bin/env node
/**
 *
 * 例如：
 *  - ./scripts/deploy ali
 *  - ./scripts/deploy github
 */

const packageVersion = require('../package.json').version
const { execShell } = require('./.exec')

const dockerDeployInfo = {
  repoAddress: 'registry.cn-hangzhou.aliyuncs.com/142vip/doc_book',
  containerName: 'JavaScriptCollection',
  networkName: 'service_env_net'
}
const imageName = `${dockerDeployInfo.repoAddress}:${dockerDeployInfo.containerName}-${packageVersion}`

// 支持的命令
const SupportScripts = {
  Github: `
        set -e
        ./scripts/bundle proxy && cd docs/.vuepress/dist
        git init && git add -A
        ## 配置信息
        git config user.name 'chu fan'
        git config user.email 'fairy_vip@2925.com'
        git config --list
        git commit -m "release v${packageVersion}"
        ## 部署到github pages
        git push -f https://github.com/mmdapl/JavaScriptCollection.git master:pages/github
        cd -
      `,
  Ali: [
    // 容器存在即删除
    `
        if docker inspect --format='{{.State.Running}}' ${dockerDeployInfo.containerName} >/dev/null 2>&1;then
          docker rm -f ${dockerDeployInfo.containerName}
          exit 0;
        else
          echo "容器：${dockerDeployInfo.containerName}，不存在"
          exit 1;
        fi
      `,
    // 镜像存在即删除
    `
        if [ "$(docker images -q ${imageName} 2> /dev/null)" != "" ];then
          docker rmi ${imageName}
          exit 0;
        else
          echo -e "镜像：${imageName}，不存在"
          exit 1;
        fi
      `,
    // 运行容器
    `
        docker run -d --name ${dockerDeployInfo.containerName} \
        -p 7100:80 \
        --network=${dockerDeployInfo.networkName}  \
        --restart=unless-stopped \
        --ip=172.30.0.200 \
        ${imageName}
       `
  ]
}

const deployName = process.argv[2]

function getDeployCommand() {
  let deployCommand = SupportScripts.Ali
  // 部署到阿里云服务器
  if (deployName === 'ali') {
    deployCommand = SupportScripts.Ali
  }
  // 部署到Github
  if (deployName === 'github') {
    deployCommand = SupportScripts.Github
  }
  return deployCommand
}

// 执行
;(async () => {
  const deployCommand = getDeployCommand()
  // console.log(deployCommand)
  await execShell(deployCommand)
})()
```
