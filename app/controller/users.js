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
      avatarUrl: { type: 'string', require: true, allowEmpty: true },
      city: { type: 'string', require: true, allowEmpty: true },
      country: { type: 'string', require: true, allowEmpty: true },
      gender: { type: 'string', require: true },
      language: { type: 'string', require: true, allowEmpty: true },
      nickName: { type: 'string', require: true, allowEmpty: true },
      province: { type: 'string', require: true, allowEmpty: true },
    }, query);
    const rets = await service.users.checkLogin(query);
    ctx.body = { rets };
  }
}

module.exports = UsersController;