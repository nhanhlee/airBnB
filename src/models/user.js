'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment, { foreignKey: 'userId' })
      User.hasMany(models.Order, { foreignKey: 'userId' })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthDay: DataTypes.DATE,
    gender: DataTypes.STRING,
    role: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};