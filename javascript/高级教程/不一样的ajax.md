## 不一样的Ajax

> ajax: 即async javascript and xml，就是异步的js和xml 

### 关于XML

> 在早些时候，基于ajax从服务器获取的数据一般都是xml格式数据，只不过现在基本都是应用更小巧更方便操作的json格式处理

- `html`超文本标记语言
- `xhtml`严谨的`html`
- `xml`可拓展的标记语言（基于标签结构存储数据）

### 异步js

> 基于ajax实现局部刷新

- 服务器渲染  一般都是同步 全局刷新
- 客户端渲染   一般是异步  局部刷新

### 基础操作

对于ajax的操作有核心的四步操作：

#### 创建xhr对象

```js
let xhr = new XMLHttpRequest;
// 不兼容XMLHttpRequest的浏览器用ActiveXObject
let xhr = new ActiveXObject
```

#### 配置请求信息

> xhr.open(method, url, async, user-name, user-pass),其中`method`为`http`请求的方法 不管是哪一种请求方式，客户端都可以把信息传递给服务器，服务器也可以把信息返回给客户端，只不过get偏向于拿（给的少拿得多）

##### get：从服务器获取

> get请求url有长度限制：具体表现为ie: 2083字符，大约为2kb，谷歌: 8182字符大约为4kb

- `get/head`（只获取响应头信息，不获取响应主题内容）

- `delete`删除，一般代指删除服务器上指定的文件

- `options` 试探性请求

  > 在cross跨域请求中，所以正常请求发送前，先发送一个试探请求，验证是否可以和服务器正常的建立连接

##### post：向服务器发送

> `post`偏向于给（给的多拿的少），`post`请求理论上没有大小限制

- `post/put`新增，一般代指向服务器中新增文件

- `get`请求和`post`的区别
  - `get`请求相对于`post`来说，不安全，`get`请求传参是基于`URL`问号传参，会被别人基于`URL`劫持的方式把信息获取到有一句话说得好：“互联网面前人人都在裸奔”，所以没有绝对的安全，需要更多的去处理安全性。
  - `get`请求容易产生缓存，原因还是因为`get`是基于问号传参传递信息的。浏览器在每一次获取数据后，一般会缓存一下数据，下一次如果请求的地址和参数和上一次一样，浏览器会直接获取缓存中的数据，所以基于`get`发送请求，需要清除缓存的时候，一般都会在地址栏中添加一个随机数，类似于这样：`_ = Math.random`
- 基于`get`向服务器发送请求，传递给服务器的方式：
  - 基于请求头传递给服务器（本地cookie信息传递给服务器）
  - 请求url地址后面的问号传参 === 主要方式
  - 监听请求状态，在不同状态中做不同的事情
  - 发送AJAX请求 ajax任务开始 直到响应主体信息返回
- 基于`post`向服务器发送请求，传递给服务器的方式

传递给服务器的数据格式为`application/x-www--form-urlencoded xx=xxx&xx=xxxx`、`multipart/form-data`（表单提交、文件上传）、`raw`（可以上传`text`、`json`、`xml`等格式的文本）、`binary`（上传二进制数据或者编码格式的数据）

```js
let xhr = new XMLHttpRequest
```

- ajax状态码

| 0      | 1            | 2                | 3                      | 4                |
| ------ | ------------ | ---------------- | ---------------------- | ---------------- |
| UNSENT | OPENED       | HEADERS_RECEIVED | LOADING                | DONE             |
| 创建完 | 完成open操作 | 响应头信息回来   | 响应主体信息正在返回中 | 响应主体已经返回 |

- HTTP状态码

> 简单列举常见的状态码

**200: OK，请求成功。一般用于GET与POST请求**

304: Not Modified，未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源

400: Bad Request，客户端请求的语法错误，服务器无法理解

**401: Unauthorized，请求要求用户的身份认证**

403: Forbidden，服务器理解请求客户端的请求，但是拒绝执行此请求

**404: Not Found，服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面**

**500: Internal Server Error，服务器内部错误，无法完成请求**

502: Bad Gateway，作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应

503: Service Unavailable，由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中

504: Gateway Time-out，充当网关或代理的服务器，未及时从远端服务器获取请求

