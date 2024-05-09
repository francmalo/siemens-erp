'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels', [{
      levelName: "level 1",
      startDate:'2024-04-14',
      endDate: '2024-05-15',
      cohortId: 1,
      createdAt: new Date(),
      updatedAt:new Date()
    }],{})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null ,{});

  }
};
