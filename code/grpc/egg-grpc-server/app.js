/*
 * @Description: 服务端启动
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-07-21 21:03:50
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-08-16 23:21:51
 */
'use strict';
// const rpcServer = require('./grpc/rpcServer');
const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
// const fs = require('fs');
// const appKey = '_grpcServer';
const rpcController = require('./grpc/grpcController');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  /**
 * 这一步可以使用app创建ctx上下文，并可以成功加载到service等服务
 * @return {Promise<void>}
 */
  async didLoad() {
    const { app } = this;
    const { host, port, protoPath } = app.config.rpcServer;
    // 创建grpc
    const grpcServer = new grpc.Server();
    // 获取proto文件路径
    const protoTargetPath = path.join(app.baseDir, protoPath);

    const packageDefinition = protoLoader.loadSync(protoTargetPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    // 获取对象
    const packageObject = grpc.loadPackageDefinition(packageDefinition).login;


    app.messenger.on('grpcServer', grpcServer => {
      console.log('1111', grpcServer);
      // process
      grpcServer.addService(packageObject.login.service, rpcController(app));
      app.logger.info(`[grpcServer]grpc bind on port:${port}`);
      // 启动
      grpcServer.start();
      // console.log(grpcServer);
      if (grpcServer.started) {
        app.logger.info(`[grpcServer]grpc started on  http://${host}:${port}`);
      }
    });
    app.messenger.once('grpcServer', grpcServer => {
      // process data
      console.log('2222', grpcServer);
      grpcServer.addService(packageObject.login.service, rpcController(app));
      app.logger.info(`[grpcServer]grpc bind on port:${port}`);
      // 启动
      grpcServer.start();
      // console.log(grpcServer);
      if (grpcServer.started) {
        app.logger.info(`[grpcServer]grpc started on  http://${host}:${port}`);
      }
    });
  }

  async didReady() {
    const { app } = this;
    // await new rpcServer(app).createRpcServer();
  }


}

module.exports = AppBootHook;