注意：在真实项目中，后台开发者可能不是按照这个规则来处理的，不管传参或者权限是否正确等，只要服务器接收到请求最后都给返回200，在返回的json数据，基于某个字段表示错误信息。所以要和后端沟通好～

- xhr的一些方法

```js
status = xhr.status;  // http状态码
state = xhr.readyState;
if(/^(2|3)\d{2}$/.test(status))  // 成功
xhr.getAllResponseHeaders()  响应头信息
xhr.getAllResponse（"date"）  服务器日期是格林尼治时间GMT  比北京时间晚了八小时  new Date处理
xhr.response         // 响应主体信息
xhr.setheaders
xhr.timeout
xhr.withCredentials   // 允许携带跨域
xhr.abort()  打断请求
// 请求头信息不能是中文和特殊字符，要编码
```

### 获取数据

知道AJAX用来在项目中以阻止页面刷新的方式获取数据，那么数据从哪里来呢？又怎么知道如何获取这些数据？答案是通常使用**API**与各式各样的数据库交互。

“API”是“Application Programming Interface”(即：应用程序接口)的缩写，可以想象一些数据是开放的并且在等待被使用，而获取这些数据的方式便是使用API。API通常的形式是一个URL，并提供指定的参数名和参数值用来帮助你定位所要获取的数据。

### XMLHttpRequest对象

让先把服务器端的设置抛在一边，聚焦AJAX技术的核心环节：`XMLHttpRequest`对象。

`XMLHttpRequest`对象是浏览器提供的一个API，用来顺畅地向服务器发送请求并解析服务器响应，当然整个过程中，浏览器页面不会被刷新。它将是本文接下来的主角，让先站在较高的层次，对该对象有一个全局的概览：

1. `XMLHttpRequest`只是一个JavaScript对象，确切的说，是一个**构造函数**。换句话说，它一点也不神秘，它的特殊之处只在于它是由客户端(即浏览器)提供的（而不是JavaScript原生的），除此之外，它有属性，有方法，需要通过`new`关键字进行实例化，只需掌握它们就好；
2. `XMLHttpRequest`对象是不断被扩展的。随着XML对象被广泛的接收，W3C也开始着手制定相应的标准来规范其行为。目前，`XMLHttpRequest`有两个级别：1级提供了XML对象的实现细节，2级进一步发展了XML对象，额外添加了一些方法，属性和数据类型。但是，并不是所有浏览器都实现了XML对象2级的内容（并不意外，对吧？）；

让先从剖析`XMLHttpRequest`实例的属性和方法开始，先创建一个XML对象的实例：

```js
const xhr = new XMLHttpRequest()
```

该实例的属性，方法有：

#### 方法

- `.open()`：准备启动一个AJAX请求；
- `.setRequestHeader()`：设置请求头部信息；
- `.send()`：发送AJAX请求；
- `.getResponseHeader()`: 获得响应头部信息；
- `.getAllResponseHeader()`：获得一个包含所有头部信息的长字符串；
- `.abort()`：取消异步请求；

#### 属性

- `.responseText`：包含响应主体返回文本；
- `.responseXML`：如果响应的内容类型时`text/xml`或`application/xml`，该属性将保存包含着相应数据的XML DOM文档；
- `.status`：响应的HTTP状态；
- `.statusText`：HTTP状态的说明；
- `.readyState`：表示“请求”/“响应”过程的当前活动阶段

另外，浏览器还为该对象提供了一个`onreadystatechange`监听事件，每当XML实例的`readyState`属性变化时，就会触发该事件的发生。

至此，关于XMLHttpRequest实例对象的属性方法就全部罗列完毕了，接下来，将更进一步的探究如何使用这些方法，属性完成发送AJAX请求的流程。

### 准备AJAX请求

要想与服务器交互，首先需要回答以下问题：

- 是要获取数据还是存储数据？  --表现为请求方式的不同：`GET`或`POST`；
- 向哪里发出请求？  --即相应API地址；
- 以何种方式等待响应？  --有“**同步**”和“**异步**”两种选择；（网络传输是一个过程，请求和响应不是同时发生的。）

