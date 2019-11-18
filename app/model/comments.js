'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const Comments = app.model.define('Comments', {
    cid: {
      field: 'cid',
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    mid: {
      field: 'mid',
      type: INTEGER,
      allowNull: false,
    },
    uid: {
      field: 'uid',
      type: INTEGER,
      allowNull: false,
    },
    atUid: {
      field: 'at_uid',
      type: INTEGER,
      allowNull: true,
    },
    content: {
      field: 'content',
      type: TEXT,
      allowNull: true,
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
    tableName: 'tbl_comments',
  });

  return Comments;
};