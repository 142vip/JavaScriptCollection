'use strict';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
// const host = '127.0.0.1';
// const port = 50001;
// const protoPath = 'grpc/test.proto';

module.exports = app => {
  const { port, host, protoPath } = app.config.rpcClient;

  const packageDefinition = protoLoader.loadSync(path.join(app.baseDir, protoPath), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const packageObject = grpc.loadPackageDefinition(packageDefinition).login;
  // console.log(packageObject);
  const rpcClient = new packageObject.login(
    `${host}:${port}`,
    grpc.credentials.createInsecure()
  );

  app.logger.info(`[grpcClient]grpc connect on server:${host}:${port}`);
  // 返回对象,对各实例就返回多个实例对象
  return rpcClient;

};
