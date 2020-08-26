/*
 * @Description:
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-08-15 20:21:54
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-08-15 20:27:58
 */
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
  config.keys = appInfo.name + '_';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.grpcUtil = {
    rpcServer: {
      // host(必选)为建立服务绑定的ip，port(必选)为端口
      host: '0.0.0.0',
      port: 50051,
      // 手动输入配置protoArray唯一个数组，个数对应想要配置为服务的proto文件
      // path(必选)：proto文件路径
      // packageService(必选)： proto文件中的package和service名字的组合，.隔开
      // functionArray(必选)：proto文件中函数的名称数组
      // pointFunArray(必选)：对应的真实函数，login.login代表为service下的login文件中的login函数
      // paramArray(可选)：对应的函数的参数列表，可选，如果配置了则顺序必须和函数致，这个配置的作用是因为如果你的函数参数
      // 是fun(param1, param2)这样的形式而不是fun({param1, param2})这种时，客户端传入的是一个对象，第一种方式无
      // 法正确接收到，所以配置这个，可以自动帮助转换，而不需要修改代码
      protoArray: [
        {
          path: 'app/proto/login.proto',
          packageService: 'login.login',
          functionArray: [ 'login', 'signUp' ],
          pointFunArray: [ 'login.login', 'login.signUp' ],
        },
      ],
    },
    rpcClient: {
      host: '0.0.0.0',
      port: 50051,
      protoArray: [{
        path: 'app/proto/login.proto',
        packageService: 'login.login',
        functionArray: [ 'login', 'signUp' ],
      }],
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
