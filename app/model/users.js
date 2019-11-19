'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const Users = app.model.define('Users', {
    id: {
      field: 'id',
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    openId: {
      field: 'open_id',
      type: STRING(128),
      allowNull: false,
    },
    unionId: {
      field: 'union_id',
      type: STRING(128),
      allowNull: true,
    },
    uname: {
      field: 'uname',
      type: STRING(40),
      allowNull: false,
    },
    ugender: {
      field: 'ugender',
      type: INTEGER,
      allowNull: true,
    },
    uaddress: {
      field: 'uaddress',
      type: STRING(128),
      allowNull: true,
    },
    uavatar: {
      field: 'uavatar',
      type: STRING(256),
      allowNull: true,
    },
    profile: {
      field: 'profile',
      type: STRING(256),
      allowNull: true,
    },
    skey: {
      field: 'skey',
      type: STRING(128),
      allowNull: false,
    },
    sessionkey: {
      field: 'sessionkey',
      type: STRING(128),
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
    tableName: 'tbl_users',
  });

  return Users;
};