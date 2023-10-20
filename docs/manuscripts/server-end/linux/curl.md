
# curl命令

`curl`是命令行工具，主要用来在cmd终端下发送网络请求、获取数据，支持多种协议，在后端应用频繁

```bash
[root@fairy /]# curl --help
Usage: curl [options...] <url>
Options: (H) means HTTP/HTTPS only, (F) means FTP only
     --anyauth       Pick "any" authentication method (H)
 -a, --append        Append to target file when uploading (F/SFTP)
     --basic         Use HTTP Basic Authentication (H)
     --cacert FILE   CA certificate to verify peer against (SSL)
     --capath DIR    CA directory to verify peer against (SSL)
 -E, --cert CERT[:PASSWD] Client certificate file and password (SSL)
     --cert-type TYPE Certificate file type (DER/PEM/ENG) (SSL)
     --ciphers LIST  SSL ciphers to use (SSL)
     --compressed    Request compressed response (using deflate or gzip)
 -K, --config FILE   Specify which config file to read
     --connect-timeout SECONDS  Maximum time allowed for connection
 -C, --continue-at OFFSET  Resumed transfer offset
 -b, --cookie STRING/FILE  String or file to read cookies from (H)
 -c, --cookie-jar FILE  Write cookies to this file after operation (H)
     --create-dirs   Create necessary local directory hierarchy
     --crlf          Convert LF to CRLF in upload
     --crlfile FILE  Get a CRL list in PEM format from the given file
 -d, --data DATA     HTTP POST data (H)
     --data-ascii DATA  HTTP POST ASCII data (H)
     --data-binary DATA  HTTP POST binary data (H)
     --data-urlencode DATA  HTTP POST data url encoded (H)
     --delegation STRING GSS-API delegation permission
     --digest        Use HTTP Digest Authentication (H)
     --disable-eprt  Inhibit using EPRT or LPRT (F)
     --disable-epsv  Inhibit using EPSV (F)
 -D, --dump-header FILE  Write the headers to this file
     --egd-file FILE  EGD socket path for random data (SSL)
     --engine ENGINGE  Crypto engine (SSL). "--engine list" for list
 -f, --fail          Fail silently (no output at all) on HTTP errors (H)
 -F, --form CONTENT  Specify HTTP multipart POST data (H)
     --form-string STRING  Specify HTTP multipart POST data (H)
     --ftp-account DATA  Account data string (F)
     --ftp-alternative-to-user COMMAND  String to replace "USER [name]" (F)
     --ftp-create-dirs  Create the remote dirs if not present (F)
     --ftp-method [MULTICWD/NOCWD/SINGLECWD] Control CWD usage (F)
     --ftp-pasv      Use PASV/EPSV instead of PORT (F)
 -P, --ftp-port ADR  Use PORT with given address instead of PASV (F)
     --ftp-skip-pasv-ip Skip the IP address for PASV (F)
     --ftp-pret      Send PRET before PASV (for drftpd) (F)
     --ftp-ssl-ccc   Send CCC after authenticating (F)
     --ftp-ssl-ccc-mode ACTIVE/PASSIVE  Set CCC mode (F)
     --ftp-ssl-control Require SSL/TLS for ftp login, clear for transfer (F)
 -G, --get           Send the -d data with a HTTP GET (H)
 -g, --globoff       Disable URL sequences and ranges using {} and []
 -H, --header LINE   Custom header to pass to server (H)
 -I, --head          Show document info only
 -h, --help          This help text
     --hostpubmd5 MD5  Hex encoded MD5 string of the host public key. (SSH)
 -0, --http1.0       Use HTTP 1.0 (H)
     --ignore-content-length  Ignore the HTTP Content-Length header
 -i, --include       Include protocol headers in the output (H/F)
 -k, --insecure      Allow connections to SSL sites without certs (H)
     --interface INTERFACE  Specify network interface/address to use
 -4, --ipv4          Resolve name to IPv4 address
 -6, --ipv6          Resolve name to IPv6 address
 -j, --junk-session-cookies Ignore session cookies read from file (H)
     --keepalive-time SECONDS  Interval between keepalive probes
     --key KEY       Private key file name (SSL/SSH)
     --key-type TYPE Private key file type (DER/PEM/ENG) (SSL)
     --krb LEVEL     Enable Kerberos with specified security level (F)
     --libcurl FILE  Dump libcurl equivalent code of this command line
     --limit-rate RATE  Limit transfer speed to this rate
 -l, --list-only     List only names of an FTP directory (F)
     --local-port RANGE  Force use of these local port numbers
 -L, --location      Follow redirects (H)
     --location-trusted like --location and send auth to other hosts (H)
 -M, --manual        Display the full manual
     --mail-from FROM  Mail from this address
     --mail-rcpt TO  Mail to this receiver(s)
     --mail-auth AUTH  Originator address of the original email
     --max-filesize BYTES  Maximum file size to download (H/F)
     --max-redirs NUM  Maximum number of redirects allowed (H)
 -m, --max-time SECONDS  Maximum time allowed for the transfer
     --metalink      Process given URLs as metalink XML file
     --negotiate     Use HTTP Negotiate Authentication (H)
 -n, --netrc         Must read .netrc for user name and password
     --netrc-optional Use either .netrc or URL; overrides -n
     --netrc-file FILE  Set up the netrc filename to use
 -N, --no-buffer     Disable buffering of the output stream
     --no-keepalive  Disable keepalive use on the connection
     --no-sessionid  Disable SSL session-ID reusing (SSL)
     --noproxy       List of hosts which do not use proxy
     --ntlm          Use HTTP NTLM authentication (H)
 -o, --output FILE   Write output to <file> instead of stdout
     --pass PASS     Pass phrase for the private key (SSL/SSH)
     --post301       Do not switch to GET after following a 301 redirect (H)
     --post302       Do not switch to GET after following a 302 redirect (H)
     --post303       Do not switch to GET after following a 303 redirect (H)
 -#, --progress-bar  Display transfer progress as a progress bar
     --proto PROTOCOLS  Enable/disable specified protocols
     --proto-redir PROTOCOLS  Enable/disable specified protocols on redirect
 -x, --proxy [PROTOCOL://]HOST[:PORT] Use proxy on given port
     --proxy-anyauth Pick "any" proxy authentication method (H)
     --proxy-basic   Use Basic authentication on the proxy (H)
     --proxy-digest  Use Digest authentication on the proxy (H)
     --proxy-negotiate Use Negotiate authentication on the proxy (H)
     --proxy-ntlm    Use NTLM authentication on the proxy (H)
 -U, --proxy-user USER[:PASSWORD]  Proxy user and password
     --proxy1.0 HOST[:PORT]  Use HTTP/1.0 proxy on given port
 -p, --proxytunnel   Operate through a HTTP proxy tunnel (using CONNECT)
     --pubkey KEY    Public key file name (SSH)
 -Q, --quote CMD     Send command(s) to server before transfer (F/SFTP)
     --random-file FILE  File for reading random data from (SSL)
 -r, --range RANGE   Retrieve only the bytes within a range
     --raw           Do HTTP "raw", without any transfer decoding (H)
 -e, --referer       Referer URL (H)
 -J, --remote-header-name Use the header-provided filename (H)
 -O, --remote-name   Write output to a file named as the remote file
     --remote-name-all Use the remote file name for all URLs
 -R, --remote-time   Set the remote file's time on the local output
 -X, --request COMMAND  Specify request command to use
     --resolve HOST:PORT:ADDRESS  Force resolve of HOST:PORT to ADDRESS
     --retry NUM   Retry request NUM times if transient problems occur
     --retry-delay SECONDS When retrying, wait this many seconds between each
     --retry-max-time SECONDS  Retry only within this period
 -S, --show-error    Show error. With -s, make curl show errors when they occur
 -s, --silent        Silent mode. Don't output anything
     --socks4 HOST[:PORT]  SOCKS4 proxy on given host + port
     --socks4a HOST[:PORT]  SOCKS4a proxy on given host + port
     --socks5 HOST[:PORT]  SOCKS5 proxy on given host + port
     --socks5-basic  Enable username/password auth for SOCKS5 proxies
     --socks5-gssapi Enable GSS-API auth for SOCKS5 proxies
     --socks5-hostname HOST[:PORT] SOCKS5 proxy, pass host name to proxy
     --socks5-gssapi-service NAME  SOCKS5 proxy service name for gssapi
     --socks5-gssapi-nec  Compatibility with NEC SOCKS5 server
 -Y, --speed-limit RATE  Stop transfers below speed-limit for 'speed-time' secs
 -y, --speed-time SECONDS  Time for trig speed-limit abort. Defaults to 30
     --ssl           Try SSL/TLS (FTP, IMAP, POP3, SMTP)
     --ssl-reqd      Require SSL/TLS (FTP, IMAP, POP3, SMTP)
 -2, --sslv2         Use SSLv2 (SSL)
 -3, --sslv3         Use SSLv3 (SSL)
     --ssl-allow-beast Allow security flaw to improve interop (SSL)
     --stderr FILE   Where to redirect stderr. - means stdout
     --tcp-nodelay   Use the TCP_NODELAY option
 -t, --telnet-option OPT=VAL  Set telnet option
     --tftp-blksize VALUE  Set TFTP BLKSIZE option (must be >512)
 -z, --time-cond TIME  Transfer based on a time condition
 -1, --tlsv1         Use => TLSv1 (SSL)
     --tlsv1.0       Use TLSv1.0 (SSL)
     --tlsv1.1       Use TLSv1.1 (SSL)
     --tlsv1.2       Use TLSv1.2 (SSL)
     --trace FILE    Write a debug trace to the given file
     --trace-ascii FILE  Like --trace but without the hex output
     --trace-time    Add time stamps to trace/verbose output
     --tr-encoding   Request compressed transfer encoding (H)
 -T, --upload-file FILE  Transfer FILE to destination
     --url URL       URL to work with
 -B, --use-ascii     Use ASCII/text transfer
 -u, --user USER[:PASSWORD]  Server user and password
     --tlsuser USER  TLS username
     --tlspassword STRING TLS password
     --tlsauthtype STRING  TLS authentication type (default SRP)
     --unix-socket FILE    Connect through this UNIX domain socket
 -A, --user-agent STRING  User-Agent to send to server (H)
 -v, --verbose       Make the operation more talkative
 -V, --version       Show version number and quit
 -w, --write-out FORMAT  What to output after completion
     --xattr        Store metadata in extended file attributes
 -q                 If used as the first parameter disables .curlrc
```


