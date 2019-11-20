'use strict';

const enums = require('./enums');

module.exports = appInfo => {
  const config = {};

  config.keys = '23141234';

  config.enums = enums;

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '',
    port: 3306,
    database: 'db_egg_bbs',
    username: 'root',
    password: '',
  };

  config.session = {
    maxAge: 5 * 60 * 1000,
  };

  config.validate = {   // 配置参数校验器，基于parameter
    convert: true,    // 对参数可以使用convertType规则进行类型转换
    // validateRoot: false,   // 限制被验证值必须是一个对象。
  };

  config.appConfig = {
    appid: '',
    secret: '',
  };

  config.security = {
    csrf: false,
  };

  return config;
}