'use strict'

module.exports = auth => {
  return async function authCheck(ctx, next) {
    console.log(ctx.session);
    await next();
    // return true;
    // ctx.apiResult = { code: 1004, msg: '没有权限' };
  };
};
