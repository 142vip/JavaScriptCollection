# 常用命令

## cd

Change Directory的缩写，用来变换工作目录的命令

```bash
#使用绝对路径切换到 test 目录
cd /root/test/

#使用相对路径切换到 test 目录
cd ./test/

# 表示回到自己的家目录，亦即是 /root 这个目录
cd ~

# 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；
cd ..
```


## ls
列出目录及文件名
- `-a` ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)
- `-d` ：仅列出目录本身，而不是列出目录内的文件数据(常用)
- `-l` ：长数据串列出，包含文件的属性与权限等等数据；(常用)

```bash
ls -a
ls -d
ls -l
# 将目录下的所有文件列出来(含属性与隐藏档)
ls -al
```

## pwd
Print Working Directory 的缩写，显示目前所在目录的命令

- `-P` ：显示出确实的路径，而非使用链接 (link) 路径。

```bash
pwd
pwd -P
```

## mkdir

创建新的目录
- `-m` ：直接配置文件的权限！
- `-p` ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！

```bash
## 创建test目录
mkdir test

## 创建test目录，并手动配置权限，例如： rwx--x--x 711
mkdir -m 711 test

## 递归创建，避免路径不存在
mkdir -p test

```

## rmdir

删除空的目录

- `-p` ：从该目录起，一次删除多级空目录

```bash
## 删除test/目录下的空目录
rmdir test/

## 删除多级空目录
rmdir -p test/aaa/bbb
```

## cp

拷贝文件和目录

- `-a`：相当于 -pdr 的意思

- `-d`：若来源档为链接档的属性(link file)，则复制链接档属性而非文件本身；

- `-f`：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；

- `-i`：**若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)**

- `-l`：进行硬式链接(hard link)的链接档创建，而非复制文件本身；

- `-p`：**连同文件的属性一起复制过去，而非使用默认属性(备份常用)；**

- `-r`：**递归持续复制，用于目录的复制行为；(常用)**

- `-s`：复制成为符号链接档 (symbolic link)，亦即『捷径』文件；

- `-u`：若 destination 比 source 旧才升级 destination ！

```bash
cp ~/test /tmp/test

cp -i ~/test /tmp/test
```

## mv

移动文件与目录，或修改名称

- `-f` ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
- `-i` ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
- `-u` ：若目标文件已经存在，且 source 比较新，才会升级 (update)

```bash
## 基本格式
mv [-fiu] source destination
mv [options] source1 source2 source3 .... directory


mv sourceDir targetDir
mv -f sourceDir targetDir




```

## rm

移除文件或目录

- -f ： **强制删除，就是 force 的意思，忽略不存在的文件，不会出现警告信息；**
- -i ：互动模式，在删除前会询问使用者是否动作
- -r ：**递归删除！最常用在目录的删除了**！

## head

取出文件前面几行

- `-n` ：后面接数字，代表显示几行的意思

```bash
head -n -10 running.log
```

## tail

取出文件后面几行，一般用来查看日志

- `-n` ：后面接数字，代表显示几行的意思
- `-f` ：表示持续侦测后面所接的文件名，按[ctrl]-c结束
```bash
tail [-n number] 文件 

## 查看10行日志
tail -n -10 running.log
```

## cat

由第一行开始显示文件内容，对于大文件谨慎使用

- `-A` ：相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；
- `-b` ：列出行号，仅针对非空白行做行号显示，空白行不标行号！
- `-E` ：将结尾的断行字节 $ 显示出来；
- `-n` ：列印出行号，连同空白行也会有行号，与 -b 的选项不同；
- `-T` ：将 [tab] 按键以 ^I 显示出来；
- `-v` ：列出一些看不出来的特殊字符

```bash
## 查看
cat config.js

## 将多个文件合成一个
cat file1.txt file2.txt >newFile.txt

## 创建新的编辑文件
cat >file.txt 

# 此处必须使用两个小于号，EOF表示结束标记，既读到EOF就结束
cat >test.txt<<EOF 
> hello world
> linux centos
> EOF

## EOF必须成对出现，也可以使用其他的成对标签替换，结尾的EOF必须定格编写

## 覆盖重定向需要以END开始，以END结束
cat > 1.txt <<END
> 1
>
> END

# 再执行一次
cat > 1.txt <<END
> 2
> END

# 查看1.txt讲第一次是写入信息清空了
cat 1.txt
2

```



## echo

```bash
# 直接输出文本
echo hello 
# 解压使用引号将内容括起来，单引号，双引号均可
echo 'hello'
#使用-e可以识别特殊字符
echo -e "hello\tworld" 
```

echo可以配合重定向符将内容输入到文件
- `>` :为重定向符号，表示清除原文件里面的所有内容，然后将内容追加到文件的末尾
- `>>` :为追加重定向符号，即追加内容到文件的尾部（文件的最后一行）。


```bash
## 文本追加到文件中
echo "hello world" >>hello.txt #文件会被自动创建

## test.sh内容
#!/bin/sh
read name 
echo "$name It is a test"

## 执行
sh test.sh
OK                     #标准输入
OK It is a test        #输出

## 换行
echo -e "OK! \n" # -e 开启转义
echo "It is a test"

## 不换行
echo -e "OK! \c" # -e 开启转义 \c 不换行
echo "It is a test"

## 显示命令执行结果  执行函数date
echo `date`

```



## grep

参考： https://www.cnblogs.com/chentiao/p/16626503.html

- `-i` ： 搜索时候忽略大小写
- -n 列出所有的匹配行，显示行号
- -v 反向选择
- -c 只输出匹配行的数量
- -l 只列出符合匹配的文件名，不列出具体的匹配行
- -h 查询多文件时不显示文件名
- -r 递归搜索
- -q 禁止输出任何结果，已退出状态表示搜索是否成功
- --color=auto 将找到的关键字加上颜色显示
- -E, --extended-regexp PATTERN 是一个可扩展的正则表达式(缩写为 ERE)
- -B, --before-context=NUM 打印以文本起始的NUM 行
- -A, --after-context=NUM 打印以文本结尾的NUM 行


```bash

## 删除掉空行，"^$" 表示空行
grep -v "^$" test.txt

## 过滤不包含sbin关键词，并输出行号
grep -n -v "sbin" test.txt
```

## sed

sed是Stream Editor（字符流编辑器）的缩写，简称流编辑器。
ed是操作、过滤和转换文本内容的强大工具。sed的常用功能包含对文件实现快速增删改查（增加、删
除、修改、查询），其中查询的功能中最常用的两大功能是过滤（过滤指定字符串）和取行（取出指定
的行）。

```bash
## 格式
sed [选项] [sed内置命令字符] [输入文件]



```


## awk


