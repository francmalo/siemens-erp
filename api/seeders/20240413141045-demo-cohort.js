'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cohorts', [{
      cohortName: "Cohort 4",
      startDate:'2024-04-14',
      endDate: '2024-05-14',
      createdAt: new Date(),
      updatedAt:new Date()
    }],{})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cohorts', null ,{});

  }
};
