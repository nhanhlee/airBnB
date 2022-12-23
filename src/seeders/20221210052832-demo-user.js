'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John',
      hash: 'Doe12345',
      email: 'thibinh@example.com',
      phone: '0708096586',
      birthDay: new Date(),
      gender: 'Nam',
      role: 'admin',
      avatar: "sdfsdfsdf",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
