'use strict';
const rpcClient = require('./grpc/rpcClient');
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  /**
 * 这一步可以使用app创建ctx上下文，并可以成功加载到service等服务
 * @return {Promise<void>}
 */
  async didLoad() {
    this.app.grpc = rpcClient(this.app);
  }

}

module.exports = AppBootHook;
