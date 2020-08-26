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
  config.keys = appInfo.name + '_1594179740059_520';

  // add your middleware config here
  config.middleware = [];

  // 自定义
  config.cluster = {
    listen: {
      port: 4000,
    },
  };

  config.validate = {
    convert: true,
    // validateRoot: false,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.rpcServer = {
    host: '127.0.0.1',
    port: 50001,
    protoPath: 'grpc/test.proto',
  };

  return {
    ...config,
    ...userConfig,
  };
};
