mysql -hhostname -Pport -uusername -ppassword -e 相关mysql的sql语句，不用在mysql的提示符下运行mysql，即可以在shell中操作mysql的方法。

\#!/bin/bash

HOSTNAME="192.168.111.84"  #数据库信息

PORT="3306"    	# 数据库端口

USERNAME="root"	 # 账号

PASSWORD="" 	#密码

 

DBNAME="test_db_test"  #数据库名称

TABLENAME="test_table_test" #数据库中表的名称

 

\#创建数据库

create_db_sql="create database IF NOT EXISTS ${DBNAME}"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} -e "${create_db_sql}"

 

\#创建表

create_table_sql="create table IF NOT EXISTS ${TABLENAME} ( name varchar(20), id int(11) default 0 )"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} ${DBNAME} -e "${create_table_sql}"

 

\#插入数据

insert_sql="insert into ${TABLENAME} values('billchen',2)"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} ${DBNAME} -e "${insert_sql}"

 

\#查询

select_sql="select * from ${TABLENAME}"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} ${DBNAME} -e "${select_sql}"

 

\#更新数据

update_sql="update ${TABLENAME} set id=3"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} ${DBNAME} -e "${update_sql}"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} ${DBNAME} -e "${select_sql}"

 

\#删除数据

delete_sql="delete from ${TABLENAME}"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} ${DBNAME} -e "${delete_sql}"

mysql -h${HOSTNAME} -P${PORT} -u${USERNAME} -p${PASSWORD} ${DBNAME} -e "${select_sql}"





### shell连接mysql数据库

shell中连接数据库的方法很简单，只需要指定用户名，密码，连接的数据库名称，然后通过重定向，输入mysql的语句

```bash
mysql -u USERNAME -p PASSWORD DATABASENAME <<EOF 2>/dev/null
    show databases;
EOF
```

也可以用mysql 数据库的一个特殊配置文件。mysql 数据库使用$HOME/.my.cnf 文件来读取特殊的启动命令和设置。其中一项设置是由该用户账户发起的mysql 会话的默认密码。要在这个文件中设置默认密码，避免任何使用该脚本的用户都能看到该数据库用户的账号和密码

```shell
[client]
password = 123456
然后，别忘了修改权限：
chmod 400  .my.cnf
这样就可以通过脚本访问mysql数据库了，如下所示：
#!/bin/bash
MYSQL=`which mysql`
$MYSQL test -u root << EOF
show databases;
show tables;
## 执行sql语句
select * from user;
EOF
```

### 创建数据库

```shell
#!/bin/bash
##############################
# @file create_db_mysql.sh
# @brief create database and tables in mysql
# @author litiao  
# @version 0.1
# @date 2020-06-09
##############################
USER="root"
DATABASE="mycat_test"
TABLE="mycat"
###################### 创建数据库
#crate database
mysql -u $USER << EOF 2>/dev/null
CREATE DATABASE $DATABASE
EOF
[ $? -eq 0 ] && echo "created DB" || echo DB already exists
###################### 下面是创建表
#create table
mysql -u $USER $DATABASE << EOF 2>/dev/null
CREATE TABLE $TABLE(
id int,
name varchar(100),
mark int,
dept varchar(4)
);
EOF
[ $? -eq 0 ] && echo "Created table mycat" || echo "Table mycat already exist" 
######################
#delete data
mysql -u $USER $DATABASE << EOF 2>/dev/null
DELETE FROM $TABLE;
EOF
```

