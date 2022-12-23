'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
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
      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: "id is number"
          }
        }
      },
      ngayDen: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ngayDi: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      soLuongKhach: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: "id is number"
          }
        }
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
    await queryInterface.dropTable('Orders');
  }
};