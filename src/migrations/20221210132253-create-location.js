'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      //   tenViTri: DataTypes.STRING,
      // tinhThanh: DataTypes.STRING,
      // quocGia: DataTypes.STRING,
      // hinhAnh: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        validate: {
          isNumeric: {
            msg: "id is number"
          }
        }
      },
      tenViTri: {
        type: Sequelize.STRING
      },
      tinhThanh: {
        type: Sequelize.STRING
      },
      quocGia: {
        type: Sequelize.STRING
      },
      hinhAnh: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  }
};