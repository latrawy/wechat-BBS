const Service = require('egg').Service;

class MessagesService extends Service {
  constructor(ctx) {
    super(ctx);
    this.MessagesModel = this.ctx.model.Messages;
  }

  async getMessages() {
    return await this.MessagesModel.findAll({ raw: true });
  }
}

module.exports = MessagesService;