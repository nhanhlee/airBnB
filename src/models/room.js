'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasMany(models.Comment, { foreignKey: 'roomId' })
      Room.hasMany(models.Order, { foreignKey: 'roomId' })
      //Room.belongsTo(models.Room, { foreignKey: 'viTriId' })
    }
  };
  Room.init({
    maPhong: DataTypes.STRING,
    soNguoi: DataTypes.INTEGER,
    phongNgu: DataTypes.INTEGER,
    giuong: DataTypes.INTEGER,
    phongTam: DataTypes.INTEGER,
    moTa: DataTypes.STRING,
    giaTien: DataTypes.INTEGER,
    mayGiat: DataTypes.BOOLEAN,
    banLa: DataTypes.BOOLEAN,
    tivi: DataTypes.BOOLEAN,
    dieuHoa: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    bep: DataTypes.BOOLEAN,
    doXe: DataTypes.BOOLEAN,
    hoBoi: DataTypes.BOOLEAN,
    hinhAnh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};