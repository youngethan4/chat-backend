"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Participant.hasMany(models.User, {
        foreignKey: "userId",
      });
      Participant.hasMany(models.Group, {
        foreignKey: "groupId",
      });
      Participant.hasMany(models.Role, {
        foreignKey: "role",
      });
    }
  }
  Participant.init(
    {
      userId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
      nickname: DataTypes.STRING,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Participant",
    }
  );
  return Participant;
};