## 基本安装

下载链接：<https://curl.se/download.html>


```bash
## 压缩包安装
wget https://curl.haxx.se/download/curl-7.30.1.tar.gz
#解压
tar -xzvf  curl-7.30.1.tar.gz 
cd curl-7.30.1
./configure
make && make install


## 直接安装
apt-get install curl -y

yum install curl

```

查看是否安装成功
```bash
## 版本
curl --version

## 查看帮助
curl --help
```

## 常见用法


### 查看源码

直接返回的是网页源码
```bash
curl www.142vip.cn

[root@fairy /]# curl www.142vip.cn
<html>
<head><title>307 Temporary Redirect</title></head>
<body>
<center><h1>307 Temporary Redirect</h1></center>
<hr><center>nginx/1.23.0</center>
</body>
</html>

### 保存在本地
curl -o xxx www.142vip.cn
```

### 显示头信息

- `-i` 参数可以显示 http response 的头信息，连同网页代码一起
- `-I` 参数则只显示 http response 的头信息

```bash
curl -i www.142vip.cn

[root@fairy /]# curl -i www.142vip.cn
HTTP/1.1 307 Temporary Redirect
Server: nginx/1.23.0
Date: Wed, 15 Mar 2023 15:18:36 GMT
Content-Type: text/html
Content-Length: 171
Connection: keep-alive
Location: https://www.142vip.cn/

<html>
<head><title>307 Temporary Redirect</title></head>
<body>
<center><h1>307 Temporary Redirect</h1></center>
<hr><center>nginx/1.23.0</center>
</body>
</html>


curl -I www.142vip.cn

[root@fairy /]# curl -I www.142vip.cn
HTTP/1.1 307 Temporary Redirect
Server: nginx/1.23.0
Date: Wed, 15 Mar 2023 15:18:59 GMT
Content-Type: text/html
Content-Length: 171
Connection: keep-alive
Location: https://www.142vip.cn/

```

