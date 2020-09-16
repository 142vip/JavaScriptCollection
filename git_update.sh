##bin/bash
## git 脚本更新

message=${1}

echo '------start shell to  check  JavaScriptCollection update -----'
git status

git add .

git commit -m ${message}

git push origin master
