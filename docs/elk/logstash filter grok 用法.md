## logstash filter grok 用法
logstash的filter是用插件实现的，grok是其中一个，用来解析自定义结构的日志，就是说可以完全自定义的去解析

grok的语法是%{pattern:field}

pattern是指模板（或者说是类型），logstash内置了很多，也可以自定义（用正则）

field是指解析后的键值中的键，当然值就是从日志解析出来的内容（无论用什么pattern解析到elasticsearch默认都是用string存储，可以通过%{pattern:field:int}将之转换为number类型就可以进行加减计算了，只支持int和float）

像IP、NUMBER这样的基本pattern位于grok-patterns中，常用的有：

INT	int类型

NUMBER	数字

DATA	数据，可以对应字符串

GREEDYDATA	数据，可以对应字符串，贪婪匹配

QUOTEDSTRING	带引号的字符串，可以简写为QS

WORD	一个词

IP	ip地址，v4 或 v6

DATE	日期

TIME	时间

DATESTAMP	日期+时间

PATH	系统路径

HOSTNAME	计算机名

MAC	mac地址

UUID	uuid

LOGLEVEL	日志等级

EMAILADDRESS	email地址

更多匹配模式：https://github.com/logstash-plugins/logstash-patterns-core/tree/master/patterns