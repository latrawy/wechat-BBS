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
      page: { type: 'int?', require: false, default: 1 },
      size: { type: 'int?', require: false, default: 10 },
    }, opts);
    const rets = await service.messages.getMessages();
    const start = (opts.page - 1) * opts.size;
    const end = start + opts.size;
    ctx.body = { code: 0, message: { allData: rets.slice(start, end), count: rets.length } };
  }

  /**
   * 增加留言
   */
  async addMessages () {
    const { ctx, service } = this;
    const opts = ctx.request.body;
    ctx.validate({
      content: { type: 'string', require: true },
      type: { type: 'int', require: true },
    }, opts);
    opts.userInfo = ctx.session.userInfo;
    const rets = await service.messages.addMessages(opts);
    ctx.body = { code: 0, message: rets };
  }
}

module.exports = MessagesController;