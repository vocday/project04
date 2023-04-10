'use strict';

/** @type {import('sequelize-cli').Migration} */

// userId
// typeId
// username
// password
// phonenumber
// email

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      userId: '100',
      typeId: 'normal',
      username: 'user01',
      password: 'passuser01',
      email: 'example@example.com',
      phoneNumber: '0123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
