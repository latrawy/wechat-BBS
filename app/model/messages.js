'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const Messages = app.model.define('Messages', {
    mid: {
      field: 'mid',
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    uid: {
      field: 'uid',
      type: INTEGER,
      allowNull: false,
    },
    title: {
      field: 'title',
      type: STRING(255),
      allowNull: true,
    },
    content: {
      field: 'content',
      type: TEXT,
      allowNull: true,
    },
    commentNum: {
      field: 'comment_num',
      type: INTEGER,
      allowNull: false,
    },
    createTime: {
      field: 'create_time',
      type: DATE,
      allowNull: false,
    },
    updateTime: {
      field: 'update_time',
      type: DATE,
      allowNull: false,
    },
    isDel: {
      field: 'is_del',
      type: INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,  //去除createAt updateAt
    freezeTableName: true,
    tableName: 'tbl_messages',
  });

  return Messages;
};