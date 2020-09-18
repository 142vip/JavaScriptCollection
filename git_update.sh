###
 # @Description: 
 # @Version: Beata1.0
 # @Autor: 【B站&公众号】Rong姐姐好可爱
 # @Date: 2020-09-16 23:51:52
 # @LastEditors: 【B站&公众号】Rong姐姐好可爱
 # @LastEditTime: 2020-09-18 23:10:29
### 
##bin/bash
## @desc： git 脚本更新
## @author:【B站&Github&公众号】 Rong姐姐好可爱
## @example: bash git_update.sh '测试shell脚本'
message=${1}
## 获取当前时间
time=$(date "+%Y-%m-%d %H:%M:%S")

echo -e '\033[32m '${time}' : 【command line:status 】start shell to  check  JavaScriptCollection repository update  \033[0m\n'
git pull

echo -e '\n\033[36m '${time}' : 【command line:status 】start shell to  check  JavaScriptCollection repository update  \033[0m\n'
git status

echo -e '\n\033[36m '${time}' : 【command line:add 】 add changes  to the local  \033[0m\n'
git add .

echo -e  '\n\033[36m '${time}' : 【command line:commit 】  commit changes to the local  \033[0m\n'
git commit -m ${message}

echo -e '\n\033[36m '${time}' : 【command line:push 】push all to git repository online  \033[0m\n'
git push origin master


echo -e '\n\033[32m '${time}' : 【command line:end 】 all sources pushed to git repository ending  \033[0m\n'
