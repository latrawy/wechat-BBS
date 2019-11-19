'use strict';

module.exports = app => {
  const { router, controller } = app;
  // 获取留言
  router.get('/messages', app.middleware.auth(), controller.messages.getMessages);
  // 添加留言
  router.post('/messages', app.middleware.auth(), controller.messages.addMessages);
  // 修改留言
  // router.put('/messages/:id', app.middleware.auth(), controller.messages.updateMessages);
  // 删除留言
  // router.delete('/messages:id', app.middleware.auth(), controller.messages.deleteMessages);
};