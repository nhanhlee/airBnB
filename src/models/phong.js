'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Phong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Phong.belongsTo(models.Order, { foreignKey: 'phongId', as: 'phongOd' })
            Phong.hasMany(models.Comment, { foreignKey: 'phongId', as: 'phongCmt' })
            Phong.hasMany(models.ViTri, { foreignKey: 'viTriId', as: 'phongViTri' })
        }
    }
    Phong.init({
        phongId: DataTypes.INTEGER,
        tenPhong: DataTypes.STRING,
        khach: DataTypes.INTEGER,
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
        hinhAnh: DataTypes.STRING,
        viTriId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Phong',
    });
    return Phong;
};