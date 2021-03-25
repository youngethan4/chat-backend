"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Relationship.hasMany(models.User, {
        foreignKey: "requesterId",
      });
      Relationship.hasMany(models.User, {
        foreignKey: "addresseeId",
      });
    }
  }
  Relationship.init(
    {
      requesterId: DataTypes.INTEGER,
      addresseeId: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Relationship",
    }
  );
  return Relationship;
};
