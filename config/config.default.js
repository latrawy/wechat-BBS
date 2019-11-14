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

  return config;
}