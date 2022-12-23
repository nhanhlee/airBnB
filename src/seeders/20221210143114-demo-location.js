'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Locations', [{
    //   tenViTri: '43,Nguyễn Chí Thanh',
    //   tinhThanh: 'Đà Nẵng',
    //   quocGia: 'Việt Nam',
    //   hinhAnh: '0708096586sdfsdfsdf',
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
