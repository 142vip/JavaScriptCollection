###
##bin/bash
## @desc： git 脚本更新
## @author:【B站&Github&公众号】 Rong姐姐好可爱
## @example: bash git_update.sh '测试shell脚本'
message=${1}
## 获取当前时间
time=$(date "+%Y-%m-%d %H:%M:%S")

echo -e '\033[32m --'${time}' : 【command line:status 】start shell to  check  JavaScriptCollection repository update -- \033[0m\n'
git pull

echo -e '\n\033[36m --'${time}' : 【command line:status 】start shell to  check  JavaScriptCollection repository update -- \033[0m\n'
git status

echo -e '\n\033[36m --'${time}' : 【command line:add 】 add changes  to the local -- \033[0m\n'
git add .

echo -e  '\n\033[36m --'${time}' : 【command line:commit 】  commit changes to the local -- \033[0m\n'
git commit -m ${message}

echo -e '\n\033[36m --'${time}' : 【command line:push 】push all to git repository online -- \033[0m\n'
git push origin master


echo -e '\n\033[32m --'${time}' : 【command line:end 】 all sources pushed to git repository ending -- \033[0m\n'

#下面是字体输出颜色及终端格式控制
#字体色范围：30-37
echo -e "\033[30m 黑色字 \033[0m"
echo -e "\033[31m 红色字 \033[0m"
echo -e "\033[32m 绿色字 \033[0m"
echo -e "\033[33m 黄色字 \033[0m"
echo -e "\033[34m 蓝色字 \033[0m"
echo -e "\033[35m 紫色字 \033[0m"
echo -e "\033[36m 天蓝字 \033[0m"
echo -e "\033[37m 白色字 \033[0m"
#字背景颜色范围：40-47
echo -e "\033[40;37m 黑底白字 \033[0m"
echo -e "\033[41;30m 红底黑字 \033[0m"
echo -e "\033[42;34m 绿底蓝字 \033[0m"
echo -e "\033[43;34m 黄底蓝字 \033[0m"
echo -e "\033[44;30m 蓝底黑字 \033[0m"
echo -e "\033[45;30m 紫底黑字 \033[0m"
echo -e "\033[46;30m 天蓝底黑字 \033[0m"
echo -e "\033[47;34m 白底蓝字 \033[0m"

#控制选项说明
#\033[0m 关闭所有属性
#\033[1m 设置高亮度
#\033[4m 下划线
echo -e "\033[4;31m 下划线红字 \033[0m"
#闪烁
echo -e "\033[5;34m 红字在闪烁 \033[0m"
#反影
echo -e "\033[8m 消隐 \033[0m "

#\033[30m-\033[37m 设置前景色
#\033[40m-\033[47m 设置背景色
#\033[nA光标上移n行
#\033[nB光标下移n行
echo -e "\033[4A 光标上移4行 \033[0m"
#\033[nC光标右移n行
#\033[nD光标左移n行
#\033[y;xH设置光标位置
#\033[2J清屏
#\033[K清除从光标到行尾的内容
echo -e "\033[K 清除光标到行尾的内容 \033[0m"
#\033[s 保存光标位置
#\033[u 恢复光标位置
#\033[?25| 隐藏光标
#\033[?25h 显示光标
echo -e "\033[?25l 隐藏光标 \033[0m"
echo -e "\033[?25h 显示光标 \033[0m"