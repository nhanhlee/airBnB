'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Comments', [{
    //   roomId: 4,
    //   userId: 1,
    //   noiDung: 'phong sach se',
    //   saoBinhLuan: 4,
    //   ngayBinhLuan: new Date(),
    //   createdAt: new Date(),
    //   updatedAt: new Date()
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
