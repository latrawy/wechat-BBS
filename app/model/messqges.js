'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Messages = app.model.define('Messages', {
    mid: {
      field: 'mid',
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    uid: {
      field: 'uid',
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  });

  return Messages;
};