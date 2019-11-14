'use strict'
const { Controller } = require('egg');

class MessagesController extends Controller {
  /**
   * 获取留言
   */
  async getMessages () {
    const { ctx, service } = this;
    const query = ctx.request.query;
    query.size = +query.size;
    query.page = +query.page;
    ctx.validate({
      size: { type: 'int', require: true },
      page: { type: 'int', require: true },
    }, query);
    const rets = await service.messages.getMessages();
    const start = (query.page - 1) * query.size;
    const end = query.start + query.size
    ctx.body = { allData: rets.slice(start, end), count: rets.length };
  }
}

module.exports = MessagesController;