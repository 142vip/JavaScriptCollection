/*
 * @Description:
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-07-23 13:57:06
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-08-15 20:40:19
 */
'use strict';


class RpcController {
  constructor(app) {
    this.app = app;
    this.ctx = app.createAnonymousContext();
  }

  test(request) {
    const { ctx, app } = this;
    ctx.validate({
      From: { type: 'string', required: true },
      To: { type: 'string', required: true },
    }, request);
    const { From, To } = request;

    //
    const result = ctx.service.test.test(request);
    return {
      Receive: '233320',
      Send: '2323323',
    };
  }

}


function dealSimpleRpcFunc(func, key) {
  return async (call, callback) => {
    try {
      await callback(null, func[key](call.request));
    } catch (e) {
      await callback(new Error(e), call.request);
    }
  };
}


module.exports = app => {
  return {
    test: dealSimpleRpcFunc(new RpcController(app), 'test'),
  };
};
