"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.hasMany(models.User, {
        foreignKey: "userId",
      });
      Message.hasMany(models.Group, {
        foreignKey: "groupId",
      });
    }
  }
  Message.init(
    {
      groupId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      payload: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
