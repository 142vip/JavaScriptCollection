<template><h2 id="深入浅出node-js" tabindex="-1"><a class="header-anchor" href="#深入浅出node-js" aria-hidden="true">#</a> 深入浅出Node.js</h2>
<blockquote>
<p>文档类型：读书笔记</p>
<p>图书名称：《深入浅出的Node.js》</p>
<p>花费时间：断断续续2天   2021年2月18日~2021年2月20日</p>
</blockquote>
<p>node.js保持了Javascript在浏览器中单线程的特点。无法与其余线程共享任何状态；</p>
<p>单线程的好处：</p>
<ul>
<li>不需要像多线程编程那样处处在意状态的同步问题；</li>
<li>没有死锁的存在【不会出现资源竞争产生僵局—死锁】</li>
<li>没有线程上下文交换带来的性能开销；</li>
</ul>
<p>单线程的缺点：</p>
<ul>
<li>没有办法充分利用多核CPU</li>
<li>当前线程出现错误回导致整个应用退出，应用的健壮性值得考验</li>
<li><strong>单个线程出现大量计算占用CPU导致无法继续调用异步I/O</strong></li>
</ul>
<p><strong>Node采用和web Workers相同的思路（子进程）来解决单线程中大计算量的问题——<code>child_process</code>模块；</strong></p>
<p>Node利用事件循环来处理I/O密集型，不是启动每一个线程为每个请求服务，资源占用很少</p>
<ul>
<li>
<p>单线程角度讲，Node可以处理I/O密集型。</p>
</li>
<li>
<p>执行效率来看，Node中的V8引擎的执行效率也是非常高的。运算能力主要来源于V8引擎的深度性能优化；</p>
</li>
</ul>
<p>Node是单线程的，没有提供对多线程的技术支持，但是可以充分利用CPU：</p>
<ul>
<li>编写C/C++扩展更加高效地利用CPU</li>
<li>单线程无法满足需求----&gt;扩展C/C++，最后还可以通过<strong>子进程（child_process）</strong> 处理，通过IPC技术实现进程间的通信。将计算和I/O分离，还能充分利用多CPU</li>
</ul>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h3 id="模块机制" tabindex="-1"><a class="header-anchor" href="#模块机制" aria-hidden="true">#</a> 模块机制</h3>
<h4 id="commonjs的模块规范" tabindex="-1"><a class="header-anchor" href="#commonjs的模块规范" aria-hidden="true">#</a> CommonJS的模块规范</h4>
<blockquote>
<p>对模块的定义非常简单，包括模块定义、模块引入、模块标识三个部分。</p>
</blockquote>
<h5 id="模块定义" tabindex="-1"><a class="header-anchor" href="#模块定义" aria-hidden="true">#</a> 模块定义</h5>
<blockquote>
<p>模块中，上下文提供exports对象用于导出当前模块的方法或者变量 <strong>是唯一导出的出口</strong></p>
</blockquote>
<p>当然，在模块中还存在着module对象，代表模块本身，exports是module的属性，因此看到module.export 和exports的效果一样。</p>
<p><strong>在Node中一个js文件就是一个模块</strong></p>
<h5 id="模块引入" tabindex="-1"><a class="header-anchor" href="#模块引入" aria-hidden="true">#</a> 模块引入</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在CommonJS规范中，存在require()方法，接收模块标识，引入一个模块的API到当前的上下文中；</p>
<h5 id="模块标识" tabindex="-1"><a class="header-anchor" href="#模块标识" aria-hidden="true">#</a> 模块标识</h5>
<p>模块标识指的是传递给require()方法的参数，例如：require('path')这里的path参数</p>
<blockquote>
<p>模块标识必须是符合小驼峰命名的字符串，或者是以<code>.</code>、<code>..</code>开头的相对路径，也可以是绝对路径</p>
</blockquote>
<p>当然，你用没有文件名后缀.js</p>
<p>每个模块都有独立的空间，互相不干扰，通过require()  、exports对象进行导入、导出操作；<strong>用户完全不用去考虑变量污染</strong>，相比之下比命名空间方案要好；</p>
<h4 id="node模块的实现" tabindex="-1"><a class="header-anchor" href="#node模块的实现" aria-hidden="true">#</a> Node模块的实现</h4>
<p>引入模块需要经历的步骤：</p>
<ul>
<li>路径分析</li>
<li>文件定位</li>
<li>编译执行</li>
</ul>
<p>首先要明确，在node中模块分为：</p>
<ul>
<li>核心模块： Node自身提供的模块</li>
<li>文件模块： 用户自己编写的模块</li>
</ul>
<p>部分核心模块在Node源代码编译过程中，编译成二进制执行文件，当Node进程启动，部分核心模块就直接被直接加载进入内存中----&gt; <strong>这部分模块在引入时候，不需要（省略）进行 文件定位和编译执行，同时在路劲分析中优先判断。直接从内存中加载，加载的速度也是最快的；</strong></p>
<p>文件模块是用户自己编写，可以理解为第三方模块，在运行时需要经历完整的模块引入步骤（路径分析、文件定位、编译执行）， <strong>加载速度相比核心模块要慢</strong>；</p>
<h4 id="模块优先从缓存中加载" tabindex="-1"><a class="header-anchor" href="#模块优先从缓存中加载" aria-hidden="true">#</a> 模块优先从缓存中加载</h4>
<p>Node对引入过的模块都会进行缓存，目的是减少二次引入时带来的开销</p>
<p><strong>注意：Node缓存的不是模块加载文件，而是模块编译执行后的对象；</strong></p>
<p>核心模块的缓存检查要先于文件模块的缓存检查</p>
<h4 id="路径分析和文件定位" tabindex="-1"><a class="header-anchor" href="#路径分析和文件定位" aria-hidden="true">#</a> 路径分析和文件定位</h4>
<p>Node是基于模块标识符进行模块查找的。标识符主要分为：</p>
<ul>
<li>核心模块  例如：fs、path等</li>
<li>. 或者 .. 开始的相对路径文件模块</li>
<li>/ 开始的绝对路径文件模块</li>
<li>非路径形式的文件模块，如自定义的connect模块【目前还没见过】</li>
</ul>
<h5 id="核心模块" tabindex="-1"><a class="header-anchor" href="#核心模块" aria-hidden="true">#</a> 核心模块</h5>
<p>优先级仅次于缓存加载，加载过程最快，已经被编译为二进制代码</p>
<h5 id="路径形式的文件模块" tabindex="-1"><a class="header-anchor" href="#路径形式的文件模块" aria-hidden="true">#</a> 路径形式的文件模块</h5>
<p>加载速度慢于核心模块</p>
<p>require()方法会将路径形式的标识符转化为真实路径，<strong>并且用作索引将编译执行后的结果存放在缓存中，让二次加载时更快【这里可以考虑key/value这种结构】</strong></p>
<h5 id="自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块" aria-hidden="true">#</a> 自定义模块</h5>
<blockquote>
<p>这里指的是 非核心模块，也不是路径形式的标识符，是一种特殊的文件模块，可能是一个文件或者包的形式。</p>
</blockquote>
<p>这种最费时，加载最慢； <strong>模块的文件路劲越深，模块的查找耗时会越多</strong></p>
<h4 id="node对javascript文件内容进行头尾包装" tabindex="-1"><a class="header-anchor" href="#node对javascript文件内容进行头尾包装" aria-hidden="true">#</a> Node对Javascript文件内容进行头尾包装</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">,</span> __filename<span class="token punctuation">,</span> __dirname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 实际JavaScript文件内容</span>
     <span class="token keyword">var</span> math <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'math'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     exports<span class="token punctuation">.</span><span class="token function-variable function">area</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	 <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
 	 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在编译过程中，Node对js文件的内容进行头尾包装，让每个模块之间都进行了作用域隔离，同时还为每个模块提供常用变量：</p>
