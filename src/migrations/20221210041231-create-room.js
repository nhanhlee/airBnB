'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rooms', {
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
      maPhong: {
        type: Sequelize.STRING,
        unique: true
      },
      soNguoi: {
        type: Sequelize.INTEGER
      },
      phongNgu: {
        type: Sequelize.INTEGER
      },
      giuong: {
        type: Sequelize.INTEGER
      },
      phongTam: {
        type: Sequelize.INTEGER
      },
      moTa: {
        type: Sequelize.STRING
      },
      giaTien: {
        type: Sequelize.INTEGER
      },
      mayGiat: {
        type: Sequelize.BOOLEAN
      },
      banLa: {
        type: Sequelize.BOOLEAN
      },
      tivi: {
        type: Sequelize.BOOLEAN
      },
      dieuHoa: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      bep: {
        type: Sequelize.BOOLEAN
      },
      doXe: {
        type: Sequelize.BOOLEAN
      },
      hoBoi: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Rooms');
  }
};