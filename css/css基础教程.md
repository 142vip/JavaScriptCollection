## CSS基础教程

> 后端开发Coder，为更好的学习、熟悉前端CSS结合W3CSchool文档进行总结和整理，方便后续查阅及扎实基础
>
> 参考资料：https://www.w3cschool.cn/css/

### CSS简介

- CSS 指层叠样式表 (**C**ascading **S**tyle **S**heets)
- 样式定义**如何显示** HTML 元素
- 样式通常存储在**样式表**中
- 把样式添加到 HTML 4.0 中，是为了**解决内容与表现分离的问题**
- **外部样式表**可以极大提高工作效率
- 外部样式表通常存储在 **CSS 文件**中
- 多个样式定义可**层叠**为一
- 样式对网页中元素位置的排版进行像素级精确控制

### CSS样式

HTML 标签原本被设计为用于定义文档内容，如下：

```html
<h1>这是一个标题</h1>
<p>这是一个段落。</p>
```

样式表定义如何显示 HTML 元素，就像 HTML 3.2 的字体标签和颜色属性所起的作用那样。样式通常保存在外部的 .css 文件中。CSS样式表极大的提高了工作效率，通过仅仅编辑一个简单的 CSS 文档，外部样式表使你有能力同时改变站点中所有页面的布局和外观。

为了解决这个问题，万维网联盟（W3C），这个非营利的标准化联盟，肩负起了 HTML 标准化的使命，并在 HTML 4.0 之外创造出样式（Style）。

当代浏览器都支持 CSS 。

#### 多页面应用同一个样式

通常保存在外部的独立的.css文件（该文件不属于任何页面文件）可以在多个页面中使用同一个CSS样式表。通过在任何的页面文件中引用.css文件，你可以设置具有一致风格的多个页面。

#### 样式层叠

样式层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。

#### 样式层叠次序

当同一个 HTML 元素定义了多个样式时，应该使用哪个样式？

一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（位于 <head> 标签内部）
4. 内联样式（在 HTML 元素内部）

因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：<head> 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）

### CSS 语法

#### CSS 实例

CSS 规则由两个主要的部分构成：

- 选择器（Selector）
- 以及一条或多条声明（Declaration）

![1593401538094](images/1593401538094.png)

**选择器通常需要改变样式的 HTML 元素，每条声明由一个属性和一个值组成。**

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

CSS声明总是以分号(;)结束，声明组以大括号({})括起来:

```css
p{
    color:red;
    text-align:center;
}
```

#### CSS 注释

注释是用来解释你的代码，并且可以随意编辑它，浏览器会忽略它。

CSS注释以 `/*` 开始, 以 `*/` 结束, 实例如下:

```css
/*这是个注释*/        
p{        
    text-align:center;       
    /*这是另一个注释*/        
    color:black;        
    font-family:arial;       
}
```

### CSS选择器

#### ID选择器

id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

HTML元素以id属性来设置id选择器,**CSS 中 id 选择器以 "#" 来定义**。

```css
#para{
    text-align:center;
    color:red;
}
```

简单使用：

```html
<p id="para">内容居中显示,颜色为红色</p>
```