而XMLHttpRequest实例的`.open()`方法的作用就是用来回答以上三个问题。`.open()`方法接收三个参数：**请求方式**，**请求URL地址**和**是否为异步请求的布尔值**。

下面是一个`.open()`方法调用的例子：

```js
// 会启动一个针对“example.php”的GET同步请求。
xhr.open("get", "example.php", false)
```

相当于开始做饭前，将工具准备齐备，将菜洗好，`.open()`方法也同样出色地完成了发送AJAX请求的准备工作。

现在，让再深入聊聊一些准备工作的细节：

#### GET请求 与 POST请求

- GET请求

GET请求用于**获取数据**，有时候需要获取的数据需要通过“查询参数”进行定位，在这种情况下，会将查询参数追加到URL的末尾，令服务器解析。

查询参数是指一个由`?`号起始，由`&`符号分割的包含相应键值对的字符串。用来告知浏览器所要查询的特定资源。

```js
// "?name=tom&age=24"即是一个查询参数
const query = "example.php?name=tom&age=24" 
```

需要注意的是，查询字符串中每个参数的名和值都必须使用encodeURIComponent()进行编码（这是因为URL中有些字符会引起歧义，例如“&”）。

- POST请求

POST请求用于**向服务器发送应该被保存的数据**，因此POST请求天然比GET请求多需要一份**需要被保存的数据**。那么这些数据应该放在何处呢？毕竟，的`.open()`方法接收的三个参数都没有合适的位置。

答案是需要发送的数据会作为`.send()`方法的参数最终被发往服务器，该数据可以是任意大小，任意类型。

这里需要注意以下两点：

1. `.send()`方法的参数是不可为空的，也就是说，对于不需要发送任何数据的GET请求，也需要在调用`.send()`方法时，向其传入`null`值；
2. 目前为止，知道了两种向服务器发送数据的方式：**表单提交**以及**发送POST请求**，要注意服务器对待这两种方式并不一视同仁，这意味着服务器需要有相应的代码专门处理POST请求发送来的原始数据。

但好在可以通过POST请求模拟表单提交，只需要简单两步：

1. 设置请求头参数：`Content-Type: application/x-www-form-urlencoded`（表单提交时的内容类型）；
2. 将表单数据序列化为查询字符串形式，传入`.send()`方法；

#### 请求URL地址

这里需要注意若使用相对路径，请求URL是**相对于执行代码的当前页面**。

### 设置请求头

每个HTTP请求和响应都会带有相应的头部信息，包含一些与数据，收发者网络环境与状态等相关信息。XMLHttpRequest对象提供的`.setRequestHeader()`方法为开发者提供了一个操作这两种头部信息的方法，并允许开发者自定义请求头的头部信息。

默认情况下，当发送AJAX请求时，会附带以下头部信息：

- `Accept`：浏览器能够处理的内容类型；
- `Accept-Charset`: 浏览器能够显示的字符集；
- `Accept-Encoding`：浏览器能够处理的压缩编码；
- `Accept-Language`：浏览器当前设置的语言；
- `Connection`：浏览器与服务器之间连接的类型；
- `Cookie`：当前页面设置的任何Cookie；
- `Host`：发出请求的页面所在的域；
- `Referer`：发出请求的页面URI；
- `User-Agent`：浏览器的用户代理字符串；

**注意**，部分浏览器不允许使用`.setRequestHeader()`方法重写默认请求头信息，因此自定义请求头信息是更加安全的方法：

```js
// 自定义请求头
xhr.setRequestHeader("myHeader", "MyValue")
```

### 发送请求

到此为止，已经完全做好了发送请求的所有准备：利用`.open()`方法确定了请求方式，等待响应的方式和请求地址，甚至还通过`.setRequestHeader()`自定义了响应头，接下来就到了最激动人心的时刻：使用`.send()`方法，发送AJAX请求！

```
// 发送AJAX请求！
const xhr = new XMLHttpRequest()
xhr.open("get", "example.php", false)
xhr.setRequestHeader("myHeader", "goodHeader")
xhr.send(null)
复制代码
```

呃，简单的有些令人尴尬不是吗？换个POST请求试试看：

