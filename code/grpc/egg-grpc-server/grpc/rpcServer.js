/*
 * @Description:
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-07-22 10:21:16
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-08-16 23:01:44
 */
'use strict';

const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
// const fs = require('fs');
// const appKey = '_grpcServer';
const rpcController = require('./grpcController');
// 定义服务器
// const host = '127.0.0.1';
// const port = 50001;
// const protoPath = 'grpc/test.proto';
// const rpcService = require('./rpcService');

class rpcServer {
  constructor(app) {
    this.app = app;
    this.ctx = app.createAnonymousContext();
  }


  async createRpcServer() {
    const { app } = this;
    // get config about rpcServer
    // console.log(app.config);
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
    // 判断端口是否被占

    // 添加服务
    try {
      // 绑定
      const resultPort = grpcServer.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());
      grpcServer.addService(packageObject.login.service, rpcController(app));
      console.log(resultPort);
      if (resultPort > 0) {
        app.logger.info(`[grpcServer]grpc bind on port:${port}`);
        // 启动
        grpcServer.start();
        // console.log(grpcServer);
        if (grpcServer.started) {
          app.logger.info(`[grpcServer]grpc started on  http://${host}:${port}`);
        }

      }
    } catch (error) {
      app.logger.error(`[grpcServer]grpc start failed with ${error}`);
    }

    // 返回grpcServer
    return grpcServer;

  }
}

module.exports = rpcServer;
