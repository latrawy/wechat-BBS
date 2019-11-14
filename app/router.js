'use strict'

const loginRouter = require('./router/login');
const messagesRouter = require('./router/messages');
module.exports = app => {
    const { router, controller } = app;
    loginRouter(app);
    messagesRouter(app);
}