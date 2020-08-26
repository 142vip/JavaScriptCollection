'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  test(object) {
    console.log(object);

    return {
      From: 1,
      To: 2,
    };
  }
}

module.exports = TestService;
