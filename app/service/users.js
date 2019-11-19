const Service = require('egg').Service;

class UsersService extends Service {
  constructor(ctx) {
    super(ctx);
    this.UsersModel = this.ctx.model.Users;
  }

  async checkLogin(skey) {
    return this.UsersModel.findOne({ where: { skey }, raw: true });
  }

  async login(opts) {
    const { ctx, config } = this;
    const result = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${config.appConfig.appId}&secret=${config.appConfig.secret}&js_code=${opts.code}&grant_type=authorization_code`, {
      dataType: 'json',
      timeout: 3000,
    });
    const data = result.data;
    if (result.status === 200 && data && data.openid && data.session_key && !data.errcode) {
      const { session_key } = data;
      const skey = encryptSha1(session_key);
      let decryptedData = JSON.parse(decryptByAES(opts.encryptedData, session_key, opts.iv));
      console.log('-------------decryptedData---------------');
      console.log(decryptedData);
      console.log('-------------decryptedData---------------');
      const userInfo = {
        openId: decryptedData.openId,
        unionId: decryptedData.unionId,
        uname: decryptedData.nickName,
        ugender: decryptedData.gender,
        uaddress: decryptedData.province+','+decryptedData.country+','+decryptedData.city,
        skey: skey,
        sessionkey: session_key,
        uavatar: decryptedData.avatarUrl
      }
      const existUser = await this.UsersModel.findOne({ where: { openId: userInfo.openId }, raw: true });
      if (existUser) {
        await this.UsersModel.update(userInfo, { where: { openId: userInfo.openId } });
      } else {
        await this.UsersModel.create(userInfo);
      }
      return skey;
    } else {
      this.ctx.error('获取微信登录态失败', result.data);
      return { code: 1, message: '获取登陆态失败' };
    }
  }
}

module.exports = UsersService;