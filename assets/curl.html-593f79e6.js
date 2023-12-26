import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as a,d as r,e as s}from"./app-be253e4c.js";const l={},i=s(`<h1 id="curl命令" tabindex="-1"><a class="header-anchor" href="#curl命令" aria-hidden="true">#</a> curl命令</h1><p><code>curl</code>是命令行工具，主要用来在cmd终端下发送网络请求、获取数据，支持多种协议，在后端应用频繁</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fairy /<span class="token punctuation">]</span><span class="token comment"># curl --help</span>
Usage: <span class="token function">curl</span> <span class="token punctuation">[</span>options<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
Options: <span class="token punctuation">(</span>H<span class="token punctuation">)</span> means HTTP/HTTPS only, <span class="token punctuation">(</span>F<span class="token punctuation">)</span> means FTP only
     <span class="token parameter variable">--anyauth</span>       Pick <span class="token string">&quot;any&quot;</span> authentication method <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -a, <span class="token parameter variable">--append</span>        Append to target <span class="token function">file</span> when uploading <span class="token punctuation">(</span>F/SFTP<span class="token punctuation">)</span>
     <span class="token parameter variable">--basic</span>         Use HTTP Basic Authentication <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     <span class="token parameter variable">--cacert</span> FILE   CA certificate to verify peer against <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--capath</span> DIR    CA directory to verify peer against <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
 -E, <span class="token parameter variable">--cert</span> CERT<span class="token punctuation">[</span>:PASSWD<span class="token punctuation">]</span> Client certificate <span class="token function">file</span> and password <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     --cert-type TYPE Certificate <span class="token function">file</span> <span class="token builtin class-name">type</span> <span class="token punctuation">(</span>DER/PEM/ENG<span class="token punctuation">)</span> <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--ciphers</span> LIST  SSL ciphers to use <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--compressed</span>    Request compressed response <span class="token punctuation">(</span>using deflate or <span class="token function">gzip</span><span class="token punctuation">)</span>
 -K, <span class="token parameter variable">--config</span> FILE   Specify <span class="token function">which</span> config <span class="token function">file</span> to <span class="token builtin class-name">read</span>
     --connect-timeout <span class="token environment constant">SECONDS</span>  Maximum <span class="token function">time</span> allowed <span class="token keyword">for</span> connection
 -C, --continue-at OFFSET  Resumed transfer offset
 -b, <span class="token parameter variable">--cookie</span> STRING/FILE  String or <span class="token function">file</span> to <span class="token builtin class-name">read</span> cookies from <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -c, --cookie-jar FILE  Write cookies to this <span class="token function">file</span> after operation <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --create-dirs   Create necessary <span class="token builtin class-name">local</span> directory hierarchy
     <span class="token parameter variable">--crlf</span>          Convert LF to CRLF <span class="token keyword">in</span> upload
     <span class="token parameter variable">--crlfile</span> FILE  Get a CRL list <span class="token keyword">in</span> PEM <span class="token function">format</span> from the given <span class="token function">file</span>
 -d, <span class="token parameter variable">--data</span> DATA     HTTP POST data <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --data-ascii DATA  HTTP POST ASCII data <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --data-binary DATA  HTTP POST binary data <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --data-urlencode DATA  HTTP POST data url encoded <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     <span class="token parameter variable">--delegation</span> STRING GSS-API delegation permission
     <span class="token parameter variable">--digest</span>        Use HTTP Digest Authentication <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --disable-eprt  Inhibit using EPRT or LPRT <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --disable-epsv  Inhibit using EPSV <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
 -D, --dump-header FILE  Write the headers to this <span class="token function">file</span>
     --egd-file FILE  EGD socket path <span class="token keyword">for</span> random data <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--engine</span> ENGINGE  Crypto engine <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>. <span class="token string">&quot;--engine list&quot;</span> <span class="token keyword">for</span> list
 -f, <span class="token parameter variable">--fail</span>          Fail silently <span class="token punctuation">(</span>no output at all<span class="token punctuation">)</span> on HTTP errors <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -F, <span class="token parameter variable">--form</span> CONTENT  Specify HTTP multipart POST data <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --form-string STRING  Specify HTTP multipart POST data <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --ftp-account DATA  Account data string <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-alternative-to-user COMMAND  String to replace <span class="token string">&quot;USER [name]&quot;</span> <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-create-dirs  Create the remote <span class="token function">dirs</span> <span class="token keyword">if</span> not present <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-method <span class="token punctuation">[</span>MULTICWD/NOCWD/SINGLECWD<span class="token punctuation">]</span> Control CWD usage <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-pasv      Use PASV/EPSV instead of PORT <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
 -P, --ftp-port ADR  Use PORT with given address instead of PASV <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-skip-pasv-ip Skip the IP address <span class="token keyword">for</span> PASV <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-pret      Send PRET before PASV <span class="token punctuation">(</span>for drftpd<span class="token punctuation">)</span> <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-ssl-ccc   Send CCC after authenticating <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-ssl-ccc-mode ACTIVE/PASSIVE  Set CCC mode <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --ftp-ssl-control Require SSL/TLS <span class="token keyword">for</span> <span class="token function">ftp</span> login, <span class="token function">clear</span> <span class="token keyword">for</span> transfer <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
 -G, <span class="token parameter variable">--get</span>           Send the <span class="token parameter variable">-d</span> data with a HTTP GET <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -g, <span class="token parameter variable">--globoff</span>       Disable URL sequences and ranges using <span class="token punctuation">{</span><span class="token punctuation">}</span> and <span class="token punctuation">[</span><span class="token punctuation">]</span>
 -H, <span class="token parameter variable">--header</span> LINE   Custom header to pass to server <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -I, <span class="token parameter variable">--head</span>          Show document info only
 -h, <span class="token parameter variable">--help</span>          This <span class="token builtin class-name">help</span> text
     <span class="token parameter variable">--hostpubmd5</span> MD5  Hex encoded MD5 string of the <span class="token function">host</span> public key. <span class="token punctuation">(</span>SSH<span class="token punctuation">)</span>
 -0, <span class="token parameter variable">--http1.0</span>       Use HTTP <span class="token number">1.0</span> <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --ignore-content-length  Ignore the HTTP Content-Length header
 -i, <span class="token parameter variable">--include</span>       Include protocol headers <span class="token keyword">in</span> the output <span class="token punctuation">(</span>H/F<span class="token punctuation">)</span>
 -k, <span class="token parameter variable">--insecure</span>      Allow connections to SSL sites without certs <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     <span class="token parameter variable">--interface</span> INTERFACE  Specify network interface/address to use
 -4, <span class="token parameter variable">--ipv4</span>          Resolve name to IPv4 address
 -6, <span class="token parameter variable">--ipv6</span>          Resolve name to IPv6 address
 -j, --junk-session-cookies Ignore session cookies <span class="token builtin class-name">read</span> from <span class="token function">file</span> <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --keepalive-time <span class="token environment constant">SECONDS</span>  Interval between keepalive probes
     <span class="token parameter variable">--key</span> KEY       Private key <span class="token function">file</span> name <span class="token punctuation">(</span>SSL/SSH<span class="token punctuation">)</span>
     --key-type TYPE Private key <span class="token function">file</span> <span class="token builtin class-name">type</span> <span class="token punctuation">(</span>DER/PEM/ENG<span class="token punctuation">)</span> <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--krb</span> LEVEL     Enable Kerberos with specified security level <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     <span class="token parameter variable">--libcurl</span> FILE  Dump libcurl equivalent code of this <span class="token builtin class-name">command</span> line
     --limit-rate RATE  Limit transfer speed to this rate
 -l, --list-only     List only names of an FTP directory <span class="token punctuation">(</span>F<span class="token punctuation">)</span>
     --local-port RANGE  Force use of these <span class="token builtin class-name">local</span> port numbers
 -L, <span class="token parameter variable">--location</span>      Follow redirects <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --location-trusted like <span class="token parameter variable">--location</span> and send auth to other hosts <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -M, <span class="token parameter variable">--manual</span>        Display the full manual
     --mail-from FROM  Mail from this address
     --mail-rcpt TO  Mail to this receiver<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
     --mail-auth AUTH  Originator address of the original email
     --max-filesize BYTES  Maximum <span class="token function">file</span> size to download <span class="token punctuation">(</span>H/F<span class="token punctuation">)</span>
     --max-redirs NUM  Maximum number of redirects allowed <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -m, --max-time <span class="token environment constant">SECONDS</span>  Maximum <span class="token function">time</span> allowed <span class="token keyword">for</span> the transfer
     <span class="token parameter variable">--metalink</span>      Process given URLs as metalink XML <span class="token function">file</span>
     <span class="token parameter variable">--negotiate</span>     Use HTTP Negotiate Authentication <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -n, <span class="token parameter variable">--netrc</span>         Must <span class="token builtin class-name">read</span> .netrc <span class="token keyword">for</span> user name and password
     --netrc-optional Use either .netrc or URL<span class="token punctuation">;</span> overrides <span class="token parameter variable">-n</span>
     --netrc-file FILE  Set up the netrc filename to use
 -N, --no-buffer     Disable buffering of the output stream
     --no-keepalive  Disable keepalive use on the connection
     --no-sessionid  Disable SSL session-ID reusing <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--noproxy</span>       List of hosts <span class="token function">which</span> <span class="token keyword">do</span> not use proxy
     <span class="token parameter variable">--ntlm</span>          Use HTTP NTLM authentication <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -o, <span class="token parameter variable">--output</span> FILE   Write output to <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> instead of stdout
     <span class="token parameter variable">--pass</span> PASS     Pass phrase <span class="token keyword">for</span> the private key <span class="token punctuation">(</span>SSL/SSH<span class="token punctuation">)</span>
     <span class="token parameter variable">--post301</span>       Do not switch to GET after following a <span class="token number">301</span> redirect <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     <span class="token parameter variable">--post302</span>       Do not switch to GET after following a <span class="token number">302</span> redirect <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     <span class="token parameter variable">--post303</span>       Do not switch to GET after following a <span class="token number">303</span> redirect <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -<span class="token comment">#, --progress-bar  Display transfer progress as a progress bar</span>
     <span class="token parameter variable">--proto</span> PROTOCOLS  Enable/disable specified protocols
     --proto-redir PROTOCOLS  Enable/disable specified protocols on redirect
 -x, <span class="token parameter variable">--proxy</span> <span class="token punctuation">[</span>PROTOCOL://<span class="token punctuation">]</span>HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span> Use proxy on given port
     --proxy-anyauth Pick <span class="token string">&quot;any&quot;</span> proxy authentication method <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --proxy-basic   Use Basic authentication on the proxy <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --proxy-digest  Use Digest authentication on the proxy <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --proxy-negotiate Use Negotiate authentication on the proxy <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
     --proxy-ntlm    Use NTLM authentication on the proxy <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -U, --proxy-user <span class="token environment constant">USER</span><span class="token punctuation">[</span>:PASSWORD<span class="token punctuation">]</span>  Proxy user and password
     <span class="token parameter variable">--proxy1.0</span> HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span>  Use HTTP/1.0 proxy on given port
 -p, <span class="token parameter variable">--proxytunnel</span>   Operate through a HTTP proxy tunnel <span class="token punctuation">(</span>using CONNECT<span class="token punctuation">)</span>
     <span class="token parameter variable">--pubkey</span> KEY    Public key <span class="token function">file</span> name <span class="token punctuation">(</span>SSH<span class="token punctuation">)</span>
 -Q, <span class="token parameter variable">--quote</span> CMD     Send command<span class="token punctuation">(</span>s<span class="token punctuation">)</span> to server before transfer <span class="token punctuation">(</span>F/SFTP<span class="token punctuation">)</span>
     --random-file FILE  File <span class="token keyword">for</span> reading random data from <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
 -r, <span class="token parameter variable">--range</span> RANGE   Retrieve only the bytes within a range
     <span class="token parameter variable">--raw</span>           Do HTTP <span class="token string">&quot;raw&quot;</span>, without any transfer decoding <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -e, <span class="token parameter variable">--referer</span>       Referer URL <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -J, --remote-header-name Use the header-provided filename <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -O, --remote-name   Write output to a <span class="token function">file</span> named as the remote <span class="token function">file</span>
     --remote-name-all Use the remote <span class="token function">file</span> name <span class="token keyword">for</span> all URLs
 -R, --remote-time   Set the remote <span class="token function">file</span><span class="token string">&#39;s time on the local output
 -X, --request COMMAND  Specify request command to use
     --resolve HOST:PORT:ADDRESS  Force resolve of HOST:PORT to ADDRESS
     --retry NUM   Retry request NUM times if transient problems occur
     --retry-delay SECONDS When retrying, wait this many seconds between each
     --retry-max-time SECONDS  Retry only within this period
 -S, --show-error    Show error. With -s, make curl show errors when they occur
 -s, --silent        Silent mode. Don&#39;</span>t output anything
     <span class="token parameter variable">--socks4</span> HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span>  SOCKS4 proxy on given <span class="token function">host</span> + port
     <span class="token parameter variable">--socks4a</span> HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span>  SOCKS4a proxy on given <span class="token function">host</span> + port
     <span class="token parameter variable">--socks5</span> HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span>  SOCKS5 proxy on given <span class="token function">host</span> + port
     --socks5-basic  Enable username/password auth <span class="token keyword">for</span> SOCKS5 proxies
     --socks5-gssapi Enable GSS-API auth <span class="token keyword">for</span> SOCKS5 proxies
     --socks5-hostname HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span> SOCKS5 proxy, pass <span class="token function">host</span> name to proxy
     --socks5-gssapi-service NAME  SOCKS5 proxy <span class="token function">service</span> name <span class="token keyword">for</span> gssapi
     --socks5-gssapi-nec  Compatibility with NEC SOCKS5 server
 -Y, --speed-limit RATE  Stop transfers below speed-limit <span class="token keyword">for</span> <span class="token string">&#39;speed-time&#39;</span> secs
 -y, --speed-time <span class="token environment constant">SECONDS</span>  Time <span class="token keyword">for</span> trig speed-limit abort. Defaults to <span class="token number">30</span>
     <span class="token parameter variable">--ssl</span>           Try SSL/TLS <span class="token punctuation">(</span>FTP, IMAP, POP3, SMTP<span class="token punctuation">)</span>
     --ssl-reqd      Require SSL/TLS <span class="token punctuation">(</span>FTP, IMAP, POP3, SMTP<span class="token punctuation">)</span>
 -2, <span class="token parameter variable">--sslv2</span>         Use SSLv2 <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
 -3, <span class="token parameter variable">--sslv3</span>         Use SSLv3 <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     --ssl-allow-beast Allow security flaw to improve interop <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--stderr</span> FILE   Where to redirect stderr. - means stdout
     --tcp-nodelay   Use the TCP_NODELAY option
 -t, --telnet-option <span class="token assign-left variable">OPT</span><span class="token operator">=</span>VAL  Set telnet option
     --tftp-blksize VALUE  Set TFTP BLKSIZE option <span class="token punctuation">(</span>must be <span class="token operator">&gt;</span><span class="token number">512</span><span class="token punctuation">)</span>
 -z, --time-cond TIME  Transfer based on a <span class="token function">time</span> condition
 -1, <span class="token parameter variable">--tlsv1</span>         Use <span class="token operator">=</span><span class="token operator">&gt;</span> TLSv1 <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--tlsv1.0</span>       Use TLSv1.0 <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--tlsv1.1</span>       Use TLSv1.1 <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--tlsv1.2</span>       Use TLSv1.2 <span class="token punctuation">(</span>SSL<span class="token punctuation">)</span>
     <span class="token parameter variable">--trace</span> FILE    Write a debug trace to the given <span class="token function">file</span>
     --trace-ascii FILE  Like <span class="token parameter variable">--trace</span> but without the hex output
     --trace-time    Add <span class="token function">time</span> stamps to trace/verbose output
     --tr-encoding   Request compressed transfer encoding <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -T, --upload-file FILE  Transfer FILE to destination
     <span class="token parameter variable">--url</span> URL       URL to work with
 -B, --use-ascii     Use ASCII/text transfer
 -u, <span class="token parameter variable">--user</span> <span class="token environment constant">USER</span><span class="token punctuation">[</span>:PASSWORD<span class="token punctuation">]</span>  Server user and password
     <span class="token parameter variable">--tlsuser</span> <span class="token environment constant">USER</span>  TLS username
     <span class="token parameter variable">--tlspassword</span> STRING TLS password
     <span class="token parameter variable">--tlsauthtype</span> STRING  TLS authentication <span class="token builtin class-name">type</span> <span class="token punctuation">(</span>default SRP<span class="token punctuation">)</span>
     --unix-socket FILE    Connect through this UNIX domain socket
 -A, --user-agent STRING  User-Agent to send to server <span class="token punctuation">(</span>H<span class="token punctuation">)</span>
 -v, <span class="token parameter variable">--verbose</span>       Make the operation <span class="token function">more</span> talkative
 -V, <span class="token parameter variable">--version</span>       Show version number and quit
 -w, --write-out FORMAT  What to output after completion
     <span class="token parameter variable">--xattr</span>        Store metadata <span class="token keyword">in</span> extended <span class="token function">file</span> attributes
 <span class="token parameter variable">-q</span>                 If used as the first parameter disables .curlrc
</code></pre></div><h2 id="基本安装" tabindex="-1"><a class="header-anchor" href="#基本安装" aria-hidden="true">#</a> 基本安装</h2>`,4),u={href:"https://curl.se/download.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 压缩包安装</span>
<span class="token function">wget</span> https://curl.haxx.se/download/curl-7.30.1.tar.gz
<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span>  curl-7.30.1.tar.gz 
<span class="token builtin class-name">cd</span> curl-7.30.1
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>


<span class="token comment">## 直接安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span> <span class="token parameter variable">-y</span>

yum <span class="token function">install</span> <span class="token function">curl</span>

</code></pre></div><p>查看是否安装成功</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 版本</span>
<span class="token function">curl</span> <span class="token parameter variable">--version</span>

<span class="token comment">## 查看帮助</span>
<span class="token function">curl</span> <span class="token parameter variable">--help</span>
</code></pre></div><h2 id="常见用法" tabindex="-1"><a class="header-anchor" href="#常见用法" aria-hidden="true">#</a> 常见用法</h2><h3 id="查看源码" tabindex="-1"><a class="header-anchor" href="#查看源码" aria-hidden="true">#</a> 查看源码</h3><p>直接返回的是网页源码</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> www.142vip.cn

<span class="token punctuation">[</span>root@fairy /<span class="token punctuation">]</span><span class="token comment"># curl www.142vip.cn</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>nginx/1.23.<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>

<span class="token comment">### 保存在本地</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> xxx www.142vip.cn
</code></pre></div><h3 id="显示头信息" tabindex="-1"><a class="header-anchor" href="#显示头信息" aria-hidden="true">#</a> 显示头信息</h3><ul><li><code>-i</code> 参数可以显示 http response 的头信息，连同网页代码一起</li><li><code>-I</code> 参数则只显示 http response 的头信息</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> www.142vip.cn

<span class="token punctuation">[</span>root@fairy /<span class="token punctuation">]</span><span class="token comment"># curl -i www.142vip.cn</span>
HTTP/1.1 <span class="token number">307</span> Temporary Redirect
Server: nginx/1.23.0
Date: Wed, <span class="token number">15</span> Mar <span class="token number">2023</span> <span class="token number">15</span>:18:36 GMT
Content-Type: text/html
Content-Length: <span class="token number">171</span>
Connection: keep-alive
Location: https://www.142vip.cn/

<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>nginx/1.23.<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>


<span class="token function">curl</span> <span class="token parameter variable">-I</span> www.142vip.cn

<span class="token punctuation">[</span>root@fairy /<span class="token punctuation">]</span><span class="token comment"># curl -I www.142vip.cn</span>
HTTP/1.1 <span class="token number">307</span> Temporary Redirect
Server: nginx/1.23.0
Date: Wed, <span class="token number">15</span> Mar <span class="token number">2023</span> <span class="token number">15</span>:18:59 GMT
Content-Type: text/html
Content-Length: <span class="token number">171</span>
Connection: keep-alive
Location: https://www.142vip.cn/

</code></pre></div><h3 id="显示通信过程" tabindex="-1"><a class="header-anchor" href="#显示通信过程" aria-hidden="true">#</a> 显示通信过程</h3><p>-v 参数可以显示一次 http 通信的整个过程，包括端口连接和 http request 头信息</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-v</span> www.142vip.cn

<span class="token punctuation">[</span>root@fairy /<span class="token punctuation">]</span><span class="token comment"># curl -v www.142vip.cn</span>
* About to connect<span class="token punctuation">(</span><span class="token punctuation">)</span> to www.142vip.cn port <span class="token number">80</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
*   Trying <span class="token number">120.48</span>.94.91<span class="token punctuation">..</span>.
* Connected to www.142vip.cn <span class="token punctuation">(</span><span class="token number">120.48</span>.94.91<span class="token punctuation">)</span> port <span class="token number">80</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
<span class="token operator">&gt;</span> GET / HTTP/1.1
<span class="token operator">&gt;</span> User-Agent: curl/7.29.0
<span class="token operator">&gt;</span> Host: www.142vip.cn
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> 
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">307</span> Temporary Redirect
<span class="token operator">&lt;</span> Server: nginx/1.23.0
<span class="token operator">&lt;</span> Date: Wed, <span class="token number">15</span> Mar <span class="token number">2023</span> <span class="token number">15</span>:21:00 GMT
<span class="token operator">&lt;</span> Content-Type: text/html
<span class="token operator">&lt;</span> Content-Length: <span class="token number">171</span>
<span class="token operator">&lt;</span> Connection: keep-alive
<span class="token operator">&lt;</span> Location: https://www.142vip.cn/
<span class="token operator">&lt;</span> 
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>nginx/1.23.<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
* Connection <span class="token comment">#0 to host www.142vip.cn left intact</span>
</code></pre></div><p>使用<code>--trace</code>可以查看更为详细的通信过程，例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--trace</span> xxx.txt www.142vip.cn

<span class="token comment">## 指定编码</span>
<span class="token function">curl</span> --trace-ascii xxx.txt www.142vip.cn

<span class="token comment">## 查看txt内容</span>
<span class="token function">cat</span> xxx.txt
</code></pre></div><h3 id="网页自动跳转" tabindex="-1"><a class="header-anchor" href="#网页自动跳转" aria-hidden="true">#</a> 网页自动跳转</h3><p>有的网址是自动跳转的。使用<code>-L</code>参数，curl 可以跳转到新的网址</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> www.142vip.cn

<span class="token comment">## 这里直接跳转到反向代理页面</span>
</code></pre></div><h2 id="发送http请求" tabindex="-1"><a class="header-anchor" href="#发送http请求" aria-hidden="true">#</a> 发送http请求</h2><h3 id="get请求" tabindex="-1"><a class="header-anchor" href="#get请求" aria-hidden="true">#</a> Get请求</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## get请求 query和params传参</span>
<span class="token function">curl</span> www.142vip.cn/abc?id<span class="token operator">=</span>xxx
</code></pre></div><h3 id="post请求" tabindex="-1"><a class="header-anchor" href="#post请求" aria-hidden="true">#</a> Post请求</h3><p>支持 <code>--data</code> 或者 <code>-d</code> 来传递<code>body</code>参数</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## post请求 指定类型</span>
<span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&quot;id=xxx&quot;</span> www.142vip.cn/abc
</code></pre></div><p>也支持将本地json文件放在<code>body</code>体中传递给api接口</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 指定test.json中数据</span>
<span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-d</span> @data.json www.142vip.cn/abc
</code></pre></div><p><code>--data-urlencode</code> 支持URL编码</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST --data-urlencode <span class="token string">&quot;id=1&quot;</span> www.142vip.cn/abc
</code></pre></div><p>当然，对于常见的<code>Put</code>、<code>Delete</code>等类型的请求，可以直接通过<code>-X</code>参数指定</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST www.142vip.cn/abc
<span class="token function">curl</span> <span class="token parameter variable">-X</span> DELETE www.142vip.cn/abc
</code></pre></div><h3 id="传递cookie" tabindex="-1"><a class="header-anchor" href="#传递cookie" aria-hidden="true">#</a> 传递Cookie</h3><p><code>--cookie</code> 参数 可以让 curl 发送 cookie。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--cookie</span> <span class="token string">&quot;id=123456&quot;</span> www.142vip.cn
</code></pre></div><h3 id="添加请求头" tabindex="-1"><a class="header-anchor" href="#添加请求头" aria-hidden="true">#</a> 添加请求头</h3><p><code>--header</code> 参数添加请求头信息</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--header</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> www.142vip.cn
</code></pre></div><h3 id="支持http认证" tabindex="-1"><a class="header-anchor" href="#支持http认证" aria-hidden="true">#</a> 支持HTTP认证</h3><p><code>--user</code> 或者 <code>-u</code> 参数 来传递用户信息，进行HTTP认证</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 格式</span>
<span class="token function">curl</span> <span class="token parameter variable">--user</span> name:password www.142vip.cn

<span class="token comment">## 例如</span>
<span class="token function">curl</span> <span class="token parameter variable">--user</span> root:123456 www.142vip.cn

</code></pre></div><h3 id="传递user-agent" tabindex="-1"><a class="header-anchor" href="#传递user-agent" aria-hidden="true">#</a> 传递User-Agent</h3><p>使用<code>--user-agent</code>参数</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 指定user-agent</span>
<span class="token function">curl</span> --user-agent <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36&quot;</span> www.142vip.cn

<span class="token punctuation">[</span>root@fairy /<span class="token punctuation">]</span><span class="token comment"># curl -v  --user-agent &quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36&quot; www.142vip.cn</span>
* About to connect<span class="token punctuation">(</span><span class="token punctuation">)</span> to www.142vip.cn port <span class="token number">80</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
*   Trying <span class="token number">120.48</span>.94.91<span class="token punctuation">..</span>.
* Connected to www.142vip.cn <span class="token punctuation">(</span><span class="token number">120.48</span>.94.91<span class="token punctuation">)</span> port <span class="token number">80</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
<span class="token operator">&gt;</span> GET / HTTP/1.1
<span class="token operator">&gt;</span> User-Agent: Mozilla/5.0 <span class="token punctuation">(</span>Windows NT <span class="token number">10.0</span><span class="token punctuation">;</span> WOW64<span class="token punctuation">)</span> AppleWebKit/537.36 <span class="token punctuation">(</span>KHTML, like Gecko<span class="token punctuation">)</span> Chrome/51.0.2704.84 Safari/537.36
<span class="token operator">&gt;</span> Host: www.142vip.cn
<span class="token operator">&gt;</span> Accept: */*
<span class="token operator">&gt;</span> 
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">307</span> Temporary Redirect
<span class="token operator">&lt;</span> Server: nginx/1.23.0
<span class="token operator">&lt;</span> Date: Wed, <span class="token number">15</span> Mar <span class="token number">2023</span> <span class="token number">15</span>:34:39 GMT
<span class="token operator">&lt;</span> Content-Type: text/html
<span class="token operator">&lt;</span> Content-Length: <span class="token number">171</span>
<span class="token operator">&lt;</span> Connection: keep-alive
<span class="token operator">&lt;</span> Location: https://www.142vip.cn/
<span class="token operator">&lt;</span> 
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token number">307</span> Temporary Redirect<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>nginx/1.23.<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
* Connection <span class="token comment">#0 to host www.142vip.cn left intact</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,43);function d(m,h){const t=p("ExternalLinkIcon");return o(),c("div",null,[i,n("p",null,[a("下载链接："),n("a",u,[a("https://curl.se/download.html"),r(t)])]),k])}const f=e(l,[["render",d],["__file","curl.html.vue"]]);export{f as default};
