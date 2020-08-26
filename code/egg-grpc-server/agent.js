/*
 * @Description: 服务端启动
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-07-21 21:03:50
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-08-16 23:23:01
 */
'use strict';
// const rpcServer = require('./grpc/rpcServer');
const grpc = require('grpc');
class AgentBootHook {
  constructor(agent) {
    this.agent = agent;
  }

  async didLoad() {
    const { agent } = this;
    const { host, port } = agent.config.rpcServer;
    // 创建grpc
    const grpcServer = new grpc.Server();
    // 绑定
    try {
      const resultPort = grpcServer.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());
      console.log('kkkkkkk');
      console.log(resultPort);
      if (resultPort > 0) {
        this.agent.messenger.sendToApp('grpcServer', grpcServer);
      }
    } catch (error) {
      console.log(error);
    }


  }

  async didReady() {
    return;
  }


}

module.exports = AgentBootHook;