```
// 发送AJAX请求！
const xhr = new XMLHttpRequest()
xhr.open("post", "example.php", false)
xhr.setRequestHeader("myHeader", "bestHeader")
xhr.send(some_data)
复制代码
```

额..，总觉得还是差点什么？放轻松伙计，因为只是发出了请求，还没有**处理响应**，这就来看看它。

### 处理响应

让直接看看如何处理一个同步的GET请求响应：

```js
const xhr = new XMLHttpRequest()
xhr.open("get", "example.php", false)
xhr.setRequestHeader("myHeader", "goodHeader")
xhr.send(null)
// 由于是同步的AJAX请求，因此只有当服务器响应后才会继续执行下面的代码
// 因此xhr.status的值一定不为默认值
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText)
} else {
    alert("Request was unsuccessful: " + xhr.status)
}
```

上面的代码不难理解，通过之前提到的xhr`.status`属性（如果你忘记了，它存储着响应的HTTP状态）判断请求是否成功，如果成功的话，将读取xhr`.responseText`属性中存储的返回值。但是，当的请求为异步时，问题就稍微变得复杂了，由于是异步的请求，在`xhr.send(null)`语句被执行后，JavaScript引擎会紧接着执行下面的判断语句，而这时由于尚未来得及响应，注定会得到一个默认的xhr.status值，因此，永远都不可能获取请求的资源了。

如何解决这个问题？答案是通过为XMLHTTPRequest实例添加`onreadystatechange`事件处理程序（当然你也可以直接使用DOM2级规范规定的`.addEventListener()`方法，但是注意，IE8是不支持该方法的）。

xhr实例的`readystatechange`事件会监听xhr`.readyState`属性的变化，你可以将这个属性想象为一个计数器，随着AJAX流程的推进而不断累加，其可取的值如下：

- **0**：未初始化 -- 尚未调用`.open()`方法；
- **1**：启动 -- 已经调用`.open()`方法，但尚未调用`.send()`方法；
- **2**：发送 -- 已经调用`.send()`方法，但尚未接收到响应；
- **3**：接收 -- 已经接收到部分响应数据；
- **4**：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；

有了这个时间处理程序对AJAX进程做监听，剩下的事就简单多了，一个异步的GET请求代码如下：

```js
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if (xhr.readystate == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText)
        } else {
            alert("Request was unsuccessful: " + xhr.status)
        }
    }
}
xhr.open("get", "example.php", true)
xhr.send(null)
```

### XMLHttpRequest拓展

#### FormData 类型

FormData是XMLHttpRequest 2级为提供的新的数据类型（构造函数），还记的之前是如何伪装一个POST请求为一个表单提交吗？FormData令这一过程变得更加轻松，因为XHR对象能够识别传入的数据类型是FormData的实例，并自动配置适当的头部信息。

FormData的使用方式如下：

```js
// 添加数据
let data1 = new FormData()
data1.append("name", "Tom")
xhr.send(data1)
// 提取表单数据
let data2 = new FormData(document.forms[0])
xhr.send(data2)
```

除此之外，FormData的另一个好处是相较于传统的AJAX请求，它允许上传二进制数据（图片，视频，音频等），

FormData的浏览器兼容性：

- 桌面端 
  - IE 10+ 与其他浏览器均支持
- 移动端 
  - Android，Firefox Mobile，OperaMobile均支持，其余浏览器未知

#### 超时设定

当发送一个AJAX请求，却迟迟得不到服务器响应，这种感觉是很糟糕的。为了缓解这种糟糕的感觉，XMLHttpRequest 2级规范为提供了一个额外的属性和事件监听事件：

- `timeout`属性：设置超时时间，单位为毫秒；
- `timeout`事件：当响应时间超出实例对象timeout属性时被触发；

使用方式如下：

```js
// 当响应时间超过1秒时，请求中止，弹出提示框
xhr.timeout = 1000
xhr.ontimeout = () => { 
    alert("Request did not return in a second.")
}
```

注意，当请求终止时，会调用`ontimeout`事件处理程序，此时xhr的`readyState`属性的值可能已变为4，这意味着会继续调用`onreadystatechange`事件处理程序，但是当超时中止请求后再访问xhr的`status`属性会使浏览器抛出一个错误，因此需要将检查`status`属性的语句放入`try-catch`语句中。

