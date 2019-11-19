'use strict'
const { Controller } = require('egg');

class UsersController extends Controller {
  /**
   * 用户登陆流程
   */
  async login () {
    const { ctx, service } = this;
    const query = ctx.request.query;
    ctx.validate({
      code: { type: 'string', require: true },
      encryptedData: { type: 'string', require: true },
      iv: { type: 'string', require: true },
    }, query);
    const rets = await service.users.login(query);
    if (rets.message) {
      ctx.body = rets;
    } else {
      ctx.body = { code: 0, message: { skey: rets } };
    }
  }
}

module.exports = UsersController;