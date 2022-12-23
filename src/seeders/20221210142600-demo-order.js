'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Orders', [{
    //   // roomId: 4,
    //   // userId: 1,
    //   // ngayDen: new Date(),
    //   // soLuongKhach: 4,
    //   // ngayDi: new Date(),
    //   // createdAt: new Date(),
    //   // updatedAt: new Date()
    // }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
