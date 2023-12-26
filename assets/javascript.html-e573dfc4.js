import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const t={},o=p(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><p><code>JavaScript</code>是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。 虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中， <code>JavaScript</code>基于原型编程、多范式的动态脚本语言，并且支持<code>面向对象</code>、<code>命令式</code>、<code>声明式</code>、<code>函数式编程范式</code>。</p><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><blockquote><p>OOP： Object Oriented Programming</p></blockquote><ul><li>面向对象是把事物分解成一个个对象，然后由对象之间分工合作</li><li>面向对象是以对象功能来划分问题，而不是步骤</li><li>每个对象都是功能中心，具有明确分工</li><li>编程灵活、代码可复用，容易维护和开发，适合多人合作的大型软件项目</li></ul><p>面向对象的特性： <code>封装</code>、<code>继承</code>、<code>多态</code></p><h2 id="面向过程" tabindex="-1"><a class="header-anchor" href="#面向过程" aria-hidden="true">#</a> 面向过程</h2><p>面向对象思维特点：</p><ul><li>抽象对象共用的属性和行为 封装成一个类（模板）</li><li>对类进行实例化，获取类的对象</li></ul><p>在JavaScript中，对象是一组无序的相关属性和方法的结合，所有的事务都是对象，例如：字符串、数组、数值、函数等。</p><p>对象由属性和方法组成：</p><ul><li>属性：事物的特征，在对象中用属性来表示</li><li>方法：事物的行为，在对象中用方法来表示</li></ul><p>面向过程</p><ul><li>优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机开发</li><li>缺点：没有面向对象编程容易维护、容易复用、容易拓展</li></ul><p>面向对象</p><ul><li>优点：容易维护、容易复用、容易拓展，由于面向对象有封装、继承、多态等特性，可以设计出低耦合的系统，使系统更加灵活，更加易于维护</li><li>缺点：性能比面向过程低</li></ul><p>例如：面向过程的程序是蛋炒饭，面向对象的程序则是盖浇饭</p><h2 id="类-class" tabindex="-1"><a class="header-anchor" href="#类-class" aria-hidden="true">#</a> 类（Class）</h2><blockquote><p>ES6新增了类的概念，可以使用<code>class</code>关键字来声明一个类，然后用类来实例化对象</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义类</span>
<span class="token keyword">class</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造器传参</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 定义类的方法 支持传参</span>
  <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建类对象</span>
<span class="token keyword">let</span> star <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 调用类方法</span>
star<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="类的继承-extends" tabindex="-1"><a class="header-anchor" href="#类的继承-extends" aria-hidden="true">#</a> 类的继承(extends)</h2><blockquote><p>子类可以继承父类的属性和方法</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义父类</span>
<span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>

  <span class="token comment">// 父类中方法</span>
  <span class="token function">money</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义子类继承父类</span>
<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>

  <span class="token comment">// 子类中也定义和父类相同的方法</span>
  <span class="token function">money</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 利用super关键字，调用父类的普通函数</span>
    <span class="token comment">// 注意：super关键字可以访问和调用对象父类上的函数，也可以调用父类的构造函数，也可以调用父类的普通函数</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">money</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 子类自定义方法</span>
  <span class="token function">diy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ....</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化子类的对象</span>

<span class="token keyword">let</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// son类继承了money对象对象，直接使用</span>

son<span class="token punctuation">.</span><span class="token function">money</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>子类在构造函数中使用super关键字，必须放在this前面，必须先调用父类的构造方法，再使用子类构造方法</strong></p><p>注意：</p><ul><li>在ES6中，类没有变量提升，必须先定义类，才能通过类实例化对象</li><li>类里面的共有的属性和方法，一定要加<code>this</code>使用</li></ul><p><strong><code>constructor</code>构造函数里面的<code>this</code>指向实例对象，方法里面的<code>this</code>指向这个方法的调用者</strong></p><h2 id="构造函数和原型" tabindex="-1"><a class="header-anchor" href="#构造函数和原型" aria-hidden="true">#</a> 构造函数和原型</h2><blockquote><p>在ES6之前，对象不是基于类创建的，而是用一种称为“构造函数”的特殊函数来定义对象和它们的特征。</p></blockquote><p><code>class</code>出现之前，创建对象的方式：</p><ul><li>对象字面量</li><li>new Object()</li><li>自定义构造函数</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 利用new Object() 创建对象</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 利用对象字面量创建对象</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 利用构造函数创建对象</span>
<span class="token keyword">function</span> <span class="token function">creatObj</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">creatObj</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用</span>
obj<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，总是与new一起使用。 可以把对象中一些公共的属性和方法抽取出来，然后封装在这个函数里面。</strong></p><p>创建对象时候，执行<code>new</code>会做：</p><ul><li>在内存中创建一个新的空对象（开辟内存空间）</li><li>让this指向这个新的对象</li><li>执行构造函数里面的代码，给构造函数添加属性和方法</li><li>返回对象【因此，构造函数中不需要return】</li></ul><p><strong>注意： 构造函数虽然好用，但是存在浪费内存的问题，每次都会开辟不同的内存空间，存放同一函数</strong></p><h3 id="构造函数原型" tabindex="-1"><a class="header-anchor" href="#构造函数原型" aria-hidden="true">#</a> 构造函数原型</h3><blockquote><p>构造函数通过原型分配的函数是所有对象所共享的</p></blockquote><p><code>JavaScript</code>规定，每一个构造函数都有一个<code>prototype</code>属性，指向另一个对象。 <code>prototype</code>本身就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。</p><p><strong>因此，我们可以把那些不变的方法，直接定义在<code>prototype</code>对象上面，这样所有的对象的实例就可以共享这些方法</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法挂在构造函数的原型对象</span>
creatObj<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一般情况下，我们把公共属性定义到构造函数里面，公共的方法放在原型对象身上；</p><ul><li>原型的本质： 对象，<code>prototype</code>也可以称为原型对象</li><li>原型的作用是：共享方法</li></ul><h3 id="对象原型-proto" tabindex="-1"><a class="header-anchor" href="#对象原型-proto" aria-hidden="true">#</a> 对象原型__proto__</h3><p><strong>对象都会有一个属性<code>__proto__</code>指向构造函数的<code>prototype</code>原型对象</strong></p><p>我们对象可以使用构造函数<code>prototype</code>原型对象的属性和方法，就是因为对象有<code>__proto__</code>原型的存在</p><ul><li><code>__proto__</code>对象原型和原型对象<code>prototype</code>是等价的</li><li><code>__proto__</code>对象原型的意义就在于为对象的查找机制提供一个方向，后者说一条路线，但是它是一个<code>非标准属性</code>， 在开发中不可以使用这个属性，只是内部指向原型对象<code>prototype</code></li></ul><p>对象身上系统自己添加一个<code>__proto__</code>指向我们构造函数的原型对象<code>prototype</code></p><p>调用对象方法的查找规则：</p><ul><li>先查实例化对象是否有对应方法。如果有就直接调用</li><li>没有则根据对象原型<code>__proto__</code>的存在，去查找构造函数原型对象<code>prototype</code>上查找对应方法</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 实例化对象中的_proto对象原型 和 构造函数中的原型对象prototype是等价的  输出结构为:true;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> creatObj<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
</code></pre></div><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3><p>对象原型<code>__proto__</code> 和 构造函数<code>prototype</code>原型对象里面都有一个<code>constructor</code>属性，<code>constructor</code>称为构造函数，是直接指向构造函数本身的</p><p><strong>用来记录该对象引用那个构造函数，可以让原型对象重新指向原来的构造函数</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>creatObj<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动的利用\`constructor\`指回原来的构造函数</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> creatObj<span class="token punctuation">,</span>
  <span class="token comment">// 方法</span>
  <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="总结对比" tabindex="-1"><a class="header-anchor" href="#总结对比" aria-hidden="true">#</a> 总结对比</h3><h4 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h4><ul><li>构造函数的原型对象里面的<code>__proto__</code>原型指向父类 <code>Object.prototype</code></li><li><code>Object.prototype</code>原型对象里面的<code>__proto__</code>原型，指向为null</li></ul><p><strong>这里的Object就好像提供的最高级父类，后面的对象类似继承，通过原型链链接</strong></p><h4 id="成员查找机制-规则" tabindex="-1"><a class="header-anchor" href="#成员查找机制-规则" aria-hidden="true">#</a> 成员查找机制（规则）</h4><ul><li>当访问一个对象的属性（包括方法）时，首先查找这个对象<strong>自身</strong>有没有该属性</li><li>如果没有就查找它的原型（也就是<code>__proto__</code>指向的<code>prototype</code>原型对象）；</li><li>还没有就查找原型对象的原型（Object的原型对象）</li><li>依次类推一直找到Object为止（null）</li><li><strong><code>__proto__</code>对象原型的意义就在于对象成员查找机制提供一个方向/路线</strong></li></ul><p>总结(就近原则)：</p><p>实例对象----&gt; 构造函数----&gt;Object对象----&gt; null</p><h4 id="this指向" tabindex="-1"><a class="header-anchor" href="#this指向" aria-hidden="true">#</a> this指向</h4><ul><li>在构造函数中，里面的<code>this</code>指向的是对象实例</li><li>在原型对象函数里面的<code>this</code>指向的是实例对象</li></ul><h2 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承" aria-hidden="true">#</a> 组合继承</h2><blockquote><p>ES6之前并没有提供extends继承，可以通过构造函数+原型对象模拟实现继承，即：组合继承</p></blockquote><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call()</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义函数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1. call() 可以调用函数</span>
<span class="token comment">// fn()=== fn.call()</span>

<span class="token comment">// 2. call()可以改变这个函数的this指向，此时这个函数的this就指向了call的第一个参数对象 格式：fn.call(对象，参数一，参数二, ....)</span>
<span class="token comment">// fn.call(result,1,2)</span>
</code></pre></div><h3 id="构造函数-1" tabindex="-1"><a class="header-anchor" href="#构造函数-1" aria-hidden="true">#</a> 构造函数</h3><blockquote><p>借用构造函数继承属性</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 父构造函数</span>
<span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子构造函数</span>
<span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// this指向子构造函数的对象实例，通过call后，父构造函数会指向子构造函数</span>
  <span class="token function">Father</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">let</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出： {name:&#39;xx&#39;,age:18}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>son<span class="token punctuation">)</span>
</code></pre></div><p>类本质上其实还是一个函数，可以简单的认为，<strong>类就是构造函数的另一种写法</strong></p><p><strong>ES6中的类其实就是语法糖，可以理解为ES5中的构造函数实现的简单写法</strong></p><h2 id="函数进阶" tabindex="-1"><a class="header-anchor" href="#函数进阶" aria-hidden="true">#</a> 函数进阶</h2><h3 id="定义方式" tabindex="-1"><a class="header-anchor" href="#定义方式" aria-hidden="true">#</a> 定义方式</h3><ul><li>自定义函数(命名函数）</li><li>函数表达式(匿名函数)</li><li>利用new Function(&#39;参数一&#39;,&#39;参数二&#39;,&#39;函数体&#39;) 【利用Function构造函数】</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 命名函数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 匿名函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 利用Function构造函数 【所有函数都是Function的实例】</span>
<span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return a+b&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="调用方式" tabindex="-1"><a class="header-anchor" href="#调用方式" aria-hidden="true">#</a> 调用方式</h3><ul><li>普通函数</li><li>对象的方法</li><li>构造函数</li><li>绑定事件函数</li><li>定时器函数</li><li>立即执行函数</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通函数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对象的方法</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//..</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 构造函数</span>
<span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 绑定事件函数(例如：按钮点击事件)</span>
button<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定时器函数(延时执行)</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ....</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

  <span class="token comment">// 立即执行函数（自动调用）</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// .....</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="内部的this指向" tabindex="-1"><a class="header-anchor" href="#内部的this指向" aria-hidden="true">#</a> 内部的this指向</h3><ul><li>普通函数<code>this</code>指向<code>window</code></li><li>对象的方法<code>this</code>指向的是对象</li><li>构造函数<code>this</code>指向对应的实例对象，原型对象中的<code>this</code>也是执行实例对象</li><li><strong>绑定时间函数<code>this</code> 指向函数调用者</strong></li><li>定时器函数<code>this</code>指向<code>window</code></li><li>立即执行函数<code>this</code>指向<code>window</code></li></ul><h3 id="改变内部this指向" tabindex="-1"><a class="header-anchor" href="#改变内部this指向" aria-hidden="true">#</a> 改变内部this指向</h3><ul><li>call()</li><li>bind()</li><li>apply()</li></ul><h4 id="call-函数" tabindex="-1"><a class="header-anchor" href="#call-函数" aria-hidden="true">#</a> call()函数</h4><p>调用函数<code>fn.call()</code> ，改变this指向</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 此时this指向window</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token comment">// call()处理后，this指向obj对象</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="apply方法" tabindex="-1"><a class="header-anchor" href="#apply方法" aria-hidden="true">#</a> apply方法</h4><p><code>apply()</code>方法调用一个函数，简单理解为调用函数的方式，但是它可以改变函数的<code>this</code>指向。</p><p>函数格式：fun.apply(thisArg,[argsArray])</p><ul><li><code>thisArg</code>: 在fun函数运行时指定的this值</li><li><code>argsArray</code>: 传递的值，必须包含在数组里面</li><li>返回值就是函数的返回值，本质是调用函数</li></ul><p><strong>apply()参数传数组</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 求数组中的最大值</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
<span class="token keyword">let</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
</code></pre></div><h4 id="bind-方法" tabindex="-1"><a class="header-anchor" href="#bind-方法" aria-hidden="true">#</a> bind()方法</h4><p><code>bind()</code>方法不会调用函数，但是能改变函数内部<code>this</code>指向</p><p>函数格式：<code>fun.bind(thisArg,arg1,arg2)</code></p><ul><li><code>thisArg</code>： 在fun函数运行时指定的this值</li><li><code>arg1，arg2</code>： 传递的其他参数</li><li>返回由指定的this值和初始化参数改造的<strong>原函数拷贝</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当前指向window</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 不会调用，只是生成一个fn的新函数</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// 此时，fn函数中的this指向obj对象</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>注意：</p><ul><li>不会调用原来的函数，可以改变原来函数内部的this指向</li><li>返回的是原来函数改变之后的新函数</li><li>如果有的函数不需要立即调用，但是有需要改变函数内部的this指向，此时用bind</li></ul><h4 id="总结对比-1" tabindex="-1"><a class="header-anchor" href="#总结对比-1" aria-hidden="true">#</a> 总结对比</h4><p>相同点：都可以改变函数内部的this指向</p><p>不同点：</p><ul><li><code>call</code>和<code>apply</code>会调用函数，并且改变函数内部this指向</li><li><code>call</code>和<code>apply</code>传递的参数不一样，<code>call</code>传递参数<code>arg1、arg2...</code>，<code>apply</code>是数组形式</li><li><strong><code>bind</code>不会调用函数，可以改变函数内部<code>this</code>指向。</strong></li></ul><h4 id="主要应用场景" tabindex="-1"><a class="header-anchor" href="#主要应用场景" aria-hidden="true">#</a> 主要应用场景</h4><ul><li><code>call</code>经常用做继承</li><li><code>apply</code>经常和数组有关系，比如借助数学对象是实现最大值、最小值</li><li><code>bind</code>不调用函数，但还会改变<code>this</code>指向。</li></ul><h3 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h3><blockquote><p>在IE10以上版本的浏览器中才会被支持，旧版本浏览器中会被省略</p></blockquote><ul><li>消除<code>JavaScript</code>语法的一些不合理、不严谨的地方，减少怪异行为</li><li>消除代码运行的一些不安全地方，确保代码运行的安全</li><li>提高编译器效率，增加运行速度</li><li>禁用在ECMAScript的未来版本中，可能会定义的一些语法，为未来新版本的JavaScript做好铺垫。例如：保留字/关键字 super class export等不能做变量名</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 严格模式</span>
<span class="token string">&#39;use strict&#39;</span>
</code></pre></div><p><strong>在严格模式下，全局作用域中函数的this指向的是undefined，而不是window对象</strong></p><h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h3><blockquote><p>是对其他函数进行操作的函数，接收函数作为参数或者将函数作为返回值输出</p></blockquote><p>函数本身也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。例如：回调函数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 高阶函数示例</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><blockquote><p>有权访问另外一个函数作用域中变量的函数，本质是函数</p></blockquote><p>简单来说，一个作用域可以访问另外一个函数内部的局部变量</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

  <span class="token comment">// 函数内部定义函数</span>
  <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 简单调用</span>
  <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用fn()形成闭包</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>闭包的作用：外面的作用域可以访问函数内部的局部变量</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

  <span class="token comment">// 函数内部定义函数</span>
  <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回函数</span>
  <span class="token keyword">return</span> fun<span class="token punctuation">;</span>

<span class="token comment">//  等价于匿名函数</span>
  <span class="token comment">// return function(){</span>
  <span class="token comment">//   console.log(num)</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>

<span class="token comment">// 执行fn拿到fun函数</span>
<span class="token keyword">let</span> fun1 <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 执行fun1函数，就可以访问fn函数内部的变量num</span>
<span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h2><blockquote><p>浅拷贝只是拷贝一层，更深层次对象级别的只<strong>拷贝引用</strong></p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 浅拷贝
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">,</span> test<span class="token operator">:</span> string<span class="token punctuation">,</span> name<span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 浅拷贝中，这一层只能拷贝引用</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj_test <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 循环拷贝一层</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// key 对象的属性名  obj[key] 对象的属性值</span>
  obj_test<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj_test<span class="token punctuation">)</span>
<span class="token comment">// 修改obj_test对象中的msg属性的值</span>
obj_test<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;2332&#39;</span>
<span class="token comment">// 但是原来的obj对象中的msg属性对应的值也会变</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>


<span class="token comment">// ES6中实现浅拷贝的语法糖  效果和上面一样</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj_test<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>

</code></pre></div><p>注意：</p><p><code>Object.assign()</code> 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。</p><p>语法格式：<code>Object.assign(target, ...sources)</code></p><ul><li><code>target</code>：目标对象</li><li><code>source</code>：源对象（可多个）</li></ul><h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2><p>深拷贝拷贝多层，每一级别的数据都会拷贝。会新开辟内存空间，拷贝多层，每一级别的数据都会拷贝</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 深拷贝实现
 */</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 浅拷贝中，这一层只能拷贝引用</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj_test <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// 利用函数递归来实现深拷贝</span>
<span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">newObj<span class="token punctuation">,</span> oldObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断我们的属性值属于那种数据类型</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> oldObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token comment">// 判断item是否为数组</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token function">deepCopy</span><span class="token punctuation">(</span>newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
      <span class="token comment">// 注意 Array instanceof Object 数组是属于对象的 先过滤</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 判断item是否为对象</span>
      newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token function">deepCopy</span><span class="token punctuation">(</span>newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 判断是否为简单数据类型</span>
      newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> item
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">deepCopy</span><span class="token punctuation">(</span>obj_test<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
<span class="token comment">// 输出对比</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj_test<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
</code></pre></div><h2 id="set集合" tabindex="-1"><a class="header-anchor" href="#set集合" aria-hidden="true">#</a> Set集合</h2><blockquote><p>类似于数组，但是成员的值都是唯一的，<strong>没有重复的值</strong>；</p></blockquote><p><strong>Set本身是一个构造函数，用来生成Set数据结构</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义set集合</span>
<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可以接收数组作为参数，用来初始化</span>
<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 例如数组去重</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>temp<span class="token punctuation">]</span>
</code></pre></div><p><code>Set</code>集合提供的常用方法:</p><ul><li><code>add(value)</code>: 添加某个值，返回Set本身</li><li><code>delete(value)</code>: 删除某个值，返回一个布尔值，表示删除是否成功</li><li><code>has(value)</code>: 返回一个布尔值，表示该值是否为Set的成员</li><li><code>clear()</code>: 清除所有成员，没有返回值</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
set<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>Set</code>结构的实例与数组是一样的，也拥有<code>forEach()</code>方法，用于对每个成员执行某种操作，没有返回值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

set<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="数组方法" tabindex="-1"><a class="header-anchor" href="#数组方法" aria-hidden="true">#</a> 数组方法</h2><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join()</h3><p>使用给定的连接字符把数组转换成字符串，默认的是逗号<code>,</code>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：1,2,3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：1-2-3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：[1, 2, 3]  原数组不变</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> push()</h3><p>把里面的内容添加到数组末尾，并返回修改后的长度，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Lisa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;142vip.cn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 [&quot;Lisa&quot;, &quot;Tom&quot;, &quot;142vip.cn&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="pop" tabindex="-1"><a class="header-anchor" href="#pop" aria-hidden="true">#</a> pop()</h3><p>移除数组最后一项，返回移除的那个值，减少数组的length，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Lisa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;142vip.cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 142vip.cn</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 [&quot;Lisa&quot;, &quot;Tom&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="shift" tabindex="-1"><a class="header-anchor" href="#shift" aria-hidden="true">#</a> shift()</h3><p>删除原数组第一项，并返回删除元素的值，如果数组为空则返回<code>undefined</code>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;142vip.cn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 142vip.cn</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 [&quot;Lisa&quot;, &quot;Tom&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="unshift" tabindex="-1"><a class="header-anchor" href="#unshift" aria-hidden="true">#</a> unshift()</h3><p>将参数添加到原数组开头，并返回数组的长度，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Lisa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> count <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&quot;142vip.cn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 [&quot;142vip.cn&quot;, &quot;Lisa&quot;, &quot;Tom&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h3><p>将数组里的项从小到大排序，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">sortNumber</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b
<span class="token punctuation">}</span>

arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 [13, 24, 3, 51] </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 [3, 13, 24, 51] 数组被改变</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>sortNumber<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>sort()</code>方法比较的是字符串，没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数</p><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse()</h3><p>反转数组项的顺序。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：[3, 51, 24, 13]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：[3, 51, 24, 13] 原数组改变</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat()</h3><p>将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。</p><p>在没有给<code>concat()</code>方法传递参数的情况下，它只是复制当前数组并返回副本。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrCopy <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出：[1, 3, 5, 7, 9, 11, 13]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrCopy<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：[1, 3, 5, 7] 原数组未被修改</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice()</h3><p>返回从原数组中指定开始下标到结束下标之间的项组成的新数组。<code>slice()</code>方法可以接受一或两个参数，即要返回项的起始和结束位置。</p><p>在只有一个参数的情况下，<code>slice()</code>方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数， 该方法返回起始和结束位置之间的项——但不包括结束位置的项。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrCopy <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrCopy2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrCopy3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrCopy4 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> 　　　　　　　　　　　　　　<span class="token comment">//[1, 3, 5, 7, 9, 11](原数组没变)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrCopy<span class="token punctuation">)</span><span class="token punctuation">;</span> 　　　　　　　　　　　 <span class="token comment">//[3, 5, 7, 9, 11]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrCopy2<span class="token punctuation">)</span><span class="token punctuation">;</span> 　　　　　　　　　　　<span class="token comment">//[3, 5, 7]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrCopy3<span class="token punctuation">)</span><span class="token punctuation">;</span> 　　　　　　　　　　　<span class="token comment">//[3, 5, 7]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrCopy4<span class="token punctuation">)</span><span class="token punctuation">;</span> 　　　　　　　　　　　<span class="token comment">//[5, 7, 9]</span>
</code></pre></div><ul><li>arrCopy只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。</li><li>arrCopy2设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。</li><li>arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。</li><li>arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。</li></ul><h3 id="splice" tabindex="-1"><a class="header-anchor" href="#splice" aria-hidden="true">#</a> splice()</h3><p>删除、插入和替换。</p><ul><li>删除：指定 2 个参数：要删除的第一项的位置和要删除的项数。</li><li>插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。</li><li>替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrRemoved <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrRemoved<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrRemoved2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrRemoved2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arrRemoved3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrRemoved3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf()</h3><p>接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 -1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="lastindexof" tabindex="-1"><a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a> lastIndexOf()</h3><p>接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach()</h3><p>对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。</p><p>参数都是function类型，默认有传参， 参数分别为：遍历的数组内容；第对应的数组索引，数组本身。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> index<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">&#39;|&#39;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&#39;|&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map()</h3><p>“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item <span class="token operator">*</span> item<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出[1, 4, 9, 16, 25]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h3><p>“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> index <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> x <span class="token operator">&gt;=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出数组 [1, 4, 7, 8, 9, 10]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="every" tabindex="-1"><a class="header-anchor" href="#every" aria-hidden="true">#</a> every()</h3><p>判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回<code>true</code>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> some()</h3><p>判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,199),c=[o];function e(u,l){return s(),a("div",null,c)}const r=n(t,[["render",e],["__file","javascript.html.vue"]]);export{r as default};
