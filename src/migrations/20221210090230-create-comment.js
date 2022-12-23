'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: "id is number"
          }
        }
      },
      noiDung: {
        type: Sequelize.STRING
      },
      saoBinhLuan: {
        type: Sequelize.INTEGER
      },
      ngayBinhLuan: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Comments');
  }
};