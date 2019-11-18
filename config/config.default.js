'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = '23141234';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'db_egg_bbs',
    username: 'root',
    password: '',
  };

  config.validate = {   // 配置参数校验器，基于parameter
    convert: true,    // 对参数可以使用convertType规则进行类型转换
    // validateRoot: false,   // 限制被验证值必须是一个对象。
  };

  config.appConfig = {
    appid: '',
    secret: '',
  };

  return config;
}