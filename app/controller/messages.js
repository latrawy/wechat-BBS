'use strict'
const { Controller } = require('egg');

class MessagesController extends Controller {
  /**
   * 获取留言
   */
  async getMessages () {
    const { ctx, service } = this;
    const opts = ctx.request.query;
    ctx.validate({
      page: { type: 'int?', require: false, default: 1, min: 1 },
      size: { type: 'int?', require: false, default: 10, min: 1 },
    }, opts);
    opts.userInfo = ctx.session.userInfo;
    const { allData, count } = await service.messages.getMessages(opts);
    ctx.body = { code: 0, message: { allData, count } };
  }

  /**
   * 增加留言
   */
  async addMessages () {
    const { ctx, service, config } = this;
    const opts = ctx.request.body;
    ctx.validate({
      title: { type: 'string?', require: false },
      content: { type: 'string', require: true },
      // type: { type: 'enum', require: true, values: Object.values(config.enums.messageType) },
      type: { type: 'enum', require: true, values: ['1', '2', '3', '4'] },
    }, opts);
    opts.userInfo = ctx.session.userInfo;
    const rets = await service.messages.addMessages(opts);
    ctx.body = { code: 0, message: rets };
  }
}

module.exports = MessagesController;