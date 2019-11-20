const Service = require('egg').Service;

const Sequelize = require('sequelize');

class MessagesService extends Service {
  constructor(ctx) {
    super(ctx);
    this.MessagesModel = this.ctx.model.Messages;
    this.sequelize = this.MessagesModel.sequelize;
  }

  async getMessages(opts) {
    const condition = {
      where: {
        [Sequelize.Op.or]: [
          { uid: opts.userInfo.id },
          { type: this.config.enums.messageType.SHOW },
        ],
        isDel: 0,
      }
    }
    // 自己的或type=1的，非删除的
    const allDataPromise = this.MessagesModel.findAll({
      condition,
      offset: (opts.page - 1) * opts.size,
      limit: opts.size,
      order: [[ 'create_time', 'desc' ]],
      raw: true,
    });
    const countPromise = this.MessagesModel.count({ condition, raw: true });
    const [allData, count] = await Promise.all([allDataPromise, countPromise]);
    // todo 查用户和评论，以及@的用户
    return { allData, count };
  }

  async addMessages(opts) {
    const condition = {
      uid: opts.userInfo.id,
      title: opts.title || '',
      content: opts.content,
      type: opts.type,
    }
    return await this.MessagesModel.create(condition);
  }
}

module.exports = MessagesService;