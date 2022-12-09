'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.hasOne(models.User, { foreignKey: 'userId', as: 'userData' })
            Order.hasOne(models.Phong, { foreignKey: 'phongId', as: 'phongData' })
        }
    }
    Order.init({
        OrderId: DataTypes.INTEGER,
        phongId: DataTypes.INTEGER,
        ngayDen: DataTypes.DATE,
        ngayDi: DataTypes.DATE,
        soLuongKhach: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};