虽然带来了一些麻烦，但是却对XMLHttpRequest对象有了更多的控制。

浏览器兼容性：

- 桌面端 
  - IE 10+ 与其他浏览器均支持
- 移动端 
  - IE Mobile 10+ 与其他浏览器均支持

#### overrideMimeType()方法

响应返回的响应头里，描述了返回数据的MIME类型，浏览器通过识别该类型，告知XMLHttpRequest实例处理该数据的方式。然而有时候（例如将XML类型数据当做纯文本处理），想要以想要的方式处理响应的数据，在XMLHttpRequest 2级规范中，可以使用`.overrideMimeType()`方法，从方法名也可以轻松猜出，该方法可以覆写响应头所描述数据的MIME类型。

其写法如下：

```js
const xhr = new XMLHttpRequest()
xhr.open("get", "example.php", true)
xhr.overrideMimeType("text/xml") // 强迫浏览器将响应数据以指定类型方式解读
xhr.send(null)
```

至此，掌控了响应数据的处理方式。

浏览器兼容性：

- 桌面端 
  - IE 7+ 与其他浏览器均支持
- 移动端 
  - Firefox Mobile，Chrome for Android 均支持，其余浏览器未知

#### 进度事件

Progress Events规范是W3C制定的一个工作草案。该规范定义了与客户端与服务器通信相关的一系列事件，这些事件监听了通信进程中的各个关键节点，使能够以更细的颗粒度掌控数据传输过程中的细节。目前共有6个进度事件，他们会随数据传输进展被顺序触发（除了error，abort事件），让看看他们的定义和浏览器兼容情况：

- loadstart：在接收到响应数据的第一个字节时触发； 
  - 桌面端：除 Safari Mobile 未知外，其他浏览器均支持
  - 移动端：除 Safari Mobile 未知外，其他浏览器均支持
- progress：在接收响应期间持续不断地触发； 
  - 桌面端：IE10+ 与其他浏览器均支持
  - 移动端：均支持
- error：在请求发生错误时触发； 
  - 桌面端：所有浏览器均支持
  - 移动端：除IE Mobile不支持外，其他浏览器均支持
- abort：再因为调用方法时触发； 
  - 桌面端：未知
  - 移动端：未知
- load：在接收到完整的响应数据时触发； 
  - 桌面端：IE7+ 与其他浏览器均支持
  - 移动端：Chrome for Android，Edge，Firefox Mobile支持，其余浏览器未知
- loadend：在通信完成或者触发error，或事件后触发； 
  - 桌面端：所有浏览器不支持
  - 移动端：所有浏览器不支持

① load事件

该事件帮助节省了`readstatechange`事件，不必在XHR对象实例上绑定该事件监听函数以追踪实例上`readState`属性的变化，而是可以直接使用以下代码：

```js
const xhr = new XMLHttpRequest()
xhr.onload = () => {
    if ((xhr.status >= 200 && xhr.status <300) || xhr.status == 304) {
        alert(xhr.responseText)
    } else {
        alert("Something wrong!")
    }
}
xhr.open("get", "example.php", true)
xhr.send(null)
```

② progress事件

该事件令可以实现梦寐以求的加载进度条效果。因为`onprogress`事件处理程序会接收到一个`event`对象，其`target`属性为XHR对象实例，但却额外包含着三个属性：

- `lengthComputable`：表示进度信息是否可用的布尔值；
- `position`：表示目前接收的字节数；
- `totalSize`：表示根据Content-Length响应头部确定的预期字节数；

```js
const xhr = new XMLHttpRequest()
xhr.onload = () => {
    if ((xhr.status >= 200 && xhr.status <300) || xhr.status == 304) {
        alert(xhr.responseText)
    } else {
        alert("Something wrong!")
    }
}
// 加载进度条
xhr.onprogress = function(event) {
    const divStatus = document.getElementById("status")
    if (event.lengthComputable) {
        divStatus.innerHTML = `Received ${event.postion} of ${event.totalSize} bytes`
    }
}
xhr.open("get", "example.php", true)
xhr.send(null)
```

