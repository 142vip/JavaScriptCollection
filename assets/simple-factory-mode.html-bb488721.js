import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},o=t(`<h1 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h1><p><code>简单工厂模式</code>又叫<code>静态工厂方法</code>，由一个工厂对象决定创建某一种对象类的实例，这种类型的设计模式属于创建型模式。</p><p>在<code>工厂模式</code>的大类中，具体有三个小的子类模式：</p><ul><li><code>简单工厂模式</code></li><li><code>工厂方法模式</code></li><li><code>抽象工厂模式</code></li></ul><p><strong><code>简单工厂模式</code>并不属于 23 种经典的设计模式，更多地被视为一种编程习惯或基础模式</strong>，但对于理解另外两种设计模式却有重要作用</p><p>在<code>简单工厂模式</code>中，可以根据参数的不同返回不同类的实例，<code>简单工厂模式</code>专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。</p><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><p><code>简单工厂模式</code>目的是定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到工厂方法中进行， 主要解决接口选择的问题，让其子类实现工厂接口，返回的也是一个抽象的产品。</p><h3 id="模式结构" tabindex="-1"><a class="header-anchor" href="#模式结构" aria-hidden="true">#</a> 模式结构</h3><ul><li><code>Factory</code>: 工厂角色，工厂角色负责实现创建所有实例的内部逻辑。</li><li><code>Product</code>: 抽象产品角色，抽象产品角色是所创建的所有对象的父类，负责描述所有实例所共有的公共接口。</li><li><code>ConcreteProduct</code>: 具体产品角色，具体产品角色是创建目标，所有创建的对象都充当这个角色的某个具体类的实例。</li></ul><h3 id="优点vs缺点" tabindex="-1"><a class="header-anchor" href="#优点vs缺点" aria-hidden="true">#</a> 优点VS缺点</h3><p>优点：</p><p>工厂类含有必要的判断逻辑，可以决定在什么时候创建哪一个产品类的实例，客户端可以免除直接创建产品对象的责任，而仅仅消费产品，<code>简单工厂模式</code> 通过这种做法实现了对责任的分割，它提供了专门的工厂类用于创建对象。</p><ul><li>客户端无须知道所创建的具体产品类的类名，只需要知道具体产品类所对应的参数即可，对于一些复杂的类名，通过<code>简单工厂模式</code> 可以减少使用者的记忆量。</li><li>通过引入配置文件，可以在不修改任何客户端代码的情况下更换和增加新的具体产品类，在一定程度上提高了系统的灵活性。</li></ul><p>缺点：</p><ul><li>由于工厂类集中了所有产品创建逻辑，一旦不能正常工作，整个系统都要受到影响。</li><li>使用<code>简单工厂模式</code>将会增加系统中类的个数，在一定程序上增加了系统的复杂度和理解难度。</li><li>系统扩展困难，一旦添加新产品就不得不修改工厂逻辑，在产品类型较多时，有可能造成工厂逻辑过于复杂，不利于系统的扩展和维护。</li><li><code>简单工厂模式</code>由于使用了静态工厂方法，造成工厂角色无法形成基于继承的等级结构。</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>定义一个 <code>Product</code> 接口，表示产品的通用操作方法。 具体产品类 <code>ConcreteProductA</code> 和 <code>ConcreteProductB</code> 实现了 <code>Product</code> 接口，分别表示不同类型的产品，并实现了自己的操作方法。</p><p><code>SimpleFactory</code> 是简单工厂类，负责根据客户端的需求创建具体的产品对象。它提供了一个 <code>createProduct</code> 方法，根据传入的类型参数来创建相应的产品对象。如果传入的类型参数不合法，则抛出一个错误。</p><p>首先创建一个 <code>SimpleFactory</code> 对象 <code>factory</code>。然后，通过调用 <code>factory</code> 的 <code>createProduct</code> 方法来创建具体的产品对象。</p><ul><li>创建 <code>productA</code> 对象后，调用 <code>operation</code> 方法，输出 <code>ConcreteProductA operation.</code></li><li>创建 <code>productB</code> 对象后，调用 <code>operation</code> 方法，输出 <code>ConcreteProductB operation.</code></li></ul><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 简单工厂模式
 * - ts实现
 */</span>
<span class="token keyword">namespace</span> SimpleFactoryPattern <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteProductA operation.&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ConcreteProductB operation.&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>
    <span class="token function">createProduct</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Product <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid product type.&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> productA <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
  productA<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出: ConcreteProductA operation.</span>

  <span class="token keyword">const</span> productB <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span>
  productB<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出: ConcreteProductB operation.</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 简单工厂模式
 * - java实现
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductA operation.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductB operation.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> Product <span class="token function">createProduct</span><span class="token punctuation">(</span>String type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid product type.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        SimpleFactory factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        Product productA <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productA<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: ConcreteProductA operation.</span>

        Product productB <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productB<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: ConcreteProductB operation.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="c语言" tabindex="-1"><a class="header-anchor" href="#c语言" aria-hidden="true">#</a> C语言</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 简单工厂模式
 * - C语言实现
 */</span>

#include <span class="token operator">&lt;</span>stdio<span class="token punctuation">.</span>h<span class="token operator">&gt;</span>
#include <span class="token operator">&lt;</span>stdlib<span class="token punctuation">.</span>h<span class="token operator">&gt;</span>

typedef struct <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>operation<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> Product<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">ConcreteProductA_operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductA operation.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">ConcreteProductB_operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ConcreteProductB operation.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

typedef struct <span class="token punctuation">{</span>
    Product<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token operator">*</span>createProduct<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">const</span> char<span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> SimpleFactory<span class="token punctuation">;</span>

Product<span class="token operator">*</span> <span class="token function">SimpleFactory_createProduct</span><span class="token punctuation">(</span><span class="token keyword">const</span> char<span class="token operator">*</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Product<span class="token operator">*</span> product <span class="token operator">=</span> <span class="token punctuation">(</span>Product<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token function">sizeof</span><span class="token punctuation">(</span>Product<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token operator">-</span><span class="token operator">&gt;</span>operation <span class="token operator">=</span> ConcreteProductA_operation<span class="token punctuation">;</span>
        <span class="token keyword">return</span> product<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Product<span class="token operator">*</span> product <span class="token operator">=</span> <span class="token punctuation">(</span>Product<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token function">sizeof</span><span class="token punctuation">(</span>Product<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        product<span class="token operator">-</span><span class="token operator">&gt;</span>operation <span class="token operator">=</span> ConcreteProductB_operation<span class="token punctuation">;</span>
        <span class="token keyword">return</span> product<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span>stderr<span class="token punctuation">,</span> <span class="token string">&quot;Invalid product type.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用示例</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  SimpleFactory factory <span class="token operator">=</span> <span class="token punctuation">{</span>SimpleFactory_createProduct<span class="token punctuation">}</span><span class="token punctuation">;</span>

  Product<span class="token operator">*</span> productA <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  productA<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: ConcreteProductA operation.</span>

  Product<span class="token operator">*</span> productB <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  productB<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: ConcreteProductB operation.</span>

  <span class="token function">free</span><span class="token punctuation">(</span>productA<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">free</span><span class="token punctuation">(</span>productB<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C++</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 简单工厂模式
 * - c++实现
 */</span>

#include <span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span>
using <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    virtual <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token operator">:</span> <span class="token keyword">public</span> Product <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token operator">:</span><span class="token operator">:</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ConcreteProductA operation.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">:</span><span class="token operator">:</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token operator">:</span> <span class="token keyword">public</span> Product <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token operator">:</span><span class="token operator">:</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ConcreteProductB operation.&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">:</span><span class="token operator">:</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">static</span> Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token operator">:</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">&amp;</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> std<span class="token operator">:</span><span class="token operator">:</span><span class="token function">invalid_argument</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid product type.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用示例</span>
int <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Product<span class="token operator">*</span> productA <span class="token operator">=</span> SimpleFactory<span class="token operator">:</span><span class="token operator">:</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  productA<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: ConcreteProductA operation.</span>

  Product<span class="token operator">*</span> productB <span class="token operator">=</span> SimpleFactory<span class="token operator">:</span><span class="token operator">:</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  productB<span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: ConcreteProductB operation.</span>

  <span class="token keyword">delete</span> productA<span class="token punctuation">;</span>
  <span class="token keyword">delete</span> productB<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><p>创建型模式对类的实例化过程进行了抽象，能够将对象的创建与对象的使用过程分离。</p></li><li><p><code>简单工厂模式</code>又称为静态工厂方法模式，它属于类创建型模式。在<code>简单工厂模式</code>中，可以根据参数的不同返回不同类的实例。</p></li><li><p><code>简单工厂模式</code>包含三个角色：</p><ul><li>工厂角色负责实现创建所有实例的内部逻辑；</li><li>抽象产品角色是所创建的所有对象的父类，负责描述所有实例所共有的公共接口；</li><li>具体产品角色是创建目标，所有创建的对象都充当这个角色的某个具体类的实例。</li></ul></li></ul>`,31),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","simple-factory-mode.html.vue"]]);export{i as default};