<ul>
<li>exports</li>
<li>require</li>
<li>module对象</li>
<li>_filename</li>
<li>_dirname</li>
</ul>
<p>在执行之后，模块的exports属性被返回给了调用方。exports属性上的任何方法和属性都是可以被外部用到，但是模块中的变量或属性则不可直接被调用；</p>
<h4 id="amd规范" tabindex="-1"><a class="header-anchor" href="#amd规范" aria-hidden="true">#</a> AMD规范</h4>
<blockquote>
<p>是对CommonJS规范的一个延伸</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// AMD模块定义</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 exports<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hello from module: '</span> <span class="token operator">+</span> module<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token comment">// 内容通过返回实现导出</span>
 <span class="token keyword">return</span> exports<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>AMD模块是使用define来明确定义一个模块，在Node实现中是隐式包装的，进行作用域隔离；避免变量污染和不小心地被修改</p>
<h4 id="cmd规范" tabindex="-1"><a class="header-anchor" href="#cmd规范" aria-hidden="true">#</a> CMD规范</h4>
<blockquote>
<p>玉伯提出</p>
</blockquote>
<h3 id="异步i-o" tabindex="-1"><a class="header-anchor" href="#异步i-o" aria-hidden="true">#</a> 异步I/O</h3>
<p>多线程的代价在于创建线程和执行线程上下文切换的开销较大，在复杂业务中还会面临锁、状态同步等问题。【<strong>多线程能够在多核心CPU上有效提升CPU的利用率</strong>】</p>
<p>单线程同步编程模型会阻塞I/O导致硬件资源得不到更优的使用；多线程编程模型在编程中存在死锁、状态同步等问题；</p>
<p>Node就他妈很牛逼的提出：</p>
<ul>
<li><strong>利用单线程</strong>，避免使用多线程死锁、状态同步问题；</li>
<li><strong>利用异步I/O</strong>，单线程远离阻塞，更好的利用CPU，</li>
</ul>
<p>异步I/O算是Node的特色，力求在单线程上将资源分配得更加高效</p>
<p><strong>最他妈神奇得是，Node为了弥补单线程无法利用多核CPU的缺点，直接使用了Master-Workers模型，利用child_process,开辟多进程架构，以子进程的方式去高效利用CPU和I/O</strong></p>
<p><strong>阻塞I/O造成CPU等待浪费，非阻塞带来的麻烦需要轮询去确认是否完全完成数据获取，让CPU处理状态判断，也是对CPU的浪费</strong></p>
<p>轮询技术主要有（目的：减少I/O状态判断的CPU损耗）：</p>
<ul>
<li>read   最原始  性能最低  通过反复调用来检查I/O的状态完成完整数据的读取；</li>
<li>select  基于read进行改进的方案， 通过对文件描述符上的事件状态来进行判断 具有较弱的限制，采用1024长度的数组存储状态，最多同时检查1024个文件描述符</li>
<li>poll    基于select方案改进，<strong>采用链表的方式避免数组长度的限制</strong>，能避免不需要的检查，【当文件描述符较多时，性能十分低下】，与select相比性能要好</li>
<li>epoll   <strong>Linux下效率最高的I/O事件通知机制</strong>，在进入轮询的时候如果没有检查到I/O事件，将会<strong>休眠</strong>，直到事件发生将其唤醒 <strong>真实利用了事件通知、执行回调，但不是遍历查询，不会浪费CPU、执行效率较高</strong></li>
<li>kqueue  实现方式与epoll类似，只能在FreeBSD系统下实现；</li>
</ul>
<p><strong>注意：epoll利用事件来降低CPU的消耗，在休眠期间CPU几乎是闲置的，当前线程而言利用率不够，是一种浪费</strong></p>
<h3 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h3>
<p><strong>事件循环是一个典型的生产者、消费者模型，在Linux系统下基于多线程创建，Windows系统下基于IOCP创建</strong>。异步I/O、网络请求等则是事件的生产者。生产者源源不断的为Node提供不同类型的事件，同时事件被传递到对应的观察者哪里；而事件循环就是从观察者哪里取出事件并处理</p>
<p><strong>libuv提供线程池的概念</strong></p>
<h3 id="事件驱动与高性能服务器" tabindex="-1"><a class="header-anchor" href="#事件驱动与高性能服务器" aria-hidden="true">#</a> 事件驱动与高性能服务器</h3>
<blockquote>
<p>事件驱动本质：通过主循环加事件触发的方式来运行程序</p>
</blockquote>
<p>Node通过事件驱动的方式处理请求，不要为每个请求创建额外的对应线程，可以省掉创建线程和销毁线程的系统开销；</p>
<p><strong>操作系统在任务调度方面也因为线程少，上下文切换的代价低，能够让服务器有条不紊地处理请求，即使在大量连接的情况下，也不受线程上下文切换开销的影响</strong></p>
<p>Nginx就是采用了和Node相同的时间驱动，摒弃了多线程的方式。</p>
<h3 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程" aria-hidden="true">#</a> 异步编程</h3>
<p>在JavaScript中，函数（function）作为一等公民，使用上非常自由，无论调用它或者作为参数或者作为返回值都是可以的。</p>
<p>在通常的编程语言中，函数的参数只接受基本的数据类型或者对象引用，返回值也只是基本数据类型和对象引用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>高阶函数则是可以把函数作为参数，或者是吧函数作为返回值的函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 返回函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>根据Node提供的最基本的事件模块可以看到，事件的处理方式正是基于高阶函数的特性来完成的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过相同时间注册的不同的回调函数，可以很灵活的处理业务逻辑</span>
<span class="token keyword">const</span> emitter<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">events<span class="token punctuation">.</span>EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听event_test事件</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event_test'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// coding ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Node带来的最大特性是<strong>基于事件驱动的非阻塞I/O模型</strong>，可以让CPU和I/O不相互依赖等待，让资源得到更好的利用。</p>
<p>由于事件循环模型需要应对海量请求，当海量请求都作用在单线程上，就需要防止任何一个计算消耗过多的CPU时间片；可以将大量的计算分解为诸多的小量计算，通过setImmediate()进行调度。</p>
<p><strong>只要合理的利用Node的异步模型与V8的高性能，就可以充分发挥CPU和I/O资源的优势</strong></p>
<p>Node在处理异常上预定<strong>错误优先</strong>，将异常作为回调函数的第一个实参传回，如果为空值，则表明异步调用没有异常抛出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 判断错误err是否为null</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// coding....</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Web  Workers能够解决利用CPU和减少阻塞UI渲染，但是不能解决前端UI渲染的效率问题</p>
<p>Node借鉴了Web Workers模式，提出了child_process模块，用来多进程处理</p>
<h4 id="异步编程解决方案" tabindex="-1"><a class="header-anchor" href="#异步编程解决方案" aria-hidden="true">#</a> 异步编程解决方案</h4>
<ul>
<li>事件发布、订阅模式</li>
<li>Promise/Deferred模式</li>
<li>流程控制库</li>
</ul>
<p>事件监听模式是一种广泛用于异步编程的模式，是回调函数的事件化，即：<strong>发布/订阅模式</strong></p>
<p>例如：events模块</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 事件发布</span>
emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'event_test'</span><span class="token punctuation">,</span><span class="token string">"this is an event message!"</span><span class="token punctuation">)</span>

