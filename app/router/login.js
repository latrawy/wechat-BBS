'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/login', app.middleware.auth(), controller.users.login);
};