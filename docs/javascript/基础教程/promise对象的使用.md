`Promise`是一个对象，它代表了一个异步操作的最终完成或者失败。因为大多数人仅仅是使用已创建的 Promise 实例对象

**本质上Promise是一个函数返回的对象，我们可以在它上面绑定回调函数，这样我们就不需要在一开始把回调函数作为参数传入这个函数了。**

假设现在有一个名为 `createAudioFileAsync()` 的函数，它接收一些配置和两个回调函数，然后异步地生成音频文件。一个回调函数在文件成功创建时的被调用，另一个则在出现异常时的被调用。

```js
// 成功的回调函数
function successCallback(result) {
  console.log("音频文件创建成功: " + result);
}

// 失败的回调函数
function failureCallback(error) {
  console.log("音频文件创建失败: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback)
```

更现代的函数会返回一个 promise 对象，使得可以将回调函数绑定在该 promise对象 上。

如果函数 `createAudioFileAsync()` 被重写为返回promise的形式，那么

```js
const promise = createAudioFileAsync(audioSettings); 
// 利用then简单调用
promise.then(successCallback, failureCallback);
// 或者直接简写
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

### 约定

不同于“老式”的传入回调，在使用 Promise 时，会有以下约定：

- 在本轮 事件循环运行完成之前，回调函数是不会被调用的。
- 即使异步操作已经完成（成功或失败），在这之后通过 `then()`添加的回调函数也会被调用。
- 通过多次调用 `then()` 可以添加多个回调函数，它们会按照插入顺序执行。

**Promise 很棒的一点就是链式调用（chaining）。**

### 链式调用

连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 **Promise 链**来实现这种需求。

见证奇迹的时刻：`then()` 函数会返回一个和原来不同的**新的Promise**：

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
// 或者
const promise2 = doSomething().then(successCallback, failureCallback);
```

`promise2` 不仅表示 `doSomething()` 函数的完成，也代表了传入的 `successCallback` 或者 `failureCallback` 的完成，这两个函数也可以返回一个 Promise 对象，从而形成另一个异步操作，这样的话，在 `promise2` 上新增的回调函数会排在这个 Promise 对象的后面。

基本上，每一个 Promise 都代表了链中另一个异步过程的完成。

```js
// 回调地狱
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
            console.log('Got the final result: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);
```

现在，我们可以把回调绑定到返回的 Promise 上，形成一个 Promise 链：

```js
doSomething().then(function(result) {
    return doSomethingElse(result);
}).then(function(newResult) {
    return doThirdThing(newResult);
}).then(function(finalResult) {
    console.log('Got the final result: ' + finalResult);
}).catch(failureCallback);
```

**then里的参数是可选的**，`catch(failureCallback)` 是 `then(null, failureCallback)` 的缩略形式。如下所示，我们也可以用**箭头函数**来表示：

```js
// 多个then
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
    console.log(`Got the final result: ${finalResult}`);
}).catch(failureCallback);
```

