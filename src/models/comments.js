'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
            Comment.belongsTo(models.Phong, { foreignKey: 'phongId', as: 'phong' })
        }
    }
    Comment.init({
        commentId: DataTypes.INTEGER,
        phongId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        noiDung: DataTypes.STRING,
        saoBinhLuan: DataTypes.INTEGER,
        ngayBinhLuan: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Comment',
    });
    return Comment;
};