<span class="token comment">// 事件订阅</span>
emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event_test'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	<span class="token comment">// message 事件信息</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>很明显，订阅事件是高阶函数的应用。事件发布/订阅模式可以实现一个事件与多个回调函数的关联，这些函数叫做<strong>事件侦听器</strong></p>
<p>通过emit()发布事件后，消息可以立即传递给当前事件的所有侦听器执行。侦听器可以很灵活的添加、删除，事件和具体处理逻辑之间可以很轻松地关联和解耦</p>
<p>事件的发布/订阅模式自身并没有同步和异步调用的问题，但是在Node中emit()调用多半是伴随事件循环而异步触发的，所以事件的发布/订阅模式广泛用于异步编程</p>
<p><strong>在事件订阅/发布模式中，通常也有一个once()方法，通过它添加的侦听器只能执行一次，在执行之后就会将它与事件的关联移除。</strong></p>
<p>在计算机中，缓存由于存放在内存中，访问速度非常快，常常用来加速数据的访问，让绝大多数的请求不必重复去做一些低效的数据读取。</p>
<blockquote>
<p>雪崩：在高并发的情况下缓存失效的场景，此时大量的请求同时涌入数据库中，数据库无法同时承受如此大的查询请求，进而影响到网站整体的响应速度【参考redis缓存雪崩】</p>
</blockquote>
<p>一般而言，事件和侦听器的关系是一对多的，但是在异步编程中也会出现事件与侦听器的关系是多对一的情况，即：一个业务逻辑可能依赖两个通过回调或者事件传递的结果。</p>
<h4 id="异步并发控制" tabindex="-1"><a class="header-anchor" href="#异步并发控制" aria-hidden="true">#</a> 异步并发控制</h4>
<p>同步I/O和异步I/O的差距：</p>
<ul>
<li>同步I/O是彼此阻塞的，在循环体汇中，总是一个接着一个调用，不会出现耗用文件描述符太多的情况，同时性能也是低下的。</li>
<li>对于异步I/O，虽然并发容易实现，由于太容易实现，<strong>需要控制流程</strong>。【尽管是要压榨底层系统的性能，但是还需要给予一定的过载保护，防止过犹不及】</li>
</ul>
<h3 id="内存控制" tabindex="-1"><a class="header-anchor" href="#内存控制" aria-hidden="true">#</a> 内存控制</h3>
<p>基于无阻塞、事件驱动建立的Node服务，具有内存消耗低的优点，非常适合处理海量的网络请求。<strong>在服务端，资源向来都是寸土寸金的，要为海量用户服务，就得使一切资源都要高效循环利用！</strong></p>
<h4 id="v8的内存限制" tabindex="-1"><a class="header-anchor" href="#v8的内存限制" aria-hidden="true">#</a> V8的内存限制</h4>
<blockquote>
<p>Node中通过JavaScript使用内存时只能使用部分内存（64位操作系统约等于1.4GB内存可以使用，32位操作系统只能使用0.7GB内存），即使物理内存很大，但是对单个Node进程而言，计算机的内存资源无法得到充足的使用；</p>
</blockquote>
<p>主要是Node基于V8构建的，Node中的JavaScript对象基本上都是通过V8的方式进行分配和管理的。<strong>对前端需求足够满足，但是对服务端来说却存在明显不足</strong></p>
<h4 id="v8的对象分配" tabindex="-1"><a class="header-anchor" href="#v8的对象分配" aria-hidden="true">#</a> V8的对象分配</h4>
<p>在V8中，所有的JavaScript对象都是通过堆来进行分配的，Node提供V8中内存使用量的查看方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 输入node</span>
<span class="token function">node</span>
<span class="token comment">## 进入node命令窗口</span>
process.memoryUsage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  rss: <span class="token number">25395200</span>,
  heapTotal: <span class="token number">4730880</span>,  <span class="token comment">## 申请的堆内存</span>
  heapUsed: <span class="token number">3120600</span>,   <span class="token comment">## 实际使用的堆内存</span>
  external: <span class="token number">1547088</span>,
  arrayBuffers: <span class="token number">9401</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在代码中声明变量并赋值时，所使用的对象的内存就是分配在堆内存中。<strong>如果堆内存不够分配新的对象，就继续申请堆内存，知道当前堆的大小超过V8的限制为止</strong></p>
<p>为什么V8要限制堆内存大小？</p>
<blockquote>
<p>表面上，V8最初是为浏览器设计的，默认的限制内存大小足够前端浏览器的业务场景，对于网页来说也不需要使用到大的内存。</p>
<p>官方说法：<strong>V8有自己的垃圾回收机制的限制，当垃圾回收的时候会导致JavaScript线程暂停，当回收花销越长，线程暂停的时间也就越长，应用的性能和响应能力都会直线下降</strong>。按照当时的考虑直接限制堆内存是个比较好的选择</p>
</blockquote>
<p>可以在Node启动应用的时候传递<code>--max-od-space-size</code>或者<code>--max-new-space-size</code>来调整内存限制大小</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 单位为MB 设置老生代的内存空间最大值</span>
<span class="token function">node</span> --max-old-space-size<span class="token operator">=</span><span class="token number">1500</span> test.js
<span class="token comment">## 单位为MB 设置新生代的内存空间最大值</span>
<span class="token function">node</span> --max-new-space-size<span class="token operator">=</span><span class="token number">1200</span> test.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>在V8初始化时生效，一旦生效就不能动态改变了，可以避免在执行过程中稍微多用了一些内存就轻易程序崩溃</strong></p>
<h4 id="v8垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#v8垃圾回收算法" aria-hidden="true">#</a> V8垃圾回收算法</h4>
<blockquote>
<p>主要基于分代式垃圾回收机制。现代的垃圾回收算法中按对象的存活时间将内存的垃圾回收机制进行不同的分代，然后分别对不同的分代的内存进行高效的算法处理；</p>
</blockquote>
<h5 id="v8的内存分代" tabindex="-1"><a class="header-anchor" href="#v8的内存分代" aria-hidden="true">#</a> V8的内存分代</h5>
<ul>
<li>新生代内存空间 运行前通过<code>--max-new-space-size</code>指定</li>
<li>老生代内存空间   运行前通过<code>--max-old-space-size</code>指定</li>
</ul>
<p><strong>两个内存空间最大值都是在启动时就指定，不能自动扩充，当运行时候的内存超过最大值时候就会出现进程报错</strong></p>
<blockquote>
<p>从V8的自动垃圾回收机制的设计角度可以看到，V8对内存使用进行限制，新生代设计为了一个较小的内存空间是合理的，老生代空间过大对于垃圾回收没有太大的意义</p>
</blockquote>
<p>对V8的垃圾回收特点和JavaScript在单线程上的执行情况，垃圾回收是影响性能的因素之一，<strong>想要高性能的执行效率，就需要让垃圾回收尽量少的进行，避免长时间阻塞JavaScript线程</strong></p>
<p>web服务器的会话实现一般通过内存来存储，<strong>当访问量大的时候会导致老生代中的存活对象骤增，不仅造成清理/整理过程费时，还会造成内存紧张，甚至溢出</strong></p>
<h5 id="查看垃圾回收日志" tabindex="-1"><a class="header-anchor" href="#查看垃圾回收日志" aria-hidden="true">#</a> 查看垃圾回收日志</h5>
<p>在应用启动的时候添加<code>--trace_gc</code>参数，在进行垃圾回收时，会将垃圾回收的日志信息打印到标准的控制台输出</p>
<h4 id="高效地使用内存" tabindex="-1"><a class="header-anchor" href="#高效地使用内存" aria-hidden="true">#</a> 高效地使用内存</h4>
<ul>
<li>作用域</li>
<li>闭包</li>
</ul>
<p>在JavaScript中能形成作用域的有函数调用、with和全局作用域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// test函数 local局部变量</span>
<span class="token keyword">var</span> <span class="token function-variable function">test</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> local<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当test()函数被调用就会创建对应的作用域，函数执行结束后，作用域就会销毁。同时在作用域中声明的局部变量local会分配在该作用域上，随着作用域的销毁而销毁</p>
<p><strong>只被局部变量引用的对象存活周期较短</strong>，当局部变量local失效，其引用的对象非常小会被分配在新生带内存空间中，在下次垃圾回收时被释放</p>
<h5 id="标识符查找" tabindex="-1"><a class="header-anchor" href="#标识符查找" aria-hidden="true">#</a> 标识符查找</h5>
<blockquote>
<p>标识符：可以理解为变量名</p>
</blockquote>
<p>JavaScript在执行时会去查找该变量（标识符）定义在哪里，<strong>最先查找是当前作用域</strong>，如果在当前作用域中无法找到该变量的声明，就会去上级作用域中查找，知道查找到为止</p>
<h5 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h5>
<p>变量只能向外访问，不能向内访问，当上层作用域出现了变量，及时在上上层中也定义了变量，也不会继续查找了。</p>
<p><strong>如果查找一个不存在的变量，将会一直沿着作用域链查找到全局作用域，最后抛出未定义错误</strong></p>
<h5 id="变量的主动释放" tabindex="-1"><a class="header-anchor" href="#变量的主动释放" aria-hidden="true">#</a> 变量的主动释放</h5>
<p>如果变量是全局变量（不通过var声明或定义在global变量上），<strong>全局作用域需要直到进程退出才能释放</strong>，导致全局变量引用的对象常驻内存（老生代内存中）。</p>
<p><strong>如果需要释放常驻内存的对象，可以通过delete操作来删除引用关系 或者对全局变量重新赋值，让旧的对象脱离引用关系（在后面的老生代内存清理中，会被回收释放）</strong></p>
<p>Tips：同样，在非全局作用域中，想要主动释放变量引用的对象，也可以通过delete或者重新赋值的方式。</p>
<p><strong>注意：delete删除对象在V8中会干扰到V8的优化，相比之下重新赋值解除引用较好</strong></p>
<h4 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h4>
<blockquote>
<p>作用域链上的对象访问只能向上，外部无法向内部访问</p>
</blockquote>
<p>闭包：在JavaScript中，实现外部作用域访问内部作用域中变量的方法</p>
<p>主要是通过高阶函数的特性（函数可以作为参数或者返回值）完成的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">foo</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token function-variable function">bar</span><span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 定义局部变量</span>
    <span class="token keyword">var</span> local<span class="token operator">=</span><span class="token string">'局部变量'</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> local
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 使用bar方法</span>
  <span class="token keyword">var</span> baz<span class="token operator">=</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>闭包是JavaScript的高级特性，可以实现外部作用域访问内部作用域中变量</p>