### 显示通信过程

-v 参数可以显示一次 http 通信的整个过程，包括端口连接和 http request 头信息

```bash
curl -v www.142vip.cn

[root@fairy /]# curl -v www.142vip.cn
* About to connect() to www.142vip.cn port 80 (#0)
*   Trying 120.48.94.91...
* Connected to www.142vip.cn (120.48.94.91) port 80 (#0)
> GET / HTTP/1.1
> User-Agent: curl/7.29.0
> Host: www.142vip.cn
> Accept: */*
> 
< HTTP/1.1 307 Temporary Redirect
< Server: nginx/1.23.0
< Date: Wed, 15 Mar 2023 15:21:00 GMT
< Content-Type: text/html
< Content-Length: 171
< Connection: keep-alive
< Location: https://www.142vip.cn/
< 
<html>
<head><title>307 Temporary Redirect</title></head>
<body>
<center><h1>307 Temporary Redirect</h1></center>
<hr><center>nginx/1.23.0</center>
</body>
</html>
* Connection #0 to host www.142vip.cn left intact
```

使用`--trace`可以查看更为详细的通信过程，例如：

```bash
curl --trace xxx.txt www.142vip.cn

## 指定编码
curl --trace-ascii xxx.txt www.142vip.cn

## 查看txt内容
cat xxx.txt
```


