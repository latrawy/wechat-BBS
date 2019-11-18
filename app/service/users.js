const Service = require('egg').Service;

class UsersService extends Service {
  constructor(ctx) {
    super(ctx);
    this.UsersModel = this.ctx.model.Users;
  }

  async checkLogin(opts) {
    const { ctx, config } = this;
    const result = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${config.appConfig.appId}&secret=${config.appConfig.secret}&js_code=${opts.code}&grant_type=authorization_code`, {
      dataType: 'json',
      timeout: 3000,
    });
    const data = result.data;
    if (result.status === 200 && data && data.openid && data.session_key && data.errcode) {
      
    } else {
      return { code: 1, msg: '获取登陆态失败' };
    }
    console.log(result);
    return await this.UsersModel.findAll({ raw: true });
  }
}

module.exports = UsersService;