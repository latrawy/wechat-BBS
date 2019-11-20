'use strict'

module.exports = auth => {
  return async function authCheck(ctx, next) {
    const skey = ctx.params.skey || ctx.request.query.skey || ctx.request.body.skey;
    if (!skey) {
      ctx.body = { code: 1004, message: '缺少skey' };
      return;
    }
    const userInfo = await ctx.service.users.checkLogin(skey);
    if (!userInfo) {
      ctx.body = { code: 1004, message: 'skey校验失败' };
      return;
    }
    ctx.session.userInfo = userInfo;
    await next();
    ctx.session = null;
  };
};
