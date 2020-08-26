/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594176240365_9963';

  // add your middleware config here
  config.middleware = [];

  // 自定义端口
  config.cluster = {
    listen: {
      port: 3000,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 目前单个客户端测试
  config.rpcClient = {
    host: '127.0.0.1',
    port: 50001,
    protoPath: 'grpc/test.proto',
  };
  // config.rpcClient = {
  //   host: '10.160.2.250',
  //   port: 8031,
  //   protoPath: 'grpc/test.proto',
  // };

  return {
    ...config,
    ...userConfig,
  };
};