**注意：**一定要有返回值，否则，callback 将无法获取上一个 Promise 的结果。(如果使用箭头函数，`() => x` 比 `() => { return x; }` 更简洁一些，但后一种保留 `return` 的写法才支持使用多个语句。）。

#### Catch 的后续链式操作

有可能会在一个回调失败之后继续使用链式操作，即 使用一个 `catch`，这对于在链式操作中抛出一个失败之后，再次进行新的操作很有用。请阅读下面的例子：

```js
new Promise((resolve, reject) => {
    console.log('初始化');
    resolve();
}).then(() => {
    throw new Error('有哪里不对了');
    console.log('执行「这个」”');
}).catch(() => {
    console.log('执行「那个」');
}).then(() => {
    console.log('执行「这个」，无论前面发生了什么');
});
// 输出结果
// 初始化
// 执行“那个”
// 执行“这个”，无论前面发生了什么
```

### 错误传递

在之前的回调地狱示例中，可能记得有 3 次 `failureCallback` 的调用，而在 Promise 链中只有尾部的一次调用。

```js
doSomething()
.then(result => doSomethingElse(value))
.then(newResult => doThirdThing(newResult))
.then(finalResult => console.log(`Got the final result: ${finalResult}`))
.catch(failureCallback);
```

通常，一遇到异常抛出，浏览器就会顺着promise链寻找下一个 `onRejected` 失败回调函数或者由 `.catch()` 指定的回调函数。这和以下的同步代码的执行过程很相似。

```js
try {
    let result = syncDoSomething();
    let newResult = syncDoSomethingElse(result);
    let finalResult = syncDoThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
} catch(error) {
    failureCallback(error);
}
```

在 ECMAScript 2017 标准的 `async/await` 语法糖中，这种与同步形式代码的对称性得到了极致的体现：

```js
async function foo() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch(error) {
        failureCallback(error);
    }
}
```

**通过捕获所有的错误，甚至抛出异常和程序错误，Promise 解决了回调地狱的基本缺陷**。这对于构建异步操作的基础功能而言是很有必要的。

### 拒绝事件

当 Promise 被拒绝时，会有下文所述的两个事件之一被派发到全局作用域

- `rejectionhandled`

  当 Promise 被拒绝、并且在 `reject` 函数处理该 rejection 之后会派发此事件。

- `unhandledrejection`

  当 Promise 被拒绝，但没有提供 `reject` 函数来处理该 rejection 时，会派发此事件。

以上两种情况中，`PromiseRejectionEvent` 事件都有两个属性，一个是 `promise` 属性，该属性指向被驳回的 Promise，另一个是 `reason`属性，该属性用来说明 Promise 被驳回的原因。

因此，我们可以通过以上事件为 Promise 失败时提供补偿处理，也有利于调试 Promise 相关的问题。在每一个上下文中，该处理都是全局的，因此不管源码如何，所有的错误都会在同一个handler中被捕捉处理。

```js
window.addEventListener("unhandledrejection", event => {
    // 可以在这里添加一些代码，以便检查
    //   event.promise 中的 promise 和
    //  event.reason 中的 rejection 原因 
    event.preventDefault();
}, false);
```

调用 event 的 [`preventDefault()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault) 方法是为了告诉 JavaScript 引擎当 promise 被拒绝时不要执行默认操作，默认操作一般会包含把错误打印到控制台。

理想情况下，在忽略这些事件之前，我们应该检查所有被拒绝的 Promise，来确认这不是代码中的 bug。

### 在旧式回调 API 中创建 Promise

可以通过 Promise 的构造器从零开始创建 `Promise`。 这种方式（通过构造器的方式）应当只在包裹旧 API 的时候用到。

理想状态下，所有的异步函数都已经返回 Promise 了。但有一些 API 仍然使用旧方式来传入的成功（或者失败）的回调。典型的例子就是 `setTimeout()`函数：

```js
setTimeout(() => saySomething("10 seconds passed"), 10000);
```

混用旧式回调和 Promise 可能会造成运行时序问题。如果 `saySomething` 函数失败了，或者包含了编程错误，那就没有办法捕获它了。这得怪 `setTimeout`。

幸运地是，我们可以用 Promise 来包裹它。最好的做法是，将这些有问题的函数包装起来，留在底层，并且永远不要再直接调用它们：

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10000).then(() => saySomething("10 seconds")).catch(failureCallback);
```

通常，Promise 的构造器接收一个执行函数(executor)，可以在这个执行函数里手动地 resolve 和 reject 一个 Promise。既然 `setTimeout` 并不会真的执行失败，那么可以在这种情况下忽略 reject。

### 组合

`Promise.resolve()`和 `Promise.reject()` 是手动创建一个已经 resolve 或者 reject 的 Promise 快捷方法。它们有时很有用。

`Promise.all()`和 `Promise.race()` 是并行运行异步操作的两个组合式工具。

我们可以发起并行操作，然后等多个操作全部结束后进行下一步操作，如下：

```js
Promise.all([func1(), func2(), func3()])
    .then(([result1, result2, result3]) => { 
    // use result1, result2 and result3 
});
```

可以使用一些聪明的 JavaScript 写法实现时序组合：

```js
[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
.then(result3 => { /* use result3 */ });
```

通常，我们递归调用一个由异步函数组成的数组时相当于一个 Promise 链：

```
Promise.resolve().then(func1).then(func2).then(func3);
```

我们也可以写成可复用的函数形式，这在函数式编程中极为普遍：

```js
const applyAsync = (acc,val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));
```

`composeAsync()` 函数将会接受任意数量的函数作为其参数，并返回一个新的函数，该函数接受一个通过 composition pipeline 传入的初始值。这对我们来说非常有益，因为任一函数可以是异步或同步的，它们能被保证按顺序执行：

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

在 ECMAScript 2017 标准中, 时序组合可以通过使用 `async/await` 而变得更简单：

```js
let result;
// 借助循环
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
```

### 时序

为了避免意外，即使是一个已经变成 resolve 状态的 Promise，传递给 `then()` 的函数也总是会被异步调用：

```js
Promise.resolve().then(() => console.log(2));
// 1, 2
console.log(1); 
```

传递到 `then()` 中的函数被置入了一个微任务队列，而不是立即执行，这意味着它是在 JavaScript 事件队列的所有运行时结束了，事件队列被清空之后，才开始执行：

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
// 1, 2, 3, 4
console.log(1); 
```

### 嵌套

简便的 Promise 链式编程最好保持扁平化，不要嵌套 Promise，因为嵌套经常会是粗心导致的。可查阅下一节的**常见错误**中的例子。

嵌套 Promise 是一种可以限制 `catch` 语句的作用域的控制结构写法。明确来说，嵌套的 `catch` 仅捕捉在其之前同时还必须是其作用域的 failureres，而捕捉不到在其链式以外或者其嵌套域以外的 error。如果使用正确，那么可以实现高精度的错误修复。

```js
doSomethingCritical()
    .then(result => doSomethingOptional()
          .then(optionalResult => doSomethingExtraNice(optionalResult))
          // 即使有异常也会忽略，继续运行;(最后会输出)
          .catch(e => {console.log(e.message)})) 
    .then(() => moreCriticalStuff())
	// 没有输出
    .catch(e => console.log("Critical failure: " + e.message));
```

注意,有些代码步骤是嵌套的，而不是一个简单的纯链式，这些语句前与后都被括号 `()` 包裹着。

**这个内部的 catch 语句仅能捕获到 `doSomethingOptional()` 和 `doSomethingExtraNice()` 的失败，`之后就恢复到moreCriticalStuff()` 的运行。重要提醒：如果 `doSomethingCritical()` 失败，这个错误仅会被最后的（外部）`catch` 语句捕获到。**

### 常见错误

在编写 Promise 链时，需要注意以下示例中展示的几个错误：

```js
// 错误示例，包含 3 个问题！
doSomething().then(function(result) {
    // 没有返回 Promise 以及没有必要的嵌套 Promise
    doSomethingElse(result) 
        .then(newResult => doThirdThing(newResult));
}).then(() => doFourthThing());
// 最后，是没有使用 catch 终止 Promise 调用链，可能导致没有捕获的异常
```

第一个错误是没有正确地将事物相连接。当我们创建新 Promise 但忘记返回它时，会发生这种情况。因此，链条被打破，或者更确切地说，我们有两个独立的链条竞争（同时在执行两个异步而非一个一个的执行）。这意味着 `doFourthThing()` 不会等待 `doSomethingElse()` 或 `doThirdThing()` 完成，并且将与它们并行运行，可能是无意的。单独的链也有单独的错误处理，导致未捕获的错误。

第二个错误是不必要地嵌套，实现第一个错误。嵌套还限制了内部错误处理程序的范围，如果是非预期的，可能会导致未捕获的错误。其中一个变体是 [Promise 构造函数反模式](https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it)，它结合了 Promise 构造函数的多余使用和嵌套。

第三个错误是忘记用 `catch` 终止链。这导致在大多数浏览器中不能终止的 Promise 链里的 rejection。

一个好的经验法则是总是返回或终止 Promise 链，并且一旦得到一个新的 Promise，返回它。下面是修改后的平面化的代码：

```js
doSomething()
    .then(function(result) {
    return doSomethingElse(result);
}).then(newResult => doThirdThing(newResult))
    .then(() => doFourthThing())
    .catch(error => console.log(error));
```

注意：`() => x` 是 `() => { return x; }` 的简写。

**使用 async/await]可以解决以上大多数错误，使用 `async/await` 时，最常见的语法错误就是忘记了 `await` 关键字。**