##bin/bash
## git 脚本更新

message=${1}
## 获取当前时间
time=$(date "+%Y-%m-%d %H:%M:%S")
echo  '--'${time}' : 【command line:status】start shell to  check  JavaScriptCollection repository update --'
git status

echo  '--'${time}' : 【command line:add】 add changes  to the local --'
git add .

echo  '--'${time}' : 【command line:commit】  commit changes to the local -- '
git commit -m ${message}

echo  '--'${time}' : 【command line:push】push all to git repository online --'
git push origin master