<p>需要注意的是：闭包中一旦有变量去引用中间函数（例如被返回的匿名函数），这个中间函数就不会被释放，同时原始的作用域也不会释放，作用域产生的内存占用也不会释放【除非不在引用的时候，才回逐步释放】</p>
<p><strong>V8内存的限制，注意防止变量（闭包和全局变量引用的两种情况）无限制地增加，导致老生代中的对象增多；</strong></p>
<h4 id="查看内存使用情况" tabindex="-1"><a class="header-anchor" href="#查看内存使用情况" aria-hidden="true">#</a> 查看内存使用情况</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 输入node</span>
<span class="token function">node</span>
<span class="token comment">## 进入node命令窗口 通过process.memoryUsage()</span>
process.memoryUsage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  rss: <span class="token number">25395200</span>,   <span class="token comment">## resident set size 常驻内存部分</span>
  heapTotal: <span class="token number">4730880</span>,  <span class="token comment">## 申请的堆内存</span>
  heapUsed: <span class="token number">3120600</span>,   <span class="token comment">## 实际使用的堆内存</span>
  external: <span class="token number">1547088</span>,
  arrayBuffers: <span class="token number">9401</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h5 id="查看系统的内存占用" tabindex="-1"><a class="header-anchor" href="#查看系统的内存占用" aria-hidden="true">#</a> 查看系统的内存占用</h5>