### 网页自动跳转

有的网址是自动跳转的。使用`-L`参数，curl 可以跳转到新的网址
```bash
curl -L www.142vip.cn

## 这里直接跳转到反向代理页面
```

## 发送http请求

### Get请求

```bash
## get请求 query和params传参
curl www.142vip.cn/abc?id=xxx
```

### Post请求

支持 `--data` 或者 `-d` 来传递`body`参数

```bash
## post请求 指定类型
curl -X POST --data "id=xxx" www.142vip.cn/abc
```

也支持将本地json文件放在`body`体中传递给api接口

```bash
## 指定test.json中数据
curl -H "Content-Type: application/json" -X POST -d @data.json www.142vip.cn/abc
```

`--data-urlencode` 支持URL编码

```bash
curl -X POST --data-urlencode "id=1" www.142vip.cn/abc
```

当然，对于常见的`Put`、`Delete`等类型的请求，可以直接通过`-X`参数指定

```bash
curl -X POST www.142vip.cn/abc
curl -X DELETE www.142vip.cn/abc
```

### 传递Cookie

`--cookie` 参数 可以让 curl 发送 cookie。

```bash
curl --cookie "id=123456" www.142vip.cn
```

### 添加请求头

`--header` 参数添加请求头信息
```bash
curl --header "Content-Type:application/json" www.142vip.cn
```

### 支持HTTP认证
`--user` 或者 `-u` 参数 来传递用户信息，进行HTTP认证
```bash
## 格式
curl --user name:password www.142vip.cn

## 例如
curl --user root:123456 www.142vip.cn

```

### 传递User-Agent

使用`--user-agent`参数
```bash
## 指定user-agent
curl --user-agent "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36" www.142vip.cn

[root@fairy /]# curl -v  --user-agent "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36" www.142vip.cn
* About to connect() to www.142vip.cn port 80 (#0)
*   Trying 120.48.94.91...
* Connected to www.142vip.cn (120.48.94.91) port 80 (#0)
> GET / HTTP/1.1
> User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36
> Host: www.142vip.cn
> Accept: */*
> 
< HTTP/1.1 307 Temporary Redirect
< Server: nginx/1.23.0
< Date: Wed, 15 Mar 2023 15:34:39 GMT
< Content-Type: text/html
< Content-Length: 171
< Connection: keep-alive
< Location: https://www.142vip.cn/
< 
<html>
<head><title>307 Temporary Redirect</title></head>
<body>
<center><h1>307 Temporary Redirect</h1></center>
<hr><center>nginx/1.23.0</center>
</body>
</html>
* Connection #0 to host www.142vip.cn left intact
```


## 参考资料