![Remark](https://7n.w3cschool.cn/statics/images/course/lamp.gif) ID属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用。

![Remark](https://www.w3cschool.cn/statics/images/course/lamp.gif) **ID属性只能在每个 HTML 文档中出现一次**

#### Class选择器

class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。

class 选择器在HTML中以class属性表示, 在 CSS 中，**类选择器以一个点"."号显示**：

```css
/*p标签内容居中显示*/
p.center {
    text-align:center;
}
```

简单使用：

```html
<p class="center">内容居中显示</p>
```

![Remark](https://7n.w3cschool.cn/statics/images/course/lamp.gif) **类名的第一个字符不能使用数字**！它无法在 Mozilla 或 Firefox 中起作用。

### CSS创建

插入样式表的方法：

- 外部样式表
- 内部样式表
- 内联样式

#### 外部样式表

当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 标签链接到样式表。 标签在（文档的）头部

```html
<head> <link rel="stylesheet" type="text/css" href="mystyle.css"> </head>
```

外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 html 标签。样式表应该以 .css 扩展名进行保存。

```css
hr {color:sienna;}           
p {margin-left:20px;}            
body {background-image:url(/images/back40.gif);}   
```

![Remark](https://7n.w3cschool.cn/statics/images/course/lamp.gif)不要在属性值与单位之间留有空格。

#### 内部样式表

当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 <style> 标签在文档头部定义内部样式表，就像这样:

```html
<head>
    <style>
        hr {color:sienna;}
        p {margin-left:20px;}
        body {background-image:url("images/back40.gif");}
    </style>
</head>
```


#### 内联样式
由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。

```html
<!--改变段落的颜色和左外边距-->
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```



**多重样式**

如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。

例如，外部样式表拥有针对 h3 选择器的三个属性：

```css
h3{            
    color:red;            
    text-align:left;            
    font-size:8pt;            
}   
```

而内部样式表拥有针对 h3 选择器的两个属性：
```css
h3            
{            
    text-align:right;            
    font-size:20pt;            
}    
```


假如拥有内部样式表的这个页面同时与外部样式表链接，那么 h3 得到的样式是：
```css
color:red; text-align:right;           
font-size:20pt;   
```


即颜色属性将被继承于外部样式表，而文字排列（text-alignment）和字体尺寸（font-size）会被内部样式表中的规则**取代**。

**多重样式将层叠为一个**

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。

**层叠次序**

当同一个 HTML 元素被不止一个样式定义时，一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，**其中数字 4 拥有最高的优先权**。

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（位于 head 标签内部）
4. 内联样式（在 HTML 元素内部）

因此，**内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明： 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）**。

![Remark](https://7n.w3cschool.cn/statics/images/course/lamp.gif)**提示:**如果你使用了外部文件的样式在内部样式中也定义了该样式，则内部样式表会取代外部文件的样式。



**多重样式优先级深入理解**

优先级用于浏览器是通过判断哪些属性值与元素最相关以决定并应用到该元素上的。

优先级仅由选择器组成的匹配规则决定的。

优先级就是分配给指定的CSS声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。



**多重样式优先级顺序**

下列是一份优先级逐级增加的选择器列表，其中数字 7 拥有最高的优先权：

1. 通用选择器（*）
2. 元素(类型)选择器
3. 类选择器
4. 属性选择器
5. 伪类
6. ID 选择器
7. 内联样式



**!important 规则例外**

当 !important 规则被应用在一个样式声明中时，该样式声明会覆盖CSS中任何其他的声明，无论它处在声明列表中的哪里。尽管如此，!important规则还是与优先级毫无关系。使用 !important 不是一个好习惯，因为它改变了你样式表本来的级联规则，从而使其难以调试。

一些经验法则：

- Always 要优化考虑使用样式规则的优先级来解决问题而不是 !important
- Only 只在需要覆盖全站或外部 css（例如引用的 ExtJs 或者 YUI ）的特定页面中使用 !important
- Never 永远不要在全站范围的 css 上使用 !important
- **Never 永远不要在你的插件中使用 !important**

![1593434925431](images/1593434925431.png)



**CSS 优先级法则**

-  A 选择器都有一个权值，权值越大越优先；
-  B 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
-  C 创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；
-  D 继承的CSS 样式不如后来指定的CSS 样式；
-  E 在同一组属性设置中标有"!important"规则的优先级最大；

### CSS 背景

CSS 背景属性用于定义HTML元素的背景。

CSS 属性定义背景效果：

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

#### 背景颜色

background-color 属性定义了元素的背景颜色。CSS中，颜色值通常定义:

- 十六进制 - 如："#ff0000"
- RGB - 如："rgb(255,0,0)"
- 颜色名称 - 如："red"

```css
h1 {
    background-color:#6495ed;
}
p {
    background-color:#e0ffff;
}
div {
    background-color:#b0c4de;
}
```

可以为所有元素设置背景色，包括 body 一直到 em 和 a 等行内元素;

**background-color 不能继承，其默认值是 transparent。如果一个元素没有指定背景色，那么背景就是透明的，这样其父元素的背景才可见。**

#### 背景图像

background-image 属性描述了元素的背景图像.默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体.

```css
body {
    background-image:url('paper.gif');
}
```

如果需要在HTML页面上对背景图像进行平铺，可以使用 [background-repeat](https://www.w3cschool.cn/cssref/pr-background-repeat.html) 属性。

默认情况下 background-image 属性会在页面的水平或者垂直方向平铺。

如果不想让图像平铺，你可以使用 background-repeat 属性:

```css
body{
    background-image:url('img_tree.png');
    background-repeat:no-repeat;
}
```

为 background-position 属性提供值有很多方法。可以使用一些关键字：top、bottom、left、right 和 center；其次，可以使用长度值，如 100px 或 5cm；最后也可以使用百分数值。不同类型的值对于背景图像的放置稍有差异。

**关键字**

图像放置关键字最容易理解的作用就像其名字的意义。例如，top left 使图像放置在元素内边距区的左上角。

只要保证不超过两个关键字：一个对应水平方向，另一个对应垂直方向，那么你可以设置位置关键字以任何顺序出现。

如果只有一个关键字，则会默认另一个关键字为 center。

![1593511142603](images/1593511142603.png)

**背景- 简写属性**

在以上实例中我们可以看到页面的背景颜色通过了很多的属性来控制。

为了简化这些属性的代码，我们可以将这些属性合并在同一个属性中.背景颜色的简写属性为`background`:

```css
body {
    background:#ffffff url('img_tree.png') no-repeat right top;
}
```

当使用简写属性时，属性值的顺序为：:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

![1593511352049](images/1593511352049.png)

### CSS Text文本格式

通过CSS的Text属性，你可以改变页面中文本的颜色、字符间距、对齐文本、装饰文本、对文本进行缩进等等.

#### Text Color

颜色属性被用来设置文字的颜色。颜色是通过CSS最经常的指定：

- 十六进制值 - 如"＃FF0000"
- 一个RGB值 - "RGB（255,0,0）"
- 颜色的名称 - 如"红"

```css
body {
    color:blue;
}
h1 {
    color:#00ff00;
}
h2 {
    color:rgb(255,0,0);
}
```

**如果定义了颜色属性，你还必须定义背景色属性**

#### 对齐方式

文本排列属性是用来设置文本的水平对齐方式。**文本可居中或对齐到左或右,两端对齐**.当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）

```css
h1 {
    text-align:center;
}
p.date {
    text-align:right;
}
p.main {
    text-align:justify;
}
```

**如果想把一个行内元素的第一行“缩进”，可以用左内边距或外边距创造这种效果**

#### 文本修饰

text-decoration 属性用来设置或删除文本的装饰。

从设计的角度看 text-decoration属性主要是用来删除链接的下划线

```css
/* 无删除线*/
a {
    text-decoration:none;
}
/*顶部删除线*/
h1 {
    text-decoration:overline;
}
/*删除线中间穿过*/
h2 {
    text-decoration:line-through;
}
/*下划线*/
h3 {
    text-decoration:underline;
}
```

#### 文本缩进

文本缩进属性是用来指定文本的第一行的缩进。CSS 提供了 text-indent 属性，该属性可以方便地实现文本缩进。

**通过使用 text-indent 属性，所有元素的第一行都可以缩进一个给定的长度**。

```css
/* 首行缩进*/
p {
    text-indent:50px;
}
```

#### 文本间隔

word-spacing 属性可以改变字（单词）之间的标准间隔。其默认值 normal 与设置值为 0 是一样的。

```css
/* 指定段字之间的空间，30像素：*/
p{
    word-spacing:30px;
}
```

#### 所有CSS文本属性。

| 文本属性        | 意义描述                 |
| --------------- | ------------------------ |
| color           | 设置文本颜色             |
| direction       | 设置文本方向。           |
| letter-spacing  | 设置字符间距             |
| line-height     | 设置行高                 |
| text-align      | 对齐元素中的文本         |
| text-decoration | 向文本添加修饰           |
| text-indent     | 缩进元素中文本的首行     |
| text-shadow     | 设置文本阴影             |
| text-transform  | 控制元素中的字母         |
| unicode-bidi    | 设置或返回文本是否被重写 |
| vertical-align  | 设置元素的垂直对齐       |
| white-space     | 设置元素中空白的处理方式 |
| word-spacing    | 设置字间距               |

### CSS 字体

CSS字体属性定义字体，加粗，大小，文字样式。

#### CSS字型

在CSS中，有两种类型的字体系列名称：

- **通用字体系列** - 拥有相似外观的字体系统组合（如 "Serif" 或 "Monospace"）
- **特定字体系列** - 一个特定的字体系列（如 "Times" 或 "Courier"）

除了各种特定的字体系列外，CSS 定义了 5 种通用字体系列：

- Serif 字体
- Sans-serif 字体
- Monospace 字体
- Cursive 字体
- Fantasy 字体

#### 字体系列

font-family 属性设置文本的字体系列。

font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。

**如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。**多个字体系列是用一个逗号分隔指明：

```css
p{
    font-family:"Times New Roman", Times, serif;
}
```

#### 字体样式

主要是用于指定斜体文字的字体样式属性。

这个属性有三个值：

- 正常 - 正常显示文本
- 斜体 - 以斜体字显示的文字
- 倾斜的文字 - 文字向一边倾斜（和斜体非常类似，但不太支持）

```css
p.normal {
    font-style:normal;
}
p.italic {
    font-style:italic;
}
p.oblique {
    font-style:oblique;
}
```

**italic 和 oblique 的区别**

- 斜体（italic）是一种简单的字体风格，对每个字母的结构有一些小改动，来反映变化的外观。
- 倾斜（oblique）文本是正常竖直文本的一个倾斜版本。

**通常情况下，italic 和 oblique 文本在 web 浏览器中看上去完全一样**。

#### 字体大小

font-size 属性设置文本的大小。

能否管理文字的大小，在网页设计中是非常重要的。但是，你不能通过调整字体大小使段落看上去像标题，或者使标题看上去像段落。

请务必使用正确的HTML标签，就`<h1> `- `<h6>`表示标题和`<p>`表示段落：

字体大小的值可以是绝对或相对的大小。

绝对大小：

- 设置一个指定大小的文本
- 不允许用户在所有浏览器中改变文本大小
- 确定了输出的物理尺寸时绝对大小很有用

相对大小：

- 相对于周围的元素来设置大小
- 允许用户在浏览器中改变文字大小

**如果不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（16px=1em）**

#### 设置字体大小像素

设置文字的大小与像素，完全控制文字大小

```css
h1 {
    font-size:40px;
}
h2 {
    font-size:30px;
}
p {
    font-size:14px;
}
```

**用em来设置字体大小**

为了避免Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替像素。

em的尺寸单位由W3C建议。

1em和当前字体大小相等。在浏览器中默认的文字大小是16px。

因此，1em的默认大小是16px。可以通过下面这个公式将像素转换为em：px/16=em

**使用百分比和EM组合**

在所有浏览器的解决方案中，设置 <body>元素的默认字体大小的是百分比

```css
body {
    font-size:100%;
}
h1 {
    font-size:2.5em;
}
h2 {
    font-size:1.875em;
}
p {
    font-size:0.875em;
}
```

**在所有浏览器中，可以显示相同的文本大小，并允许所有浏览器缩放文本的大小。**

#### 所有CSS字体属性

| 字体属性     | 描述                                 |
| :----------- | :----------------------------------- |
| font         | 在一个声明中设置所有的字体属性       |
| font-family  | 指定文本的字体系列                   |
| font-size    | 指定文本的字体大小                   |
| font-style   | 指定文本的字体样式                   |
| font-variant | 以小型大写字体或者正常字体显示文本。 |
| font-weight  | 指定字体的粗细。                     |

### CSS 链接

不同的链接可以有不同的样式链接样式

链接的样式，可以用任何CSS属性（如颜色，字体，背景等）。

特别的链接，可以有不同的样式，这取决于他们是什么状态。

这四个链接状态是：

- a:link - 正常，未访问过的链接
- a:visited - 用户已访问过的链接
- a:hover - 当用户鼠标放在链接上时
- a:active - 链接被点击的那一刻

```css
 /* 未访问链接*/
a:link {
    color:#FF0000;
}  
/* visited link */
a:visited {
    color:#00FF00;
}
/* mouse over link */
a:hover {
    color:#FF00FF;
} 
/* selected link */
a:active {
    color:#0000FF;
}  
```

当设置为若干链路状态的样式，也有一些顺序规则：

- a:hover 必须跟在 a:link 和 a:visited后面
- a:active 必须跟在 a:hover后面

#### 链接样式

根据上述链接的颜色变化的例子，看它是在什么状态。

让我们通过一些其他常见的方式转到链接样式：

#### 文本修饰

text-decoration 属性主要用于删除链接中的下划线：

```css
a:link {
    text-decoration:none;
}
a:visited {
    text-decoration:none;
}
a:hover {
    text-decoration:underline;
}
a:active {
    text-decoration:underline;
}
```

#### 背景颜色

背景颜色属性指定链接背景色：

```css
a:link {
    background-color:#B2FF99;
}
a:visited {
    background-color:#FFFF85;
}
a:hover {
    background-color:#FF704D;
}
a:active {
    background-color:#FF704D;
}
```

