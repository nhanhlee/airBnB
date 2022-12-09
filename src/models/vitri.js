'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ViTri extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ViTri.belongsTo(models.Phong, { foreignKey: 'viTriId', as: 'viTri' })
        }
    }
    ViTri.init({
        viTriId: DataTypes.INTEGER,
        tenViTri: DataTypes.STRING,
        tinhThanh: DataTypes.STRING,
        quocGia: DataTypes.STRING,
        hinhAnh: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ViTri',
    });
    return ViTri;
};