'use strict'
const { Controller } = require('egg');

class MessagesController extends Controller {
  /**
   * 获取留言
   */
  async getMessages () {
    const { ctx, service } = this;
    const query = ctx.request.query;
    ctx.validate({
      page: { type: 'int?', require: false, default: 1 },
      size: { type: 'int?', require: false, default: 10 },
    }, query);
    const rets = await service.messages.getMessages();
    const start = (query.page - 1) * query.size;
    const end = start + query.size;
    ctx.body = { code: 0, message: { allData: rets.slice(start, end), count: rets.length } };
  }
}

module.exports = MessagesController;