<p>在os模块中，提供：</p>
<ul>
<li>totalmen()    总共内存空间</li>
<li>freemem()    空闲内存空间</li>
</ul>
<p>两个方法查看操作系统的内存使用情况，单位：字节</p>
<h5 id="堆外内存" tabindex="-1"><a class="header-anchor" href="#堆外内存" aria-hidden="true">#</a> 堆外内存</h5>
<p>Node中的内存使用不是都通过V8进行分配的，对于不是通过V8分配的内存称为<code>堆外内存</code></p>
<h5 id="node的内存构成" tabindex="-1"><a class="header-anchor" href="#node的内存构成" aria-hidden="true">#</a> Node的内存构成</h5>
<p>V8分配的部分+Node自行分配的部分（堆外内存）</p>
<p><strong>受V8的垃圾回收限制的主要是V8的堆内存</strong></p>
<h3 id="内存泄露" tabindex="-1"><a class="header-anchor" href="#内存泄露" aria-hidden="true">#</a> 内存泄露</h3>
<p>Node对内存泄露非常敏感，一旦线上项目应用拥有成千上万的流量，<strong>即便是一个字节的内存泄露也会导致堆积，垃圾回收的过程中将会耗费更多时间进行对象扫描，应用响应缓慢，知道进程内存溢出，应用程序崩溃</strong></p>
<p>内存泄露的情况很多，但是实质只有一个：<strong>当回收的对象出现意外没有被回收，变成了常驻在老生代中的对象</strong>，通常：</p>
<ul>
<li>缓存导致</li>
<li>队列消费不及时导致</li>
<li>作用域没有释放导致</li>
</ul>
<h5 id="谨慎将内存当做缓存使用" tabindex="-1"><a class="header-anchor" href="#谨慎将内存当做缓存使用" aria-hidden="true">#</a> 谨慎将内存当做缓存使用</h5>
<p>在大型应用中，缓存能够有效提高检索速度（例如：redis），可以非常有效的节约资源（I/O资源），缓存的访问效率明显要比磁盘I/O的效率高，一旦命中缓存，就可以节省I/O时间</p>
<p><strong>当然，Node中的缓存是有成本的，一旦一个对象被当做缓存来使用，就需要常驻在老生代中，缓存中存储的键越多，长期存活的对象也就越多，直接导致垃圾回收在进行扫描和整理时，对这些对象做无用功</strong></p>
<blockquote>
<p>注意这里提到的缓存和传统意义上的缓存不一样，例如：Redis是有很好的过期策略的，但是Node中的缓存是没有的，往往只是根据对象的键值对来实现缓存，常驻内存老生代当中；</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 例如利用cache全局对象来常驻老生代内存中</span>
<span class="token keyword">var</span> cache<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 获取目标值</span>
<span class="token keyword">var</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 内存中存在，即返回</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// 去获取  to do coding...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 设置key/value值</span>
<span class="token keyword">var</span> <span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 设置</span>
  cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span>value
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>很明显，上面只是通过全局变量的形式实现，没有任何的过期策略，这就有可能到值常驻在内存老生代中，<strong>使用的时候尝试添加过期策略</strong></p>
<h5 id="缓存的解决方案" tabindex="-1"><a class="header-anchor" href="#缓存的解决方案" aria-hidden="true">#</a> 缓存的解决方案</h5>
<p>直接将内存作为缓存的方案不是很可取，谨慎对待。除了限制缓存大小之外，<strong>进程之间是无法共享内存的，如果在进程内需要使用缓存，那么不同进程之间魂村不可避免的有重复，对物理内存的使用也是一种浪费</strong></p>
<p>对于缓存的共享，良好的淘汰策略，不常驻内存老生代中出现内存泄露，很明显可以将缓存的操作通过外部第三方组件来实现，例如：Redis、Memcached，用来解决：</p>
<ul>
<li>将缓存转移到外部，减少常驻内存的对象的数量，让垃圾回收更加高效；</li>
<li>外部缓存可以实现进程之间缓存共享，避免缓存重复存储。</li>
</ul>
<h5 id="消息队列导致内存泄露" tabindex="-1"><a class="header-anchor" href="#消息队列导致内存泄露" aria-hidden="true">#</a> 消息队列导致内存泄露</h5>
<p>消息队列也是依赖于将数据存储在内存中，当队列中消息过多、消费不及时就会存在堆积，占用大量的内存资源；</p>
<h5 id="作用域未释放导致内存泄露" tabindex="-1"><a class="header-anchor" href="#作用域未释放导致内存泄露" aria-hidden="true">#</a> 作用域未释放导致内存泄露</h5>
<p>主要是常用的全局变量没有被自动回收，内存占用不会回落，导致内存泄露</p>
<h4 id="内存泄露排查" tabindex="-1"><a class="header-anchor" href="#内存泄露排查" aria-hidden="true">#</a> 内存泄露排查</h4>
<ul>
<li>V8-profiler</li>
<li>Node-headump</li>
<li>Node-mtrace</li>
<li>drace</li>
<li>Node-memwatch</li>
</ul>
<h4 id="大内存应用" tabindex="-1"><a class="header-anchor" href="#大内存应用" aria-hidden="true">#</a> 大内存应用</h4>
<p>在Node中不可避免地存在操作大文件的场景。Node提供stream模块来处理大文件</p>
<p><strong>stream模块是Node的原生模块，继承自EventEmitter，具备基本的自定义事件的功能，抽象出了标准的事件和方法</strong></p>
<ul>
<li>fs.createReadStream()      创建文件的可读流</li>
<li>fs.createWriteStream()     创建文件的可写流</li>
</ul>
<p>注意，大文件用流操作比较好，基于V8的内存限制，读取小文件的readFile()和writeFile()不能用于大文件操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> reader<span class="token operator">=</span>fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">'xxx.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> writer<span class="token operator">=</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">'xxx.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// pipe管道加工处理</span>
read<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>可读流提供了管道方法pipe()，封装了data事件和写入操作，stream流的方式不受V8内存限制的影响，有效地提高了程序的健壮性（鲁棒性）</strong></p>
<blockquote>
<p>当然对于大文件不需要进行字符串层面的操作，则不需要借助V8来处理，可以直接尝试用Buffer操作，<strong>这样不会受到V8内存的限制出现内存泄露，但是依然会受到物理内存的限制</strong></p>
</blockquote>
<h4 id="理解buffer" tabindex="-1"><a class="header-anchor" href="#理解buffer" aria-hidden="true">#</a> 理解Buffer</h4>
<blockquote>
<p>Buffer占用的内存不是通过V8分配的，属于堆外内存。<strong>Buffer是二进制数据</strong></p>
</blockquote>
<p>Node在进程启动的时候就已经加载的Buffer，放在全局对象global上，所以不需要require模块引入可以直接使用Buffer</p>
<h3 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h3>
<p>Node是一个面向网络而生的平台，具有事件驱动、无阻塞、单线程等特性，具备良好的可伸缩性，非常轻量，适用在分布式网络中扮演各种各样的角色。</p>
<p>Node提供了四个模块</p>
<ul>
<li>net模块，处理TCP</li>
<li>dgram模块，处理UDP</li>
<li>http模块，处理HTTP</li>
<li>https模块，处理HTTPS</li>
</ul>
<p>适用于对应的服务端和客户端</p>
<h4 id="tcp与udp" tabindex="-1"><a class="header-anchor" href="#tcp与udp" aria-hidden="true">#</a> TCP与UDP</h4>
<blockquote>
<p>两者都是网络传输层协议</p>
</blockquote>
<p>TCP：传输控制协议    HTTP、SMTP、IMAP等协议基于TCP构建</p>
<p>UDP：用户数据包协议   DNS服务基于UDP实现的</p>
<p><strong>TCP与UDP最大的区别：UDP不是面向连接的，TCP是面向连接的----&gt; 三次握手</strong></p>
<ul>
<li>TCP连接一旦建立，所有的会话都会基于连接完成，客户端如果要与另外一个TCP服务通信需要另外通过三次握手创建套接字来完成连接</li>
<li><strong>UDP中一个套接字可以和多个UDP服务通信，虽然提供面向事物的简单不可靠信息传输服务，在网络较差的情况下存在丢包的问题【不可靠】，但是由于不需要连接、资源消耗低，处理快速且灵活，应用十分广泛，例如：DNS服务基于UDP实现的</strong></li>
</ul>
<h4 id="http模块" tabindex="-1"><a class="header-anchor" href="#http模块" aria-hidden="true">#</a> http模块</h4>
<p>Node的http模块包含对HTTP处理的封装。在Node中，HTTP服务继承自TCP服务器（net模块），能够和多个客户端保持连接，<strong>采用事件驱动的形式</strong>，并不会为每一个连接创建额外的线程或者进程；保持很低的内存占用，因此能够实现高并发</p>
<h4 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h4>
<blockquote>
<p>Http是无状态的协议，现实中业务却是需要一定状态的，否则无法区分用户的身份</p>
</blockquote>
<ul>
<li>path  表示Cookie影响到的路径，当前访问的路径不满足该匹配时，浏览器则不发送Cookie</li>
<li>expires和max-Age 使用来告知浏览器Cookie什么时候过期，如果不进行设置，在关闭浏览器的时候会丢失Cookie。如果设置了过期时间，浏览器就会把Cookie内容写入到磁盘中并保存，下次打开依然有效；</li>
<li>httpOnly  告知浏览器不允许通过脚本document.cookie去修改，设置httpOnly后，前端无法通过document.cookie获取</li>
<li>secure  设置为true时，在http中无效，在https中才有效。表示cookie只能在Https连接中被浏览传递到服务器进行会话验证。</li>
</ul>
<p>当然，cookie可以帮助进行用户认证，除非cookie过期，不然客户端每次向服务器发送请求的时候都会带上，当cookie数据过多时，就会导致请求头过大，大多数的cookie并不需要用上</p>
<p>页面性能优化：</p>
<ul>
<li>减小Cookie的大小【建议设置过期时间】</li>
<li>为静态组件使用不同的域名【和服务部署的动静分离效果差不多】</li>
<li>减少DNS查询【域名通过DNS解析获取ip，这个步骤用时短的话，提高整体速度】</li>
</ul>
<h4 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h4>
<blockquote>
<p>服务端没有设置cookie的httpOnly属性时，前端可以篡改cookie，就算设置了也能通过模拟cookie来篡改信息，<strong>对敏感数据的保护是无效的</strong></p>
</blockquote>
<p>session的数据只保留在服务端，客户端无法修改，相比cookie数据的安全性得到了一定的保障，数据也不需要在协议中每次被传递；</p>
<p>客户与服务器数据一一对应：</p>
<ul>
<li>基于Cookie来实现用户和数据的映射【依赖Cookie，将口令存储在Cookie中】</li>
<li>通过查询字符串来实现浏览器端和服务端数据的对应【检查请求的查询字符串，是否有带特定值的URL】</li>
</ul>
<p><strong>注意：Node的进程和进程之间是不能直接共享内存的，用户的Session可能会引起错乱；</strong></p>
<p>设置接口的时候，注意添加版本号请求参数，避免后端服务发版前端采用的原有的缓存</p>
<h4 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc" aria-hidden="true">#</a> MVC</h4>
<p>在MVC流行之前，主流的处理方式都是通过文件路径进行处理的，MVC模型的主要思想是将业务逻辑按职责分离，主要有：</p>
<ul>
<li>控制器（Controller）  一组行为的集合</li>
<li>模型（Model） 数据相关的操作和封装</li>
<li>视图（View） 视图的渲染</li>
</ul>
<h4 id="restful" tabindex="-1"><a class="header-anchor" href="#restful" aria-hidden="true">#</a> RESTful</h4>
<blockquote>
<p>REST：Representational  State  Transfer   表现层状态转换</p>
</blockquote>
<p>我在项目中早期也是采用RESTful，分多种类型按照规范来约定接口，后来发现还是GET/POST类型好用，其他类型存在安全隐患；</p>
<h4 id="中间件的优化" tabindex="-1"><a class="header-anchor" href="#中间件的优化" aria-hidden="true">#</a> 中间件的优化</h4>
<ul>
<li>使用高效的方法，必要时通过jsperf.com测试基准性能</li>
<li>缓存需要重复计算的结果（需要控制缓存用量）</li>
<li>避免不必要的计算 例如常量可以写配置，HTTP报文的解析等</li>
</ul>
<h3 id="node进程" tabindex="-1"><a class="header-anchor" href="#node进程" aria-hidden="true">#</a> Node进程</h3>
<blockquote>
<p>Node在选型时决定在V8引擎之上构建，意味着它的模型和浏览器类型</p>
</blockquote>
<p>JavaScript是运行在单进程的单线程之上，程序状态单一，没有多线程情况下锁、线程同步的问题，操作系统在进行任务调度的时候会较少的进行上下文切换，可以很好的提高CPU的利用率</p>
<ul>
<li>
<p><strong>但是单进程单线程模型并没有很好的利用多核CPU，而现在的CPU基本都是多核的</strong></p>
</li>
<li>
<p><strong>单线程的Node，一旦单线程上抛出的异常没有被捕获到，就会引起整个进程的崩溃，这在实际线上应用中是不被允许的</strong></p>
</li>
</ul>
<p>从严格意义上来看：Node并非真正的单线程架构，Node自身还存在一定的I/O线程，由底层libuv处理</p>
<h4 id="服务模型变迁" tabindex="-1"><a class="header-anchor" href="#服务模型变迁" aria-hidden="true">#</a> 服务模型变迁</h4>
<ul>
<li>石器时代： 同步   【一次只为一个请求服务，所有请求都得按次序等待服务，有点阻塞I/O的感觉】</li>
<li>青铜时代： 复制进程  【多少请求开辟多少个进程，复制过程缓慢，存在资源浪费】</li>
</ul>
<blockquote>
<p>当然，解决进程复制启动缓慢的问题，可以采用预复制，即预先复制好一定数量的进程，同时将进程复用，避免进程的创建、销毁带来的开销【预复制不具备伸缩性，请求过高时，内存使用随着进程数的增长将会被耗尽】</p>
</blockquote>
<ul>
<li>白银时代： 多线程  【解决进程复制问题，用一个线程来服务一个请求，线程相对进程的开销要小很多，同时线程间可以共享数组，避免资源浪费】</li>
</ul>
<blockquote>
<p>利用线程池可以减少创建、销毁线程的开销；</p>
<p>线程可以比较均匀的使用CPU资源，但是操作系统内核在切换线程的同时也要切换线程的上下文</p>
<p>当线程数量过多，切换上下文的时间也会增加，<strong>在大并发的情况下，多线程结构无法做到强大的伸缩性</strong></p>
</blockquote>
<ul>
<li>黄金时代：事件驱动  【Node和Nginx都是基于事件驱动的方式实现的，采用单线程避免了不必要的内存开销和上下文切换开销】</li>
</ul>
<blockquote>
<p>多线程模型存在很明显的C10k问题，即：当并发增加到上万的时候，内存耗用的问题就会暴露出来（C10k：client 10000 connection 同时1w个人在线）</p>
<p>所有处理都是在单线程上进行，影响事件驱动服务模型性能的点在于CPU的计算能力，<strong>不受多进程或多线程模式中资源上线的影响</strong>，可伸缩性强！</p>
</blockquote>
<h4 id="多进程架构" tabindex="-1"><a class="header-anchor" href="#多进程架构" aria-hidden="true">#</a> 多进程架构</h4>
<p>理想状况下启动多个进程来充分利用多核CPU，每个进程各自利用一个CPU；</p>
<p><strong>Node提供了child_process模块，通过child_process.fork()函数来实现进程的复制</strong></p>
<p>Master-Worker模式（主从模式）：主进程（Master）和工作进程（Worker），具有很好的可伸缩性和稳定性</p>
<blockquote>
<p>主进程：不负责具体的业务处理，专注负责任务调度和管理工作进程，是比较稳定的</p>
<p>工作进程：负责具体的业务处理，可以fork</p>
</blockquote>
<p>fork()复制的进程都是一个独立的进程，<strong>具有独立而全新的V8实例</strong>，fork()进程是昂贵的。</p>
<ul>
<li>Node通过事件驱动的方式在单线程上解决了大并发的问题</li>
<li>启动多个进程只是为了将CPU资源利用起来</li>
</ul>
<h5 id="创建子进程" tabindex="-1"><a class="header-anchor" href="#创建子进程" aria-hidden="true">#</a> 创建子进程</h5>
<p>node中提供的child_process模块可以随机创建子进程,提供四个方法创建子进程</p>
<ul>
<li>spawn()： 启动一个子进程来执行命令</li>
<li>exec()： 启动一个子进程来执行命令，<strong>与spawn() 不同的是接口不同，有一个回调函数来获取子进程的状况</strong></li>
<li>execFile()：启动一个子进程来执行可执行文件</li>
<li>fork()：与spawn()类似，fork创建子进程只需要指定要执行的JavaScript文件模块即可</li>
</ul>
<p>其中：</p>
<ul>
<li>exec()和execFile()创建子进程时，可以指定timeout属性来设置超时时间，即给创建的进程设置有效时间，运行超过设定时间就直接被kill</li>
<li><strong>exec()适合执行已有的命令，execFile()适合执行文件</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入模块</span>
<span class="token keyword">const</span> childProcess<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'child_process'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 执行node worker.js命令创建子进程，没有回调函数</span>
childProcess<span class="token punctuation">.</span><span class="token function">spawn</span><span class="token punctuation">(</span><span class="token string">'node'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'worker.js'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 采用node命令，执行worker.js 创建子进程，采用错误优先的返回方式 </span>
childProcess<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">'node worker.js'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>stdout<span class="token punctuation">,</span>stderr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token comment">// to do coding...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 执行可执行文件worker.js来创建子进程，回调函数，可以获取子进程的状况</span>
childProcess<span class="token punctuation">.</span><span class="token function">execFile</span><span class="token punctuation">(</span><span class="token string">'worker.js'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>stdout<span class="token punctuation">,</span>stderr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// to do coding ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 直接直接js文件，创建子进程</span>
childProcess<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token string">'./worker.js'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>注意上面提到的可执行文件（即：可以直接执行的文件），JavaScript文件通过execFile()来执行的话，一定要在首行添加：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>有点shell执行文件的意思了</p>
<p><strong>注意：exec() 、execFile()、fork()都是通过spawn()来延伸实现的</strong></p>
<h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h4>
<h4 id="进程间通信-ipc-inter-process-communication" tabindex="-1"><a class="header-anchor" href="#进程间通信-ipc-inter-process-communication" aria-hidden="true">#</a> 进程间通信（IPC：Inter-Process Communication）</h4>
<p>对于child_process模块，创建好了子进程，此时父子进程间通信是非常容易的；</p>
<p><strong>在前端浏览器中，JavaScript主线程与UI渲染共用同一个线程。执行JavaScript的时候UI渲染是停滞的，在渲染UI时，JavaScript是停滞的，两者是相互阻塞的。长时间执行JavaScript会造成UI停顿不响应</strong></p>
<p>通过fork()或者其他API创建子进程后，可以在父进程和子进程之间创建IPC通道，通过IPC通道，在父子进程之间使用message 和 send() 传递消息</p>
<h5 id="ipc原理" tabindex="-1"><a class="header-anchor" href="#ipc原理" aria-hidden="true">#</a> IPC原理</h5>
<p>Node中实现IPC通道的是管道（pipe）技术，具体细节由libuv提供</p>
<ul>
<li>window下由命名管道实现</li>
<li>*nix系统下采用unix Domain Socket实现</li>
</ul>
<p>表现在<strong>应用层</strong>上的进程间通信只是简单的message事件和send()方法</p>
<p><img src="https://cdn.jsdelivr.net/gh/lir0115/images@main/nodejs_book/IPC.3x3dokkcglg0.png" alt=""></p>
<p>父进程在实际创建子进程之前，会创建IPC通道并监听，再真正地创建出子进程，并通过环境变量<code>NODE_CHANNEL_FD</code> 来告诉子进程这个IPC通道的<strong>文件描述符</strong></p>
<p>子进程启动过程中，会根据<strong>文件描述符</strong>去连接已经存在的IPC通道，从而完成父子进程之间的连接</p>
<p>建立连接后的父子进程可以自由的通信，IPC通道是通过命令管道或者Domain Socket来创建的，与网络Socket的行为比较类似，属于双向通信</p>
<blockquote>
<p>注意IPC通道在系统内核中就完成了进程间的通信，不用经过实际的网络层，非常高效</p>
</blockquote>
<p><strong>注意：只有启动的子进程是Node进程时，子进程才会根据环境变量去连接IPC通道，对于其他类型的子进程则无法实现进程间的通信（特别：按照约定去连接是可以的）。</strong></p>
<h5 id="多进程模型下如何解决端口冲突" tabindex="-1"><a class="header-anchor" href="#多进程模型下如何解决端口冲突" aria-hidden="true">#</a> 多进程模型下如何解决端口冲突？</h5>
<p>按照正常情况下，一个端口被进程监听后，其他进程再向监听就会出现端口冲突（有点分布式所的意思），要解决这种多进程下的端口冲突，通常的做法是：</p>
<blockquote>
<p>让每个进程监听不同的端口，其中主进程监听主要端口（例如：80），主进程主要是对外接收所有的网络请求，再将这些请求分别代理（这里可以加入负载策略）到不同的端口的进程上；</p>
</blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/lir0115/images@main/nodejs_book/muti_process.44jsjnokksu0.png" alt=""></p>
<p>通过主进程的代理（联想一下网关、Nginx这种）,可以避免端口不能重复监听的问题，当然也是可以在代理进程上做适当的负载均衡，使得每个子进程都可以较为均衡地执行任务。</p>
<p><strong>注意：进程没接收一个连接，就会用掉一个文件描述符，在代理方案中客户端连接到代理进程，代理进程连接到工作进程的过程中需要用掉两个文件描述符！操作系统的文件描述符是否非常有限的，代理方案对文件描述符的浪费，影响了系统的扩展能力</strong></p>
<p>不过在Node的v0.5.9中引入了进程间发送句柄的功能，<strong>send()方法除了能通过IPC发送数据外，还可以发送句柄</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 除了发送数据message(消息)，还能发送句柄sendHandle</span>
child<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span><span class="token punctuation">[</span>sendHandle<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>什么是句柄？</p>
<p>句柄是一种可以用来标识资源的引用，内部包含了指向对象的<strong>文件描述符</strong></p>
</blockquote>
<p><strong>有了句柄，就可以对上面的代理方案进行改造（代理方案中的文件标识符，操作系统是有限的）</strong></p>
<p>改造的思路：</p>
<p>当主进程接收到socket请求后，将这个socket请求直接发送给工作进程，不需要重新与工作进程建立新的socket连接进行消息同行，转发数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  引入模块,通过child.js创建子进程</span>
<span class="token keyword">const</span> childProcess<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'child_process'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token string">'child.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 主进程效果【创建服务，监听端口，给工作进程发送句柄】</span>
<span class="token keyword">const</span> server<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'net'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// </span>
  socket<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'handled by parent_process\n'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 监听端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">1223</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 给子进程发送句柄</span>
  childProcess<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'server'</span><span class="token punctuation">,</span>server<span class="token punctuation">)</span>
  
  <span class="token comment">// 给工作进程发送完句柄后，可以关闭主进程【可选】</span>
  <span class="token comment">// server.close()</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>




<span class="token comment">// 子进程效果 【监听message消息】</span>
process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span>server</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>message<span class="token operator">===</span><span class="token string">'server'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 接收主进程的消息，server句柄</span>
    server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// socket来源于主进程，即：客户端的socket请求</span>
      socket<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'handled by child_process \n '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>上面这种方案，能够保证端口不冲突，但是socket请求过来后，请求会在主进程、工作进程上做处理，对于主进程而言，应该是做分发、管理子进程的，具体业务都是放在子进程上处理，因此还需要改造，很神奇的做法是：<strong>主进程发送完句柄给子进程，就将自己关闭，此时所有的工作进程都是孤儿进程了，但是这并不会导致端口冲突，相反能够让业务都在工作进程上处理</strong></p>
<p><img src="https://cdn.jsdelivr.net/gh/lir0115/images@main/nodejs_book/main_process_close.789jzjaj49o0.png" alt=""></p>
<h5 id="端口被工作进程共同监听" tabindex="-1"><a class="header-anchor" href="#端口被工作进程共同监听" aria-hidden="true">#</a> 端口被工作进程共同监听</h5>
<p>通过发送句柄给多个工作进程，可以监听相同的端口不引起EADDRINUSE异常</p>
<blockquote>
<p>当单独启动多个进程时候，TCP服务器上的socket套接字的文件描述符并不相同，导致监听端口会抛出异常</p>
</blockquote>
<p>但是，Node底层对每个端口监听都设置了SO_REUSEADDR选项，可以保证：<strong>不同的进程可以就相同的网卡和端口进行监听，服务器端的套接字可以被不同进程复用</strong></p>
<p>所以：独立启动的进程，不同进程包含的文件描述符不一样，监听相同端口必然失败；但是通过主进程分发的不同工作进程，发出去的server都是主进程的，包含的文件描述符自然一样，监听相同的端口不会引起异常（这种模式也很好的为操作系统节省了文件描述符，丰富了扩展性）</p>
<blockquote>
<p>操作系统的文件描述符很宝贵，避免不必要的开销</p>
</blockquote>
<h4 id="保障集群稳定" tabindex="-1"><a class="header-anchor" href="#保障集群稳定" aria-hidden="true">#</a> 保障集群稳定</h4>
<p>IPC通信、多进程架构能够很好的利用CPU资源，，但是在线上环境行，我们还要考虑：</p>
<ul>
<li>性能问题</li>
<li>多个工作进程的存活状态管理</li>
<li>工作进程的平滑重启</li>
<li>配置或者静态数据的动态重新载入</li>
<li>....</li>
</ul>
<h4 id="进程事件" tabindex="-1"><a class="header-anchor" href="#进程事件" aria-hidden="true">#</a> 进程事件</h4>
<p>子进程出了有send()和message()事件外，还有：</p>
<ul>
<li>error：当子进程无法复制创建、无法被杀死、无法发送消息时会触发error事件</li>
<li>exit：子进程退出时会触发exit事件，子进程如果是正常退出，回调函数中第一个参数为退出码，否则为null。如果进程是通过kill()方法被杀死的，会得到第二个参数，表示杀死进程时候的信号；</li>
<li>close：在子进程的标准输入输出流中止时会触发，参数与exit相同</li>
<li>disconnect：在父进程或子进程中调用disconnect()方法时触发该事件，在调用该方法时关闭监听IPC通道。</li>
</ul>
<p><strong>kill()方法并不能真正地将通过IPC相连的子进程杀死，只是给子进程发送一个系统信号。在默认情况下，父进程将通过kill()方法给子进程发送一个SIGTERM信号</strong></p>
<h4 id="自动重启" tabindex="-1"><a class="header-anchor" href="#自动重启" aria-hidden="true">#</a> 自动重启</h4>
<p>子进程退出后，主进程通过监听得知，能够重新复制(fork)一份子进程出来，和其他工作进程一致，继续充分利用多核CPU性能；</p>
<h4 id="自杀信号" tabindex="-1"><a class="header-anchor" href="#自杀信号" aria-hidden="true">#</a> 自杀信号</h4>
<p>在退出的流程中增加一个自杀（suicide）信号，工作进程得知后要退出时，向主进程发送一个自杀信号，然后才停止接收新的连接。<strong>当所有连接断开后才退出，主进程在接收到自杀信号后，立即创建新的工作进程服务</strong></p>
<h4 id="限量重启" tabindex="-1"><a class="header-anchor" href="#限量重启" aria-hidden="true">#</a> 限量重启</h4>
<p>通过自杀信号告知主进程可以使得新连接总是有进程服务；但是工作进程不能无限制地被重启</p>
<blockquote>
<p>在满足一定规则的限制下，不应当反复重启。例如：可以在单位时间内规定只能重启多少次、超过重启限制次数就触发giveup事件，主动放弃重启工作进程</p>
</blockquote>
<p>通过全局变量来计数，确保重启不要太频繁</p>
<h4 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h4>
<p>在多进程之间监听相同端口，可以让用户请求分散到多个进程上进行处理，重新发挥多核CPU的性能；就想很多网关的上游服务，不能让某个服务做所有的任务，要将任务分发到不同的进程上，均衡化</p>
<p>Node默认提供的负载均衡策略是：操作系统的抢占式策略</p>
<blockquote>
<p>抢占式策略：在一堆工作进程中，闲置的进程对于客户端的请求进行抢夺，谁先抢到就谁先服务处理，确保对每个工作进程公平。</p>
</blockquote>
<p><strong>当然，抢占式策略受CPU、I/O的影响，可能I/O繁忙、CPU空闲，就容易导致某个进程能抢到较多请求，出现负载不均衡的情况</strong></p>
<p>Node在v0.11中提供了新的负载均衡策略——Round-Robin（轮询调度算法）</p>
<blockquote>
<p>轮询调度的工作方式：主进程接收连接，依次分发给工作进程。</p>
<p>分发策略：在N个工作进程中，每次选择第i=(i+1)mod n个工作进程来发送连接</p>
</blockquote>
<p>在cluster模块中使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 启用Round-Robin</span>
cluster<span class="token punctuation">.</span>schedulingPolicy <span class="token operator">=</span> cluster<span class="token punctuation">.</span><span class="token constant">SCHED_RR</span>
<span class="token comment">// 不启用Round-Robin</span>
cluster<span class="token punctuation">.</span>schedulingPolicy <span class="token operator">=</span> cluster<span class="token punctuation">.</span><span class="token constant">SCHED_NONE</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当然，也可以在环境变量中配置<code>NODE_CLUSTER_SCHED_POLICY</code>的值</p>
<div class="language-javas ext-javas line-numbers-mode"><pre v-pre class="language-javas"><code>export NODE_CLUSTER_SCHED_POLICY=rr
export NODE_CLUSTER_SCHED_POLICY=none 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Round-Robin非常简单，可以避免CPU和I/O繁忙差异导致的负载不均衡，通过代理服务器实现，但是在服务器上消耗的文件描述符是平常方式的两倍</strong></p>
<h3 id="cluster模块" tabindex="-1"><a class="header-anchor" href="#cluster模块" aria-hidden="true">#</a> Cluster模块</h3>
<p>Node在V0.8版本中新增了cluster模块，可以用来解决CPU的利用率问题，提供了较为完善的API，往常都是用child_process模块实现多进程架构，但是需要去处理很多细节；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cluster'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> numCPUs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'os'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token comment">// 创建子进程</span>
cluster<span class="token punctuation">.</span><span class="token function">setupMaster</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">exec</span><span class="token operator">:</span> <span class="token string">"worker.js"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// Fork workers</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCPUs<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
   cluster<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'exit'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">worker<span class="token punctuation">,</span> code<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'worker '</span> <span class="token operator">+</span> worker<span class="token punctuation">.</span>process<span class="token punctuation">.</span>pid <span class="token operator">+</span> <span class="token string">' died'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 <span class="token comment">// Workers can share any TCP connection</span>
 <span class="token comment">// In this case its a HTTP server</span>
 http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"hello world\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="cluster模块原理" tabindex="-1"><a class="header-anchor" href="#cluster模块原理" aria-hidden="true">#</a> cluster模块原理</h4>
<blockquote>
<p>cluster模块是chilid_process模块和net模块的组合应用</p>
</blockquote>
<p>工作进程由 <code>child_process.fork()</code> 方法创建，因此它们可以使用 IPC 和父进程通信，从而使各进程交替处理连接服务。</p>
<h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3>
<p>JavaScript开发者需要转变观念，正视自己的代码，对自己产出的代码负责。为自己的代码写测试用例是一种非常有效的方法。能够让开发者明确掌握到代码的行为和性能</p>
<ul>
<li>单元测试</li>
<li>性能测试</li>
<li>安全测试</li>
<li>功能测试</li>
</ul>
<p>编写单元测试可以遵循的原则：</p>
<ul>
<li>单一职责  职责解耦分离 目标明确</li>
<li>接口抽象  针对接口进行测试</li>
<li>层次分离  <strong>是单一职责的一种实现</strong>，例如MVC分层结构  逐层测试、逐层保证</li>
</ul>
<h4 id="断言-assert" tabindex="-1"><a class="header-anchor" href="#断言-assert" aria-hidden="true">#</a> 断言（assert）</h4>
<blockquote>
<p>在程序设计中，断言（assertion）是一种放在程序中的一阶逻辑，目的是为了标示程序开发者预期的结果——当程序运行到断言的位置时，对应的断言应该为真，不为真则程序会中止运行，并出现错误信息</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> assert <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'assert'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 判断是否相同</span>
assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>相关api还有：</p>
<blockquote>
<p>参考：http://nodejs.cn/api/assert.html</p>
</blockquote>
<ul>
<li>ok()：判断结构是否为真</li>
<li>equal()：判断实际值与期望值是否相等</li>
<li>notEqual()：判断实际值与期望值是否不相等</li>
<li>....</li>
</ul>
<h4 id="测试风格" tabindex="-1"><a class="header-anchor" href="#测试风格" aria-hidden="true">#</a> 测试风格</h4>
<ul>
<li>TDD：测试驱动开发</li>
<li>BDD：行为驱动开发</li>
</ul>
<p>两者比较：</p>
<ul>
<li><strong>关注点不同</strong>  TDD关注所有功能是否被正确实现，每个功能都具有对应的测试用例；BDD关注整体行为是否符合预期，适合指定向下的设计方式</li>
<li><strong>表达方式不同</strong>  TDD的表述方式偏向于功能说明书的风格；BDD的表述方式更加接近自然语言的习惯，以讲故事的风格；</li>
</ul>
<h4 id="测试框架" tabindex="-1"><a class="header-anchor" href="#测试框架" aria-hidden="true">#</a> 测试框架</h4>
<ul>
<li>mocha</li>
<li>egg框架中自带的assert相关</li>
</ul>
<h4 id="工程化和自动化" tabindex="-1"><a class="header-anchor" href="#工程化和自动化" aria-hidden="true">#</a> 工程化和自动化</h4>
<ul>
<li>工程化： Makefile</li>
<li>自动化（持续集成）：travis-ci</li>
</ul>
<h4 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试" aria-hidden="true">#</a> 性能测试</h4>
<ul>
<li>benchmark模块</li>
</ul>
<h4 id="压力测试" tabindex="-1"><a class="header-anchor" href="#压力测试" aria-hidden="true">#</a> 压力测试</h4>
<p>对网络的压力测试考察目标：</p>
<ul>
<li>吞吐率</li>
<li>响应事件</li>
<li>并发数</li>
</ul>
<p>能够反映出服务器的并发处理能力</p>
<p>常用工具：</p>
<ul>
<li>ab</li>
<li>siege</li>
<li>http_load</li>
</ul>
<p><strong>测试是应用或者系统最重要的质量保证手段，有单元测试实践的项目，必然对代码的粒度和层次都掌握的比较好。</strong></p>
<p><strong>单元测试能够保证项目每个局部的正确性，也能够在项目迭代过程中很好地监督和反馈迭代质量。</strong></p>
<h5 id="node-js发送邮件" tabindex="-1"><a class="header-anchor" href="#node-js发送邮件" aria-hidden="true">#</a> Node.js发送邮件</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"nodemailer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 建立一个SMTP的传输连接</span>
<span class="token keyword">var</span> smtpTransport <span class="token operator">=</span> nodemailer<span class="token punctuation">.</span><span class="token function">createTransport</span><span class="token punctuation">(</span><span class="token string">"SMTP"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token string">"Gmail"</span><span class="token punctuation">,</span>
 <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">"gmail.user@gmail.com"</span><span class="token punctuation">,</span>
 <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">"userpass"</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 邮件选项</span>
<span class="token keyword">var</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">"Fred Foo ✔ &lt;foo@bar.com>"</span><span class="token punctuation">,</span> <span class="token comment">// 发件人邮件地址</span>
 <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">"bar@bar.com, baz@bar.com"</span><span class="token punctuation">,</span> <span class="token comment">// 收件人邮件地址列表</span>
 <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">"Hello ✔"</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span>
 <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Hello world ✔"</span><span class="token punctuation">,</span> <span class="token comment">// 纯文本内容</span>
 <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">"&lt;b>Hello world ✔&lt;/b>"</span> <span class="token comment">// HTML内容</span>
<span class="token punctuation">}</span>
<span class="token comment">// 发送邮件</span>
smtpTransport<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>mailOptions<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Message sent: "</span> <span class="token operator">+</span> response<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></template>
