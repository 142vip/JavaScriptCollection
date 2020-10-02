## nestjs核心基础概念

首先这篇文章主要是解释nestjs框架中常见的概念，有的很重要，属于核心知识，我个人认为在学习一个新的框架的时候，从概念入手，了解基础，对于开发时非常有帮助的；切莫忽略这些基础的概念知识，不要过于求快，要知道：慢是为了更快的进步！

#### 架构预览：

主要有三个核心概念：模块Module,  控制器Controller， 服务与依赖注入 Provider Dependency injection

1. 模块Module:   用于将代码拆分为独立的和可重用的模块，例如用户信息模块，然后将该用户模块的控制器和服务集合进来，最后直接将用户模块导入到根Module就可以使用了。

2. 控制器Controller： 负责处理客户端传入的请求参数并向客户端返回响应数据。nest.js提供许多http请求的装饰器，如例如@Body(),@Post()等。控制器不需要定义任何诸如从客户端获取数据、验证用户输入等工作，这些都是交给服务Provider处理，通过把任务委托给各种服务，可以让控制器类更加精简、高效。``

3. 服务Provider ：在这里处理所有请求执行逻辑，在控制器中通过constructor函数以依赖注入的方式实现。

   ```javascript
   // 构造函数
   constructor(private readonly catsService: CatsService) {}
   ```

#### 理论概述

Nest是一个用于构建高效，可扩展的[Node.js](http://nodejs.org/)服务器端应用程序的框架。它使用渐进式JavaScript，使用[TypeScript](http://www.typescriptlang.org/)构建（保留与纯JavaScript的兼容性），并结合了OOP（面向对象编程），FP（功能编程）和FRP（功能反应编程）的元素。


> The core concept of Nest is to provide an architecture, which helps developers to accomplish maximum separation of layers and increase abstraction in their applications.

Nest的核心概念是提供结构系统，帮助开发只实现最大分层，并提高应用程序的抽象性。

> It has enormous potential, but does not solve problems for you. It is not just a set of prepared classes, with some behavior. It is an idea, which shows you how to organize modern application and enable you to focus on application logic.

它潜力无限，但是无法解决你的问题。它不仅仅是一套事先准备好的有行为的类，它提供了一套组织现代化应用程序的理念，这种理念使你能够专注与应用程序逻辑。

> Application building blocks We have three basic application building blocks in Nest: Modules Controllers Components

应用程序构建块 Nest有三种基本的应用程序构建块

1. 模块。
2. 控制器。
3. 组件。

#### 模块

> Module is a class with @Module({}) decorator. This decorator provides metadata, which framework uses to organize application structure. Simple module with all available properties:

模块是一个带有 `@Module({})` 装饰器的类。该装饰器提供元数据，框架使用该元数据组织应用程序结构。 以下是一个简单模块的所有可用属性：

```js
@Module({
    modules [ TestModule ],
    controllers: [ TestController ],
    components: [ TestComponent ],
    exports: [ TestComponent ]
})
export class ApplicationModule {}
```

> By default, modules encapsulate each dependency. It means, that it is not possible to use its components / controllers from another module. To allow different modules to share same instance of component (only components can be exported), we could simply exports it.

默认情况下，模块封装每一个依赖，也就是说模块只能在其内

#### 控制器

> The Controllers layer is responsible for handling incoming HTTP requests. Controller is a simple class with @Controller() decorator.

控制层负责处理传入的HTTP请求。控制器是一个带有`@Controller()`装饰器的类。

```js
@Controller()
class UsersController {
    @Get('users')
    getAllUsers(@Res() response) {
        res.status(201).json({});
    }
 }
```

#### 组件

> Almost everything is a component - Service, Repository, Provider etc. and they might be injected to controllers or to another component by constructor (as in Angular).

几乎所有的事物都可以被看作一个组件--`Service, Repository, Provider`等。可以通过构造函数将组件注入到控制器或者另一个组件中。

```js
@Component()
class UsersService {
    getAllUsers() {
        return [];
    }
}
```