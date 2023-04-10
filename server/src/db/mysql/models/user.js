"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) { }
  }

  // userId
  // typeId
  // username
  // password
  // phonenumber
  // email

  User.init(
    {
      userId: DataTypes.STRING,
      typeId: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
