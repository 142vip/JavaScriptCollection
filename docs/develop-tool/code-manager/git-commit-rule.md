

## Git提交规范


- type: commit 的类型
- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程, 依赖管理.
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述, 建议符合  50/72 formatting
- body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.




每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。
```typescript
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```
其中，**Header 是必需的，Body 和 Footer 可以省略**

Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）

- **feat：新功能**
- **fix：修补bug**
- **docs：修改文档**
- **style： 格式化代码结构（不影响代码运行的变动）**
- **refactor：重构（即不是新增功能，也不是修改bug的代码变动，比如重命名变量  ）**
- **chore：构建过程或辅助工具的变动（不会影响代码运行）**



**scope**
scope用于定义type影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同
**subject**
subject是 commit 目的的简短描述，不超过50个字符。

- 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
- 第一个字母小写
- 结尾不加句号（.）
#### Body
Body 部分是对本次 commit 的详细描述，可以分成多行，每行尽量不超过72个字符。例如：
```typescript
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```
**关闭 Issue**
如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。
```typescript
Closes #234
```
也可以一次关闭多个 issue 。
```typescript
Closes #123, #245, #992
```
